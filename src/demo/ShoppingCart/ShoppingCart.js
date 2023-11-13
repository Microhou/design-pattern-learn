import $ from "jquery";
import getCart from './GetCart';

export default class ShoppingCart {
    constructor(app){
        this.app = app;
        this.$el = $(`<div>`).css({
            'padding-bottom': '10px',
            'border-bottom': '1px solid #ccc'
        });
        this.cart = getCart();
    }
    showCart(){
        alert(this.cart.getList());
    }
    initBtn(){
        let $btn = $(`<button>购物车</button>`);
        let _this = this;
        $btn.on('click', function (evn) {
            _this.showCart()
        })
        this.$el.append($btn);
    }

    render(){
        this.app.$el.append(this.$el);
    }
    init(){
        this.initBtn();
        this.render();
    }
}