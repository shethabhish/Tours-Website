
// import React from "react";

// class Tours extends React.Component{

// constructor(props) {
//         super(props);
//         this.state = {
//          show: "tours"};
//   }
 
// render(){
// return(


// <div>
// <br/>
// <br/>
// <br/>
// <br/>
// <main>
// <h1> Tours:</h1>

// <h1>Not Implemented Yet</h1>

//  </main>

 

// </div>


// );
// }
// }

// export default Tours;

import React from "react";
import tours  from "../tours.json";
import "./table .css";

export class Tours extends React.Component{

constructor(props) {
        super(props);
        this.state = {show: "tours"};
  }

render(){
return(

<div>
<br/><br/><h1>Tours</h1>
{tours.map((tourdetails, index) => {
return <div>
<tr>
<th>Name</th>
<th>Date</th>
</tr>
<table>
<tr>
<td>{tourdetails.Name}</td>
<td>{tourdetails.Date}</td>
</tr>

</table>
</div>
})}
</div>

);
}
}

export default Tours;
