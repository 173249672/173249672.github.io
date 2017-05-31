$(function(){
	//侧边栏
	let aside=$('aside')[0];
	let asideI=aside.getElementsByTagName('i');
	let asideson=$('.asideson');
	// console.log(asideI)
	for (let i = 0; i < asideI.length; i++) {
		asideI[i].onmouseover=function(){
			asideI[i].style.background="#c40805";
		}
		asideI[i].onmouseout=function(){
			asideI[i].style.background="transparent";
		}
	}
	let aside2=$('.aside2')[0];
	let aside2Ic=aside2.getElementsByClassName('iconfont')[0];
	let aside3=$('.aside3')[0];
	aside2.onmouseover=function(){
			aside2.style.background="#C40000";
			aside2Ic.style.color='white';
		}
		aside2.onmouseout=function(){
			aside2.style.background="transparent";
			aside2Ic.style.color='#c40000';
		}
		aside3.onmouseover=function(){
			aside3.style.background="#C40000";
		}
		aside3.onmouseout=function(){
			aside3.style.background="transparent";
		}
    


	//头部
	let head=$('.head')[0];
	let heada=head.getElementsByTagName('a');
	for (let i = 0; i < 24; i++) {
		heada[i].onmouseover=function() {
			heada[i].style.color='#C40000';
		}
		heada[i].onmouseout=function() {
			heada[i].style.color='#999';
		}
	}
	let mytianmao=$('.mytianmao')[0];
	let mytianmao1=$('.mytianmao1')[0];
	mytianmao.onmouseenter=function(){
		mytianmao.style.background='white';
		mytianmao1.style.height='60px';
	}
	mytianmao.onmouseleave=function(){
		mytianmao.style.background='#F2F2F2';
		mytianmao1.style.height='0px';
	}
	let shoucang=$('.shoucang')[0];
	let shoucangtm=shoucang.getElementsByClassName('mytianmao1')[0];
	shoucang.onmouseenter=function(){
		shoucang.style.background='white';
		shoucangtm.style.height='60px';
	}
	shoucang.onmouseleave=function(){
		shoucang.style.background='#F2F2F2';
		shoucangtm.style.height='0px';
	}
	let sjb=$('.sjb')[0];
	let sjb9=$('.sjb9')[0];
	let sjb10=$('.sjb10')[0];
	sjb.onmouseenter=function(){
		sjb10.style.height='228px';
		sjb9.style.opacity= '1';
	}
	sjb.onmouseleave=function(){
		sjb10.style.height='0px';
		sjb9.style.opacity= '0';
	}
	let shangjia=$('.shangjia')[0];
	let sjzc1=$('.sjzc1')[0];
	shangjia.onmouseenter=function(){
		shangjia.style.background='white';
		sjzc1.style.height='175px';
	}
	shangjia.onmouseleave=function(){
		shangjia.style.background='#F2F2F2';
		sjzc1.style.height='0px';
	}
	let wzdh=$('.wzdh')[0];
	let wzdh2=$('.wzdh2')[0];
	wzdh.onmouseenter=function(){
		wzdh.style.background='white';
		wzdh2.style.height='252px';
		wzdh2.style.padding='25px 0px';
	}
	wzdh.onmouseleave=function(){
		wzdh.style.background='#F2F2F2';
		wzdh2.style.height='0px';
		wzdh2.style.padding='0px';
	}



    //导航
	let daohangwenzi=$('.daohangwenzi');
	for (let i = 0; i < daohangwenzi.length; i++) {
		let xmt=daohangwenzi[i].getElementsByTagName('div');
		daohangwenzi[i].onmouseover=function(){
			xmt[0].style.top='-21px';
		}
		daohangwenzi[i].onmouseout=function(){
			xmt[0].style.top='0px';

		}
	}


	//banner
	let bannerleft=$('.bannerleft')[0];
	let henglaleft=$('.henglaleft');
	let henglaright=$('.bannerright');
	let bannerul=bannerleft.getElementsByTagName('ul')[0];
	// console.log(henglaleft)
	let bannerLi=$('.banner-left');
	let hengla=$('.hengla');
	// console.log(hengla)
	for (let i = 0; i < bannerLi.length; i++) {
		bannerLi[i].onmouseover=function(){
		  bannerLi[i].style.background='white';
          hengla[i].style.display='block';
          // henglaleft[i].style.display='block';
          // henglaright[i].style.display='block';
		}
		bannerLi[i].onmouseout=function(){
          hengla[i].style.display='none';
          bannerLi[i].style.background='transparent';
          // henglaleft[i].style.display='none';
          // henglaright[i].style.display='none';
		}
		// bannerul.onmouseover=function(){
		// 	hengla[i].style.width='854px';
		// }
		// bannerul.onmouseout=function(){
		// 	hengla[i].style.width='0px';
		// }
	}


	//轮播图
	let banner=$('.banner')[0];
	let tup=$('.tup')[0];
	let topLi=tup.getElementsByTagName('li');
	topLi[0].style.background='rgb(232,232,232)'
	topLi[5].style.background='rgb(232,232,232)'
	topLi[3].style.background='rgb(232,232,232)'
	topLi[1].style.background='rgb(214,63,58)'
    topLi[2].style.background='rgb(214,63,58)'
    topLi[4].style.background='rgb(210,102,237)'
	topLi[0].style.zIndex='10';
	let botnbox=$('.botnbox')[0];
	let botnboxLi=botnbox.getElementsByTagName('li');
	let xy=$('.xy');
	xy[0].style.opacity='1';
	let index=0;
	let t;
    t=setInterval(move, 2000);
    

    for (let i = 0; i < topLi.length; i++) {
    	botnboxLi[i].onclick=function(){
            for (let j = 0; j < topLi.length; j++) {
            	topLi[j].style.opacity='0';	
    		    xy[j].style.opacity='0';
            }
            topLi[i].style.opacity='1';	
    		xy[i].style.opacity='1';

    		index=i;
            
    	}
    	
    }
    tup.onmouseover=function(){
    	clearInterval(t);
    }
    tup.onmouseout=function(){
    	t=setInterval(move, 2000);
    }
    botnbox.onmouseover=function(){
    	clearInterval(t);
    }
    botnbox.onmouseout=function(){
    	t=setInterval(move, 2000);
    }
	function move(){
    	index++;
    	//判断index
    	if (index==topLi.length) {
    		index=0;
    	}
    	for (let i = 0; i < topLi.length; i++) {
    		topLi[i].style.opacity='0';	
    		xy[i].style.opacity='0';
    	}
    	topLi[index].style.opacity='1';
    	xy[index].style.opacity='1';

    }
    

    
    
    	
    	

//精品推荐
    let pinpai1=$('.pinpai1');
    let pinpaione=$('.pinpaione')
    for (let i = 0; i < pinpaione.length; i++) {
    	pinpai1[i].onmouseenter=function(){
    		pinpaione[i].style.opacity='1';
    	}
    	pinpai1[i].onmouseleave=function(){
    		pinpaione[i].style.opacity='0';
    	}
    }
    let pinpai4=$('.pinpai4')[0];
    let pinpai4Ic=$('.icon-zhongfu')[0];
    pinpai4.onmouseover=function(){
    	this.style.background='#DD2727';
    	pinpai4Ic.style.transform='rotateZ(180deg)';
    }
    pinpai4.onmouseout=function(){
    	this.style.background='#fff';
    	pinpai4Ic.style.transform='rotateZ(0deg)';
    }

    //潮流前沿
    let clqyson=$('.clqy-son');
    for (let i = 0; i < clqyson.length; i++) {
        let clqysonImg=clqyson[i].getElementsByTagName('img')[0];
        clqyson[i].onmouseover=function(){
        	clqysonImg.style.transform='scale(1.1,1.1)';
        }
        clqyson[i].onmouseout=function(){
        	clqysonImg.style.transform='scale(1,1)';
        }
    }
    	
    //美丽人生
    let bet=$('.beauteful7');
    for (let i = 0; i < bet.length; i++) {
    	let betImg=bet[i].getElementsByTagName('img')[0];
    	bet[i].onmouseover=function(){
        	betImg.style.transform='translateX(-5px)';
        }
        bet[i].onmouseout=function(){
        	betImg.style.transform='translateX(0px)';
        }
    }
    let clkw7=$('.clkw7');
    let clkw7Img=clkw7[0].getElementsByTagName('img')[0];
    clkw7[0].onmouseover=function(){
        clkw7Img.style.transform='translateX(-15px)';
    }
    clkw7[0].onmouseout=function(){
        clkw7Img.style.transform='translateX(0px)';
    }
    
    //猜你喜欢
    let cnxh=$('.cnxh');
    let cnxhone=$('.cnxhone');
    for (let i = 0; i < cnxhone.length; i++) {
    	if (i<=2) {
           cnxh[i].onmouseover=function(){
        	cnxhone[i].style.opacity='0.5';
        }
        cnxh[i].onmouseout=function(){
        	cnxhone[i].style.opacity='0';
        }
    	}
    	if (i>=3) {
           cnxh[i+1].onmouseover=function(){
        	cnxhone[i].style.opacity='0.5';
        }
        cnxh[i+1].onmouseout=function(){
        	cnxhone[i].style.opacity='0';
        }
    	}
    }

    
    let beauteful2=$('.beauteful2');
    let a1=$('.a1');
    // for (let i = 0; i < beauteful2.length; i++) {
    	
    // }
    //   未命名
    // let tt=setInterval(huadong,200);
    let beauteful4=document.querySelectorAll('.beauteful4');
    // console.log(beauteful4);
    for (let i = 0; i < beauteful4.length; i++) {   
        let beauteful4p=beauteful4[i].getElementsByTagName('p')
        
    
        for (let i = 0; i < beauteful4p.length; i++) {
        	if (i!=0) {
        	beauteful4p[i].style.top='30px';
        	}
 
        }
        let tt=setInterval(gundong,2000);
        let curren=0,next=0;
        beauteful2[i].onmouseover=function(){
        	clearInterval(tt);
        	a1[i].style.opacity='0.3';
        }
        beauteful2[i].onmouseout=function(){
        	tt=setInterval(gundong,2000);
        	a1[i].style.opacity='0';
        }
        function gundong(){
        next++;
        if (next==beauteful4p.length) {
        	next=0;
        }
        beauteful4p[next].style.top=30+'px';
        animate(beauteful4p[curren],{top:-30});
        animate(beauteful4p[next],{top:0});
        // console.log(beauteful4p[curren])
        curren=next;
    }
    }
})