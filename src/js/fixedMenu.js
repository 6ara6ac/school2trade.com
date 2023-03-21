function hscrollbar() {
    var left = 
        window.pageXOffset ? window.pageXOffset : 
        document.documentElement.scrollLeft ? document.documentElement.scrollLeft : 
        document.body.scrollLeft;
    
        //Здесь, ID Вашего fixed блока
        document.getElementById('header').style.left = -left+"px";
    }
    window.onscroll = hscrollbar;
    window.onresize = hscrollbar;