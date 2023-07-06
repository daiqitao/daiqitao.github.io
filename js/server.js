//禁用F12
window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
  // 判断是否按下F12，F12键码为123
  if (event.keyCode == 123) {
  event.preventDefault(); // 阻止默认事件行为
  window.event.returnValue = false;
  alert('官方已禁用F12')
  }
}

//屏蔽右键菜单
document.oncontextmenu = function (event){
  if(window.event){
  event = window.event;
  alert('官方已禁用右键检查，若要刷新请按网站上方的刷新按钮')
  }
  try{
  var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
      return false;
      }
      return true;
  }
  catch (e){
      return false;
  }

}

if (window.location.href.indexOf("view-source:") > -1) {
  window.location.href = "http://example.com/no-view-source.html";
  alert('官方已禁止查看源码')
}
