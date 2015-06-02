/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-26 21:45:15
 * @version $Id$
 */
//弹出层
function popNotAllow(){
        var oDiv=document.getElementById('pop');
        var oNotAllow=document.getElementById('notAllow');
        oDiv.style.display="block";
        oNotAllow.style.display="block";
        
    }
function popAllow(obj){
        var oDiv=document.getElementById('pop');
        var oAllow=document.getElementById('Allow');
        var oP=oAllow.getElementsByTagName('p')[0];
        var aSpan=oP.getElementsByTagName('span')[0];
        var iTme=oAllow.getElementsByTagName('p')[1].getElementsByTagName('span')[0];
        oDiv.style.display="block";
        oAllow.style.display="block";
        aSpan.innerHTML=obj.innerHTML;
        //获取系统当前时间
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        iTme.innerHTML=year+'年'+month+'月'+day+'日 '+hour+'时'+minute+'分';
        
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
