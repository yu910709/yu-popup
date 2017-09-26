'use strict';

require('../css/app.scss');

var _index = require('../../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElementById('example').innerHTML = '\n    <h1>\u793A\u4F8B</h1>\n    <div class="example-success"></div>\n    <div class="example-error"></div>\n    <div class="example-loading"></div>\n    <div class="example-multi"></div>\n    <div class="example-width"></div>\n    <div class="example-html"></div>\n    <div class="example-timing"></div>\n    <div class="example-mounted"></div>\n    <div class="example-callback"></div>\n';

document.querySelector('.example-success').innerHTML = '\n    <button class="btn btn-success btn-block">\u6210\u529F\u793A\u4F8B</button>\n    <code>\n    popup({ <br>\n    &nbsp;&nbsp;   type:\'success\', <br>\n    &nbsp;&nbsp;   title:\'\u6210\u529F\u5566!\', <br>\n    &nbsp;&nbsp;   desc:\'\u8FD9\u91CC\u662F\u63CF\u8FF0\u6027\u8D28\u7684\u6587\u5B57\' <br>\n   })\n    </code>\n';

$('.example-success .btn').click(function () {
    (0, _index2.default)({
        type: 'success',
        title: '成功啦',
        desc: '这里是描述性质的文字'
    });
});

document.querySelector('.example-error').innerHTML = '\n    <button class="btn btn-error btn-block">\u5931\u8D25\u793A\u4F8B</button>\n    <code>\n    popup({ <br>\n    &nbsp;&nbsp;   type:\'error\', <br>\n    &nbsp;&nbsp;   title:\'\u5931\u8D25\u4E86!\', <br>\n    &nbsp;&nbsp;   desc:\'\u4ED4\u7EC6\u68C0\u67E5\u68C0\u67E5\u539F\u56E0\u5427\' <br>\n   })\n    </code>\n';

$('.example-error .btn').click(function () {
    (0, _index2.default)({
        type: 'error',
        title: '失败了',
        desc: '仔细检查检查原因吧'
    });
});

document.querySelector('.example-loading').innerHTML = '\n    <button class="btn btn-loading btn-block">\u7B49\u5F85\u793A\u4F8B</button>\n    <code>\n    popup({ <br>\n    &nbsp;&nbsp;   type:\'loading\', <br>\n    &nbsp;&nbsp;   title:\'\u52A0\u8F7D\u4E2D\', <br>\n    &nbsp;&nbsp;   desc:[\'\u8BF7\u8010\u5FC3\u7B49\u5F85\',\'\u7B49\u5F85\u5F39\u7A97\u4E0D\u52A0timing\u53C2\u6570\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\'] <br>\n    &nbsp;&nbsp;   timing:2000 <br>\n   })\n    </code>\n';

$('.example-loading .btn').click(function () {
    (0, _index2.default)({
        type: 'loading',
        title: '加载中',
        desc: ['请耐心等待', '等待弹窗不加timing参数不会自动关闭'],
        timing: 2000
    });
});

document.querySelector('.example-multi').innerHTML = '\n    <button class="btn btn-default btn-block">\u591A\u884C\u793A\u4F8B</button>\n    <code>\n    popup({ <br>\n    &nbsp;&nbsp;   title:\'\u8FD9\u91CC\u662F\u4E00\u4E2A\u591A\u884C\u6587\u672C\u7684\u793A\u4F8B\', <br>\n    &nbsp;&nbsp;   desc:[\'\u6211\u662F\u7B2C\u4E00\u884C\',\'\u6211\u662F\u7B2C\u4E8C\u884C\'] <br>\n   })\n    </code>\n';

$('.example-multi .btn').click(function () {
    (0, _index2.default)({
        title: '这里是一个多行文本的示例',
        desc: ['我是第一行', '我是第二行']
    });
});

document.querySelector('.example-width').innerHTML = '\n    <button class="btn btn-default btn-block">\u81EA\u5B9A\u4E49\u5BBD\u5EA6</button>\n    <code>\n    popup({ <br>\n    &nbsp;&nbsp;   desc:[\'\u6211\u4EEC\u81EA\u5DF1\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u5F39\u7A97\u7684\u5BBD\u5EA6\',\'\u4F46\u4E0D\u80FD\u8D85\u8FC7\u663E\u793A\u533A\u57DF\u5BBD\u5EA6\',\'\u8D85\u8FC7\u4F1A\u9ED8\u8BA4\u6700\u5927\u5BBD\u5EA6\'],<br>\n    &nbsp;&nbsp;   width: 150<br>\n   })\n    </code>\n';

$('.example-width .btn').click(function () {
    (0, _index2.default)({
        desc: ['我们自己也可以定义弹窗的宽度', '但不能超过显示区域宽度', '超过会默认最大宽度'],
        width: 150
    });
});

document.querySelector('.example-html').innerHTML = '\n    <button class="btn btn-default btn-block">\u5BCC\u6587\u672C</button>\n    <code>\n    let title = someDom; <br>\n    let desc = someDom; <br>\n    popup({ <br>\n    &nbsp;&nbsp;  title, <br>\n    &nbsp;&nbsp;  desc, <br>\n    &nbsp;&nbsp;  timing:5000, <br>\n    })\n    </code>\n';

$('.example-html .btn').click(function () {
    var title = '<h5 style="color:lightpink">popJs\u7684DOM\u662FES6\u5B57\u7B26\u4E32\u6A21\u677F\u62FC\u63A5\u7684</h5>';
    var desc = '\n        <ul style="list-style: none;background: white;color:darkgrey;padding: 10px;font-size: 12px;">\n           <li>\u6240\u4EE5\u6211\u4EEC\u652F\u6301\u5BCC\u6587\u672C</li>\n           <li>\u4F60\u53EF\u4EE5\u968F\u610F\u53D1\u6325\u6784\u5EFADOM</li>\n           <li>\u53EA\u8981HTML\u652F\u6301\u7684popJs\u90FD\u53EF\u4EE5\u652F\u6301</li>\n        </ul>\n    ';
    (0, _index2.default)({
        title: title,
        desc: desc,
        timing: 5000
    });
});

document.querySelector('.example-timing').innerHTML = '\n    <button class="btn btn-default btn-block">\u81EA\u52A8\u5173\u95ED\u793A\u4F8B</button>\n    <code>\n    popup({ <br>\n    &nbsp;&nbsp;   title:\'\u5F39\u7A97\u5C06\u57285\u79D2\u540E\u5173\u95ED\', <br>\n    &nbsp;&nbsp;   desc:\'\u9ED8\u8BA4\u4E09\u79D2\' <br>\n    &nbsp;&nbsp;   timing:5000 <br>\n   })\n    </code>\n';

$('.example-timing .btn').click(function () {
    (0, _index2.default)({
        title: '弹窗将在5秒后关闭',
        desc: '默认三秒',
        timing: 5000
    });
});

document.querySelector('.example-mounted').innerHTML = '\n    <button class="btn btn-default btn-block">\u5F39\u7A97\u521B\u5EFA\u524D\u65B9\u6CD5</button>\n    <code>\n    popup({ <br>\n    &nbsp;&nbsp;   type:\'success\', <br>\n    &nbsp;&nbsp;   desc:\'\u5F39\u7A97\u521B\u5EFA\u6210\u529F\u5566\',<br>\n    &nbsp;&nbsp;   mounted(){ <br>\n    &nbsp;&nbsp;&nbsp;&nbsp;   alert(\'\u5F39\u7A97\u5373\u5C06\u521B\u5EFA\') <br>\n    &nbsp;&nbsp;   } <br>\n   })\n    </code>\n';

$('.example-mounted .btn').click(function () {
    (0, _index2.default)({
        type: 'success',
        desc: '弹窗创建成功啦',
        mounted: function mounted() {
            alert('弹窗即将创建');
        }
    });
});

document.querySelector('.example-callback').innerHTML = '\n    <button class="btn btn-default btn-block">\u56DE\u8C03\u65B9\u6CD5</button>\n    <code>\n    popup({ <br>\n    &nbsp;&nbsp;   type:\'success\', <br>\n    &nbsp;&nbsp;   desc:\'\u5F39\u7A97\u5373\u5C06\u5173\u95ED\',<br>\n    &nbsp;&nbsp;   callback(){ <br>\n    &nbsp;&nbsp;&nbsp;&nbsp;   alert(\'\u5F39\u7A97\u5173\u95ED\u5566\') <br>\n    &nbsp;&nbsp;   } <br>\n   })\n    </code>\n';

$('.example-callback .btn').click(function () {
    (0, _index2.default)({
        type: 'success',
        desc: '弹窗即将关闭',
        callback: function callback() {
            alert('弹窗关闭啦');
        }
    });
});