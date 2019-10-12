# Homework #4 Solution

**Sai Shethabhish Naidu Palla**

**NetID: xq4954**

# Question 1 (A) & (B)

![1b](images/1b.png)

# Question 1 (C)

Guest App

![Guestapp](images/1c1.png)
 
Admin App

![Customerapp](images/1c2.png)

Customer App

![adminapp](images/1c3.png)

# Question 1 (D)

**Index.js Code**

	import React from "react";
	import ReactDOM from "react-dom";
	import { render } from "react-dom";
	import GuestApp from "./compnents/GuestApp"
	import { AdminApp } from "./compnents/AdminApp"
	import { CustomerApp } from "./compnents/CustomerApp"
	import Bali from "./bali.jpg";

		class App extends React.Component {
			constructor(props) {
			super(props); 
			this.state = {role: "guest"};
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
					<main>
						{contents}
						<img src = {Bali} width={600} height={400} />
						<p> KT's Tour Agency has over 40 years of experience operating authentic and unique adventure 								holidays with a genuine focus on the paths less travelled. We are the pioneers in designing 								groundbreaking itineraries and many say our trips start where others end. </p>
					</main>
				</div>
				);
			}
		}

		ReactDOM.render(
		    <App />,
		    document.getElementById("root")
		);

# Question 2 (A) & (B)

![home](images/2b1.png)

**Home.js File Code**

	import React from "react";
	import Bali from "./bali.jpg";

	export class Home extends React.Component{

			constructor(props) {
			super(props); 
			this.state = {showing: "home"};
	 			}

		render(){
			return(

				<div>
					<img src = {Bali} width={600} height={400} />
					<p> KT's Tour Agency has over 40 years of experience operating authentic and unique adventure holidays with a 						genuine focus on the paths less travelled. We are the pioneers in designing groundbreaking itineraries and 						many say our trips start where others end. </p>
				</div>

			);
		}
	}

	export default Home;

![about](images/2b2.png)

**About.js File Code**

	import React from "react";

	export class About extends React.Component{

			constructor(props) {
			super(props); 
			this.state = {showing: "about"};
	 			}

		render(){
			return(

				<div>
					<br/><br/><h1>About Us : KT'S TOUR AGENCY</h1>
				</div>

			);
		}
	}

	export default About;

![login](images/2b3.png)

**GuestApp.js File Code**

	import React from "react";
	import ReactDOM from "react-dom";
	import { render } from "react-dom";
	import Home from "./Home"
	import About from "./About"
	import Login from "./Login"

	export class GuestApp extends React.Component{
			constructor(props) {
			super(props); 
			this.state = {showing: "home"};
	 			}

		render(){

				let contents = null;

			switch (this.state.showing) {

		    case "home":
		        contents = <Home> </Home>;
		        break;
		    case "about":
		        contents = <About> </About>;
		        break;
		    case "login":
		        contents = <Login> </Login>;
		        break;
		    default:
		        contents = <Home> </Home>;
		}    

			return(

				<div>
				
					<nav>
						<ul>
							<li><p className="logo">KTs Tour Agency</p></li>
							<li><a className="button" href="www.google.com">Coming Tours</a></li>
							<li><a className="button" href="www.google.com">Login</a></li>
							<li><a className="button" href="signup.html">Newsletter Signup</a></li>
							<li><a className="button" href="www.google.com">About Us</a></li>
						</ul>
					</nav>

					<h3>(..Wander..Explore..Discover..)</h3>

					{contents}

				</div>

			);
		}
	}

	export default GuestApp;

# Question 3 (A)

![tours](images/3a.png)

# Question 3 (B)

![customers](images/3b.png)

# Question 4 (A)

![4](images/4.png)

# Question 4 (B)

**Index.js File Code**

	class App extends React.Component {
	    constructor(props) {
		super(props);
		this.state = {role: "guest",user: null}; // We will have "user" and "admin" roles too.
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	    }

	    handleLogin(role, Info){
		if(role === "admin"){
		    this.setState({
		        role : "admin",
		        user: "Info",
		    })
		} else if(role === "customer"){
		    this.setState({
		        role : "customer",
		        user: "Info",
		    })
		}
	    }

**Login.js File Code**

	class Login extends React.Component {

	    constructor(props) {
		super(props);
		this.state = {role: "guest", email: null,password: null,};
		this.setEmail = this.setEmail.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.signIn = this.signIn.bind(this);

	    }

	    setEmail(event){
		this.setState({
		    email: event.target.value
		    //email: this.refs.email.value,
		});
	    }

	    setPassword(event){
		this.setState({
		    password: event.target.value
		    //password: this.refs.password.value,
		});
	    }

	    signIn() {
		if(this.state.email === "admin@email.org"){
		    console.log('admin');
		    this.props.OnSucces("admin",{name: "garima", netid: "mm6326"});
		}
		else if(this.state.email === "cust@email.org"){
		    console.log('customer');
		    this.props.OnSucces("customer",{name: "garima", netid: "mm6326"});
		}
		else {
		    console.log('guest');
		    this.props.OnSucces("guest",{});
		}
	    }

# Question 4 (C)

**Index.js File Code Snippet**

	 handleLogout(){
		this.setState({
		    role: "guest",
		    user: null,
		})
	    }

	return(
     	 <div>
          {this.state.role === "guest" && (<GuestApp handleLogin = {this.handleLogin} />)}
          {this.state.role === "admin" && (<AdminApp handleLogout = {this.handleLogout}/>)}
          {this.state.role === "customer" && (<CustomerApp handleLogout = {this.handleLogout}/>)}
         </div>
      	)

