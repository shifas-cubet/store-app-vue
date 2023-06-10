import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {

    state: () => ({
        cartItems: [],
        totalPrice: 0,
        isCartEmpty: true
    }),

    getters: {
        cartSize: (state) => state.cartItems.length
    },

    actions: {
        addToCart(item) {
            this.cartItems.push(item);
            this.totalPrice += item.price;
            this.isCartEmpty = false;
        },

        removeFromCart(item, index) {
            const indexByID = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
            if(indexByID !== -1) {
                this.cartItems.splice(indexByID, 1);
                this.totalPrice -= item.price;
                if(this.cartItems.length <= 0) {
                    this.isCartEmpty = true;
                }
            }
        },

        clearCart() {
            this.cartItems = [];
            this.totalPrice = 0;
            this.isCartEmpty = true;
        }
    }

});