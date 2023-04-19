const products = {
  Bebida: 'Soda',
  Fruta: 'Apple',
  Higiene: 'Soap',
};

function chooseProduct(segment) {
  return products[segment];
}

module.exports = chooseProduct;
