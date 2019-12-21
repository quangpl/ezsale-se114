const axios = require("axios");
class Shopee {
    constructor(link){
        this.url = link;
        this.createdBy = createdBy;
    }
    getCrawlInfo(){

    let endStr = str.match(/\i\.\d+\.\d+/);
    const extractInfo = endStr[0].match(/\d+/g)
            this.crawlInfo = {
                id:extractInfo[1],
                shopId:extractInfo[0]
            }
            return this.crawlInfo;
    }

    getData(){
        const res = await axios.get(`https://shopee.vn/api/v2/item/get?itemid=${this.crawlInfo.id}&shopid=${this.crawlInfo.shopId}`)
        const data = res.data.item;
        return {
            image: `https://cf.shopee.vn/file/${data.image}`,
            price:data.price/100000,
            discount_rate: data.show_discount,
            channel:"Shopee",
            url:this.link,
            crawl_info:{
                id: this.crawlInfo.id,
                shopId: this.crawlInfo.shopId
            }
        }
    }
}

module.exports = Shopee;