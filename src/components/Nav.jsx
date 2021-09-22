import React from "react";
import { Link  } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
            <a className="navbar-brand" target="_blank" href="https://www.techmahindra.com/en-in/business-process-services/"><img src="http://52.42.196.59:4000/ReactImages/logo.png"/></a>
                {/* <a className="navbar-brand" target="_blank" href="https://www.techmahindra.com/en-in/business-process-services/"><img style={{height:"60px",width:"auto"}}src="http://52.42.196.59:4000/ReactImages/autoshubLogo2.png"/></a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/test" className="nav-link">List</Link></li>
                        <li className="nav-item"><Link to="/chart" className="nav-link">Chart</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link">Page 3</Link></li>

                        </ul>
                  
                      
                </div>
            </div>
            {/* <Route path="/admin" component={AdminNav} /> */}
        </nav>
    </>
  );
}

export default Nav;
