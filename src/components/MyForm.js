import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }
    }

    render() {
        return (
            <form className="add-support-staff-form">
                <input name="name" type="text" value={this.state.name} onChange={this.onFieldChange('name').bind(this)} />
            </form>
        )
    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({ [fieldName]: event.target.value });
        }
    }
}