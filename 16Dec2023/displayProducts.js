function display() {
    //write this code
  
    product.forEach((product) => {
      const output = " Name: " + product.name + ", Price: $" + product.price;
      console.log(output);
    });
  }