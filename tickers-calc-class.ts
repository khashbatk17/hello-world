export class tickerCalcTemplate {
    ticker: string;
    value: number;
    profitLoss: number;
    constructor(
        ticker?: string,
        value?: number,
        profitLoss?: number,
    ){
        this.ticker = ticker ?? '';
        this.value = value ?? 0;
        this.profitLoss = profitLoss ?? 0;
    }
}