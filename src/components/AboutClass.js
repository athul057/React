import React from "react";

class AboutClass extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
   count1: 0,
   count2: 1,
  };
 }



 render() {
  const { name, location } = this.props;
  const { count1, count2 } = this.state;
  return (<div className="user-card">
   <h1>{count1}</h1>
   <button onClick={() => {
    //Never update state variable directly.
    this.setState({
     count1: this.state.count1 + 1
    })
   }}>ClickMe</button>
   <h5>{name}</h5>
   <h5>{location}</h5>
  </div>)
 }


}

export default AboutClass;