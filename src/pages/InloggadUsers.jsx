import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {MyDiv, MyForm}  from '../components/StyledComponent'

export default function InloggadUsers() {

    const [myData, setMyData] = useState(null)




    useEffect(()=>{
        const url="https://frebi.willandskill.eu/api/v1/me"
        const token = localStorage.getItem("final-project")
        const  headers  = {
            'Content-Type':  'application/json',
            'Authorization' : `Bearer ${token}`
        }
        fetch(url, {
            method:"GET",
            headers: headers,
        })
        .then(res => res.json())
        .then(data =>  setMyData(data))

    },[])
    return (
        <MyDiv>
        <MyForm>
            <h1>Inloggad Usser</h1>
            {myData  && (
                <>
                <br/>
                <p>{myData.firstName}</p>
                <p>{myData.email}</p>
                
                </>
            )}
            <Link to="/list" className="btn btn-primary btn-block">Home</Link>
        </MyForm>
        </MyDiv>
    )
}
