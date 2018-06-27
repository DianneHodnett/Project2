
import React from 'react'
import gql from "graphql-tag"
import { client } from './PrismaEndPoint/EndPoint'

export default class extends React.Component{
    state = { propertyName: '' }

    render(){

        const addToDataBase = async () => {
            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        createApartment(data: {
                        name: "${this.state.propertyName}",
                        address: "",
                        city: "",
                        state: ""
                    }){
                        name
                        address
                    }
                    }
                `}).then((result) => { return result.data.createApartment } )

            await console.log("Apartments: ", temp1 )
            await this.setState({ propertyName: '' })
            window.location.reload()
        }

        return(
            <div>
                <h1>Add Apartment</h1>

                <div>
                    <h3>Provide apartment name below</h3>
                    <input className="gralInput" type="text" value={ this.state.propertyName } onChange={ (e) => { this.setState({ propertyName: e.target.value }) } } />
                    <br/><br/>
                    <button className="gralButton" onClick={ addToDataBase } >Add to DataBase</button>
                </div>
            </div>
        )
    }
}