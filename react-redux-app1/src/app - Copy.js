import React, {Component} from 'react';
import { connect }  from 'react-redux';
import * as actions from './action';

class App extends Component {

    componentDidMount(){
        this.props.moviesList();
    }

    renderList = (mydata) => {
        if(mydata){
            return mydata.map((data) => {
                return (
                    <div key={data.id}>{data.name}</div>
                )
            })
        }  
    }
    render(){
        return(
            <div>
                {this.renderList(this.props.mydata)}
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.MoviesReducer
    }
}

export default connect(mapStateToProps,actions)(App);