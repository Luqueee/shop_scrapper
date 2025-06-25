import { Bershka } from "./src/shops/bershka/bershka"
import mongoose from "mongoose";
import { PullAndBear } from "./src/shops/pull-and-bear/pull-and-bear";
import { Stradivarius } from "./src/shops/stradivarius/stradivarius";
import { Zara } from "./src/shops/zara/zara";
import { Mango } from "./src/shops/mango/mango";
import { Hm } from "./src/shops/hm/hm";
import { JackJones } from "./src/shops/jackjones/jackjones";
import { normalizeAllProducts } from "./src/normalize";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URL) {
    console.error("MONGO_URL environment variable is not set");
    process.exit(1);
}

const MONGO_URI = process.env.MONGO_URL;

async function main() {

    await Bershka()
    await PullAndBear()
    await Stradivarius()
    await Zara()
    await Mango()
    await Hm()
    await JackJones()

    await normalizeAllProducts()

    // exit(0)

}

await mongoose.connect(MONGO_URI, {
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

await main()




