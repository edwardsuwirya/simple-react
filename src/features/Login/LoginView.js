import FormContainer from "../../shared/components/FormContainer/FormContainer";
import InputText from "../../shared/components/InputText/InputText";
import SubmitButton from "../../shared/components/SubmitButton/SubmitButton";

function LoginView() {
    return (
        <FormContainer title="Login">
            <InputText id="userName" label="User Name" value={''} onChange={() => {
            }}/>
            <InputText id="userPassword" type={'password'} label="User Password" value={''} onChange={() => {
            }}/>
            <SubmitButton label={"Login"} onSubmit={() => {
            }}/>
        </FormContainer>
    )
}

export default LoginView
