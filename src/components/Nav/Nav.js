import React from 'react'
import {connect} from 'react-redux'

function Nav (props) {
  return(
    <div>
        Nav
      </div>
    )
  }
  
  function mapStateToProps(state){
    return{
      username: state.username,
      profilepic: state.profilepic
    }
  }


  export default connect(mapStateToProps)(Nav);
