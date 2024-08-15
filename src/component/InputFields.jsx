import Input from "./Input";

export default function InputFields({ investmentInfo, onInput }) {
    return (
        <section id="user-input">
            <Input title="INITIAL INVESTMENT" currntVal={investmentInfo.initialInvst} onInput={onInput} btnNme="initialInvst" />
            <Input title="ANNUAL INVESTMENT" currntVal={investmentInfo.annualInvst} onInput={onInput} btnNme="annualInvst" />
            <Input title="EXPECTED RETURN" currntVal={investmentInfo.expectedReturn} onInput={onInput} btnNme="expectedReturn" />
            <Input title="DURATION" currntVal={investmentInfo.duration} onInput={onInput} btnNme="duration" />
        </section>
    )
}

