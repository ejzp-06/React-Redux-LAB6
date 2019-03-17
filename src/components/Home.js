import React, { Component } from "react";
import { Button } from "@material-ui/core";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    homeTitles: state.homeTitle
});

const mapDispatchToProps = dispatch => ({
    changeHomeTitle: homeTitle => dispatch(ACTIONS.changeHomeTitle(homeTitle))
});

class Home extends Component {

    constructor(){
        super();
        this.state = {
            homeTitle: "Bienvenido a Project Code Names"
        };
    }

    handleSubmit = (event) =>{
        if(this.state.homeTitle==="Bienvenido a Project Code Names"){
            this.setState({
                homeTitle: "813N83N1D0 4 PR0J3CT C0D3 N4M3"
            })
          }
          else{
            this.setState({
                homeTitle: "Bienvenido a Projecyo Code Names"
            })
          }
    }

    render (){
        return(
        <div className="App">
            <header className="App-header">
            <h1>{this.state.homeTitle}</h1>
            <Button variant="contained" align="center" onClick={(event) => this.handleSubmit(event)}>Boom </Button> 
            </header>
        </div>
        );
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Home);