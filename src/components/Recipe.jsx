import React from 'react'

const Recipe = ({title, image, about, tag, label}) => {
  return (
    <div className='card recipe'>
      <h3 className='recipe-title'>{title}</h3>
      <a href={tag}><img className='image-recipe' src={image} alt="food pic" /></a>
      <div className='label'>{label.map((item)=>(
        <span>{item}</span>
      ))}</div>
      <ul className='recipe-ingredient'>
      {about.map((ingredient)=>(
        <li>{ingredient}</li>
      ))}
      </ul>
    </div>
  )
}

export default Recipe
