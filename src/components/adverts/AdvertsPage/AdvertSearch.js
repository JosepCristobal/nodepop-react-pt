import React from 'react';
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
    const [price, setPrice] = React.useState(0);
    const [tags, setTags] = React.useState([]);
    const [sale, setSale] = React.useState('Todos');
    const [filterR, setFilterR]= React.useState({

    })
    const handleChangePrice = (e) => {
        setPrice(e.target.value); 
        //setFilterR(()=>resultFilter())
      };

    const handleChangeName = (e) => {
        setName(e.target.value)
        //setFilterR(()=>resultFilter())
      };
      const handleChangeCheck = (e) => {
        setSale(e.target.value)
        //setFilterR(()=>resultFilter())
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
        //setFilterR(()=>resultFilter())     
    }
    const handleFormSubmit = (ev) => {
      ev.preventDefault();
        const resultReturn = {tags: tags.selectedOptions}
        const sales = {sale: sale === 'Venta' ? true:false};
        const ventaCompra = {todos: sale === 'Todos' ? true:false};
        const nombre = {name:name};
        const importeD = {price:price}
        const filterAdvert = Object.assign(nombre,resultReturn,sales,ventaCompra,importeD)
       
      };
      const resultFilter = (e)=>{
        e.preventDefault();
        const resultReturn = {tags: tags.selectedOptions}
        const sales = {sale: sale === 'Venta' ? true:false};
        const ventaCompra = {todos: sale === 'Todos' ? true:false};
        const nombre = {name:name};
        const importeD = {price:price}
        const filterAdvert = Object.assign(nombre,resultReturn,sales,ventaCompra,importeD)
      }

      const datoEvalua= name;
      const resultReturn =  tags.selectedOptions;
      const sales = sale === 'Venta' ? true:false;
      const ventaCompra = sale === 'Todos' ? true:false;
      const nombre = name;
      const importeD = price
    
    
    const items = adverts.filter((data)=>{
        console.log(`Filto Seleccionados datoEvalua: ${datoEvalua}`)
        console.log(`Filto Seleccionados sale: ${sale}`)
        console.log(`Filto Seleccionados price: ${price}`)
        console.log(`Filto Seleccionados tags: ${tags.selectedOptions}`)
        const sales = {sale: sale === 'Venta' ? true:false};
        

        if(datoEvalua === "" && sale==="Todos" && price === 0 && tags.selectedOptions == undefined ){
          return data
        }
        else if (datoEvalua !== "" && price !== 0 ){
          return data.name.toLowerCase().includes(datoEvalua.toLowerCase()) && 
                data.price == price;
        
        }
        
       

       // if(datoEvalua === "" && sale==="Todos" && price === 0 && tags.selectedOptions == undefined ){
        //   return data
        // }
        // else if(
        //   datoEvalua === ""?
        //   data.name.toLowerCase().includes(datoEvalua.toLowerCase()
        // ) ){
        //   return data
        // }

    });   
   

return (

    <div>
    <form className="newAdvertForm" onSubmit={handleFormSubmit}>
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
            type="submit"
            className="loginForm-submit"
            variant="primary"
           
        >
            Search
        </Button>
        <Button
            className="loginForm-submit"
            variant="primary"
            onClick = {resultFilter}
            >
            Búsqueda controlada    
        </Button>

    </form>
    <div className="advertsPage">
        {/* {adverts.length ? <AdvertsList adverts={adverts} filters={filterR} /> : <EmptyList />} */}
        {adverts.length ? <AdvertsList  items={items}/> : <EmptyList />}
    </div>
</div>
  );
}
export default AdvertSearch;