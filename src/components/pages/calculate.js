//import React from 'react';
/*const promotionRules = [
    { rule: '2for1', items: ['milk', 'honey'] },
    { rule: 'half_price', items: ['bread'] },
    { rule: 'buy2get2', items: ['eggs', 'water'] }
];*/

let promotionRules = {
    two_for_1: 0,
    half_price: 0.5,
    buy2get2: -1
}

let numOfItems = {
    two_for_1: 2,
    half_price: 1,
    buy2get2: 4
}

export const products = {
    milk: { price: 9, coupon: 'two_for_1' },
    honey: { price: 9, coupon: 'two_for_1' },
    bread: { price: 4, coupon: 'half_price' },
    cheese: { price: 6, coupon: '' },
    eggs: { price: 10, coupon: 'buy2get2' },
    water: { price: 10, coupon: 'buy2get2' },
    pizza: { price: 2, coupon: '' }
};

// const userCart = ['milk', 'bread', 'eggs', 'cheese', 'honey', 'water', 'pizza'];

function addPromotion(item, promotion, numOfItemsForPromotion, rule){
    // Add to promotions list:
    //promotionRules[promotion] ? promotionRules[promotion].push(item) : promotionRules[promotion] = [item];
    // Add to products list:
    products[item].coupon = promotion;
    // Add to numOfItems list & promotions list:
    if ( !numOfItems[promotion] ) {
        numOfItems[promotion] = numOfItemsForPromotion;
        promotionRules[promotion] = rule;
    }

    console.log('Added promotion ', promotionRules);
    console.log('Added promotion to item ', products[item]);
}

let price = 0;
let discounts = (function(){
    let res = {};
    for (let j in promotionRules){
        res[j] = [];
    }
    return res;
})();

console.log('discounts = ', discounts);


function addToBill(item) {
    // Add items without discount
    /* else, add items with discount:
       1. check if exist in discount array
       2. add to inner-array
     */
    if (products[item].coupon === ''){
        price += products[item].price;
    } else {
        let couponName = products[item].coupon;
        const discountItem = discounts[couponName];
        // if there are more or less items then the number needed for discount:
        if ((discountItem.length+1) % numOfItems[couponName] !== 0 ) {
            discountItem.push(item);
            price += products[item].price;
        } else {
            // Add with discount:
            discountItem.push(item);
            if (promotionRules[couponName] > -1){
                price += products[item].price*promotionRules[couponName];
            } else {
                if (couponName === 'buy2get2') {
                    let indexToDiscount = discountItem.length
                    price -= products[discountItem[indexToDiscount-1]].price;
                }
            }
        }
    }

    return price;
}

export function removeFromBill(cart, price) {
    // Remove items without discount
    // Remove items with discount

    console.log({price});
}

export default addToBill;
/*
console.log(addToBill(userCart[0]));
console.log(addToBill(userCart[1]));
console.log(addToBill(userCart[2]));
console.log(addToBill(userCart[3]));
console.log(addToBill(userCart[4]));
console.log(addToBill(userCart[5]));
console.log(addToBill(userCart[5]));
console.log(addToBill(userCart[2]));
console.log(addToBill(userCart[6]));
console.log(addToBill(userCart[0]));
console.log(addToBill(userCart[0]));
console.log(addToBill(userCart[4]));
console.log(addToBill('bread'));*/