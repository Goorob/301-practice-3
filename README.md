# 301-practice-3

**1.How long is the array returned by .map()? .filter()?**
  map returns a new array of elements where you have applied some function on the element so that it changes the original element (typically). filter returns a new array of the elements of the original array (with no change to the original values).


  **What does the following code do:**
  $('button#primary').on('click', function() {
  placeOrder(shoppingCartItems);
});
   *when the user click a button that have id 'primary' js will run placeOrder function with shoppingCartItems as argument*


   **Write a function that takes an array of names as an argument and outputs each name in uppercase to the console.**
   function upperCase(arr){
       arr.forEach(ele =>{
          let name= ele.toUpperCase();
           console.log(name);
       })
   }