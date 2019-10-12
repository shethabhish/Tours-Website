
import React from "react";


class CustomerApp extends React.Component{

constructor(props) {
        super(props);
        this.state = {role: "customer"};
  }

render(){
     
        return(
        <div>
    <nav>
    <ul>
    <li><p className="logo">Underwater Tour</p></li>
    <li><a href="#">Coming Tours</a></li>
    <li><a href="#">My Tours</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Login</a></li>
    </ul>
    </nav>
    

    </div>

);
}
}

export default CustomerApp;
