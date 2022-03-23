//use local storage to manage cart data

const addToDb = (id) => {
  let shoppingCart;
  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart"); //get the shopping cart
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart); //parse the shopping cart
  } else {
    shoppingCart = {}; //if there is no shopping cart, create a new one
  }

  //add quantity
  const quantity = shoppingCart[id]; //if the item is already in the cart, get the quantity
  if (quantity) {
    const newQuantity = quantity + 1; //increase quantity
    shoppingCart[id] = newQuantity; //set the new quantity
  } else {
    shoppingCart[id] = 1; //if the item is not in the cart, set the quantity to 1
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart)); //store the new shopping cart
};

//remove all quantity of an item
const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

//remove one by one quantity of an item
/* const removeFromDb = (id) => {
  let shoppingCart;
  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart"); //get the shopping cart
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart); //parse the shopping cart
  } else {
    shoppingCart = {}; //if there is no shopping cart, create a new one
  }
  //remove quantity
  const quantity = shoppingCart[id]; //if the item is already in the cart, get the quantity
  if (quantity) {
    const newQuantity = quantity - 1; //decrease quantity
    if (newQuantity > 0) {
      shoppingCart[id] = newQuantity; //set the new quantity
    } else {
      delete shoppingCart[id]; //if the quantity is 0, remove the item from the cart
    }
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart)); //store the new shopping cart
}; */

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, deleteShoppingCart };
