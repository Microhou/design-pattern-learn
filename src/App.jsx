import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Decorator from './DecoratorCom';


class Cat {
  @readonly
  meow() { return `${this.name} says Meow`}
}

function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

let cat = new Cat();
console.log("car", cat);
// cat.meow = () => {};

function App() {
  const [count, setCount] = useState(0)

  // function loadingImg(url) {
  //   let promise = new Promise((resolve, reject) => {
  //     let img = document.createElement('img');
  //     img.onload = function () {
  //       resolve(img)
  //     }
  //     img.onerror = () => {
  //       reject("图片加载失败");
  //     }
  //     img.src = url;
  //   })

  //   return promise;
  // }

  // let imgURl = "https://img.zcool.cn/community/011aad554be56f000001bf72c38864.jpg@1280w_1l_2o_100sh.jpg";

  // let result = loadingImg(imgURl);
  // result.then(function (img) {
  //   alert(`width: ${img.width}`)
  //   return img;
  // }).then((img) => {
  //   alert(`width: ${img.height}`)
  // }).catch((err) => {
  //   alert(err)
  // });
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Decorator/>
    </>
  )
}

export default App
