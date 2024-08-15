export default function Input({ title, currntVal, onInput, btnNme }) {
    return (
        <div className="input-group">
            <p>
                <label>{title}</label>
                <input type="number" required value={currntVal} onChange={(event) => onInput(btnNme, event.target.value)} />
            </p>
        </div>
    )
}