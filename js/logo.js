window.addEventListener('DOMContentLoaded', function() {
    var logoText = document.getElementById('logo-text');
    logoText.style.opacity = '1';
});  
window.onscroll = function() {
    var windowHeight = window.innerHeight;
    var windowScroll = window.pageYOffset;

    if (windowScroll > windowHeight - 80) {
        var nav = document.getElementsByTagName("nav");
        var menu;
        var desktop;
        for (let i = 0; i < nav.length; i++) {
            nav[i].style.paddingTop = "30px";
            nav[i].style.backgroundColor = "#FFF";
            menu = nav[i].getElementsByClassName("menu");
            for (let j = 0; j < menu.length; j++) {
                menu[j].style.color = "#004852";
            }
            desktop = nav[i].getElementsByClassName("desktop");
            for (let j = 0; j < desktop.length; j++) {
                desktop[j].style.opacity = "1";
            }
        }
    } else {
        var nav = document.getElementsByTagName("nav");
        var menu;
        var desktop;
        for (let i = 0; i < nav.length; i++) {
            nav[i].style.paddingTop = "55px";
            nav[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
            menu = nav[i].getElementsByClassName("menu");
            for (let j = 0; j < menu.length; j++) {
                menu[j].style.color = "#FFF";
            }
            desktop = nav[i].getElementsByClassName("desktop");
            for (let j = 0; j < desktop.length; j++) {
                desktop[j].style.opacity = "0";
            }
        }
    }
    var welcome = document.getElementsByClassName('welcome');
    for (let i = 0; i < welcome.length; i++) {
        welcome[i].style.opacity = 1 - windowScroll / (windowHeight / 2);
    }
}