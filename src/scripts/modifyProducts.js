import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const modifyProducts = async () => {
    try{
    const readData = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(readData);

    const allDecription = products.map(({ description, ...rest }) => rest);
    await fs.writeFile(PATH_DB, JSON.stringify(allDecription, null, 2), 'utf-8');
    console.log('Продукти успішно оновлені.');
    //const withoutDecsription = allDecription.splice;
    } catch (error) {
    console.log('не знайдено продукти');
    return [];
    }
};
modifyProducts();
