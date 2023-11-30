import './pantalla3.css'
import Product from './product'
import Title from './title'

function Pantalla3() {
    let productos = [{name:'Hola',price:25,cant:5},{name:'Hola',price:25,cant:5},{name:'Hola',price:25,cant:5}]

    return (
      <>  
       <Title></Title>
       {

       }
       {productos.map(producto=>{
        return (
            <Product name={producto.name} price={producto.price} cant={producto.cant} />
        )
       })}
      </>
    )
  }

  export default Pantalla3