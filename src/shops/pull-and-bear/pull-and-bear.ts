import mongoose, { Schema } from "mongoose";
import { ids } from './data/ids.json'
import { SearchPullAndBearUseCase } from "./search-pull-and-bear.use-case";
import { ProductEntity } from "../../db/product.db";


const categories_man = [
    {
        name: 'Colección',
        subcategories: [
            { id: 1030225507, name: 'STWD' },
            { id: 1030164501, name: '-' },
            { id: 1030017537, name: 'Novedades' },
            { id: 1030643986, name: 'Misho x STWD' },
            { id: 1030476899, name: 'Colaboraciones' },
            { id: 1030656600, name: '-' },
            { id: 1030204791, name: 'Camisetas' },
            { id: 1030642469, name: 'Camisetas' },
            { id: 1030204788, name: 'Polos' },
            { id: 1030204712, name: 'Bermudas' },
            { id: 1030204730, name: 'Jeans' },
            { id: 1030204719, name: 'Pantalones' },
            { id: 1030204766, name: 'Camisas' },
            { id: 1030204822, name: 'Sudaderas' },
            {
                id: 1030204837,
                name: 'Cazadoras y chaquetas'
            },
            { id: 1030204710, name: 'Baño' },
            { id: 1030204756, name: 'Punto' },
            { id: 29512, name: 'Básicos' },
            { id: 1010131046, name: 'Promociones' },
            { id: 1030656102, name: '-' },
            { id: 1030574255, name: 'Zapatos' },
            { id: 1030465396, name: 'Bolsos | Mochilas' },
            { id: 1030204584, name: 'Accesorios' },
            { id: 1030656103, name: '-' },
            { id: 1030321534, name: 'Total look' },
            { id: 1030124058, name: 'Festivales' },
            {
                id: 1030643985,
                name: 'Crea tu pack hasta -10%'
            },
            { id: 1030661596, name: '-' },
            { id: 1030187541, name: '&(AND)' },
            { id: 1030617339, name: 'Often' }
        ]
    },
    {
        name: 'Tendencias',
        subcategories: [
            { id: 1030204845, name: 'Borreguillo' },
            { id: 1030204831, name: 'Abrigos' },
            { id: 1030204830, name: 'Bombers' },
            { id: 1030352563, name: 'Wide leg' },
            { id: 1030204740, name: 'Rotos' },
            { id: 1030299061, name: 'Chándal' },
            { id: 1030567709, name: 'Zapatillas retro' },
            {
                id: 1030564197,
                name: 'Zapatillas blancas'
            },
            { id: 1030642966, name: 'Zapatillas skate' },
            { id: 1030243084, name: 'Piel' },
            { id: 1030207042, name: 'Botas y botines' },
            { id: 1030618842, name: 'Botas negras' },
            { id: 1030623410, name: 'Bolsos negros' },
            {
                id: 1030623409,
                name: 'Bolsos efecto piel'
            },
            { id: 1030617337, name: 'Tendencias otoño' },
            { id: 1030378186, name: 'Anime collection' },
            { id: 1030267501, name: 'Lino' },
            { id: 1030113507, name: 'Looks de playa' },
            {
                id: 1030569698,
                name: 'Crea tu pack hasta -10%'
            },
            { id: 1030526056, name: 'One Piece' },
            { id: 1030536046, name: 'Personalización' },
            { id: 1030616906, name: '↳ Novedades' },
            { id: 1030662596, name: 'Cola de caja' }
        ]
    },
    {
        name: 'Destacados',
        subcategories: [
            {
                id: 1030390681,
                name: 'Preguntas frecuentes'
            },
            { id: 1030390682, name: 'Cómo devolver' },
            { id: 1030650092, name: 'Tarjeta regalo' },
            { id: 1030259514, name: 'Tiendas' },
            { id: 1030534047, name: 'PB Shuffle' },
            {
                id: 1030303023,
                name: '#pullandbearcommunity'
            }
        ]
    }
]



