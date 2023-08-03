//友情提示这玩意需要加载jQuery，因为金山词霸返回的这玩意是跨域访问得到的，native需要jsonp或者fetchAPI顶级用法
//欢迎开发不用jQuery的版本，或者用hitoko（一言）的也可以

$(function () {
    $.ajax({
      async: true,
      type: 'GET',
      dataType: 'jsonp',
      jsonp: 'callback',
      jsonpCallback: 'callbackfunction',
      url: 'https://open.iciba.com/dsapi/',
      data: '',
      timeout: 3000,
      contentType: 'application/json;utf-8',
      success: function (data) {
        console.log(data);
        content = data.content;
        note = data.note;
        content_span.innerHTML = content;
        note_span.innerHTML = note;
      },
    });
  });