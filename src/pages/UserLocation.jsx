import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function UserLocation() {
    const  navigate = useNavigate()
    
    //const  location = useLocation()
    //console.log(location)
    const location =useLocation();
    const query = new URLSearchParams(location.search);
    console.log(query);
    
    const uid = query.get("uid");
    const token = query.get("token");
    console.log(uid,token);
    //orlandoandree1998+1@gmail.com
    //Cibertec2019
    //function  handleOnSubmit(e){
        //e.preventDefault()
        useEffect(()=>{

            const payload = {uid, token}
            const url="https://frebi.willandskill.eu/auth/users/activate/"
            //const token  = localStorage.getItem("final-project")
            //const headers = {
                //'Content-Type' : 'application/json'
                //'Authorization' : `Bearer ${token}` 
            //};
            fetch(url, {
                method: "POST",
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            //.then(data => {
            //const token =  data.token
            //localStorage.setItem("final-project", token)
                navigate('/logga-in')
        },[])
        //})
    //}
    return ( 

        <div>
           
        </div> 
          
        );
}
