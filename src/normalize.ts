import { ProductModel } from "./db/product.db";


export async function normalizeAllProducts() {
    // const products = await ProductModel.find();

    // console.log(`Encontrados ${products.length} productos. Normalizando...`);

    // await Promise.all(products.map(async (product) => {
    //     // Normaliza el nombre y guarda en name_normalized
    //     product.name_normalized = normalizeText(product.name);
    //     product.save().then(() => {
    //         console.log(`Normalizado ${product.name} (${product.id}) ${++count}/${products.length}`);

    //     });
    // }))

    // await ProductModel.collection.createIndex({ id: 1 });
    await ProductModel.collection.createIndex({ name_normalized: 2 });
    await ProductModel.collection.createIndex({ category: 3 });

    console.log('✅ Todos los productos han sido normalizados.');

}

export function normalizeText(text: string): string {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // elimina acentos
        .toLowerCase(); // pasa a minúsculas
}