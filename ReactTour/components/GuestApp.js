import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

class GuestApp extends React.Component{
constructor(props) {
        super(props);
        this.state = {role: "guest"};
  }
 
render(){



return(

<div>

<nav>
<ul>
<li><p className="logo">Underwater Tours</p></li>
<li><a href="www.google.com">Coming Tours</a></li>
<li><a href="www.google.com">Login</a></li>
<li><a href="signup.html">Newsletter Signup</a></li>
<li><a href="www.google.com">About Us</a></li>
</ul>
</nav>





</div>

);
}
}

export default GuestApp;
