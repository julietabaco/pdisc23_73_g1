import { Link } from 'react-router-dom';
import './pantalla.css';


function Pantalla() {
  return (
    <>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/regular.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        
      <div className="lato">
    
        <header className="header bnrep">
            <div className="busqueda">
                <input type="search" placeholder="Buscar Articulo" />
                <input type="submit" className="material-icons-outlined" value="search" />
            </div>
            <div className="texto">
                <h5>New Article!</h5>
                <h1>Blazer Sunflower Yellow</h1>
                <h3>$40.00</h3>
            </div>

        </header>
        <div className="contenido">
            <div className="row">
                <div className="col-9">
                    <h5>Trends</h5>
                </div>
                <div className="col-3">
                    <h6>Show all</h6>
                </div>
            </div>
            <div className="scroll">
                <ul>
                    <li className="card cimg bnrep">
                        <a href="pantalla2.html">
                            <img src="https://media.istockphoto.com/id/1393067608/photo/expressive-woman-dancing-in-yellow-flying-dress-happy-dark-skinned-dancer-in-waving-fabric.jpg?s=612x612&w=0&k=20&c=47qiEwg7ELyy50G5HQsp3p4EUrl8ilBib-TV2WaFBqs=" alt="" />
                            <div className="txt">
                                <div className="art">Oh my dress!</div>
                                <div className="precio"> $50.00</div>
                            </div> 
                        </a>
                    </li>
                    <li className="card cimg">
                        <Link to="/producto">
                            <img src="https://media.istockphoto.com/id/1393067608/photo/expressive-woman-dancing-in-yellow-flying-dress-happy-dark-skinned-dancer-in-waving-fabric.jpg?s=612x612&w=0&k=20&c=47qiEwg7ELyy50G5HQsp3p4EUrl8ilBib-TV2WaFBqs=" alt="" />
                            <div className="txt">
                                <div className="art">Oh my dress!</div>
                                <div className="precio"> $50.00</div>
                            </div>
                        </Link>
                    </li>
                    <li className="card cimg">
                        <a href="">
                            <img src="https://media.istockphoto.com/id/1393067608/photo/expressive-woman-dancing-in-yellow-flying-dress-happy-dark-skinned-dancer-in-waving-fabric.jpg?s=612x612&w=0&k=20&c=47qiEwg7ELyy50G5HQsp3p4EUrl8ilBib-TV2WaFBqs=" alt="" />
                            <div className="txt">
                                <div className="art">Oh my dress!</div>
                                <div className="precio"> $50.00</div>
                            </div>
                        </a>
                    </li>
                    <li className="card cimg">
                        <a href="">
                            <img src="https://media.istockphoto.com/id/1393067608/photo/expressive-woman-dancing-in-yellow-flying-dress-happy-dark-skinned-dancer-in-waving-fabric.jpg?s=612x612&w=0&k=20&c=47qiEwg7ELyy50G5HQsp3p4EUrl8ilBib-TV2WaFBqs=" alt="" />
                            <div className="txt">
                                <div className="art">Oh my dress!</div>
                                <div className="precio"> $50.00</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="categorias">
                <div className="row">
                    <div className="col-8">Categories</div>
                    <div className="col-4"> Show more</div>
                </div>
                <div className="generos">
                    <div className="mujer">
                        <div className="row">
                            <div className="col-2"><div className="imagen bnrep"></div></div>
                            <div className="col-10"><div className="sexo">WOMAN</div>
                            <div className="cant">564 articles</div></div>
                        </div>
                    </div>
                    <div className="hombre">
                        <div className="row">
                            <div className="col-2"><div className="imagen bnrep"></div></div>
                            <div className="col-10"><div className="sexo">MAN</div>
                            <div className="cant">454 articles</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Pantalla;