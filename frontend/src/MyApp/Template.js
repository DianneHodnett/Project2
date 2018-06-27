import React from 'react'


export default class extends React.Component{
    render(){
        const info = this.props.data
        return(
            <div className="templateCont">
                <div><strong>Name: </strong>{info.name}</div>
                <div><strong>Address: </strong>{info.address}</div>
            </div>
        )
    }
}