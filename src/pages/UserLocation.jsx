import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function UserLocation() {
    const  navigate = useNavigate()

    //const  location = useLocation()
    //console.log(location)
    const {search} =useLocation();
    const query = new URLSearchParams(search);
    console.log(query);

    const uid = query.get("uid");
    const token = query.get("token");
    console.log(uid, token);
    
    

    function  handleOnSubmit(e){
        e.preventDefault()
    
        const url="https://frebi.willandskill.eu/auth/users/activate/"
        const payload = {uid, token}
        //const token  = localStorage.getItem("final-project")
        const headers = {
            'Content-Type' : 'application/json',
            //'Authorization' : `Bearer ${token}` 
        }

        fetch(url, {

            method: "POST",
            headers : headers,
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            const token =  data.token
           localStorage.setItem("final-project", token)
            navigate('/logga-in')
        })

    }
        
    return (
        
        <div>
            <form onSubmit={handleOnSubmit}>
            <h3>User Location</h3>
             <p>uid :{uid}<br/> token : {token}</p>
             <button type="submit">Posta ny användare</button>
            </form>
            
        </div>
        
    )
}
