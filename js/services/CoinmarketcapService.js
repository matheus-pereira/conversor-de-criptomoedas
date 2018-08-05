class CoinmarketcapService {

    constructor() {
        this.http = new HttpService();
        this.baseUrl = 'https://api.coinmarketcap.com';
    }

    list() {
        return new Promise((resolve, reject) => {
            this.http.request('GET', `${this.baseUrl}/v1/ticker/?convert=BRL&limit=20`)
                .then((data) => {
                    resolve(JSON.parse(data));
                })
                .catch((error) => reject(error))
        })
    }

}