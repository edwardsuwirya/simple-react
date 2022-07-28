import './SubmitButton.css';

function SubmitButton(props) {
    const {label, onSubmit} = props;
    return (
        <button type="submit" value='submit' onClick={onSubmit}>{label}</button>
    )
}

export default SubmitButton
