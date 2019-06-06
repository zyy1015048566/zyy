window.onload = function () {
    let home = document.getElementById('home');
    home.onmouseenter = function () {
        home.style.color = 'red'
    }
    home.onmouseleave = function () {
        home.style.color = 'white'
    }
    //
    //
    // let btnlist=document.getElementsByTagName('btnlist');
    // console.log(btnlist);
    // btnlist.onmouseenter=function () {
    //     btnlist.style.background='#00C1DE'
    // }
    //
    let diarysecondright = document.querySelectorAll('.diarysecondright li');
    diarysecondright.forEach(function (elem, index) {
        elem.onmouseenter = function () {
            for (let i = 0; i < diarysecondright.length; i++) {
                diarysecondright[i].classList.remove('hot');
            }
            this.classList.add('hot')
        }
    })
    // //移动改变字体颜色
    //
    //
    // let index = 0;
    // let rightbtn = document.querySelector('.rightbtn');
    // let leftbtn = document.querySelector('.leftbtn');
    // let leftt = document.querySelectorAll('.leftt .img');
    //
    // rightbtn.onclick=function () {
    //     index++;
    //     if (index === leftt.length){
    //         index = 0;
    //     }
    //     leftt.forEach(function(ele){
    //         ele.style.zIndex = 1;
    //     });
    //     leftt[index].style.zIndex = 99;
    //
    // }
    // leftbtn.onclick = function () {
    //     index--;
    //     if (index < 0) {
    //         index = leftt.length - 1;
    //     }
    //     leftt.forEach(function (ele) {
    //         ele.style.zIndex = 1;
    //     });
    //     leftt[index].style.zIndex = 99;
    // }
    //
    // //    点击按钮滚动




    let current = 0,next = 0;
    let rightbtn= document.querySelector('.rightbtn');
    let leftbtn = document.querySelector('.leftbtn');
    let leftt = document.querySelectorAll('.leftt .img');
    let btnlist=document.querySelectorAll('.btnlist li');
    let w = leftt[0].offsetWidth;
    rightbtn.onclick = function () {
        next++;
        if (next == leftt.length){
            next = 0;
        }
        leftt[next].style.left = w+ 'px';
        animate(leftt[current],{left: -w});
        animate(leftt[next],{left: 0});
        btnlist[current].classList.remove('hot');
        btnlist[next].classList.add('hot');
        current=next;
    }
    leftbtn.onclick = function () {
        next--;
        if (next < 0){
            next = leftt.length-1;
        }
        leftt[next].style.left = -w+ 'px';
        animate(leftt[current],{left: w});
        animate(leftt[next],{left: 0});
        btnlist[current].classList.remove('hot');
        btnlist[next].classList.add('hot');
        current=next;
    }

    for (let i=0; i < btnlist.length; i++){
        btnlist[i].onclick=function () {
            if (current === i){
                return;
            }
            next=i;
            if (next > current){
                leftt[next].style.left=w +'px';
                animate(leftt[current],{left:-w});
                animate(leftt[next],{left:0});
            } else {
                leftt[next].style.left=-w +'px';
                animate(leftt[current],{left:w});
                animate(leftt[next],{left:0});
            }
            btnlist[current].classList.remove('hot');
            btnlist[next].classList.add('hot');
            current = next;
        }
    }
    let left = document.querySelector('.left');
    let t=setInterval(rightbtn.onclick,2000);
    left.onmouseenter = function(){
        clearInterval(t);
    }
    left.onmouseleave= function(){
        t=setInterval(rightbtn.onclick,2000);
    }

    let viewh = window.innerHeight;
    let imgs = document.querySelectorAll('.lazyload');
    let positionArr = [];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop);
    })
    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop;
        for (let i=0; i<positionArr.length; i++){
            if (scrolltop + viewh >= positionArr[i] + 60){
                imgs[i].src = imgs[i].getAttribute('aba');
            }
        }
    }

}