import fs from "fs";

import path from "path";

import rootDir from "../util/path";

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = cb =>  {
        fs.readFile(p, (err, data) => {
            if (err) {
                return cb([]);
            }
            cb(JSON.parse(data));
        });
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this.title);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};
