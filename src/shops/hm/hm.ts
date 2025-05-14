import puppeteer from 'puppeteer';
import categories from './data/categories.json'
import { BASE_URL_HM, HmSearchUseCase } from './search-hm.use-case';
import { ProductEntity } from '../../db/product.db';

const browser = await puppeteer.launch({
   headless: false,
});

async function FetchProducts(category: {
   name: string;
   subcategories: {
      name: string;
      link: string;
   }[];
}, gender: string, subgender: string) {

   return (await Promise.all(category.subcategories.map(async (subcategory) => {
      const page = await browser.newPage();
      await page.goto(subcategory.link);
      const elements = await page.$$eval('.e759aa', (nodes) => nodes.map((node) => ({
         text: node.textContent?.trim() || '',
         link: (node as HTMLAnchorElement).href,
      }))
      );
      const ids = elements.reduce((acc: string[], element) => {
         const url = element.link.split('.');
         const id = url[url.length - 2];
         if (id && !acc.includes(id)) {
            acc.push(id);
         }
         return acc;
      }, []);
      // console.log(ids);
      const products = await HmSearchUseCase.getProduct(ids.join("|"))
      // console.log(res);

      return products.flatMap((product) => {

         const restProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            product_link: product.product_link,
            image: product.image,
            images: product.images,
            colors: product.colors,
            brand: product.brand,
            category: category.name,
            subcategory: subcategory.name,
            shop: "h&m",
            gender,
            subgender
         }

         // console.log(restProduct);

         return restProduct;
      });

      // ids.forEach(async (id) => {
      //    const res = await HmSearchUseCase.getProduct(id)
      //    console.log(res);
      // })

   }))).flat();

}

export async function Hm() {

   const formattedCategories = categories.map((category) => {
      return {
         name: category.departmentName,
         subcategories: category.links.map((subcategory) => {
            return {
               name: subcategory.title,
               link: `${BASE_URL_HM}${subcategory.path}`,
            }
         })
      }
   })

   // console.log(formattedCategories);

   console.log("Starting H&M scraper...");
   let count = 0;
   try {

      const products = [
         ...await FetchProducts(formattedCategories[0], "woman", "woman"),
         ...await FetchProducts(formattedCategories[1], "woman", "woman"),
         ...await FetchProducts(formattedCategories[2], "unisex", "kids"),
         ...await FetchProducts(formattedCategories[3], "man", "kids-boys"),
         ...await FetchProducts(formattedCategories[4], "woman", "kids-girls"),
         ...await FetchProducts(formattedCategories[5], "unisex", "kids-shop-by-product"),
         ...await FetchProducts(formattedCategories[6], "woman", "baby-girls"),
         ...await FetchProducts(formattedCategories[7], "man", "baby-boys"),
         ...await FetchProducts(formattedCategories[8], "unisex", "baby-shop-by-product"),
         ...await FetchProducts(formattedCategories[10], "man", "man"),





      ]

      products.forEach(async (product) => {
         const productEntity = new ProductEntity(product);
         await productEntity.save()
            .then(() => {
               console.log(`Saved product ${count}-${products.length - 1}:`, product.name);
            })
            .catch((err) => {

               if (err.code === 11000) {
                  // console.log(`Product ${product.name} already exists`);
                  return
               }

               console.error("Error saving product", err);

            }).finally(() => {
               count++;
            });
      }
      )


   } catch (error) {
      console.error("Error in H&M scraper:", error);
   }


   // await HmSearchUseCase.getProduct("1269168001,1277461001");
}