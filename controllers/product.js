const Product = require("../model/product")

exports.getProducts = (req, res) => {
    const products = Product.fetchAll()
        .then((product) => {
            res.render("products", {
                products: products,
            });
        })
        .catch((err)=> console.log(err));
    console.log(products);
};

exports.getProduct = (req, res) => {
    const product = Product.findById(req.params.id);
    res.render("product", {
        product: product
    });
}

exports.getAddProduct = (req, res) => {
    res.render("add-product", {
        isAddProduct: true,
        isEditProduct: false,
    });
}

exports.postAddProduct = (req, res) => {
    console.log(req.body);
    const product = new Product(req.body.name, req.body.price);
    product.save();
    res.redirect('/products');
}

exports.getEditProduct = (req, res) => {
    const product = Product.findById(req.params.id);
    res.render("add-product", {
        isAddProduct: false,
        isEditProduct: true,
        product: product
    });
}

exports.postEditProduct = (req, res) => {
    const product = Product.findById(req.params.id);
    product.name = req.body.name;
    product.price = req.body.price;
    Product.edit(req.params.id, product);

    res.redirect('/products');
}
