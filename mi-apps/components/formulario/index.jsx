import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';

export default class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    onSubmit(values) {
        console.log('onSubmit', values)
    }

    validate(values) {
        const errors = {};
        if (!values.nombre) {
            errors.nombre = "Requerido";
        }
        return errors;
    }

    render() {
        return <Form onSubmit={this.onSubmit}
            validate={this.validate}
            render={({submitError, handleSubmit, reset, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <h2>Simple Default Input</h2>
                    <div>
                        <Field name="nombre">
                            {({input, meta}) => (
                                <div>
                                    <label>Nombre</label>
                                    <input {...input} type="text" placeholder="Ingresar nombre"/>
                                    {(meta.error || meta.submitError) &&
                                    meta.touched && <span>{meta.error || meta.submitError}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            )}
        />
    }
}