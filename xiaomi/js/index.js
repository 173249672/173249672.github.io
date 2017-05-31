$(function(){

	//  头部
	let twoleft=document.getElementsByClassName(['two-left']);
	let twoA=twoleft[0].getElementsByTagName('a');
	for (let i = 0; i < twoA.length; i++) {
		twoA[i].onmouseover=function(){
			twoA[i].style.color='#fff';
		}
		twoA[i].onmouseout=function(){
			twoA[i].style.color='#B0B0B0';
		}
	}
	let tworight=$('.two-right')[0];
	let two1A=tworight.getElementsByTagName('a');
	for (let i = 0; i < two1A.length; i++) {
		two1A[i].onmouseover=function(){
			two1A[i].style.color='#fff';
		}
		two1A[i].onmouseout=function(){
			two1A[i].style.color='#B0B0B0';
		}
	}

	let tworight2=$('.two-right2')[0];
	let tworight2A=tworight2.getElementsByTagName('a')[0];
	tworight2.onmouseover=function(){
		this.style.background='white';
		tworight2A.style.color='orange';
	}
	tworight2.onmouseout=function(){
		this.style.background='transparent';
		tworight2A.style.color='#b0b0b0';
	}




	//输入框
    let input=$('input')[0];
    let biaodanson=$('.biaodanson')[0];
    input.onfocus=function () {
        biaodanson.style.display='none';
    }
    input.onblur=function () {
        biaodanson.style.display='block';
    }




    //轮播图
    let bannerson=$('.bannerson')[0];
    let bannersonLi=bannerson.querySelectorAll('li');
    bannersonLi[0].style.opacity='1';
    let hot=document.querySelectorAll('.hot');
    let t,curren=0,next=0,flag=true;
    t=setInterval(move,2000);
    //鼠标移入移除
    bannerson.onmouseover=function(){
    	clearInterval(t)
    }
    bannerson.onmouseleave=function(){
    	if (!flag) {
    		return;
    	}
    	t=setInterval(move,2000);
    }

  
        // 左右切换
   let bannerleft=$('.bannerleft')[0];
   let bannerright=$('.bannerright')[0];
   let bannerleft1=$('.bannerleft1')[0];
   let bannerright1=$('.bannerright1')[0];


   //左
   bannerleft.onmouseenter=function(){
   	this.style.opacity='1';
   	bannerleft1.style.color='#fff';
   }
   bannerleft.onmouseleave=function(){
   	this.style.opacity='0'
   	bannerleft1.style.color='#757575';
   }
   bannerleft1.onmouseenter=function(){
   	bannerleft.style.opacity='1';
   	bannerleft1.style.color='#fff';
   }
   bannerleft1.onmouseleave=function(){
   	bannerleft.style.opacity='0'
   	bannerleft1.style.color='#757575';
   }
   //右
   bannerright.onmouseenter=function(){
   	this.style.opacity='1'
   	bannerright1.style.color='#fff';
   }
   bannerright.onmouseleave=function(){
   	this.style.opacity='0'
   	bannerright1.style.color='#757575';
   }
   bannerright1.onmouseenter=function(){
   	bannerright.style.opacity='1';
   	bannerright1.style.color='#fff';
   }
   bannerright1.onmouseleave=function(){
   	bannerright.style.opacity='0'
   	bannerright1.style.color='#757575';
   }
   

    //点击事件
    bannerleft.onclick=function(){
    	if (!flag) {
    		return;
    	}
    	flag=false;
        movel();
    }
    bannerright.onclick=function(){
    	if (!flag) {
    		return;
    	}
    	flag=false;
        mover();
    }
    bannerleft1.onclick=function(){
    	if (!flag) {
    		return;
    	}
    	flag=false;
        movel();
    }
    bannerright1.onclick=function(){
    	if (!flag) {
    		return;
    	}
    	flag=false;
        mover();
    }



    function mover(){
    	clearInterval(t);
    	next++;	
    	if(next==bannersonLi.length){
    			next=0;
    		}
    	bannersonLi[curren].style.opacity='0';
    	bannersonLi[next].style.opacity='1';
    	hot[curren].className='hot';
    	hot[next].className='hot hots';
    	curren=next;
    	flag=true;
    }
    function movel(){
    	clearInterval(t);
    	next--;	
    	if(next<0){
    	    next=bannersonLi.length-1;
    		}
    	bannersonLi[curren].style.opacity='0';
    	bannersonLi[next].style.opacity='1';
    	hot[curren].className='hot';
    	hot[next].className='hot hots';
    	curren=next;
    	flag=true;
    }

    
    
    //点击小圆点事件
    hot.forEach(function(value,index){
    	value.onclick=function(){
            if (!flag) {
    		return;
    	}
    		clearInterval(t);
    		if (curren==index) {
    			return;
    		}
    		hot[curren].className='hot';
    		this.className='hot hots';
    		bannersonLi[curren].style.opacity='0';
    		bannersonLi[index].style.opacity='1';
    		curren=next=index;
    	}
    })

    function move(){
    	if (!flag) {
    		return;
    	}
    	next++;
    	if (next==bannersonLi.length) {
    		next=0;
    	}
        for (let i = 0; i < bannersonLi.length; i++) {
        	bannersonLi[i].style.opacity='0';
        	hot[i].className='hot';
        }
        bannersonLi[next].style.opacity='1';
        hot[next].className='hot hots';

        curren=next;
        flag=true;
    }
})





