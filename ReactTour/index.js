import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import GuestApp  from "./components/GuestApp"
import AdminApp  from "./components/AdminApp"
import  CustomerApp  from "./components/CustomerApp"



class App extends React.Component {
constructor(props) {
        super(props);
        this.state = {role: "guest",show:"GuestApp"};
  }

render () {

let contents = null;

        switch (this.state.role) {

            case "guest":
                contents = <GuestApp> </GuestApp>;
                break;
            case "customer":
                contents = <CustomerApp> </CustomerApp>;
                break;
            case "admin":
                contents = <AdminApp> </AdminApp>;
                break;
            default:
                contents = <GuestApp> </GuestApp>;
        }

return (

<div>
<nav>
<ul>
<li><p className="logo">S.T.A.R. LABS Tours</p></li>
<li><a href="#">Coming Tours</a></li>
<li><a href="../Login.html">Login</a></li>
<li><a href="#">Newsletter Signup</a></li>
<li><a href="../about.html">About Us</a></li>
</ul>
</nav>
   
{contents}

    

  </div>

);
}
}

ReactDOM.render(
   <App />,
   document.getElementById("root")
);
