window.onload=function(){
    var oUl=document.getElementById('conMenu');
    var aLi=oUl.getElementsByTagName('a');
    var obj=document.getElementById('conDetail');
    var aA=obj.getElementsByTagName('a');
    var oEmpty=document.getElementById('empty');
    var oOccupy=document.getElementById('occupy');
    
    show(aLi,'active');
    show(aA,'act');
   
}

//菜单切换高亮特效
function show(obj,claName){
    var i=0;
    for(i=0;i<obj.length;i++){
        obj[i].index=i;
        obj[i].onclick=function(){
            for(i=0;i<obj.length;i++){
                obj[i].className="";
            }
            obj[this.index].className=claName;

        }
    }
}
