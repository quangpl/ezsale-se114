const productModel = require("../models/product")
const userModel = require("../models/user");
const notifyModel = require("../models/notify");


const Tiki = require("./Tiki");
const Notify = require("./Notify");
class JobQueue {
    async run(){
        const product = await productModel.getProductToCrawl();
        if(product){
          console.log("job")
            const tiki = new Tiki(product.url);
            const newProduct = await tiki.crawl(product.crawl_info.id);
            await productModel.updateHistory({
              _id: product._id,
              updated_at: Date.now(),
              price: newProduct.price,
              discount_rate: newProduct.discount_rate,
              stock_price: newProduct.list_price
            });

            if(product.price!==newProduct.price){
                const followers = product.followers;
                const idNotifies = await Promise.all(followers.map(async e=>{
                    const user = await userModel.getById(e);
                    return user.token_notify;
                }))
                idNotifies.map(async e=>{
                    await notifyModel.add({
                      receiver: e._id,
                      type: product.price > newProduct.price ? "down" : "up",
                      price_change: Math.abs(product.price > newProduct.price),
                      detail: product.title
                    });
                    const notify = new Notify(
                      e.token_notify,
                      `Sản phẩm ${product.title} đang giảm giá`,
                      "Mời bạn kiểm tra giá, nếu giá tốt hãy tranh thủ mua ngay nào"
                    );
                    await notify.send();
                })
            }
        }
    }
}

module.exports = JobQueue;