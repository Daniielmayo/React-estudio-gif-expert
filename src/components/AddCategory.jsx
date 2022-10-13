import React from 'react'
import { useState } from 'react'
import GifExpertApp from '../GifExpertApp'



const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChage =(evento) =>{
        setInputValue(evento.target.value)
    }    
    
    const onSubmit = (event)=>{
       
        // preventDefault no sirve para que nuestro navegador no se recarge al darle click o enter al input
        event.preventDefault()

        if (inputValue.trim().length <= 0) return;

        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())

        setInputValue('')
    }

  return (
        <form  onSubmit={ onSubmit } >

            <input type="text"
            placeholder='Escribe tu gifs' 
            value={inputValue}
            onChange= {(event) => onInputChage(event)} />
        </form>
  )
}




export default AddCategory