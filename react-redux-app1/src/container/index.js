import React, {Component} from 'react';
import { connect }  from 'react-redux';
import * as actions from '../action';
import ListMoviesView from '../component/list_movies';

class MoviesList extends Component{
    componentDidMount(){
        this.props.moviesList();
    }

    render(){
        return(
            <div>
                <ListMoviesView datalist={this.props.mydata}></ListMoviesView>
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
export default connect(mapStateToProps,actions)(MoviesList);