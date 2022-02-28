import React from "react";
import { login } from "../actions/auth";
import { Link } from "react-router-dom";


export const LoginPage = () => (
    <>
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
            <Link to="/" className="navbar-brand">
            <i class="fa-brands fa-react"></i> Reactjs Blog
            </Link>
        

            </div>
             
            </nav>

            <div className="container">
         <div className="row justify-content-center">
            <div className="col=12 mt-3">
                <div className="jumbotron ">
                  <h1 className="display-4">React js Kişisel Blog Project</h1>
                  <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum nulla voluptate illo voluptates. Ut eveniet illo, nulla laudantium reiciendis ducimus magni ea quasi quam doloremque velit molestiae vitae nobis, nostrum qui, pariatur exercitationem at ullam? Blanditiis aliquid cum ipsa! Unde soluta dolorum veritatis exercitationem consectetur alias reiciendis animi quos.</p>
                  <h4>google hesabınla giriş yap, hemen yazmaya başla.</h4>
                  <p className="lead">
                  <button className='btn btn-danger btn-lg' onClick={login}> <i class="fa-brands fa-google"></i> google ile giriş</button>
                  </p>
            </div>
         </div>
        </div>
     </div>
 </>
);

export default LoginPage;