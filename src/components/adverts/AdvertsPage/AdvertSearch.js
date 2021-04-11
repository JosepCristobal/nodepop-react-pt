import React from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import useForm from '../../../hooks/useForm';
import { Button, FormField, RadioField  } from '../../shared';
import TagsAvailable from '../NewAdvertPage/TagsAvailable'
import AdvertsList from './AdvertsList'
import { Link } from 'react-router-dom';

const AdvertSearch =({adverts})=>{
    
    const EmptyList = () => (
        <div style={{ textAlign: 'center' }}>
          <p>Be the first Ad!</p>
          <Button as={Link} to="/advert" variant="primary">
            Crear Anuncio
          </Button>
        </div>
      );
      
    const [name, setName] = React.useState('');

    const [price, setPrice] = React.useState(0.0);
    const [tags, setTags] = React.useState([]);
    const [sale, setSale] = React.useState('Venta');

    const handleChange = (e)=>{
        
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value);  
      };

    const handleChangeName = (e) => {
        setName(e.target.value)
      };
      const handleChangeCheck = (e) => {
        setSale(e.target.value)
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
    const handleSubmit = ()=>{}

return (
    // <form className="newAdvertForm" onSubmit={handleSubmit(handleFormSubmit)}>
    <div>
    <form className="newAdvertForm" onSubmit={handleSubmit()}>
        <FormField
            type="text"
            name="name"
            label="Nombre"
            className="loginForm-field"
            value={name}
            onChange={handleChangeName}
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
            onChange={handleChangeCheck}
        />
        <RadioField
            type="radio"
            name="sale"
            label="Venta"
            className="loginForm-field"
            value='Venta'
            checked= {sale ==='Venta'}
            onChange={handleChangeCheck}
        />
        <RadioField
            type="radio"
            name="sale"
            label="Todos"
            className="loginForm-field"
            value='Todos'
            checked= {sale ==='Todos'}
            onChange={handleChangeCheck}
        />
        </div>
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
            // type="button"
            className="loginForm-submit"
            variant="primary"
            //onClick = {alert('La Búsqueda está en marcha')}
        >
            Search
        </Button>
      
    </form>
    <div className="advertsPage">
        {adverts.length ? <AdvertsList adverts={adverts}  /> : <EmptyList />}
    </div>
</div>
  );
}
export default AdvertSearch;