//导航
$(function(){
    let xiala=$('.xiala');
    let ppp=$('.ppp')[0];
    let ht=$('.hengtiao')[0];
    let hts=$('.hengtiaoson');
    /*ppp.onmouseenter=function(){
        ht.style.height=286+'px';
    }
    ppp.onmouseleave=function(){
        ht.style.height=0+'px';
    }*/

    for (let i = 0; i < xiala.length-2; i++) {
        xiala[i].onmouseenter=function(){
            hts[i].style.display='block';
            ht.style.borderTop=` 1px solid #E0E0E0`;
            ht.style.height=286+'px';
            // hts[i].style.zIndex=20;
        }
        xiala[i].onmouseleave=function(){
            hts[i].style.display='none';
            ht.style.borderTop=` 0px solid #E0E0E0`;
            ht.style.height=0+'px';
            // hts[i].style.zIndex=0;
        }

        hts[i].onmouseenter=function(){
            hts[i].style.display='block';
            ht.style.borderTop=` 1px solid #E0E0E0`;
            ht.style.height=286+'px';
        }
        hts[i].onmouseleave=function(){
            hts[i].style.display='none';
            ht.style.borderTop=` 0px solid #E0E0E0`;
            ht.style.height=0+'px';
        }
    }
})



//菜单
$(function(){
    let caidanbig=$('.daohangbig');
    let dhs=$('.daohangson')
    for (let i = 0; i < dhs.length; i++) {
        dhs[i].onmouseenter=function(){
            caidanbig[i].style.display='block';
        }
        dhs[i].onmouseleave=function(){
            caidanbig[i].style.display='none';
        }
    }
})


//小米明星单品
$(function(){
	let singleson=$('.singleson')[0];
    let single1=$('.single1')[0];
    let slbig=$('.singletopright')[0];
    let slleft=$('.slright')[0];
    let slright=$('.slright1')[0];
    let ow=single1.offsetWidth;

    slright.style.color='#757575';




    // 自动播放
	let t=setInterval(move,10000);
    let tt,flag=true;
    function move(){
        slleft.style.color='#757575';
        slright.style.color='#b0b0b0';
        single1.style.left=-ow/2+'px';
        tt=setTimeout(mover,5000)
        flag=true;
	}
	function mover(){
        single1.style.left=0+'px';
        slright.style.color='#757575';
        slleft.style.color='#b0b0b0';
        flag=true;
	}
    singleson.onmouseover=function(){
        clearInterval(t);
        clearInterval(tt);
    }
    singleson.onmouseout=function(){
        t=setInterval(move,10000)
        tt=setTimeout(mover,5000)
    }
    slbig.onmouseover=function(){
        clearInterval(t);
        clearInterval(tt);
    }
    slbig.onmouseout=function(){
        t=setInterval(move,10000)
        tt=setTimeout(mover,5000)
    }
    slleft.onclick=function(){
        if (!flag) {
            return;
        }
        flag=false;
        mover();
    }
    slright.onclick=function(){
        if (!flag) {
            return;
        }
        flag=false;
        move();
        clearInterval(tt);
    }
})



//智能硬件
$(function(){
    let zhineng=$('.zhinneg')[0];
    let bao=$('.bao',zhineng);
    let dap=$('.dapeiright',zhineng)[0];
    let dapa=$('a',dap);
    let bb=10;
    bao[0].style.zIndex=bb;
    dapa[0].style.color=' #FD8209';
    dapa[0].style.borderBottom='2px solid #FD8209';
    for (let i = 0; i < dapa.length; i++) {
        dapa[i].onmouseenter=function(){
            for (let i = 0; i < dapa.length; i++) {
                dapa[i].style.color='#333';
                dapa[i].style.borderBottom='0px';
            }
            this.style.color=' #FD8209';
            this.style.borderBottom='2px solid #FD8209';
            bao[i].style.zIndex=bb;
            bb++;
            }
        
    }
})



