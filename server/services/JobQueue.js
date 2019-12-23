import productModel from "../models/product"
import Tiki from "./Tiki"

class JobQueue {
    async run(){
        const product = await productModel.getProductToCrawl();
        if(product){
            const tiki = new Tiki(product.url);
            const newProduct = await tiki.crawl(product.crawl_info.id);
            await productModel.updateHistory({
              _id: product._id,
              updated_at: Date.now(),
              price: newProduct.price,
              discount_rate: newProduct.discount_rate,
              stock_price: newProduct.list_price
            });
        }
    }
}

module.exports = JobQueue;