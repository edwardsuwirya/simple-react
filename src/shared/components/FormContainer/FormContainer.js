import './FormContainer.css'

function FormContainer(props) {
    const {children, title} = props
    return (
        <div className="form-container">
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default FormContainer;
