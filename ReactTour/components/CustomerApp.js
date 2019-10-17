
// import React from "react";


// class CustomerApp extends React.Component{

// constructor(props) {
//         super(props);
//         this.state = {role: "customer"};
//   }

// render(){
     
//         return(
//         <div>
//     <nav>
//     <ul>
//     <li><p className="logo">S.T.A.R. LABS Tours</p></li>
//     <li><a href="#">Coming Tours</a></li>
//     <li><a href="#">My Tours</a></li>
//     <li><a href="#">About Us</a></li>
//     <li><a href="#">Home</a></li>
//     <li><a href="#">Login</a></li>
//     </ul>
//     </nav>
    

//     </div>

// );
// }
// }

// export default CustomerApp;


import React from "react";
import Tours from "./Tours"

export class CustomerApp extends React.Component{

constructor(props) {
        super(props);
        this.state = {show: "tours"};
  }

render(){

let contents = null;

switch (this.state.show){
case "tours":
                contents = <Tours> </Tours>;
           break;
           default:
           contents =<Tours></Tours>;
       }

return(

<div>
<nav>
<ul>
<li><p className="logo">S.T.A.R Labs tours</p></li>
<li><a>Coming Tours</a></li>
<li><a>My Tours</a></li>
<li><a>About Us</a></li>
<li><a>Home</a></li>
<li><a>Login</a></li>
</ul>
</nav>
<main>
{contents}
</main>
</div>

);
}
}

export default CustomerApp;