import React from "react";


class AdminApp extends React.Component{

constructor(props) {
        super(props);
        this.state = {role: "admin"};
  }

render(){

return(

<div>
<nav>
<ul>
<li><p className="logo">Underwater Tour</p></li>
<li><a href="#">Tour Management</a></li>
<li><a href="#">Customer Management</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#">Home</a></li>
<li><a href="#">Logout</a></li>

</ul>
</nav>
</div>

);
}
}

export default AdminApp;
