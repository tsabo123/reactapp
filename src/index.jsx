
import React from "react";
import ReactDom from "react-dom/client";
import Aplication from "./Aplication";
import "./css/style.css"


class App extends React.Component{
    constructor ( ){
        super ()

        this.state = {
            count : 0
        };
    }

    increment = () => {
        this.setState({
            count:this.state.count + 1
        });
    }



    render () {
        return (

           
            <React.Fragment>
              <button type="button" onClick={this.increment}>დააკლიკეთ ორჯერ{this.state.count}</button>  
             
            <Aplication/>

            </React.Fragment>

            
        );

    }
}

var root = document.getElementById("root");
ReactDom.createRoot(root).render (<App />);
