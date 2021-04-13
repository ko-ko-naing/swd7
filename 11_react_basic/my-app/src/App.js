import React from "react";
import "./App.css";

class ListItem extends React.Component{

    render() {

        return (

            <li>
                [{this.props.index}] 
                {this.props.message}
            </li>
        )

    }

}

class App extends React.Component{

    state = {
        list : ["eat","read","sleep"]
    }

    messageRef = React.createRef();

    add = () => {
        let text = this.messageRef.current.value;
        this.setState({
            list : [...this.state.list,text]
        })
        this.messageRef.current.value = "";
    }

    render() {

        return (
            <div className="todo">
                <h1 className="title">My First React App</h1>
                <div className="input-group">
                    <input type="text" ref={this.messageRef} className="mr input-text"/>
                    <button onClick={this.add} className="add-btn">Add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((i,index)=>{
                           return <ListItem message={i} index={index}></ListItem>
                        })
                    }
                </ul>
            </div>
        )

    }

}

export default App;