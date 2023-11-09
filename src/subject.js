// 主题， 保存状态，状态变化后触发所有观察者对象
class Subject {
    constructor(){
        this.state = 0;
        this.observers = [];
    }
    getState(){
        return this.state;
    }
    setState(state){
        this.state = state;
        this.notifyAllObserver()
    }
    notifyAllObserver(){
        this.observers.forEach(observer => observer.update())
    }
    attach(observer){
        this.observers = [...this.observers, observer];
    }
}

class Observer {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }
    update(){
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

//测试
let s = new Subject();
let ol = new Observer('ol', s);
let o2 = new Observer("o2", s);// 观察者可以一对多
let o3 = new Observer("o3", s);
s.setState(1);
s.setState(2);
s.setState(3);