//搭配
$(function(){
    let zhineng=$('.zhineng')[1];
    let bao=$('.bao',zhineng);
    let dap=$('.dapeiright',zhineng)[0];
    let dapa=$('a',dap);
    let bb=10;
    bao[0].style.zIndex=bb;
    dapa[0].style.color=' #FD8209';
    dapa[0].style.borderBottom='2px solid #FD8209';
    for (let i = 0; i < dapa.length; i++) {
        dapa[i].onmouseenter=function(){
            for (let i = 0; i < dapa.length; i++) {
                dapa[i].style.color='#333';
                dapa[i].style.borderBottom='0px';
            }
            this.style.color=' #FD8209';
            this.style.borderBottom='2px solid #FD8209';
            bao[i].style.zIndex=bb;
            bb++;
            }
        
    }
})


//配件
$(function(){
    let zhineng=$('.zhineng')[2];
    let bao=$('.bao',zhineng);
    let dap=$('.dapeiright',zhineng)[0];
    let dapa=$('a',dap);
    let bb=10;
    bao[0].style.zIndex=bb;
    dapa[0].style.color=' #FD8209';
    dapa[0].style.borderBottom='2px solid #FD8209';
    for (let i = 0; i < dapa.length; i++) {
        dapa[i].onmouseenter=function(){
            for (let i = 0; i < dapa.length; i++) {
                dapa[i].style.color='#333';
                dapa[i].style.borderBottom='0px';
            }
            this.style.color=' #FD8209';
            this.style.borderBottom='2px solid #FD8209';
            bao[i].style.zIndex=bb;
            bb++;
            }
        
    }
})


//周边
$(function(){
    let zhineng=$('.zhineng')[3];
    let bao=$('.bao',zhineng);
    let dap=$('.dapeiright',zhineng)[0];
    let dapa=$('a',dap);
    let bb=10;
    bao[0].style.zIndex=bb;
    dapa[0].style.color=' #FD8209';
    dapa[0].style.borderBottom='2px solid #FD8209';
    for (let i = 0; i < dapa.length; i++) {
        dapa[i].onmouseenter=function(){
            for (let i = 0; i < dapa.length; i++) {
                dapa[i].style.color='#333';
                dapa[i].style.borderBottom='0px';
            }
            this.style.color=' #FD8209';
            this.style.borderBottom='2px solid #FD8209';
            bao[i].style.zIndex=bb;
            bb++;
            }
        
    }
})



//为您推荐
$(function(){
    let left=$('.weinin0')[0];
    let right=$('.weinin1')[0];
    let wei=$('.wei')[0];
    let rights=0;

    right.onclick=function(){
        rights+=1226;
        if (rights>=3678) {
            this.style.color='rgb(176, 176, 176)';
            rights=3678;
        }
        wei.style.left=-rights+'px';
        left.style.color='rgb(117, 117, 117)';
    }
    left.onclick=function(){
        rights-=1226;
        if (rights<=0) {
            this.style.color='rgb(176, 176, 176)';
            rights=0;
        }
        wei.style.left=-rights+'px';
        right.style.color='rgb(117, 117, 117)';
    }
})



//内容
$(function(){
    let neirong=$('.neirongone')[0];
    let uls=$('.dian2')[0];
    let lis=$('li',uls);
    let tushubox=$('.tushubox')[0];
    let tushu=$('.tushu');
    let tsleft=$('.tsleft')[0];
    let tsright=$('.tsright')[0];
    let lefts=0,s=0,ss=0;

    neirong.onmouseenter=function(){
        tsleft.style.opacity=1;
        tsright.style.opacity=1;
    }
    neirong.onmouseleave=function(){
        tsleft.style.opacity=0;
        tsright.style.opacity=0;
    }


    tsright.onclick=function(){
        ss++;
        if (ss>=3) {
            ss=2;
        }
        tushubox.style.left=-ss*295.5+'px';
        lis[s].className='dian1';
        lis[ss].className='dian';
        s=ss;
    }
    tsleft.onclick=function(){
        ss--;
        if (ss<=0) {
            ss=0;
        }
        tushubox.style.left=-ss*295.5+'px';
        lis[s].className='dian1';
        lis[ss].className='dian';
        s=ss;
    }
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick=function(){
            for (let i = 0; i < lis.length; i++) {
                lis[i].className='dian1';
            }
            lis[i].className='dian';
            tushubox.style.left=i*-295.5+'px';
            s=ss=i;
        }
    }
})

