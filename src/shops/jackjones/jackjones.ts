import puppeteer from "puppeteer";
import { JackJonesSearchUseCase } from "./jackjones-search.use-case";
import fs from "node:fs";
import categories from './data/categories.json'
import { ProductEntity } from "../../db/product.db";
// const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: {
//         width: 1920,
//         height: 1080
//     }
// });

async function FetchProducts(category: {
    id: string
    title: string
}, gender: string) {

    const res = await JackJonesSearchUseCase.getProducts(category)
    // console.log(res, res.length);

    res.forEach(async (product) => {
        if (!product) return

        await new ProductEntity({
            ...product,
            id: product.id,
            category: category.title,
            gender
        }).save()
            .then(() => {
                // console.log(`Saved product ${product.name}:`, product.name, `CATEGORY: ${category.title}`);
            })

    })

}



export async function JackJones() {

    // const page = await browser.newPage();
    // await page.goto("https://www.jackjones.com/es-es/", { waitUntil: 'load' });

    // // Accept cookies
    // await page.waitForSelector('.cky-btn-accept', { visible: true });
    // await page.click('.cky-btn-accept');

    // const categories_man = (await page.$$eval('a.top-categories__link', anchors =>
    //     anchors.map(anchor => `${anchor.href}?type=json`)
    // ));

    // console.log(categories_man)

    // await page.goto("https://www.jackjones.com/es-es/jjxx", { waitUntil: 'load' });
    // await page.waitForSelector('a.top-categories__link', { visible: true });
    // const categories_woman = await page.$$eval('a.top-categories__link', anchors =>
    //     anchors.map(anchor => `${anchor.href}?type=json`)
    // );

    // console.log(categories_woman)

    // await page.goto("https://www.jackjones.com/es-es/ninos", { waitUntil: 'load' });
    // await page.waitForSelector('a.top-categories__link', { visible: true });
    // const categories_ninos = await page.$$eval('a.top-categories__link', anchors =>
    //     anchors.map(anchor => `${anchor.href}?type=json`)
    // );

    // console.log(categories_man, categories_woman, categories_ninos);

    // fs.writeFileSync("src/shops/jackjones/data/categories.json", JSON.stringify({
    //     woman: categories_woman,
    //     man: categories_man,
    //     ninos: categories_ninos
    // }, null, 2))

    // console.log(categories);

    Object.entries(categories).forEach(async ([key, value]) => {
        value.map(async (category) => {
            const categoryData = await JackJonesSearchUseCase.getCategory(category)
            console.log(categoryData);
            categoryData.mainCategory.forEach(async (category) => {
                await FetchProducts(category, key)
            })
        })
    })




}