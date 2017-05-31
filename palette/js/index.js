/**
 * Created by Lenovo on 2017/5/18.
 */

window.onload=function(){

    let canvas=document.querySelector('canvas');
    let mask=document.querySelector('.mask');


    let top=document.querySelector('.top');
    let xiala=document.querySelector('.round');
    let ul=document.querySelector('ul');
    let li=document.querySelectorAll('li');


    let line=document.querySelector('.icon-line'); //直线
    let dotted=document.querySelector('.icon-xuxian');//虚线
    let pan=document.querySelector('.icon-pan');  //铅笔
    let rectangle=document.querySelector('.icon-juxing');//矩形
    let polygon=document.querySelector('.icon-duobianxing');//多边形
    let polygons=document.querySelector('.icon-wujiaoxing');//多角形
    let round=document.querySelector('.icon-iconfontwancheng');//圆
    let roundRec=document.querySelector('.icon-ie8yuanjiaojuxingzihao40xiangsumiaobian1xiangsuyuanjiaobanjing10xiangsu');// 圆角矩形
    let tExt=document.querySelector('.icon-wenzi');  //文字
    let eraser=document.querySelector('.icon-eraser');//橡皮擦
    let eraserBth=document.querySelector('.eraserBth');
    let caiqie=document.querySelector('.icon-caiqie');//裁切
    let caiq=document.querySelector('.caiq');
    let fill=document.querySelector('.fill'); // 填充
    let tianchong=document.querySelector('.icon-youqi');

    let stroke=document.querySelector('.stroke');//描边
    let miaobian=document.querySelector('.icon-miaobian')
    let New=document.querySelector('.icon-icaddblack24px');//新建
    let Delete=document.querySelector('.icon-shanchu')//删除
    let Return=document.querySelector('.icon-fanhui');//返回
    let down=document.querySelector('.icon-enterdown');//下载


    let save=document.querySelector('.icon-baocun');//保存
    let img=document.querySelector('img');


    let shangchuan=document.querySelector('.icon-shangchuantupian');//上传图片
    let sc=document.getElementById('sc');

    let palette=new Palette(canvas,mask);

    let left=document.querySelector('.left');
    let label=document.querySelectorAll('label');
    left.onmousedown=function(e){
        if(e.target.nodeName == 'LABEL'){
            label.forEach(function(value){
                value.style.boxShadow=null;
            })
            e.target.style.boxShadow=` 0px 0px 8px 8px rgba(88,88,88,0.35)`;
        }
    }
    top.onmousedown=function(e){
        if(e.target.nodeName == 'LABEL'){
            li.forEach(function(value){
                value.style.boxShadow=null;
            })
            e.target.style.boxShadow=` 0px 0px 8px 8px rgba(88,88,88,0.35)`;
        }
    }


    //下拉
    let i =0;
        xiala.onclick=function () {
            i++;
                if (i%2){
                    top.style.height=`100%`;
                }else{
                    top.style.height=0+'px';
                    i=0;
                }
    }





    palette.return();


    //直线
    line.onclick=function(){
        palette.line();
    }

    //虚线
    dotted.onclick=function () {
        palette.dotted();
    }


    //铅笔
    pan.onclick=function () {
        palette.pan();
    }

    //矩形
    rectangle.onclick=function(){
        palette.rectanglr();
    }

    //多边形
    polygon.onclick=function(){
        palette.bian=prompt('请输入边数','5');
        palette.polygon();
    }


    //多角形
    polygons.onclick=function () {
        palette.jiao=prompt('请输入角数','5');
        palette.polygons();
    }

    //圆
    round.onclick=function(){
        palette.round();
    }



    //圆角矩形
    roundRec.onclick=function(){
        palette.banjing=Number(prompt('请输入半径','10'));
        palette.roundRectanglr();
    }


    //文字
    tExt.onclick=function () {
        palette.Text();
    }


    //橡皮擦
    eraser.onclick=function () {
        let x=Number(prompt('请输入橡皮的大小','10'));
        palette.eraser(x,eraserBth);
    }



    //裁切
    caiqie.onclick=function () {
        palette.caiqie(caiq);
    }


    //填充
    let value=fill.value;
    fill.onchange = function () {
        value = fill.value;
        palette.fill(value);
    }
    tianchong.onclick=function () {

        palette.fill(value);
    }

    //描边
    let values=stroke.value;
    stroke.onchange=function () {
        values=stroke.value;
        palette.stroke(values);
    }
    miaobian.onclick=function () {
        palette.stroke(values);
    }




    //新建
    New.onclick=function () {
        palette.new(bottom);
        canvas=document.querySelector('canvas');
        mask=document.querySelector('.mask');
        palette=new Palette(canvas,mask);
    }

    //删除
    Delete.onclick=function(){
        palette.Delete(bottom);

    }

    //返回
    Return.onclick=function () {
        palette.Return();
    }

    //保存

    save.onclick=function () {
        palette.Save(img);
    }


    //下载
    down.onclick=function () {
        palette.down();
    }


    //上传图片
    shangchuan.onclick=function () {
        palette.shangchuan(sc);
    }




}
