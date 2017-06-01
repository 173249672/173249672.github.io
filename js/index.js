/**
 * Created by Lenovo on 2017/5/31.
 */
$(function(){
    let ctx=$('canvas')[0].getContext('2d');
    let ctx1=$('canvas')[1].getContext('2d');
    let ctx2=$('canvas')[2].getContext('2d');
    let ctx3=$('canvas')[3].getContext('2d');

    function canvas(obj,number,co,col){
        obj.font='bold 40px 微软雅黑';
        obj.textAlign='center';
        obj.lineWidth=10;
        obj.lineCap='round';
        obj.fillStyle=co;
        obj.strokeStyle=col;
        let s=0;
        let t=setInterval(fromkey,40);
        fromkey();
        function fromkey(){
            let n=Math.PI*s*360/100/180;
            s++;
            if(s == number){
                clearInterval(t)
            }
            obj.clearRect(0,0,300,300);
            for (let i = 1; i< 80; i++){
                obj.beginPath();
                obj.arc(150,150,100,-Math.PI/2,n-Math.PI/2,false);
                obj.stroke();
                obj.fillText(`${s}%`,150,170)
            }
        }
    }


    $('#dowebok').fullpage({
//            navigation:true,
        resize:true,
        sectionsColor:['black','#212325','#EDF1F4','#212325'],
        anchors:['page1','page2','page3','page4'],
        menu:'#menu',
        controlArrowColor:'#212325',
        afterLoad:function (anchorLink,index) {
            if(index==1){
                $('.cover').animate({top:0},1000);
            }
            if(index==2){
                $('.section').eq(1).find('.round').animate({top:'200px',opacity:'1'},500);
                $('.section').eq(1).find('p').eq(0).animate({opacity:'1'},500);
                $('.section').eq(1).find('p').eq(1).animate({opacity:'1'},500);
                $('.section').eq(1).find('p').slice(2,6).animate({opacity:'1'},500);
                $('.content').animate({height:'220px'},500);
                $('.content').find('p:even').eq(0).delay(500).animate({left:'-180px',opacity:'1'},500);
                $('.content').find('p:odd').eq(0).delay(500).animate({left:'30px',opacity:'1'},500);
                $('.content').find('p:even').eq(1).delay(1000).animate({left:'-180px',opacity:'1'},500);
                $('.content').find('p:odd').eq(1).delay(1000).animate({left:'30px',opacity:'1'},500);
            }
            if(index == 3){
                $('.section').eq(2).find('p:first-child').css('transform','scale(1,1)');
                $('.section').eq(2).find('p:empty').delay(500).animate({opacity:'1'},1500);
                $('canvas').eq(0).animate({top:'0'},1500);
                $('canvas').eq(1).delay(300).animate({top:'0'},1500);
                $('canvas').eq(2).delay(600).animate({top:'0'},1500);
                $('canvas').eq(3).delay(900).animate({top:'0'},1500);
                $('.box').eq(0).delay(1500).animate({opacity:'1'});
                $('.box').eq(1).delay(1800).animate({opacity:'1'});
                $('.box').eq(2).delay(2100).animate({opacity:'1'});
                $('.box').eq(3).delay(2400).animate({opacity:'1'});
                $('.text').animate({bottom:'0'},1500)
                canvas(ctx,85,'#29BBE3','#29BBE3');
                canvas(ctx1,80,'#FFC000','#FFC000');
                canvas(ctx2,80,'#E74C3C','#E74C3C');
                canvas(ctx3,75,'#0BC5A2','#0BC5A2');
            }
            if (index == 4){
                $('.section').eq(3).find('p:first-child').css('transform','scale(1,1)');
                $('.section').eq(3).find('p:empty').animate({opacity:'1'},1500);
                $('.phone').delay(1500).animate({left:'0',opacity:'1'},1500)
                $('.emaill').delay(1500).animate({left:'0',opacity:'1'},1500)
                $('.address').delay(1500).animate({left:'0',opacity:'1'},1500)
            }
        },

        onLeave:function (index,direction) {
            if(index==1){
                $('.cover:even').animate({top:-1000},1000);
                $('.cover:odd').animate({top:1000},1000);
            }
            if(index==2){
                $('.section').eq(1).find('.round').animate({top:'-200',opacity:'0'},500);
                $('.section').eq(1).find('p').eq(0).animate({opacity:'0'},500);
                $('.section').eq(1).find('p').eq(1).animate({opacity:'0'},500);
                $('.section').eq(1).find('p').slice(2,6).animate({opacity:'0'},500);
                $('.content').animate({height:'0px'},500);
                $('.content').find('p:even').eq(0).animate({left:'-1000px',opacity:'0'},500);
                $('.content').find('p:odd').eq(0).animate({left:'1050px',opacity:'0'},500);
                $('.content').find('p:even').eq(1).animate({left:'-1000px',opacity:'0'},500);
                $('.content').find('p:odd').eq(1).animate({left:'1050px',opacity:'0'},500);

            }
            if(index == 3){
                $('.section').eq(2).find('p:first-child').css('transform','scale(0,0)');
                $('.section').eq(2).find('p:empty').animate({opacity:'0'},500);
                $('.box').animate({opacity:'0'});
                $('canvas').animate({top:'-1000'},1500);
                $('.text').animate({bottom:'-500px'},1500)
            }
            if (index == 4){
                $('.section').eq(3).find('p:first-child').css('transform','scale(0,0)');
                $('.section').eq(3).find('p:empty').animate({opacity:'0'},500);
                $('.phone').animate({left:'-1000',opacity:'0'},1500)
                $('.emaill').animate({left:'1000',opacity:'0'},1500)
                $('.address').animate({left:'-1000',opacity:'0'},1500)
            }
        }
    });








    let works=$('.works');
    let covers=$('.covers',works);
    let par=$('.par');
    let img=$('img',works);
    for(let i=0;i<works.length;i++){
        works.eq(i).mouseenter(function () {
            img.eq(i).css('transform','scale(0,0)rotate(180deg)');
            covers.eq(i).css('transform','scale(1,1)rotate(0deg)');
        })
        works.eq(i).mouseleave(function (index) {
            img.eq(i).css('transform','scale(1,1)rotate(0deg)');
            covers.eq(i).css('transform','scale(0,0)rotate(180deg)');
        })
    }
});