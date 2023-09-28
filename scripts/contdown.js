//获取元素，几天，几小时，几分钟，几秒和倒计时的title
var days = document.querySelector('.days');
var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var timertitle = document.querySelector('.timertitle');
//获取截止时间的时间戳（单位毫秒）
var shoukao = +new Date('2024-1-6 00:00:00');
var gaokao = +new Date('2024-6-7 00:00:00');

//我们先调用countDown函数，可以避免在打开界面后停一秒后才开始倒计时
countDown();
//定时器 每隔一秒变化一次
setInterval(countDown, 1000);
function countDown() {
  //获取当前时间的时间戳（单位毫秒）
  var nowTime = +new Date();
  //把剩余时间毫秒数转化为秒
  var times = (shoukao - nowTime) / 1000;
  var timesg = (gaokao - nowTime) / 1000;
  if (times > 0) {
    //首考计算天数 转化为整数
    var d = parseInt(times / 86400);
    days.innerHTML = d;
    //计算小时数 转化为整数
    var h = parseInt((times / 60 / 60) % 24);
    //如果小时数小于 10，要变成 0 + 数字的形式 赋值给盒子
    hour.innerHTML = h < 10 ? '0' + h : h;
    //计算分钟数 转化为整数
    var m = parseInt((times / 60) % 60);
    //如果分钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
    minute.innerHTML = m < 10 ? '0' + m : m;
    //计算秒数 转化为整数
    var s = parseInt(times % 60);
    //如果秒钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
    second.innerHTML = s < 10 ? '0' + s : s;
  } else if (times + 259200 >= 0) {
    //首考时候加油鼓劲
    timer.innerHTML = '乘风破浪，雄鹰展翅，首考加油！';
  } else {
    if (timesg > 0) {
      timertitle.innerHTML = '距离 2024 年 6 月 7 日高考还有：';
      //高考计算天数 转化为整数
      var d = parseInt(timesg / 86400);
      days.innerHTML = d;
      //计算小时数 转化为整数
      var h = parseInt((timesg / 60 / 60) % 24);
      //如果小时数小于 10，要变成 0 + 数字的形式 赋值给盒子
      hour.innerHTML = h < 10 ? '0' + h : h;
      //计算分钟数 转化为整数
      var m = parseInt((timesg / 60) % 60);
      //如果分钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
      minute.innerHTML = m < 10 ? '0' + m : m;
      //计算秒数 转化为整数
      var s = parseInt(timesg % 60);
      //如果秒钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
      second.innerHTML = s < 10 ? '0' + s : s;
    } else if (timesg + 345600 >= 0) {
      //高考时候加油鼓劲
      timer.innerHTML = '不负 12 载的光辉，不负 3 年的青春，同志们高考加油！';
    } else {
      timer.innerHTML =
        '那份乘风破浪的过往，终将踏成前行路途熠熠之光。祝大家前路浩荡，青春不散场！';
    }
  }
}
