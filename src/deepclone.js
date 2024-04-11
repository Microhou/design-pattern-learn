function deepClone(obj) {
     // 如果是 值类型 或 null，则直接return
     if (typeof obj !== 'object' || obj === null) {
        return obj;
     }
     // 定义结果对象
     let copy = {};

     // 如果对象是数组，则定义结果数组
     if (obj.constructor === Array) {
        copy = [];
     }

      // 遍历对象的key
      for (let key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            // 递归调用深拷贝方法
            copy[key] = deepClone(obj[key])
        }
      }

      return copy;
}