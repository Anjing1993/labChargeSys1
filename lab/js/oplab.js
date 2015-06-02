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
//弹出层
function popNotAllow(){
    	var oDiv=document.getElementById('pop');
    	var oNotAllow=document.getElementById('notAllow');
    	oDiv.style.display="block";
        oNotAllow.style.display="block";
    	
    }
function popAllow(){
    	var oDiv=document.getElementById('pop');
    	var oNotAllow=document.getElementById('Allow');
    	oDiv.style.display="block";
        oNotAllow.style.display="block";
    	
    }
 function hidePop(){
 		var oDiv=document.getElementById('pop');
    	var oNotAllow=document.getElementById('notAllow');
    	oDiv.style.display="none";
        oNotAllow.style.display="none";
    }
function hide(){
 		var oDiv=document.getElementById('pop');
    	var oNotAllow=document.getElementById('Allow');
    	oDiv.style.display="none";
        oNotAllow.style.display="none";
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
