import React from "react";
import img from "../multiverse.jpg";

export class Home extends React.Component{

constructor(props) {
       super(props);
       this.state = {
        show: "home"};
 }

render(){
return(


<div>

<main>
<h1> S.T.A.R Labs tours </h1>

<img src = {img} width={600} height={400} />
    <p>The S.T.A.R Labs tours is a rescently established agency. But we take ypu to he places where other tours cannot take you.
			Yess, you guessed it right. We take you to the multiverse. Ever wondered going to another earth and maybe meet your doppleganger??
			At S.T.A.R Labs tour we make it possible. We take you to another earth where you can meet your doppleganger. Doesn't it sound cool and exciting meeting yourself in another universe?
			So why the wait? Signup quickly
			</p>

</main>


</div>


);
}
}

export default Home;
