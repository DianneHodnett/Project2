import React from 'react';
import gql from "graphql-tag";
import { client } from './PrismaEndPoint/EndPoint';

export default class extends React.Component{
    state = { propertyName: '', propertyAddress: ''}

    render(){

        const updateDataBase = async () => {
            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        deleteApartment(where: { name: "${this.state.ApartmentName}"})
                        {
                            name
                        }
                    }    
                `}).then((result) => { return result.data.deleteApartment})

            await console.log("Apartment Deleted: ", temp1 )
            await this.setState({ apartmentName: ''})
            window.location.reload()
        }

        return(
            <div>
                <h1>Delete Singer</h1>

                <div>
                    <h3>Name of Apartment to Delete</h3>
                    <input className="gralInput" type="text" value={ this.state.propertyName } onChange={ (e) => { this.setState({ propertyName: e.target.value }) } } />
                    <br/><br/>
                    <button className="gralButton" onClick={ updateDataBase } >Delete Apartment from DataBase</button>
                </div>
            </div>
        )
    }
}


