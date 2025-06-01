import {createFakeProduct} from '../utils/createFakeProduct.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const generateProducts = async (number) => {
    try {
        const readData = await fs.readFile(PATH_DB, 'utf-8');
        const exProducts = JSON.parse(readData);

        const newProducts = [];

        for (let i = 0; i < number; i++) {
      newProducts.push(createFakeProduct());
    }

    const updateProducts = [...exProducts, ...newProducts];

    await fs.writeFile(PATH_DB, JSON.stringify(updateProducts,  null, 2), 'utf-8');

    console.log(`Успішно додано ${number} нових продуктів.`);

    } catch (error) {
        console.error('Помилка при генерації продуктів:', error);
    }
};
generateProducts(7);
