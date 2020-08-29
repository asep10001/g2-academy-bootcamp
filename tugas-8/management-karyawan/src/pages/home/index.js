import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            dataList : [],
            status: false
        }
    }

    componentDidMount() {
        this.setState({
            dataList: localStorage.employee ? JSON.parse(localStorage.employee) : []
        })
    }

    deleteLastRow = async () =>{
        let newDataList = this.state.dataList
        newDataList.pop()

        //POST API
        try{
            localStorage.employee = JSON.stringify(newDataList)

            await this.setState({
                dataList: newDataList,
                status: true
            })
        } catch (error) {
            alert("Error!!")
        }
    }

    checkSatus = () =>{
        console.log(this.state.status);
    }
    render() { 
        return ( 
        <div>
            <div>
                <button onClick={this.deleteLastRow}>Delete</button>
                <button onClick={this.checkSatus}>Status</button>
            </div>
            
        </div> );
    }
}
 
export default Home;