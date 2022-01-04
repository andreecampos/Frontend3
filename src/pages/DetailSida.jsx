
import React, {useContext} from 'react'
import {Link} from  'react-router-dom'
import { useParams } from 'react-router-dom';
import {NameContext} from '../App';
import { MyDiv} from "../components/StyledComponent";



export default function DetailSida() {
    const params = useParams()
    const id = params.id
   const {postList} = useContext(NameContext)

    return (
        <MyDiv>
           <div>

            <h3>Du vill se kunden</h3>           
            <br/>
            {postList && (
                <p> <b>Name :</b> {postList[id].name}
                <br/>
                <b>Email :</b>{postList[id].email}
                <br/>
                <b>Phone Number : </b>{postList[id].phoneNumber}
                <br/>
                <b>Website : </b>{postList[id].website}
                <br/>
                <b>Betalningsvilkor :</b> {postList[id].paymentTerm} i dagar
                <br/>
                <b>Referens : </b> {postList[id].reference}
                <br/>
                <b>Monsnummer : </b>{postList[id].vatNr}
                <br/>
                <b>Organisation Nr  : </b>{postList[id].organisationNr}
                
                </p>
                
            )}
            <br/>
            <Link to="/list" className="btn btn-success">Home Sida</Link>
            </div>
        </MyDiv>
    )
}
