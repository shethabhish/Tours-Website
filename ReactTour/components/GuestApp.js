// // import React from "react";
// // import ReactDOM from "react-dom";
// // import { render } from "react-dom";

// // class GuestApp extends React.Component{
// // constructor(props) {
// //         super(props);
// //         this.state = {role: "guest"};
// //   }
 
// // render(){



// // return(

// // <div>

// // <nav>
// // <ul>
// // <li><p className="logo">S.T.A.R. LABS Tours</p></li>
// // <li><a href="www.google.com">Coming Tours</a></li>
// // <li><a href="www.google.com">Login</a></li>
// // <li><a href="signup.html">Newsletter Signup</a></li>
// // <li><a href="www.google.com">About Us</a></li>
// // </ul>
// // </nav>





// // </div>

// // );
// // }
// // }

// // export default GuestApp;

// import React from "react";
// import Home  from "./home";
// import About  from "./about";
// import Login  from "./login";



// export class GuestApp extends React.Component{

// constructor(props) {
//        super(props);
//        this.state = {show: "home"};
//  }

// render () {

// let contents = null;

//        switch (this.state.show) {

//            case "home":
//                contents = <Home> </Home>;
//                break;
//                case "about":
//                contents = <About> </About>;
//                break;
//                case "login":
//                contents = <Login> </Login>;
//                break;

//           default:
//                contents = <Home> </Home>;
//        }


// return (

// <div>
// <nav>
// <ul>
// <li><p className="logo">S.T.A.R. LABS Tours</p></li>
// <li><a href="#">Coming Tours</a></li>
// <li><a href="../Login.html">Login</a></li>
// <li><a href="#">Newsletter Signup</a></li>
// <li><a href="../about.html">About Us</a></li>
// </ul>
// </nav>

// {contents}
// </div>

// );

// }
// }

// export default GuestApp;

import React from "react";
import Tours  from "./Tours";
import Login from "./login";

class CustomerApp extends React.Component{

constructor(props) {
        super(props);
        this.state = {show: "tours"};
  }

render(){
let contents = null;

        switch (this.state.show) {

            case "tours":
                contents = <Tours> </Tours>;
                break;
                case "login":
                contents = <Login> </Login>;
                break;
               

           default:
                contents = <Tours> </Tours>;
        }
return(

<div>
<nav>
<ul>
<li><p className="logo">S.T.A.R Labs tours</p></li>
<li><a href="#">Coming Tours</a></li>
<li><a href="#">My Tours</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#">Home</a></li>
<li><a href="#">Login</a></li>
</ul>
</nav>
<h3></h3>
{contents}
</div>

);
}
}

export default CustomerApp;