$(function(){
    let neirong=$('.neirongone')[1];
    let uls=$('ul',neirong)[0];
    let lis=$('li',uls);
    let tushubox=$('.tushubox1',neirong)[0];
    let tushu=$('.tushu');
    let tsleft=$('.tsleft',neirong)[0];
    let tsright=$('.tsright',neirong)[0];
    let lefts=0,s=0,ss=0;

    neirong.onmouseenter=function(){
        tsleft.style.opacity=1;
        tsright.style.opacity=1;
    }
    neirong.onmouseleave=function(){
        tsleft.style.opacity=0;
        tsright.style.opacity=0;
    }


    tsright.onclick=function(){
        ss++;
        if (ss>=4) {
            ss=3;
        }
        tushubox.style.left=-ss*295.5+'px';
        lis[s].className='dian1';
        lis[ss].className='dian';
        s=ss;
    }
    tsleft.onclick=function(){
        ss--;
        if (ss<=0) {
            ss=0;
        }
        tushubox.style.left=-ss*295.5+'px';
        lis[s].className='dian1';
        lis[ss].className='dian';
        s=ss;
    }
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick=function(){
            for (let i = 0; i < lis.length; i++) {
                lis[i].className='dian1';
            }
            lis[i].className='dian';
            tushubox.style.left=i*-295.5+'px';
            s=ss=i;
        }
    }
})



$(function(){
    let neirong=$('.neirongone')[2];
    let uls=$('ul',neirong)[0];
    let lis=$('li',uls);
    let tushubox=$('.tushubox1',neirong)[0];
    let tushu=$('.tushu');
    let tsleft=$('.tsleft',neirong)[0];
    let tsright=$('.tsright',neirong)[0];
    let lefts=0,s=0,ss=0;

    neirong.onmouseenter=function(){
        tsleft.style.opacity=1;
        tsright.style.opacity=1;
    }
    neirong.onmouseleave=function(){
        tsleft.style.opacity=0;
        tsright.style.opacity=0;
    }


    tsright.onclick=function(){
        ss++;
        if (ss>=4) {
            ss=3;
        }
        tushubox.style.left=-ss*295.5+'px';
        lis[s].className='dian1';
        lis[ss].className='dian';
        s=ss;
    }
    tsleft.onclick=function(){
        ss--;
        if (ss<=0) {
            ss=0;
        }
        tushubox.style.left=-ss*295.5+'px';
        lis[s].className='dian1';
        lis[ss].className='dian';
        s=ss;
    }
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick=function(){
            for (let i = 0; i < lis.length; i++) {
                lis[i].className='dian1';
            }
            lis[i].className='dian';
            tushubox.style.left=i*-295.5+'px';
            s=ss=i;
        }
    }
})

$(function(){
    let neirong=$('.neirongone')[3];
    let uls=$('ul',neirong)[0];
    let lis=$('li',uls);
    let tushubox=$('.tushubox1',neirong)[0];
    let tushu=$('.tushu');
    let tsleft=$('.tsleft',neirong)[0];
    let tsright=$('.tsright',neirong)[0];
    let lefts=0,s=0,ss=0;

    neirong.onmouseenter=function(){
        tsleft.style.opacity=1;
        tsright.style.opacity=1;
    }
    neirong.onmouseleave=function(){
        tsleft.style.opacity=0;
        tsright.style.opacity=0;
    }


    tsright.onclick=function(){
        ss++;
        if (ss>=4) {
            ss=3;
        }
        tushubox.style.left=-ss*295.5+'px';
        lis[s].className='dian1';
        lis[ss].className='dian';
        s=ss;
    }
    tsleft.onclick=function(){
        ss--;
        if (ss<=0) {
            ss=0;
        }
        tushubox.style.left=-ss*295.5+'px';
        lis[s].className='dian1';
        lis[ss].className='dian';
        s=ss;
    }
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick=function(){
            for (let i = 0; i < lis.length; i++) {
                lis[i].className='dian1';
            }
            lis[i].className='dian';
            tushubox.style.left=i*-295.5+'px';
            s=ss=i;
        }
    }
})