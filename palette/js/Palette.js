/**
 * Created by Lenovo on 2017/5/18.
 */
/*  线 铅笔 矩形 多边形  多角形 圆 虚线 圆角矩形
*   填充 描边 填充样式 描边样式
*   橡皮 文字 裁切
*
* */
let bottom=document.querySelector('.bottom');
function  Palette(obj,mask) {
    this.obj=obj;
    this.ctx=this.obj.getContext('2d');
    this.mask = mask ;
    this.lineWidth=2;
    this.fillStyle='#00000';
    this.strokeStyle='#00000';
    this.arr=[];
    this.width=this.obj.offsetWidth;
    this.height=this.obj.offsetHeight;
    this.bian=5;
    this.jiao=5;
    this.banjing=10;
    this.font='16px 微软雅黑';
    this.textAlign='left';
    this.textBaseline='middle';
    this.type = 'stroke';
    this.types='strokeRect'
}


Palette.prototype={
    init:function(){
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.lineCap = this.lineCap;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx[this.type]();
    },

    //返回
    return:function() {
        let self = this;
        window.onkeydown = function (e) {
            if (e.ctrlKey && e.keyCode == 90) {
                self.arr.pop();
                if (self.arr.length == 0) {
                    self.ctx.clearRect(0, 0, self.width, self.height);
                    return;
                }
                self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
            }
        }
    },
    //抬起
    uP:function(){
        this.arr.push(this.ctx.getImageData(0,0,this.width,this.height));
        this.mask.onmousemove=null;
        this.mask.onmouseup=null;
    },



    //直线
    line:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.init();
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if (self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }

                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                // self.ctx.setLineDash([0,0]);
                self.ctx.lineTo(mx,my);
                self.ctx.stroke();
            };
            self.mask.onmouseup=function () {
                self.uP();
            }
        }

    },



    //虚线
    dotted:function () {
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.init();
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if (self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }

                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.setLineDash([5,10]);
                self.ctx.lineTo(mx,my);
                self.ctx.stroke();
            };
            self.mask.onmouseup=function () {
                self.ctx.setLineDash([0,0]);
                self.uP();
            }
        }
    },



    //铅笔
    pan:function () {
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.ctx.beginPath();
            self.init();
            self.ctx.clearRect(0,0,self.width,self.height);
            self.ctx.moveTo(ox,oy);
            if (self.arr.length>0){
                self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
            }
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                /*
                divs.className='iconfont icon-pan';
                divs.style.cssText=`position:absolute;left:${mx}px;top:${my}px`
                bottom.appendChild(divs);*/
                self.ctx.lineTo(mx,my);
                self.ctx.stroke();
            }
            self.mask.onmouseup=function () {
                self.uP();
            }
        }
    },

    //矩形
    rectanglr:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if (self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.init();
                self.ctx[self.types](ox,oy,mx-ox,my-oy);
            }
            self.mask.onmouseup=function () {
                self.uP();
            }
        }
    },



    //多边形
    polygon:function(){
        let self=this,num=this.bian;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let angle=(360/num)/180*Math.PI;
            self.mask.onmousemove=function(e){
                let cx=e.offsetX,cy=e.offsetY;
                let radius=Math.sqrt((cx-ox)*(cx-ox) + (cy-oy)*(cy-oy));     //勾股定理    Math.pow()平方
                self.init();
                self.ctx.beginPath();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }

                self.ctx.moveTo(ox+radius,oy);
                for(let i = 0;i<num;i++){
                    let newx=ox+radius*Math.cos(angle*i);
                    let newy=oy+radius*Math.sin(angle*i);
                    self.ctx.lineTo(newx,newy);
                }
                self.ctx.closePath();
                self.ctx[self.type]();

            }
            self.mask.onmouseup=function(){
                self.uP();
            }
        }
    },


    //多角形
    polygons:function(){
        let self=this,num=this.jiao;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let angle=360/(num*2)/180*Math.PI;
            self.mask.onmousemove=function(e){
                let cx=e.offsetX,cy=e.offsetY;
                let radius=Math.sqrt((cx-ox)*(cx-ox) + (cy-oy)*(cy-oy));     //勾股定理    Math.pow()平方
                self.init();
                self.ctx.beginPath();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx.moveTo(ox+radius,oy);
                let newx=0,newy=0;
                for(let i = 0;i<num*2;i++){
                    if (i%2 == 0){
                        newx=ox+radius*Math.cos(angle*i);
                        newy=oy+radius*Math.sin(angle*i);
                        self.ctx.lineTo(newx,newy);
                    }else{
                        newx=ox+radius/3*Math.cos(angle*i);
                        newy=oy+radius/3*Math.sin(angle*i);
                        self.ctx.lineTo(newx,newy);
                    }

                }
                self.ctx.closePath();
                self.ctx[self.type]();

            }
            self.mask.onmouseup=function(){
                self.uP();
            }
        }
    },




    //圆
    round:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                let radius=Math.sqrt((mx-ox)*(mx-ox) + (my-oy)*(my-oy));
                self.init();
                self.ctx.beginPath();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx.arc(ox,oy,radius,0,Math.PI*5);
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function () {
                self.uP();
            }
        }
    },

    //圆角矩形
    roundRectanglr:function(){
        let self=this;

        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.beginPath();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }



                /*let w=mx-ox,h=my-oy,r=10,rs=10;
                if(w<0){
                    r*=-1;
                }
                if (h<0){
                    rs*=-1;
                }
                 self.ctx.moveTo(ox-w+r,oy-h);
                 self.ctx.lineTo(mx-r,oy-h);
                 self.ctx.quadraticCurveTo(mx,oy-h,mx,oy+rs-h);
                 self.ctx.lineTo(mx,my-rs);
                 self.ctx.quadraticCurveTo(mx,my,mx-r,my);
                 self.ctx.lineTo(ox-w+r,my);
                 self.ctx.quadraticCurveTo(ox-w,my,ox-w,my-rs);
                 self.ctx.lineTo(ox-w,oy-h+rs);
                 self.ctx.quadraticCurveTo(ox-w,oy-h,ox-w+r,oy-h);
                 self.ctx.stroke();*/






                let num = self.banjing ;
                let sun= self.banjing;
                if(mx<ox){
                    num*=-1;
                }
                if(my<oy){
                    sun*=-1;
                }
                self.ctx.moveTo(ox+num,oy);
                self.ctx.lineTo(mx-num,oy);
                self.ctx.quadraticCurveTo(mx,oy,mx,oy+sun);
                self.ctx.lineTo(mx,my-sun);
                self.ctx.quadraticCurveTo(mx,my,mx-num,my);
                self.ctx.lineTo(ox+num,my);
                self.ctx.quadraticCurveTo(ox,my,ox,my-sun);
                self.ctx.lineTo(ox,oy+sun);
                self.ctx.quadraticCurveTo(ox,oy,ox+num,oy);  //4
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function () {
                self.uP();
            }
        }
    },



    //文字
    Text:function(){
        let self=this;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            let divs=document.createElement('div');
            divs.style.cssText = `min-width:50px ;height:30px;position:absolute;left:${ox}px;top:${oy}px;border:0;background:#ccc` ;
            divs.contentEditable=true;
            self.mask.appendChild(divs);
            self.mask.onmousedown=null;
            self.area=divs;
            self.area.onmousedown=function(){
                self.mask.onmousemove=function(e){
                    let mx=e.offsetX,my=e.offsetY;
                    self.area.style.left=` ${mx}px`;
                    self.area.style.top=` ${my}px`;
                }
                self.area.onmouseup=function(){
                    self.mask.onmousemove=null;
                    self.area.onmouseup=null;
                }
            }
            self.area.onblur=function(){
                self.ctx.font=self.font;
                self.ctx.textAlign=self.textAlign;
                self.ctx.textBaseline=self.textBaseline;
                let texts=this.innerText;
                self.ctx.fillText(texts,this.offsetLeft,this.offsetTop);
                this.remove();
                self.area=null;
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.Text()
            }
        }
    },

    //橡皮擦
    eraser:function (x,eraserBth) {
        let self=this;
        self.eraserBth=eraserBth;
        self.mask.onmousedown=function () {
            eraserBth.style.display='block';
            eraserBth.style.width=`${x}px`;
            eraserBth.style.height=`${x}px`;
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                if(mx>=self.width-x){
                    mx=self.width-x;
                }
                if(my>=self.height-x){
                    my=self.height-x;
                }
                if(mx<=0){
                    mx=0;
                }
                if(my<=0){
                    my=0;
                }
                self.eraserBth.style.left=mx+'px';
                self.eraserBth.style.top=my+'px';
                self.ctx.clearRect(mx,my,x,x)

            }
            self.mask.onmouseup=function () {
                self.eraserBth.style.display='none';
                self.uP();
            }
        }
    },



    //裁切
    caiqie:function (obj) {
        let self=this;
        let minx,miny,w,h;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                minx=mx<ox?mx:ox;
                miny=my<oy?my:oy;
                w=Math.abs(mx-ox);
                h=Math.abs(my-oy);
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                obj.style.display='block';
                obj.style.left= minx+'px';
                obj.style.top= miny+'px';
                obj.style.width= w+'px';
                obj.style.height= h+'px';
            }
            self.mask.onmouseup=function () {
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
                self.temp = self.ctx.getImageData(minx, miny, w, h);
                self.ctx.clearRect(minx, miny, w, h);
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.ctx.putImageData(self.temp, minx, miny);
                self.drag(minx, miny, w, h, obj);
            }

        }
    },


    drag:function (x,y,w,h,obj) {
        let self=this;
        self.mask.onmousemove=function (e) {
            let ex=e.offsetX,ey=e.offsetY;
            if(ex > x && ex<x+w && ey>y && ey<h+y) {
                self.mask.style.cursor = "move";
            } else {
                self.mask.style.cursor = "default";
            }
        }
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let cx=ox-x,cy=oy-y;
            if(ox > x && ox<x+w && oy>y && oy<h+y) {
                self.mask.style.cursor = "move";
            } else {
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                obj.style.display='none';
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.caiqie(obj);
                self.mask.style.cursor = "default";
                return ;
            }
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                let left=mx-cx;
                let top=my-cy;
                if(left<0){
                    left=0;
                }
                if(left>self.width-w){
                    left=self.width-w;
                }
                if(top<0){
                    top=0;
                }
                if(top>self.height-h){
                    top=self.height-h;
                }
                obj.style.left=left+'px';
                obj.style.top=top+'px';
                x=left;
                y=top;
                self.ctx.putImageData(self.temp,left,top);
            }
            self.mask.onmouseup = function () {
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;
                self.drag(x, y, w, h, obj);
            }
        }

    },



    //油漆桶
    fill:function(value){
        this.fillStyle=value;
        this.type='fill';
        this.types='fillRect'
    },
    //描边
    stroke:function(value){
        this.strokeStyle=value;
        this.type='stroke';
        this.types='strokeRect'
    },

    //新建
    new:function(obj){
        obj.innerHTML=`
        <div class="mask"></div>
        <div class="eraserBth"></div>
        <canvas width="1000" height="700"></canvas>
        `;
    },
    //删除
    Delete:function(obj){
        obj.innerHTML=`
        <div class="mask"></div>
        <div class="eraserBth"></div>
        `;
    },

    //返回
    Return:function () {
        this.arr.pop();
        if (this.arr.length == 0) {
            this.ctx.clearRect(0, 0, this.width, this.height);
            return;
        }
        this.ctx.putImageData(this.arr[this.arr.length - 1], 0, 0);
    },


    //保存

    Save:function(obj){
        let data=this.obj.toDataURL('image.png');
        obj.src=data;
        // let data=this.obj.toDataURL('image.png').replace('data:image/png','data:image/png');
        // location.href=data;
    },
    
    
    //下载
    down:function () {
        /*let data=this.obj.toDataURL('image.png').replace('data:image/png','data:stream/octet')
        location.href=data;*/
        self=this;
        let data=self.obj.toDataURL('image.png');
        let img=new Image();
        img.href=data;
        img.onload=function () {
            self.mask.appendChild(img);
        }
        let a=document.createElement('a');
        a.style.display='block';
        a.style.width='100%'
        a.style.height='100%';
        a.href=data;
        a.download='huahua.png';
        self.mask.appendChild(a);
    },

    
    
    //上传图片
    shangchuan:function (obj) {
        let self=this;
        obj.onchange=function () {
            let files=this.files[0];
            let reader=new FileReader;
            reader.readAsDataURL(files);
            let image= new Image();
            reader.onload=function() {
                image.src = this.result;
            }
            image.onload=function(){
                self.ctx.drawImage(image,0,0,1000,700);
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
            }
        }
    }


}