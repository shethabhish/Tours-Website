// 
import React from "react";
import Customer  from "./Customer";

export class AdminApp extends React.Component{

constructor(props) {
        super(props);
        this.state = {role: "admin"};
  }

render(){
let contents = null;

        switch (this.state.show) {

            case "customer":
                contents = <Customer> </Customer>;
                break;
                case "login":
                contents = <Login> </Login>;
                break;
               

           default:
                contents = <Customer> </Customer>;
        }
return(

<div>
<nav>
<ul>
<li><p className="logo">S.T.A.R. LABS Tours></p></li>
<li><a href="#">Tour Management</a></li>
<li><a href="#">Customer Management</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#">Home</a></li>
<li><a href="#">Logout</a></li>

</ul>
</nav>
{contents}
</div>

);
}
}

export default AdminApp;