import React, { Component } from 'react';
import { RowInput } from "../../component/element"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            isLogin: false
         }
    }

    setValueInput = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    doLogin = () => {
        const { username, password } = this.state
        console.log(username)
        console.info(password)

        if (username === "admin" && password === "admin") {
            this.setState({
                isLogin: true
            })
        }
    }

    showSecret = () => {
        if (this.state.isLogin) {
            return (
                <div style={{ marginTop: "10px" }}>
                    ini rahasia 2
                </div>
            )
        }
    }

    render() { 
        return ( 
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "max-content" }}>                    
                    <RowInput
                        label="Username:" 
                        type="username" 
                        name="username" 
                        value={ this.state.username }
                        setValue={ (el) => this.setValueInput(el) } />     

                    <RowInput
                        label="Password:" 
                        type="password" 
                        name="password" 
                        value={ this.state.password }
                        setValue={ (el) => this.setValueInput(el) } />

                    <div style={{ marginTop: "10px" }}>
                        <button onClick={ this.doLogin }>Login</button>
                    </div>

                    { this.state.isLogin ?
                        <div style={{ marginTop: "10px" }}>
                            ini rahasia
                        </div>
                     : null }

                    { this.showSecret() }

                </div>
            </div>
         );
    }
}
 
export default Login;