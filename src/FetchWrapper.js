import { error } from "jquery";

export default class HttpUtils {
    //get 方法
    static get(url) {
        return Promise((resolve, reject) => {
            //调用fetch
            fetch(url)
            .then(response => response.json())
            .then(result => {
                resolve(result)
            })
            .catch((error) => {
                reject(error);
            })
        })
        
    }
    // post方法，data以object形式传入
    static post(url, data){
        return new Promise((resolve, reject) => {
             // 调用fetch
             fetch(url, {
                method: "post",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: this.changeData(data)
             })
             .then(response => response.json())
             .then(result => {
                resolve(result)
             })
             .catch(error => {
                reject(error)
             })
        })
    }
    // body请求体的格式化方法
    static changeData(obj){
        var prop, str = '';
        var i = 0;
        for (prop in obj) {
            if (!prop) {
                return
            }
            if (i == 0) {
                str += prop + '=' + obj[prop];
            } else {
                str += '&' + prop + '=' + obj[prop]
            }
        }
        
        return str;
    }
}

