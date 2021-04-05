import React from 'react';

const useForm = initialValue => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = event => {
    //Compatibilizamos el valor que devuelve para un checkbox y un input
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setValue(oldValue => ({
      ...oldValue,
      [event.target.name]: value,
    }));
  };

  
  const handleSubmit = afterPreventDefault => {
    // Closure
    return ev => {
      ev.preventDefault();
      afterPreventDefault(ev);
    };
  };
  //   const handleSubmit = onSubmit => ev => {
  //     ev.preventDefault();
  //     onSubmit(ev);
  //   };
 
  return [value, handleChange, handleSubmit];
};

export default useForm;