window.onload = function () {
    let home = document.getElementById('home');
    home.onmouseenter = function () {
        home.style.color = 'red'
    }
    home.onmouseleave = function () {
        home.style.color = 'white'
    }


    let btnlist=document.getElementsByTagName('btnlist');
    console.log(btnlist);
    btnlist.onmouseenter=function () {
        btnlist.style.background='#00C1DE'
    }

    let diarysecondright = document.querySelectorAll('.diarysecondright li');
    diarysecondright.forEach(function (elem, index) {
        elem.onmouseenter = function () {
            for (let i = 0; i < diarysecondright.length; i++) {
                diarysecondright[i].classList.remove('hot');
            }
            this.classList.add('hot')
        }
    })
    //移动改变字体颜色


    let index = 0;
    let rightbtn = document.querySelector('.rightbtn');
    let leftbtn = document.querySelector('.leftbtn');
    let leftt = document.querySelectorAll('.leftt .img');

    rightbtn.onclick=function () {
        index++;
        if (index === leftt.length){
            index = 0;
        }
        leftt.forEach(function(ele){
            ele.style.zIndex = 1;
        });
        leftt[index].style.zIndex = 99;

    }
    leftbtn.onclick = function () {
        index--;
        if (index < 0) {
            index = leftt.length - 1;
        }
        leftt.forEach(function (ele) {
            ele.style.zIndex = 1;
        });
        leftt[index].style.zIndex = 99;
    }

    //    点击按钮滚动
    let i=setInterval(rightbtn.onclick,1000);

}