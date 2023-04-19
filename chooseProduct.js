const products = {
  Beverage: 'Soda',
  Fruit: 'Apple',
  Hygiene: 'Soap',
};

function chooseProduct(segment) {
  return products[segment];
}

module.exports = chooseProduct;
