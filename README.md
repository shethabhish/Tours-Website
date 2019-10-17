# Homework #6 Solution

**Sai Shethabhish Naidu Palla**

**NetID: xq4954**

# Question 1

(a)

![new](images/8.png)

(b)

(c)

(d)

	constructor(props) {
			super(props);
			this.state = {showing: "tours",
			addName:"",
			tours: tours,
			Date: "",
			Name: ""};
		  }


(e)

	<div>
	        <p> Add Tour </p>

	        <label>Name</label>
	        &nbsp;&nbsp;&nbsp;<input type="text" name="name" onChange= {this.addName.bind(this)}/><br/>

	        <label>Date</label>
	        &nbsp;&nbsp;&nbsp;<input type="text" name="date" onChange= {this.addDate.bind(this)}/><br/>
	        
	        <button className = "but" onClick={this.addTour.bind(this)}>Add</button>

	      </div>

(f)

	addName(element){
			this.setState({
			    Name: element.target.value
			})
		    }
		   
		addDate(element){
			this.setState({
			    Date: element.target.value
			})
		    }

		addTour() {
		 const copyTours = Object.assign([],this.state.tours);
		 console.log('copyTours ',copyTours);
		  copyTours.push({
			Name: this.state.Name,
			  Date: this.state.Date
			})
		   this.setState({tours: copyTours});
		    } 

		TableHeader() {
		      let header = Object.keys(this.state.tours[0])
		      return header.map((key, index) => {
			 return <th className="th" key={index}>{key.toUpperCase()}</th>
		      })
		   }


# Question 2

(a)

(b,c)

	delete(i) {
		  let choice = this.state.tours.filter(function(place, index){
		    if(index === i)
		      return false;
		    else
		      return true;
		  })
		  this.setState({tours: choice});
		}

		TableData() {
			 let that = this;  
			      return this.state.tours.map((place, index) => {
				 return (
				    <tr>
				       <td><button className = "b" onClick={that.delete.bind(that, index)}>Delete</button></td>
				       <td>{place.Name}</td>
			  <td>{place.Date}</td>
				    </tr>
				 )
			      })
			   }

# Question 3

(a) 

![Internet](images/1.png)

(b)

![Manufacturer](images/2.PNG)

Doesn't fall into any special address categories

(c)

![Address](images/3.PNG)

(d)

![Location](images/4.PNG)

# Question 4

(a) 

The this keyword in a javascript code refers to the object which is excuting in the current file.

The this keyword can be used to refer the variables and functions that are globally declared(window object).

(b)

![this again](images/5.PNG)

(c)

![answer](images/6.PNG)

Once the timer expires the setTimeout(cs651) will execute a function or particular piece of code.
The setTimeout(cs351,0) is different from setTimeout(cs651) because its called with delay zero, its in a queue and is set to run at the next cycle. The code that is running currently must be executed first, so the resulting order of execution may no be as expected.

(d)

![answer](images/7.PNG)

It's a racing request.

The method returns a promise that will rejects or resolves as soon as one of the promises in the method get rejected or resolved, with reason or value from the corresponding reason.
