//   按需加载


//获取浏览器高度
let ch=innerHeight;

//智能硬件
	let zhinengs=document.querySelectorAll('.zhineng'),
	    arr=[];
	zhinengs.forEach(function(value,index){
		arr.push(value.offsetTop);
	})


//为您推荐
    let weinin=document.querySelectorAll('.weinin'),arr1=[];
    weinin.forEach(function(value,index){
		arr1.push(value.offsetTop);
	})

//热评产品
    let hot=document.querySelectorAll('.hot'),arr2=[];
    hot.forEach(function(value,index){
		arr2.push(value.offsetTop);
	})

	//内容
	let neirong=document.querySelectorAll('.neirong'),arr3=[];
    neirong.forEach(function(value,index){
		arr3.push(value.offsetTop);
	})


//视频
    let video=document.querySelectorAll('.video'),arr4=[];
    video.forEach(function(value,index){
		arr4.push(value.offsetTop);
	})



document.onscroll=function(){
	let tops=document.body.scrollTop;
	arr.forEach(function(value,index){
		if (ch+tops>value+150) {
			let zhineng=document.getElementsByClassName('zhineng')[index];
			let znImg=zhineng.getElementsByTagName('img');
			for (let i = 0; i < znImg.length; i++) {
				znImg[i].src=znImg[i].title;
			}
		}
	})
	arr1.forEach(function(value,index){
		if (ch+tops>value+150) {
			let weinin=document.getElementsByClassName('weinin')[index];
			let znImg=weinin.getElementsByTagName('img');
			for (let i = 0; i < znImg.length; i++) {
				znImg[i].src=znImg[i].title;
			}
		}
	})
	arr2.forEach(function(value,index){
		if (ch+tops>value+150) {
			let hot=document.getElementsByClassName('hot')[index];
			let znImg=hot.getElementsByTagName('img');
			for (let i = 0; i < znImg.length; i++) {
				znImg[i].src=znImg[i].title;
			}
		}
	})
	arr3.forEach(function(value,index){
		if (ch+tops>value+150) {
			let neirong=document.getElementsByClassName('neirong')[index];
			let znImg=neirong.getElementsByTagName('img');
			for (let i = 0; i < znImg.length; i++) {
				znImg[i].src=znImg[i].title;
			}
		}
	})
	arr4.forEach(function(value,index){
		if (ch+tops>value+150) {
			let video=document.getElementsByClassName('video')[index];
			let znImg=video.getElementsByTagName('img');
			for (let i = 0; i < znImg.length; i++) {
				znImg[i].src=znImg[i].title;
			}
		}
	})








}