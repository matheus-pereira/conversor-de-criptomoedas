class CoinsTableView {

    static build(coins) {
        return `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Símbolo</th>
                        <th scope="col">R$</th>
                        <th scope="col">US$</th>
                    </tr>
                </thead>
                <tbody>
                    ${coins.map(item => `
                            <tr>
                                <td>${item.rank}</td>
                                <td>${item.name}</td>
                                <td>${item.symbol}</td>
                                <td>${item.price_brl}</td>
                                <td>${item.price_usd}</td>
                            </tr>
                        `
                    ).join('')}
                </tbody>
            </table>
        `;
    }

}