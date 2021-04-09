import React from 'react';
import useForm from '../../../hooks/useForm';
import { Button, FormField, RadioField  } from '../../shared';


const NewAdvertForm = ({onSubmit}) =>{
    const [advert, handleChange, handleSubmit] = useForm({
        name:'',
        sale:'Venta',
        price:0.0,
        tags:[],
        photo:'',
    });

    const handleFormSubmit = ev => {
        onSubmit(advert);
      };
    const {name,sale,price,tags,photo} = advert;
      console.log(sale)

    return (
        <form className="newAdvertForm" onSubmit={handleSubmit(handleFormSubmit)}>
            <FormField
                type="text"
                name="name"
                label="Nombre del producto"
                className="loginForm-field"
                value={name}
                onChange={handleChange}
                autofocus
            />
            <div >
            <RadioField
                type="radio"
                name="sale"
                label="Compra"
                className="loginForm-field"
                value='Compra'
                checked= {sale ==='Compra'}
                onChange={handleChange}
            />
            <RadioField
                type="radio"
                name="sale"
                label="Venta"
                className="loginForm-field"
                value='Venta'
                checked= {sale ==='Venta'}
                onChange={handleChange}
            />
            </div>
            <FormField
                type="text"
                name="price"
                label="Precio"
                className="loginForm-field"
                value={price}
                onChange={handleChange}
            />
            <Button
                type="submit"
                className="loginForm-submit"
                variant="primary"
                disabled={ !name || !price || tags.lenght>=0}
            >
                Save
            </Button>
          
        </form>
      );

};

export default NewAdvertForm;


