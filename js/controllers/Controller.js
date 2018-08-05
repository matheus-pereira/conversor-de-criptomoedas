class Controller {

    constructor() {
        this.coins = {};

        let divTable = document.querySelector('#coinsTable');
        let selectCoins = document.querySelector('#selectCoins');
        let service = new CoinmarketcapService();

        service.list()
            .then((data) => {
                divTable.innerHTML = CoinsTableView.build(data);
                selectCoins.innerHTML = CoinsSelectView.build(data);
                this.input = document.querySelector('#inputValue');
                this.select = document.querySelector('#coins');
                this.result = document.querySelector('#result')
            })
            .catch((error) => console.log(error))
    }

    converter(event) {
        event.preventDefault();
        this.result.innerHTML = parseInt(this.input.value) / parseFloat(this.select.value);
    }

}