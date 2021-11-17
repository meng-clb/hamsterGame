// 地鼠冒出来
let t;
// 地鼠缩回去
let t1;
// 地鼠数量
let num = 0;

// 定义地鼠图片
// 缩回
mouse1 = "img/mouse.png";
// 冒出
mouse2 = 'img/mouse2.png';
// 被打
mouse3 = 'img/mouse3.png';

// 初始化时间
let time = 60;


function showMouse() {
    // 游戏重置
    reset();

    // 获取地洞的数量
    let mouses = document.querySelectorAll('.mou .mouse').length;
    // 获取游戏的难易程度
    let level = document.querySelector('#level').value;

    // 让地鼠冒出来
    t = setInterval(function () {
        // 时间==0, 游戏结束
        time--;
        document.getElementById('time').innerHTML = time;

        if (time == 0) {
            // 清除地鼠冒出来的定时器
            clearInterval(t);
        }
        let rad = parseInt(Math.random() * mouses);
        // 地鼠冒出来
        document.querySelectorAll('.mouse')[rad].src = mouse2;
        t1 = setTimeout(function () {
            // 地鼠缩回去
            document.querySelectorAll('.mouse')[rad].src = mouse1;
        }, level);
    }, 1000);
}

function clickMouse(e) {
    if (e.src.indexOf(mouse2) != -1) {
        num++;
        document.querySelector('#num').innerHTML = num;
        e.src = mouse3;
    }
}


function reset() {
    time = 60;
    document.querySelector('#time').innerHTML = 60;
    num = 0;
    document.querySelector('#num').innerHTML = num;
    clearInterval(t);
    clearTimeout(t1);
}