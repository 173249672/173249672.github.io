/**
 * Created by Lenovo on 2017/5/16.
 */
window.onload=function(){
    let body=document.querySelector('body');
        audio=document.querySelector('audio'),
        sing = document.querySelector('.sing'),
        singer = document.querySelector('.singer'),
        lyrics = document.querySelector('.lyrics'),
        lefts = document.querySelector('.lefts'),
        playBtn = document.querySelector('.plays'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        sleft = document.querySelector('.sleft'),
        sright=document.querySelector('.sright'),
        img = document.querySelector('img'),
        speed=document.querySelector('.speed'),
        speeds=document.querySelector('.speeds'),
        round=document.querySelector('.round'),
        ow=speed.offsetWidth,
        volumes=document.querySelector('.volume'),
        rights=document.querySelector('.rights'),
        rpeed=document.querySelector('.rpeed'),
        rpeeds=document.querySelector('.rpeeds'),
        sound=document.querySelector('.sound'),
        rw=rpeed.offsetWidth,
        index=0,a=0,flag=true;

    load(database[index]);

    //上一首
    prev.onclick=function(){
        index--;
        if(index<0){
            index=database.length-1;
        }
        if (audio.paused){
            load(database[index]);
            playBtn.classList.remove('icon-pause');
        }else {
            load(database[index]);
            audio.play();
        }
    }

    //下一首
    next.onclick=function(){
        index++;
        if(index>database.length-1){
            index=0;
        }
        if (audio.paused){
            load(database[index]);
            playBtn.classList.remove('icon-pause');
        }else {
            load(database[index]);
            audio.play();
        }
    }


    //音量
    let ox=0,cx=0;
    let cl=sound.offsetLeft;
    sound.style.left=cl+100+'px';
        volumes.onclick=function(){
            if (audio.muted){
                audio.muted=false;
                volumes.classList.toggle('icon-mute');
                if(flag){
                    rpeeds.style.width=100+'px';
                    sound.style.left=cl+100+'px';
                    audio.volume=1;
                }else{
                    rpeeds.style.width=a*rw+'px';
                    sound.style.left=cl+a*100+'px';
                    audio.volume=a;
                }
            }else {
                volumes.classList.toggle('icon-mute');
                audio.muted=true;
                rpeeds.style.width=0+'px';
                sound.style.left=cl+'px';
            }
        }


    sound.addEventListener('mousedown',down,false);
    function down(e){
        flag=false;
        ox=e.offsetX;
        rpeed.addEventListener('mousemove',move,false)
    }
    function move(e){
        cx=e.clientX;

        if(cx>=cl+100){
            cx=cl+100;
        }
        if(cx<=cl){
            cx = cl;
        }
        let bili=(cx-cl)/rw;
        a=bili;
         audio.volume=bili;
        rpeeds.style.width=cx-cl+'px';
        sound.style.left= cx +'px';
    }
    document.body.addEventListener('mouseup',up,false);
    function up(){
        rpeed.removeEventListener('mousemove', move, false)
    }




    //加载
    function load(obj){
        let String='';
        sing.innerText=obj.songs;
        singer.innerText=obj.name;
        sleft.innerText=`${obj.songs} — ${obj.name}`;
        img.src=obj.photo;
        audio.src=obj.src;
        obj['lyrics'].forEach(function (value,index) {
            String+=`<li>${value.lyric}</li>`;
        })
        lyrics.innerHTML='';
        lyrics.innerHTML=`${String}`;
        body.style.backgroundImage=`url("images/${index}.jpg")` ;
    }

    playBtn.onclick=function(){
        if (audio.paused){
            audio.play();
            this.classList.toggle( 'icon-pause');
        }else{
            audio.pause();
            this.classList.toggle( 'icon-pause');
        }
    }


    let i=0,x=0;
    audio.ontimeupdate=function(){
        let current = audio.currentTime;
        let dur = database[index].alltime;
        let durs=audio.duration;
        let m=Math.floor(current/60);
        let s=Math.floor(current%60);
        let bili=current/durs;
        s=s<10?'0'+s:s;
        m=m<10?'0'+m:m;
        let time=`${m}:${s}`;
        sright.innerText=`${time} / ${dur}`;
        speeds.style.width=ow*bili+'px';
        round.style.left=ow*bili+'px';




        lyrics.innerHTML='';
        database[index]['lyrics'].forEach(function(value,index){
            if(time == value.time){
                i=x= index;
            }
        })
        if(x<8){
            i=0
        }else{
            i = x - 8;
        }
        let String='';
        for(let j=i;j<database[index]['lyrics'].length;j++){
            if(j==x){
                String+=`<li class="hot">${database[index]['lyrics'][j]['lyric']}</li>`;
            }else{
                String+=`<li >${database[index]['lyrics'][j]['lyric']}</li>`;
            }

        }
        lyrics.innerHTML = String;



        if (audio.ended){
            index++;
            if(index>database.length-1){
                index=0;
            }
            load(database[index]);
            audio.play();
        }




    }






}
