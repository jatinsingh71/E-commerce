const db = require("../util/database");

const products = [
  { id: 0, name: "tv", price: 100000 },
  { id: 1, name: "mobile", price: 40000 },
];
let currentId = 2;

module.exports = class Product {
  constructor(name, price) {
    this.id = currentId++;
    this.name = name;
    this.price = price;
  }

  save() {
    products.push(this);
  }

  static edit(id, product) {
    products[id] = product;
  }

  static fetchAll(){
     return db.execute("SELECT * FROM products").then((result)=>{
      return result[0];
     }).catch((err)=>console.log(err));
  }

  static findById(id) {
    return db.execute("SELECT * FROM  products WHERE id = ?", [id])
  }
};
