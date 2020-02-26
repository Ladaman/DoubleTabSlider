document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;
    let isMobile = isMobileFun();
    let inputType = isMobile == true? 'touchmove':'mousemove';
    let touchPath;
    if (wrapper.className.indexOf('skewed') != -1) skew = 1000;
    
    wrapper.addEventListener(inputType, function (e) {
        touchPath = isMobile == true ? e.changedTouches[0].clientX : e.clientX;
        delta = (touchPath - window.innerWidth / 2) * 0.5;
        handle.style.left = touchPath + delta + 'px';
        topLayer.style.width = touchPath + skew + delta + 'px';
    });

    function isMobileFun(){
        if(window.innerWidth < 768) return true;
        return false;
    };

});