
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return (
      <>  
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <header className="Head">
        
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
        
            <h3>Blue Jacket</h3>
        </header>
      </>
    )
  }

  export default Header