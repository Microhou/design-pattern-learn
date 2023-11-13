import $ from "jquery";
import { GET_LIST } from '../config/config';
import CreateItem from './CreateItem';

export default class List {
    constructor(app){
        this.app = app;
        this.$el = $('<div>')
    }
    //获取数据
    loadData(){
        //返回 promise 实例
        return fetch(GET_LIST).then(result => result.json())
    }
    //生成列表
    initItemList(data){
        // data.map(itemData => {
        //     // 创建一个Item, 然后init 
        //     //TODO
        //     let item = CreateItem(this, itemData);
        //     item.init()
        //     return item;
        // })
        data.forEach(
            itemData => {
                let item = CreateItem(this, itemData);
                item.init()
            }
        )
    }
    //渲染
    render(){
        this.app.$el.append(this.$el);
    }
    init(){
        this.loadData()
          .then((data) => this.initItemList(data))
          .then(() => this.render());
    }
}