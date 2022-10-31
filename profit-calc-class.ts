export class profitTemplate {
    marketValue: number;
    dayProfitLoss: number;
    totalInvestment: number;
    unrealizedProfit: number;

    constructor(
        marketValue?: number,
        dayProfitLoss?: number,
        totalInvestment?: number,
        unrealizedProfit?: number,

    ){
        this.marketValue = marketValue ?? 0;
        this.dayProfitLoss = dayProfitLoss ?? 0;
        this.totalInvestment = totalInvestment ?? 0;
        this.unrealizedProfit = unrealizedProfit ?? 0;
    }
}