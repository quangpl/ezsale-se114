const axios = require("axios");
class Tiki {
    constructor(link){
        this.url = link;
        this.createdBy = createdBy;
    }
    getCrawlInfo(){
        let endStr = this.link.match(/\-p([0-9]+.html)/);
        const id = endStr[0].match(/\d+/g);
        this.crawlInfo = {
                id: parseInt(id),
        }
        return this.crawlInfo;
    }

    getData(){
        const res = await axios.get(`https://tiki.vn/api/v2/products/${this.crawlInfo.id}`)
        const data = res.data;
        return {
            image: data.thumbnail_url,
            price:data.price,
            discount_rate: data.discount_rate,
            channel:"Tiki",
            url:this.link,
            crawl_info:{
                id: this.crawlInfo.id
            }
        }
    }
}

module.exports = Tiki;
