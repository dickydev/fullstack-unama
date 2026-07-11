const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 12000000,
    stock: 10,
  },
];

const getAll = () => {
  return products;
};

const getById = (id) => {
  return products.find((product) => product.id === id);
};

const create = (data) => {
  const newProduct = {
    id: products.length + 1,
    name: data.name,
    price: data.price,
    stock: data.stock,
  };

  products.push(newProduct);

  return newProduct;
};

const update = (id, data) => {
  const product = products.find((item) => item.id === id);

  if (!product) {
    return null;
  }

  product.name = data.name;
  product.price = data.price;
  product.stock = data.stock;

  return product;
};

const remove = (id) => {
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return null;
  }

  const deletedProduct = products.splice(index, 1);
  return deletedProduct[0];
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
