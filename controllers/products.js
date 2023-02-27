const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};

exports.getPostProduct = (req, res) => {
    const product = new Product(req.body)
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
    });
};