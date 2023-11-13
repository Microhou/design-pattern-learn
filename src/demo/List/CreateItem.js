import Item from './Item';

//优惠商品
function createDiscount(itemData) {
    //用代理做折扣
    return new Proxy(itemData, {
        get: function (target, key, receiver) {
            if (key === 'name') {
                return `${target[key]} [折扣]`
            }
            if (key === 'price') {
                return target[key] * 0.8
            }

            return target[key];
        }
    })
}

//工厂函数
export default function (list, itemData) {
    if(itemData.discount){
        itemData = createDiscount(itemData);
    }
    return new Item(list, itemData);
}