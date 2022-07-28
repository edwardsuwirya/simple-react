import {Component} from "react";
import PropTypes from "prop-types";

class FormList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: '',
            list: []
        }
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    handleSubmit = () => {
        const newItem2 = {
            id: Math.random(),
            value: this.state.newItem
        }
        this.setState({
            list: [...this.state.list, newItem2],
        })
        this.clearForm();
    }
    clearForm = () => {
        this.setState({
            newItem: ''
        })
    }

    render() {
        return this.props.render({
            newItem: this.state.newItem,
            onChange: this.handleChange,
            onSubmit: this.handleSubmit,
            list: this.state.list
        })
    }
}

FormList.propTypes = {
    render: PropTypes.func
}
export default FormList;
