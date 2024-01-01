import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero'
import Product from './components/Products';
import {productData} from './database';

function App() {

  const productJsx= productData.map(ele => {
    return <Product
     key={ele.id} 
     {...ele}
     />
  })

 

  return (
    <div>
      <Header />
      <Hero/>

      {/* <h1 className='productHeader'>Product Lists</h1> */}

      <section className='productList'>   
        {
          productJsx
        }
       </section>
    </div>
  );
}

export default App;