import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';

import style from './style.scss';

export const onlyLetters = (value) => {
    const regx = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
    return regx.test(value);
};

export const minLetters = (value, min) => {
    let pass = false;
    if (value && min) {
        if (value.length >= min) {
            pass = true;
        }
    }
    return pass;
};

export default class Contactenos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: {
                nombre: (props.datos) ? props.datos.nombre : 'Monchito',
                apellidos: (props.datos) ? props.datos.apellidos : 'Garcia',
            }
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    onSubmit() {
        console.log('SUBMIT!');
    }

    validate(values) {
        const errors = {};
        if (!values.nombre) {
            errors.nombre = "Nombre es Requerido.";
        }
        if (!onlyLetters(values.nombre)) {
            errors.nombre = "El nombre solo debe contener letras.";
        }
        if (!minLetters(values.nombre, 3)) {
            errors.nombre = "Debe ser minimo 3 caracteres.";
        }
        if (!values.apellidos) {
            errors.apellidos = "Apellidos es Requerido.";
        }
        if (!onlyLetters(values.apellidos)) {
            errors.apellidos = "Los apellidos solo deben contener letras.";
        }
        if (!minLetters(values.apellidos, 10)) {
            errors.apellidos = "Debe ser minimo 10 caracteres.";
        }
        return errors;
    }

    render() {
        return <div className={style.componenteContactenos}>
            <Form
                /*initialValues={datos}*/
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={({handleSubmit, pristine, invalid}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name="nombre">
                                {({input, meta}) => (
                                    <div>
                                        <label>Nombre Completo</label>
                                        <input {...input} type="text" placeholder="Ingresar nombre" maxLength="2"/>
                                        {(meta.error || meta.submitError) &&
                                        meta.touched && <span>{meta.error || meta.submitError}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <Field name="apellidos">
                                {({input, meta}) => (
                                    <div>
                                        <label>Apellidos Completos</label>
                                        <input {...input} type="text" placeholder="Ingresar apellidos"/>
                                        {(meta.error || meta.submitError) &&
                                        meta.touched && <span>{meta.error || meta.submitError}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <Field name="comentarios">
                                {({input, meta}) => (
                                    <div>
                                        <label>Comentarios</label>
                                        {/*<input {...input} type="text" placeholder="Ingresar apellidos"/>*/}
                                        <textarea {...input} rows={10}/>
                                        {(meta.error || meta.submitError) &&
                                        meta.touched && <span>{meta.error || meta.submitError}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )}
            />
        </div>
    }
}