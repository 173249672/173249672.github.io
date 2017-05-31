
//   获取简写
function $(selector,ranger = document){
    let type= typeof selector;
    if (type == 'string') {
    	//获取
    	let select = selector.trim();
    	let first=select.charAt(0);
        if(first == '.'){
            return ranger.getElementsByClassName(select.substring(1));
        }else if(first == '#'){
            return ranger.getElementById(select.substring(1));
         }else if(/^[a-zA-z][a-zA-z1-6]{0,8}$/.test(select)){    //表示标签正则表达式  直接用/ /包起来
         	return ranger.getElementsByTagName(select);

          }else if(/^<[a-zA-z][a-zA-z1-6]{0,8}>$/.test(select)){
             return document.createElement(select.slice(1,-1));
        }
    }

    if (type == 'function'){
        //添加事件
        // window.onload=function(){
        // 	selector();
        // }
        addEvent(window,'load',selector)
    }
}


//测试兼容性
function getStyle(obj,attr){
    if (window.getComputedStyle) {
        return getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}



/*
html(obj[,content])
设置或者是获取某一个元素的内容
obj  指定的对象

[content] 设置的内容
  没有    获取obj内容
  有       设置
 */
function html(obj,content){
    if (content) {
        return obj.innerHTML=content;
    }else{
        return obj.innerHTML;
    }
}



/*
  getChild() 
     获取指定元素的子元素节点
     1.获取指定元素的子节点
     2.筛选
     3.
 */
function getChild(obj){
    let childs=obj.childNodes;
    childs.forEach(function(value){
        if (value.nodeType ==1) {
            arr.push(value);
        }
    })
    return arr;
}



/*
getNum
获取任意位置的节点
 */
function getNum(obj,num){
    let childs=getChilds(obj);
    return childs[num]
}
function getFirst(obj){
    let childs=getChilds(obj);
    return childs[0];
}
function getLast(obj){
    let childs=getChilds(obj);
    return childs[childs.length-1];
}

/*
    getNext

    1.下一个兄弟节点  a
    2.不是  a下一个兄弟节点
 */
function getNext(obj){
    let a=obj.nextSibling;
    if(a === null){
        return false;
    }
    while(a.nodeType != 1){
        a=a.nextSibling;
        if (a === null) {
            return false;
        }
    }
    return a;
}

/*
    getprevious

    1.上一个兄弟节点  a
    2.不是  a上一个兄弟节点
 */
function getprevious(obj){
    let a=obj.previousSibling;
    if(a === null){
        return false;
    }
    while(a.nodeType != 1){
        a=a.previousSibling;
        if (a === null) {
            return false;
        }
    }
    return a;
}


//插入到指定元素之后
Node.prototype.insertAfter=function(ele){
    let _next=this.nextElementSibling;
    let _parent=this.parentNode;
    _parent.insertBefore(ele,_next);
}
//插入到父元素之前
Node.prototype.pretend=function(ele){
    let first=this.firstElementChild;
    this.insertBefore(ele,first);
}

//弹出节点名称
Node.prototype.say=function(){
    alert(this.nodeName)
}

/*插入到父元素中*/
Node.prototype.appendTo=function(parent){
    parent.append(this);
}


/*
 andEvent
 添加事件
 */
function addEvent(obj,type,fn){
    obj.addEventListener(type,fn,false);
}




function mousewheel(obj,upfn,downfn){
    obj.addEventListener('mousewheel',fn,false);
    function fn(e){
        e.preventDefault();
        let dir=e.wheelDelta;
        if (dir==120 || dir== 150 ||dir==180){
            upfn.call(obj);
        }else if (dir==-120 || dir== -150 ||dir==-180){
            downfn.apply(obj);
        }
    }
}
