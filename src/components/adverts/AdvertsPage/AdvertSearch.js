import React from 'react';
import useForm from '../../../hooks/useForm';
import { Button, FormField, RadioField  } from '../../shared';
import TagsAvailable from '../NewAdvertPage/TagsAvailable'

const AdvertSearch =()=>{

    const [name, setName] = React.useState([]);

    const [price, setPrice] = React.useState([]);
    const [tags, setTags] = React.useState([]);

    const handleChange = (e)=>{}

    const handleChangePrice = (e) => {
        setPrice(e.target.value);  
      };

    const handleChangeName = (e) => {
        setName(e.target.value)
      };

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

return (
    // <form className="newAdvertForm" onSubmit={handleSubmit(handleFormSubmit)}>
    <form className="newAdvertForm" onSubmit="">
        <FormField
            type="text"
            name="name"
            label="Nombre"
            className="loginForm-field"
            value={name}
            onChange={handleChangeName}
            autofocus
        />
        {/* <div >
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
        </div> */}
        <FormField
            type="text"
            name="price"
            label="Precio"
            className="loginForm-field"
            value={price}
            onChange={handleChangePrice}
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
        >
            Search
        </Button>
      
    </form>
  );
}
export default AdvertSearch;