import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        
        <h1 id="Encabezado_productos">Ultimos Productos</h1>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
               <div className='card p-3 rounded'>
               <img className='card-img-top mx-auto' src='./images/nutra_gold.jpeg' alt="Nutra gold"></img>
               </div>
            </div>

        </div>
        <section/>
        



    </Fragment>
  )
}

export default Home