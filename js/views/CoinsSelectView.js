class CoinsSelectView {

    static build(coins) {
        return `
            <div class="input-group mb-3">
                <select class="custom-select" id="coins">
                    ${coins.map(item => `
                        <option value="${item.price_brl}">${item.name}</option>
                    `).join('')}
                </select>
            </div>
        `;
    }
}