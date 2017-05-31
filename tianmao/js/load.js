let ch=window.innerHeight,
    beautefuls=document.querySelectorAll('.beauteful'),
    arr=[];
beautefuls.forEach(function(value,index){
        arr.push(value.offsetTop);
	})
let clqys=document.querySelectorAll('.clqyson'),arr3=[];
clqys.forEach(function(value,index){
	arr3.push(value.offsetTop);
})
// console.log(arr3)


let bigboxbottoms=document.querySelectorAll('.bigboxbottom'),
    arr2=[];
bigboxbottoms.forEach(function(value,index){
        arr2.push(value.offsetTop);
	})
// let beauteful3s=document.querySelectorAll('.beauteful3'),
//     arr4=[];
// beauteful3s.forEach(function(value,index){
//         arr4.push(value.offsetTop);
// 	})



let asideone=document.querySelector('.asideone');

let asidetwo=document.querySelectorAll('.asidetwo');
let banner=document.querySelector('.banner');
let banT=banner.offsetTop;
let banH=banner.offsetHeight;
let Y=banT+banH;

//侧边栏颜色函数

function aCl(i){
     switch(i){
        case 0:
        asidetwo[i].style.background='#DD2727';
        break;
        case 1:
        asidetwo[i].style.background='#EA5F8D';
        break;
        case 2:
         asidetwo[i].style.background='#0AA6E8';
        break;
        case 3:
         asidetwo[i].style.background='#64C333';
        break;
        case 4:
         asidetwo[i].style.background='#F15453';
        break;
        case 5:
         asidetwo[i].style.background='#19C8A9';
        break;
        case 6:
         asidetwo[i].style.background='#F7A945';
        break;
        case 7:
         asidetwo[i].style.background='#000';
        break;
    }
}
let n=0,flag=true;

for (let i = 0; i < beautefuls.length; i++) {
    asidetwo[i+1].onclick=function(){

      flag=false;
      asidetwo[n+1].style.background='rgba(0,0,0,.6)';
      asidetwo[7].style.background='rgba(0,0,0,.6)';
      asidetwo[8].style.background='rgba(0,0,0,.3)';
      asidetwo[i+1]=aCl(i+1);
      animate(document.body,{scrollTop:arr[i]-60},function(){flag=true});
    }    
    n=i;
}

let bigbox=document.querySelector('.bigbox')
let bigboxT=bigbox.offsetTop;
// console.log(bigboxT);
asidetwo[7].onclick=function(){      
        this.style.background='#DD2727'; 
    for (let i = 1; i < asidetwo.length-2; i++) {
        asidetwo[i].style.background='rgba(0,0,0,.6)';
    }
    animate(document.body,{scrollTop:bigboxT},function(){flag=true});
}
asidetwo[8].onclick=function(){ 
    animate(document.body,{scrollTop:0},function(){flag=true});
}

for (let i = 1; i < asidetwo.length-1; i++) {
    // console.log(asidetwo[i])

asidetwo[i].onmouseout=function(){
  if (i==n+1) {
        return;
      }
  if((i==7)&&(n==7)){
      asidetwo[7].style.background='#DD2727';
      return;
    }
   asidetwo[i].style.background='rgba(0,0,0,.6)'
}
//鼠标移入时
asidetwo[i].onmouseover=function(){
  if (i==7) {
    asidetwo[6].style.background='rgba(0,0,0,.6)'
  }
    aCl(i)
}
  n=i;
}
window.onscroll=function(){
  if (!flag) {
    return;
  }
    // console.log(arr);
	let tops=document.body.scrollTop;
	arr.forEach(function(value,index){
    if (tops + ch > value+400) {
      if(n=7){
        n-=1;
      }
        asidetwo[n+1].style.background='rgba(0,0,0,.6)';
        asidetwo[index+1]=aCl(index+1);
        n=index;
    }
    if (tops + ch < value+470) {
        asidetwo[index+1].style.background='rgba(0,0,0,.6)';
    }
    if (tops + ch > value+1000) {
        asidetwo[index+1].style.background='rgba(0,0,0,.6)';
    }

		if (tops + ch > value+100) {
        let beauteful=document.getElementsByClassName('beauteful')[index];
        let beautefulImg=beauteful.getElementsByTagName('img');
        for (let i = 0; i < beautefulImg.length; i++) {
            	beautefulImg[i].src=beautefulImg[i].title;
            }
        }
        
	})
	arr2.forEach(function(value,index){
    if (tops + ch > value+100) {
        asidetwo[7].style.background='#DD2727';
        n=7;
    }
    if (tops + ch < value+100) {
        asidetwo[7].style.background='rgba(0,0,0,.6)';
    }
		if (tops + ch > value+100) {
        
        let bigboxbottom=document.getElementsByClassName('bigboxbottom')[index];
        let bigboxbottomImg=bigboxbottom.getElementsByTagName('img');
        for (let i = 0; i < bigboxbottomImg.length; i++) {
            	bigboxbottomImg[i].src=bigboxbottomImg[i].title;
            }
        }
	})
	arr3.forEach(function(value,index){
		if (tops + ch > value+100) {
			let clqy=document.getElementsByClassName('clqyson')[index];
			let clqyImg=clqy.getElementsByTagName('img');
			for (let i = 0; i < clqyImg.length; i++) {
            	clqyImg[i].src=clqyImg[i].title;
            }
		}
	})
	// arr4.forEach(function(value,index){
	// 	if (tops + ch > value+100) {
	// 		let beauteful3=document.getElementsByClassName('beauteful3')[index];
	// 		let beauteful3Img=beauteful3.getElementsByTagName('img');
	// 		for (let i = 0; i < beauteful3Img.length; i++) {
 //            	beauteful3Img[i].src=beauteful3Img[i].title;
 //            }
	// 	}
	// })
let show=document.querySelector('.show');
    for (let i = 0; i < asidetwo.length; i++) {
            if (tops>=banH) {
              // asideone.style.display='block';
              asidetwo[i].style.width='36px';
              asidetwo[i].style.height='36px';
              show.style.height='50px';
            }
            if (tops<banH) {
              // asideone.style.display='block';
              asidetwo[i].style.width='0px';
              asidetwo[i].style.height='0px';
              show.style.height='0px';
            }   
        }
}


let aside4=document.querySelector('.aside4');
let aside4I=aside4.getElementsByTagName('i')[2];
aside4I.onclick=function(){
  animate(document.body,{scrollTop: 0},function(){flag=true});
}
    
    
