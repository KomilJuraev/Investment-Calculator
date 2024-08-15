import { useState } from "react";

import InputFields from "./component/InputFields"
import InvestmentTable from "./component/InvestmentTable"

function App() {
  const [investmentValues, setInvestmentValues] = useState({
    initialInvst: 0,
    annualInvst: 0,
    expectedReturn: 0,
    duration: 0
  })

  function handleChange(fieldName, value) {
    setInvestmentValues((prevValues) => ({
      ...prevValues,
      [fieldName]: +value
    }));
  }

  return (
    <>
      <InputFields
        investmentInfo={investmentValues}
        onInput={handleChange}
      />
      <InvestmentTable
        investmentInfo={investmentValues}
      />
    </>
  )
}

export default App