const categories_woman = [
    {
        name: 'Colección',
        subcategories: [
            { id: 1030017536, name: 'Novedades' },
            { id: 1030039502, name: 'Dia de la Madre' },
            {
                id: 1030617837,
                name: 'Tendencias primavera'
            },
            { id: 1030164502, name: '-' },
            { id: 1030204616, name: 'Vestidos' },
            { id: 1030204631, name: 'Camisetas' },
            { id: 1030639987, name: 'Camisetas' },
            { id: 1030207187, name: 'Tops y bodies' },
            { id: 1030204707, name: 'Baño' },
            { id: 1030204692, name: 'Jeans' },
            { id: 1030207189, name: 'Pantalones' },
            { id: 1030204678, name: 'Faldas' },
            { id: 1030204685, name: 'Shorts y bermudas' },
            {
                id: 1030204607,
                name: 'Cazadoras y chaquetas'
            },
            { id: 1030204645, name: 'Camisas y blusas' },
            { id: 1030204660, name: 'Sudaderas' },
            {
                id: 1030204669,
                name: 'Jerséis y cárdigan'
            },
            { id: 1030319538, name: 'Chalecos' },
            { id: 1030441307, name: 'Blazers y trajes' },
            { id: 1010131045, name: 'Promociones' },
            { id: 1030656100, name: '-' },
            { id: 1030575247, name: 'Zapatos' },
            { id: 1030207021, name: 'Bolsos' },
            { id: 1030204581, name: 'Accesorios' },
            { id: 1030614833, name: 'Bisutería' },
            { id: 1030656599, name: '-' },
            { id: 1030275496, name: 'Total look' },
            {
                id: 1030643477,
                name: 'Crea tu pack hasta -10%'
            },
            { id: 1030656101, name: '-' },
            { id: 1030652134, name: 'STWD' },
            { id: 1030424321, name: '&(AND)' },
            { id: 1030118503, name: 'Pacific Republic' },
            { id: 1030617839, name: 'Often' }
        ]
    },
    {
        name: 'Tendencias',
        subcategories: [
            { id: 1030324003, name: 'Oversize' },
            { id: 1030204644, name: 'Colaboraciones' },
            { id: 1030204635, name: 'Sin mangas' },
            { id: 1030299058, name: 'Chándal' },
            { id: 1030415334, name: 'Blancos' },
            {
                id: 1030569695,
                name: 'Vestidos de verano'
            },
            { id: 1030538549, name: 'Doble Faz' },
            { id: 1030441312, name: 'Efecto pelo' },
            { id: 1030475974, name: 'Cargo' },
            { id: 1030618840, name: 'Botas negras' },
            { id: 1030618841, name: 'Botas chelsea' },
            { id: 1030243081, name: 'Piel' },
            { id: 1030617335, name: 'Botas calcetín' },
            { id: 1030618839, name: 'Botas planas' },
            { id: 1030585833, name: 'Animal Print' },
            { id: 1030384681, name: 'Botas cowboy' },
            { id: 1030571198, name: 'Sandalias doradas' },
            { id: 1030569693, name: 'Zapatillas retro' },
            { id: 1030605844, name: 'Kitten heels' },
            { id: 1030565700, name: 'Bolsos negros' },
            { id: 1030207023, name: 'Mochilas' },
            { id: 1030207029, name: 'Riñoneras' },
            { id: 1030189501, name: 'Animal print' },
            { id: 1030275496, name: 'Total look' },
            { id: 1030565699, name: 'Bolsos blancos' },
            { id: 1030424317, name: 'Crochet' },
            { id: 1030043008, name: 'Holiday mood' },
            { id: 1030166078, name: 'Fiesta' },
            { id: 1030617334, name: 'Pelo' },
            { id: 1030642967, name: 'Efecto ante' },
            { id: 1030113506, name: 'Looks de playa' },
            { id: 1030644464, name: 'Fiesta y eventos' },
            {
                id: 1030569697,
                name: 'Crea tu pack hasta -10%'
            },
            { id: 1030064502, name: 'Exclusivo online' },
            { id: 1030579743, name: 'Leopardo' },
            {
                id: 1030418808,
                name: 'Artistic Collection'
            },
            { id: 1030536045, name: 'Personalización' },
            { id: 1030616405, name: '↳ Novedades' },
            { id: 1030662596, name: 'Cola de caja' }
        ]
    },
    {
        name: 'Destacados',
        subcategories: [
            {
                id: 1030390679,
                name: 'Preguntas frecuentes'
            },
            { id: 1030390680, name: 'Cómo devolver' },
            { id: 1030527549, name: 'Tarjeta regalo' },
            { id: 1030259513, name: 'Tiendas' },
            { id: 1030534046, name: 'PB Shuffle' },
            {
                id: 1030303022,
                name: '#pullandbearcommunity'
            }
        ]
    }
]

async function RunCategories(categories: typeof categories_man, gender: string) {
    categories.map((category) => {
        category.subcategories.map(async (subcategory) => {
            const products = await SearchPullAndBearUseCase.getProducts(subcategory.id);

            console.log(products.results.length, category.name);
            products.results.map(async (product) => {
                // console.log("Product", product)
                if (!product) return

                if (!product.id || !product.name || !product.price || !product.product_link || !product.brand || !product.image) {
                    // console.log("Product missing data", product)
                    return
                }

                await new ProductEntity({
                    id: product.id.toString(),
                    name: product.name,
                    price: product.price,
                    product_link: product.product_link,
                    gender,
                    colors: product.colors,

                    brand: product.brand,
                    category: category.name,
                    subcategory: subcategory.name,
                    image: product.image,
                    images: product.images,
                    shop: "pull-and-bear",
                }).save().then(() => {
                    console.log("Product saved", product.name, `Chunk: ${products.results.length}`);
                }).catch((err) => {
                    // console.error("Error saving product", err);
                    return;
                });
            }
            );
        }
        );
    })
}



export async function PullAndBear() {
    try {

        await RunCategories(categories_man, "man")
        await RunCategories(categories_woman, "woman")


    } catch (error) {
        console.error("Error in PullAndBear", error);
    }

}