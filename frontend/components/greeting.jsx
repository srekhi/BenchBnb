import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    if (this.props.currentUser){
      return (<div>
        <h2>Welcome {this.props.currentUser.username}</h2>
        <button>Logout</button>
      </div>);
    } else {
      return(
        <div>
          <Link to=""></Link>
          <Link to=""></Link>
        </div>
      );
      }
    }
  }

export default Greeting;
