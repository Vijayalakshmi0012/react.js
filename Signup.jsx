import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Signup page</h1>
        <form action=''>
            <label htmlFor='username'>Username</label>
            <input type="text" id="username" onChange={(e)=>
            {
                this.setState({username:e.target.value})
            }}/>
            <br/>
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" onChange={(e)=>{
                this.setState({password:e.target.value})

            }
            }/>
            <br/>
            <button onClick={(e)=>{
                e.preventDefault()
                window.location.assign('/login')
            }
            }>Signup <br/>

            </button>
        </form>

      </div>
    )
  }
}
