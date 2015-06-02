$(document).ready(function(){

	//引入插件实现多行滚动
    $("#newsL").textSlider({line:1,speed:500,timer:3000});
    $("#newsR").textSlider({line:3,speed:500,timer:3000});

    //表单验证
    $('#loginform').submit(function(event){
      var error=false;
      $(this).find('[type=text],[type=password]').each(function() {
      	if(!$(this).val().length){
         alert("输入不可为空!");
         $(this).focus();
         error=true;
         return false;
          }

});
    	if(error){
    		event.preventDefault();

    	}

 });
});


//个人信息中的联系方式可修改，文本框失去焦点则出现
  function show(){
    //alert(123);
    var oBt=document.getElementById('repairSub');
    oBt.style.display="block";
  }
