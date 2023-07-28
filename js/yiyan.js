function yiyan(){
    var httpRequest =new XMLHttpRequest();
    httpRequest.open('GET','https://v1.hitokoto.cn/?encode=text',true);
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    httpRequest.send('');
    
    httpRequest.onreadystatechange =function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var text = httpRequest.responseText;
            document.getElementById("yiyan").innerHTML = text;
        }
    }
};
yiyan();
