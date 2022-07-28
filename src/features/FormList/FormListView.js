import FormContainer from "../../shared/components/FormContainer/FormContainer";
import List from "../../shared/components/List/List";
import PropTypes from "prop-types";
import InputText from "../../shared/components/InputText/InputText";
import SubmitButton from "../../shared/components/SubmitButton/SubmitButton";

function FormListView(props) {
    const {newItem, onChange, onSubmit, list} = props
    return (
        <>
            <FormContainer title="FormContainer">
                <InputText id="newItem" label="Inputan" value={newItem} onChange={onChange}/>
                <SubmitButton label="Tambah" onSubmit={onSubmit}/>
            </FormContainer>
            <List items={list}/>
        </>
    )
}

FormListView.propTypes = {
    newItem: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
    }))

}
export default FormListView
