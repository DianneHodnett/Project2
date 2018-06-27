import React from 'react';
import gql from "graphql-tag";
import { client } from './PrismaEndPoint/EndPoint';

export default class extends React.Component{
    state = { apartmentName:'', apartmentAddress: '' }

    render (){

        const updateDataBase = async () => {
            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        updateApartment(where: {
                            name: "${this.state.apartmentName}" }
                            data: {address: ""}
                        ){
                            name
                            address
                            city
                            state
                            zip
                        }
                    }
                `}).then((result) => { return result.data.createApartment } )

            await console.log("Apartment Deleted: ", temp1 )
            await this.setState({ apartmentName: '', apartmentID: '' })
            window.location.reload()
        }

        return(
            <div>
                <h1>Update Apartment Information</h1>

                <div>
                    <h3>Provide Info to Update</h3>

                    <div>Provide name of apartment to update:</div>
                    <input className="gralInput" type="text" value={ this.state.apartmentName } onChange={ (e) => { this.setState({ apartmentName: e.target.value }) }} />
                    <br/><br/>

                    <div>Provide new address for apartment:</div>
                    <input className="gralInput" type="text" value={ this.state.apartmentAddress } onChange={ (e) => { this.setState({ apartmentAddress: e.target.value }) }} />
                    <br/><br/>
                    <button className="gralButton" onClick={ updateDataBase } >Update Database</button>
                </div>
            </div>
            )
        }
}