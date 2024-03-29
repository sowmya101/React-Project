import React from 'react';

const ListMoviesView =(props) =>{
    const listview = ({datalist}) =>{
        if(datalist){
            return datalist.map((data) => {
                return (
                    <div key={data.id}>{data.name}</div>
                )
            })
        }
    }
    return(
        <div>
            {listview(props)}
        </div>
    )
}

export default ListMoviesView;