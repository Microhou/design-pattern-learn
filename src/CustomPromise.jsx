import StateMachine from 'javascript-state-machine';

// 状态机模型
const fsm = new StateMachine({
    init: 'pending',
    transitions: [
      { name: 'resolve',     from: 'pending',  to: 'fulfilled' },
      { name: 'reject',   from: 'pending', to: 'rejected'  }
    ],
    methods: {
        //监听resolve
      onResolve:  function(state, data) {
        // state 当前状态机实例， data -- fsm.resolve(XXX)传递的参数
        data.successList.forEach(fn => fn());
      },
      onReject:  function(state, data) {
         // state 当前状态机实例， data -- fsm.reject(XXX)传递的参数
         data.failList.forEach(fn => fn())
        
        }
    }
  });

  console.log(fsm.state);

class MyPromise {
    constructor(executor){
        this.successList = [];
        this.failList = [];

        executor(() =>{
            // resolve 函数
            fsm.resolve(this);
        }, () => {
            //reject 函数
            fsm.reject(this);
        } )
    }

    then(successFn, failFn){
        this.successList.push(successFn);
        this.failList.push(failFn);
    }
}


//测试代码

let imgURl = "https://img.zcool.cn/community/011aad554be56f000001bf72c38864.jpg@1280w_1l_2o_100sh.jpg";

 let result = loadingImg(imgURl);
  result.then(function () {
    console.log("ok1")
  }, function () {
    console.log("fail1")
  });
  result.then(function () {
    console.log("ok2")
  }, function () {
    console.log("fail2")
  });

function loadingImg(url) {
    let promise = new MyPromise((resolve, reject) => {
      let img = document.createElement('img');
      img.onload = function () {
        resolve(img)
      }
      img.onerror = () => {
        reject("图片加载失败");
      }
      img.src = url;
    })

    return promise;
  }


function CustomPromise(params) {
    
    return (
        <div>
            this is CustomPromise
        </div>
    )
}

export default CustomPromise;