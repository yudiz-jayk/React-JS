import React from 'react';
// import HeroImage from '../images/Group 77.png'
 
function Product({id,image,title,description,alt}) {
  console.log({id,image,title,description,alt});
  
    return (
        
        <div className='product'>
          <img src={image} alt={alt}/> 
          {description && <p>{description}</p>}
        </div>
    );
}

export default Product;