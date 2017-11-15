import React from 'react';
import logo from '../../images/logo.png';

const Header = (props) => {
  return (<nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#"></a>
        <img className="logo" src={logo} alt="My logo"/>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="active logo-title">
            <div className="col-xs">
              <span className="col-xs-3">&#9475;
              </span>
              <span>Private
              </span>
            </div>
            <div className="col-xs">
							<div className="col-xs-3"></div>
							<div >Bank</div>
						</div>
            <div className="col-xs">
							<div className="col-xs-3"></div>
							<div>Select</div>
						</div>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}

export default Header;
