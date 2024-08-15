import { calculateInvestmentResults, formatter } from "../util/investment";

export default function InvestmentTable({ investmentInfo }) {

    const investmentResults = calculateInvestmentResults({
        initialInvestment: investmentInfo.initialInvst,
        annualInvestment: investmentInfo.annualInvst,
        expectedReturn: investmentInfo.expectedReturn,
        duration: investmentInfo.duration
    });

    let initialInvestment;
    if (investmentResults.length > 0) {
        initialInvestment = investmentResults[0].valueEndOfYear - investmentResults[0].interest - investmentResults[0].annualInvestment;
    }

    return (
        <table id="result">
            <thead >
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentResults.length > 0 ? (
                    investmentResults.map((eachRow) => {
                        const totalInterest = eachRow.valueEndOfYear - eachRow.annualInvestment * eachRow.year - initialInvestment;
                        const totalAmountInvested = eachRow.valueEndOfYear - totalInterest;
                        return (
                            <tr key={eachRow.year}>
                                <td>{eachRow.year}</td>
                                <td>{formatter.format(eachRow.valueEndOfYear)}</td>
                                <td>{formatter.format(eachRow.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })) : (
                    <tr>
                        <td colSpan="5" className="center">No data available</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}