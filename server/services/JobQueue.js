import productModel from "../models/product"
import userModel from "../models/user";

import Tiki from "./Tiki"
import Notify from "./Notify"
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

            if(product.price>newProduct.price){
                const followers = product.followers;
                const idNotifies = await Promise.all(followers.map(async e=>{
                    const user = await userModel.getById(e);
                    return user.token_notify;
                }))
                idNotifies.map(async e=>{
                    const notify = new Notify(e,`Sản phẩm ${product.title} đang giảm giá`,"Mời bạn kiểm tra giá, nếu giá tốt hãy tranh thủ mua ngay nào");
                })
            }
        }
    }
}

module.exports = JobQueue;