const axios = require("axios");
class Tiki {
    constructor(link){
        this.url = link;
    }
    getCrawlInfo(){
        let endStr = this.url.match(/\-p([0-9]+.html)/);
        const id = endStr[0].match(/\d+/g);
        this.crawlInfo = {
                id: parseInt(id),
        }
        return this.crawlInfo;
    }

    async getData(){
        const res = await axios.get(`https://tiki.vn/api/v2/products/${this.crawlInfo.id}`)
        const data = res.data;
        return {
          image: data.thumbnail_url,
          price: data.price,
          discount_rate: data.discount_rate,
          channel: "Tiki",
          url: this.url,
          crawl_info: {
            id: this.crawlInfo.id
          },
          list_price: data.list_price,
          name: data.name
        };
    }

     async crawl(id){
        const res = await axios.get(`https://tiki.vn/api/v2/products/${id}`)
        const data = res.data;
        return {
          image: data.thumbnail_url,
          price: data.price,
          discount_rate: data.discount_rate,
          channel: "Tiki",
          url: this.url,
          crawl_info: {
            id: this.crawlInfo.id
          },
          list_price: data.list_price,
          name: data.name
        };
    }
}

module.exports = Tiki;
