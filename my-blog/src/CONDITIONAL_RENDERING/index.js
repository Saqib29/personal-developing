import React, { Component } from 'react'
import HomePAge from './HomePage'
import LoginPage from './LoginPage'

class CONDITIONAL_RENDERING extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    

    render() {
         
        const what = this.state.isLoggedIn

        if(what){
            return <HomePAge />
        }
        else {
            return <LoginPage />
        }
    }
}

export default  CONDITIONAL_RENDERING