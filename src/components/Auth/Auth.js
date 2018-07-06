import React, {Component} from 'react'
import axios from 'axios'

export default class Auth extends Component{
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
    
    this.handleChange=this.handleChange.bind(this)
    this.handleChange2=this.handleChange2.bind(this)
  }
    createUser(text){
      axios.post('/api/users',{text}).then(function(req, res){
        console.log(req)
        this.setState({user: req.body})
        this.setState({password: req.body})
        res.redirect('http:localhost:3000/')
      })
    }

    loginUser(){
      axios.get('/users')
      .then((res) => {this.setState({users: res.data})})
    }

    handleChange(username){
      this.setState({username})
    }

    handleChange2(password){
      this.setState({password})
    }
    

  render(){
    return(
      <div>
       <input type="text"
               placeholder='username' 
               value={this.state.username} 
               onChange={(e) => {this.handleChange(e.target.value)}}/>
       <input type="text" 
              placeholder='password'
              value={this.state.password} 
              onChange={(e)=> {this.handleChange2(e.target.value)}}/>
       <button onClick={this.loginUser()}>Login</button>
       <button onClick={this.createUser()}>Register</button>
       
      </div>
    )
  }
}