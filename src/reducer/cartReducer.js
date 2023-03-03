const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
      // console.log( product);

      let cartProduct;

      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image,
        price: product.price,
        max:product.stock,
      };

      return {
        ...state,
        cart:[...state.cart, cartProduct],
      }
    };
    return state;
};
    
    export default cartReducer
