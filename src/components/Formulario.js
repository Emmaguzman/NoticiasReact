import React from 'react';
import PropTypes from 'prop-types';

import useSelect from '../hooks/useSelect';

import styles from './Formulario.module.css'

const Formulario = ({ setCategoria }) => {
    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entretainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sport', label: 'Deportes' },
        { value: 'tecnology', label: 'Tecnologia' }
    ]

    //Utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
    //submit al form , pasar categoria a app.js
    const _buscarNoticias = e => {
        e.preventDefault();
        setCategoria(categoria)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={_buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
Formulario.propTypes={
    setCategoria:PropTypes.func.isRequired
}

export default Formulario;