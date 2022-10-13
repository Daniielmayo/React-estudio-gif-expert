
import { useState } from "react"
import AddCategory from './components/AddCategory'
import {GifGrid} from './components/GifGrid'


const GifExpertApp = () => {

    const [categories, setCategories] = useState (['One Punch'])
    
    const onAddCategory = (newCategory)=>{
        
      if (categories.includes(newCategory))  return;    
      

        // de esta manera agregarmos un nuevo elemento a un array ya existente
        // setCategories([...categories,newCategory])

        // de esta manera el elemnto que se agrege va a quedar al inicio
        setCategories([newCategory, ...categories])

    }


  return (
    <>
      <h1>GifExpertApp vamos a crar un app de gif</h1>

     
 
      <AddCategory 
      onNewCategory={( value) => onAddCategory(value)}/>
    
        {
            categories.map((category) => (
            <GifGrid
             key={category} 
             category={category}
              />
            
            ))
        }
   

    </>
  )
}

export default GifExpertApp