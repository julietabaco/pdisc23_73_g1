import './product.css'

function Product(props) {
    return (
      <>  
       <div className="producto">
            <div className="imagen">
                <img src="" alt="" />
            </div>
            <div className="detalles">
                <h4>{props.name}</h4>
                <p>{props.price}</p>
            </div>
            <div className="cant">
            <span class="material-symbols-outlined arrow">
                arrow_back_ios
            </span>
            <b>{props.cant}</b>
            <span class="material-symbols-outlined arrow">
                arrow_forward_ios
            </span>
            </div>
       </div>
      </>
    )
  }

  export default Product