import React from 'react';

const Button = ({name = "name",onClick}) => {
    const onButtonClick = () => {
     if(onClick){
      onClick(name);
     }
    }
    return(

      <button onClick={onButtonClick}>{name}</button>
  
    )
    }
    export default Button;
  