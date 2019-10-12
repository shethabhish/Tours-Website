// import React from "react";

// class Login extends React.Component{

// constructor(props) {
//        super(props);
//        this.state = {
//         show: "login"};
//  }

// render(){
// return(


// <div>

// <main>
// <br/>
// <br/>
// <br/><br/>
// <h1> Login:</h1>

// <h1>Not Implemented Yet</h1>

// </main>

 

// </div>


// );
// }
// }

// export default Login;

import React from "react";

class Login extends React.Component{

constructor(props) {
        super(props);
        this.state = {show: "login", email: '', password: ''};
  }

  handleEmailChange (event) {

  this.setState({
  email: event.target.value
  })

  }

  handlePasswordChange (event) {

  this.setState({
  password: event.target.value
  })

  }

  handleSubmit (event) {

  alert(`${this.state.email} ${this.state.password}`)
  event.preventDefault()

  }
 
render(){
return(


<form>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div>
<label>Email:</label>
  <input type="email" onChange={this.handleEmailChange} />
  </div>

  <div>
  <label>Password:</label>
  <input type="password" onChange={this.handlePasswordChange}/>
  </div>

  <div>
  <button  onClick={this.handleSubmit}>Login</button>
</div>
</form>
);
}
}

export default Login;