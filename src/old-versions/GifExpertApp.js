import React, { useState } from 'react'

export const GifExpertApp = () =>  {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const handleAdd = () => {
    setCategories([...categories, 'HunterXHunter']);
    // otra forma de hacerlo
    // setCategories(categories1 => [...categories1, 'HunterXHunter']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>  
      <hr />

      {/* <button onClick={() => {handleAdd()}}>Agregar</button> */}
      <button onClick={ handleAdd }>Agregar</button>

      <ol>
        {
          categories.map( (category) => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}
