import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import GuestApp  from "./components/GuestApp"
import AdminApp  from "./components/AdminApp"
import  CustomerApp  from "./components/CustomerApp"
import img from "./multiverse.jpg";



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

    {contents}

    <img src = {img} width={600} height={400} />
    <p>The S.T.A.R Labs tours is a rescently established agency. But we take ypu to he places where other tours cannot take you.
			Yess, you guessed it right. We take you to the multiverse. Ever wondered going to another earth and maybe meet your doppleganger??
			At S.T.A.R Labs tour we make it possible. We take you to another earth where you can meet your doppleganger. Doesn't it sound cool and exciting meeting yourself in another universe?
			So why the wait? Signup quickly
			</p>

  </div>

);
}
}

ReactDOM.render(
   <App />,
   document.getElementById("root")
);
