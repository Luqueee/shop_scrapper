import { SearchBershkaUseCase } from "./src/shops/bershka/search-bershka.use-case"
import { Bershka } from "./src/shops/bershka/bershka"
import mongoose, { Schema } from "mongoose";
import { exit } from "process";
import { PullAndBear } from "./src/shops/pull-and-bear/pull-and-bear";
import { Stradivarius } from "./src/shops/stradivarius/stradivarius";
import { writeFileSync } from "fs";
import { Zara } from "./src/shops/zara/zara";
import { Mango } from "./src/shops/mango/mango";
import { Hm } from "./src/shops/hm/hm";
import { JackJones } from "./src/shops/jackjones/jackjones";
import { normalizeAllProducts } from "./src/normalize";





const MONGO_URI = "mongodb+srv://luqueee2007:FLbY1QfvH7aaz5sO@cluster0.2dk8kke.mongodb.net/haul?retryWrites=true&w=majority";

async function main() {

    // await Bershka()
    // await PullAndBear()
    // await Stradivarius()
    // await Zara()
    await Mango()
    // await Hm()
    // await JackJones()

    // await normalizeAllProducts()

    // exit(0)

}

await mongoose.connect(MONGO_URI, {
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

await main()




