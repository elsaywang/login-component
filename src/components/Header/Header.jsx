import React from 'react';
import logo from '../../images/logo.png';

const Header = (props) => {
	return (<nav className="navbar navbar-default">
		<div className="container-fluid">
			<div className="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#"></a>
				<img className="logo" src={logo} alt="My logo"/>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active">
						<a href="#">| Private Bank SELECT</a>
					</li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
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
