   		window:onload=function()
   		{
   			var fontsize=100;
   			var designwidth=750;
   			function rem(){
   				var CW=document.documentElement.clientWidth;
   				var mm=document.documentElement.clientHeight;
   				var scale=CW/designwidth;
// 				alert("窗口实际宽度："+CW+"px"); 弹出
// 				alert("窗口实际高度："+mm+"px");
   				document.querySelector("html").style.fontSize=fontsize*scale+"px";
   			}
   			rem();
   			window.onresize=rem;
   		}