import './InputText.css'

function InputText(props) {
    const {id, label, type, value, onChange} = props;
    return (
        <label className='input-text'>
            <span>{label}</span>
            <input type={type ? type : 'text'} name='name' value={value}
                   onChange={e => onChange(id, e.target.value)}/>
        </label>
    )
}

export default InputText;
