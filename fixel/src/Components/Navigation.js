import React, { Component } from 'react'
import "./Navigation.css";
class Navigation extends Component  {
    state = {clicked:false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
  return (
    <div>
    <nav className="">
  
  <a className="" href="#">Fixel</a>
  

  <div className="" id="navbarSupportedContent">
    <ul id='navbarul' className="">
      <li className="">
        <a className="" href="#">Home </a>
      </li>
      <li className="">
        <a className="" href="#">Link</a>
      </li>
      
    </ul>
  </div>
  <div id='mobile' onClick={this.handleClick}>
    <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
  </div>

  
</nav>
    </div>
  )
}
}
export default Navigation
