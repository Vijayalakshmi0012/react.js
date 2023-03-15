 import React, { Component } from 'react'
 import JSON from "./user.json"
import User from './state/User';


 export default class App extends Component {
  constructor (){
    super ()
    this.state={json:JSON}
  }
   render() {
     return (
       <div>
        <User data={this.state.json}/>
       </div>
     )
   }
 }
 