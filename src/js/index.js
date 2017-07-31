import '../css/app.scss';
import popJs from './popJs';

document.getElementById('app').innerHTML = (`
    <h1>示例</h1>
    <div class="example-success"></div>
    <div class="example-error"></div>
    <div class="example-loading"></div>
    <div class="example-multi"></div>
    <div class="example-width"></div>
     <div class="example-html"></div>
    <div class="example-timing"></div>
    <div class="example-mounted"></div>
    <div class="example-callback"></div>
`);

document.querySelector('.example-success').innerHTML = (`
    <button class="btn btn-success btn-block">成功示例</button>
    <code>
    pop({ <br>
    &nbsp;&nbsp;   type:'success', <br>
    &nbsp;&nbsp;   title:'成功啦!', <br>
    &nbsp;&nbsp;   desc:'这里是描述性质的文字' <br>
   })
    </code>
`);

$('.example-success .btn').click(function () {
    popJs({
        type:'success',
        title:'成功啦',
        desc:'这里是描述性质的文字',
    })
});

document.querySelector('.example-error').innerHTML = (`
    <button class="btn btn-error btn-block">失败示例</button>
    <code>
    pop({ <br>
    &nbsp;&nbsp;   type:'error', <br>
    &nbsp;&nbsp;   title:'失败了!', <br>
    &nbsp;&nbsp;   desc:'仔细检查检查原因吧' <br>
   })
    </code>
`);

$('.example-error .btn').click(function () {
    popJs({
        type:'error',
        title:'失败了',
        desc:'仔细检查检查原因吧',
    })
});

document.querySelector('.example-loading').innerHTML = (`
    <button class="btn btn-loading btn-block">等待示例</button>
    <code>
    pop({ <br>
    &nbsp;&nbsp;   type:'loading', <br>
    &nbsp;&nbsp;   title:'加载中', <br>
    &nbsp;&nbsp;   desc:['请耐心等待','等待弹窗不加timing参数不会自动关闭'] <br>
    &nbsp;&nbsp;   timing:2000 <br>
   })
    </code>
`);

document.querySelector('.example-multi').innerHTML = (`
    <button class="btn btn-default btn-block">多行示例</button>
    <code>
    pop({ <br>
    &nbsp;&nbsp;   title:'这里是一个多行文本的示例', <br>
    &nbsp;&nbsp;   desc:['我是第一行','我是第二行'] <br>
   })
    </code>
`);

$('.example-multi .btn').click(function () {
    popJs({
        title:'这里是一个多行文本的示例',
        desc:['我是第一行','我是第二行'],
    })
});

document.querySelector('.example-width').innerHTML = (`
    <button class="btn btn-default btn-block">自定义宽度</button>
    <code>
    pop({ <br>
    &nbsp;&nbsp;   desc:['我们自己也可以定义弹窗的宽度','但不能超过显示区域宽度','超过会默认最大宽度'],<br>
    &nbsp;&nbsp;   width: 150<br>
   })
    </code>
`);

$('.example-width .btn').click(function () {
    popJs({
        desc: ['我们自己也可以定义弹窗的宽度','但不能超过显示区域宽度','超过会默认最大宽度'],
        width: 150,
    })
});

$('.example-loading .btn').click(function () {
    popJs({
        type:'loading',
        title:'加载中',
        desc:['请耐心等待','等待弹窗不加timing参数不会自动关闭'],
        timing:2000
    })
});

document.querySelector('.example-timing').innerHTML = (`
    <button class="btn btn-default btn-block">自动关闭示例</button>
    <code>
    pop({ <br>
    &nbsp;&nbsp;   title:'弹窗将在5秒后关闭', <br>
    &nbsp;&nbsp;   desc:'默认三秒' <br>
    &nbsp;&nbsp;   timing:5000 <br>
   })
    </code>
`);

$('.example-timing .btn').click(function () {
    popJs({
        title:'弹窗将在5秒后关闭',
        desc: '默认三秒',
        timing:5000
    })
});

document.querySelector('.example-mounted').innerHTML = (`
    <button class="btn btn-default btn-block">弹窗创建前方法</button>
    <code>
    pop({ <br>
    &nbsp;&nbsp;   type:'success', <br>
    &nbsp;&nbsp;   desc:'弹窗创建成功啦',<br>
    &nbsp;&nbsp;   mounted(){ <br>
    &nbsp;&nbsp;&nbsp;&nbsp;   alert('弹窗即将创建') <br>
    &nbsp;&nbsp;   } <br>
   })
    </code>
`);

$('.example-mounted .btn').click(function () {
    popJs({
        type:'success',
        desc: '弹窗创建成功啦',
        mounted(){
            alert('弹窗即将创建')
        }
    })
});

document.querySelector('.example-callback').innerHTML = (`
    <button class="btn btn-default btn-block">回调方法</button>
    <code>
    pop({ <br>
    &nbsp;&nbsp;   type:'success', <br>
    &nbsp;&nbsp;   desc:'弹窗即将关闭',<br>
    &nbsp;&nbsp;   callback(){ <br>
    &nbsp;&nbsp;&nbsp;&nbsp;   alert('弹窗关闭啦') <br>
    &nbsp;&nbsp;   } <br>
   })
    </code>
`);

$('.example-callback .btn').click(function () {
    popJs({
        type:'success',
        desc: '弹窗即将关闭',
        callback(){
            alert('弹窗关闭啦')
        }
    })
});