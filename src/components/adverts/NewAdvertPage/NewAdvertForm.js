import React from 'react';
import useForm from '../../../hooks/useForm';
import { Button, FormField, RadioField  } from '../../shared';
import TagsAvailable from './TagsAvailable'


const NewAdvertForm = ({onSubmit}) =>{
    const [advert, handleChange, handleSubmit] = useForm({
        name:'',
        sale:'Venta',
        price:0.0,
    });
    const [tags, setTags] = React.useState([]);
    
   const handleTagChange = (e) => {
        let options = e.target.options;
        let selectedOptions = [];

        for(let i = 0; i < options.length; i++) {
            if( options[i].selected ) {
                selectedOptions.push(options[i].value);
            }
        }
        setTags(
            oldValue => ({
                ...oldValue,
                selectedOptions,
              }));      
    }

    
    const handleFormSubmit = ev => {
        const resultReturn = {tags: tags.selectedOptions}
        const sales = {sale: advert.sale === 'Venta' ? true:false};
        const returnedTarget = Object.assign(advert,resultReturn,sales)
        console.log(returnedTarget)
        onSubmit(returnedTarget);
      };
    const {name,sale,price} = advert;

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
            <TagsAvailable
                labels="Clasificación de anuncios"
                selected ={[tags]}
                onChange={handleTagChange}
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


