function co1(color){

    switch (color)
    {
    case 1:
    i = document.getElementById('img');
    i.style.cssText = 'background-image : url("https://imgd.aeplcdn.com/370x208/n/9x9gpra_1422246.jpg?q=75")'
    break;
    
    case 2:
    i = document.getElementById('img');
    i.style.cssText = 'background-image : url("https://imgd.aeplcdn.com/370x208/n/kpggpra_1422248.jpg?q=75")'
    break;
    
    case 3:
    i = document.getElementById('img');
    i.style.cssText = 'background-image : url("https://imgd.aeplcdn.com/370x208/n/tzdgpra_1422244.jpg?q=75")'
    break;

    default:
        i.style.cssText = 'background-image : url("https://imgd.aeplcdn.com/370x208/n/tzdgpra_1422244.jpg?q=75")'
        break;
}
}
function cart(){
    c = document.getElementsByTagName('input')[0];
    c.value="Your Item is Added successfully"
}
