import React from "react";
import AboutClass from "./AboutClass";


class About extends React.Component {

 constructor(props) {
  super(props)
  this.state = {
   userInfo: {
    name: 'dummy',
   }
  }
 }

 //Once the component mounted component did mount will call....
 async componentDidMount() {

  const data = await fetch('https://api.github.com/users/athul057');
  const json = await data.json();

  this.setState({
   userInfo: json
  })

 }

 render() {
  const { name, avatar_url } = this.state.userInfo;

  return <div>
   <h1>Hello Welcome to About Pagee....</h1>
   <h2>{name}</h2>
   <img src={avatar_url} />
   <AboutClass name={'Ali'} location={'Kerala'} />
  </div>
 }

}


export default About;