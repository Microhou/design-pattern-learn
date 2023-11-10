// Promise 是一个有限状态机
// 三种状态 pending fulfilled reject 
// pending --> fulfilled 或者 pending --> reject
// 状态不可逆向

const StateMachine = require('javascript-state-machine');

class MyPromise {
    constructor(executor){
        this.successList = [];
        this.failList = [];

        executor(() =>{
            // resolve 函数
            
        }, () => {
            //reject 函数
        } )
    }

    then(successFn, failFn){
        this.successList.push(successFn);
        this.failList.push(failFn);
    }
}


const fsm = new StateMachine({
    init: 'solid',
    transitions: [
      { name: 'melt',     from: 'solid',  to: 'liquid' },
      { name: 'freeze',   from: 'liquid', to: 'solid'  },
      { name: 'vaporize', from: 'liquid', to: 'gas'    },
      { name: 'condense', from: 'gas',    to: 'liquid' }
    ],
    methods: {
      onMelt:     function() { console.log('I melted')    },
      onFreeze:   function() { console.log('I froze')     },
      onVaporize: function() { console.log('I vaporized') },
      onCondense: function() { console.log('I condensed') }
    }
  });

  console.log(fsm.state());
