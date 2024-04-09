class MobilePhoneFactory {
     // 提供操作系统的接口
     createOS(){
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
     }
     // 提供硬件的接口
     createHardWare(){
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
     }
}

// 具体工厂继承自抽象工厂
class FakeStarFactory extends MobilePhoneFactory {
    createOS(){
        // 提供安卓系统实例
        return new AndroidOS();
    }
    createHardWare(){
         // 提供高通硬件实例
        return new QualcommHardWare();
    }
}

// 定义操作系统这类产品的抽象产品类
class OS {
    controlHardWare(){
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}

// 定义具体操作系统的具体产品类
class AndroidOS extends OS {
    controlHardWare(){
        console.log('我会用安卓的方式去操作硬件');
    }
}

class AppleOS extends OS {
    controlHardWare(){
        console.log('我会用🍎的方式去操作硬件');
    }
}

// 定义手机硬件这类产品的抽象产品类
class HardWare {
    // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
    operateByOrder(){
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}
// 定义具体硬件的具体产品类
class QualcommHardWare extends HardWare {
    operateByOrder(){
        console.log('我会用高通的方式去运转');
    }
}

class MiWare extends HardWare {
    operateByOrder(){
        console.log('我会用小米的方式去运转')
    }
}
//当我们需要生产一台FakeStar手机时，我们只需要这样做
const myPhone = new FakeStarFactory();
// 让它拥有操作系统
const myOS = myPhone.createOS();
// 让它拥有硬件
const myHardWare = myPhone.createHardWare();
// 启动操作系统(输出‘我会用安卓的方式去操作硬件’)
myOS.controlHardWare();
// 唤醒硬件(输出‘我会用高通的方式去运转’)
myHardWare.operateByOrder();

/**
 * 关键的时刻来了——假如有一天，FakeStar过气了，我们需要产出一款新机投入市场，这时候怎么办？我们是不是不需要对抽象工厂MobilePhoneFactory做任何修改，只需要拓展它的种类
 */

class newStarFactory extends MobilePhoneFactory {
    createOS(){
        // 操作系统实现代码
    }
    createHardWare(){
        // 硬件实现代码
    }
}

//抽象工厂的作用是让我们更好的理解开发封闭原则（对扩展开放，对修改封闭，扩展新代码，而非修改已有代码）