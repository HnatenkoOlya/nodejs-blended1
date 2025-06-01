import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const getProductsByMinPrice = async (minPrice) => {
    try {
        const readData = await fs.readFile(PATH_DB, 'utf-8');
        const products = JSON.parse(readData);

        const filerProdcts = products.filter(product => product.price >= minPrice);

        return filerProdcts;
    } catch (error) {
     console.log('не знайдено продукти');
     return [];
    }
};

getProductsByMinPrice(250).then(products => {
  console.log(`Знайдено ${products.length} продукт(ів) з ціною від 250:`);
  console.log(products);
});
