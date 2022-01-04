import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, MyForm, MyDiv, MyInput} from '../components/StyledComponent'
//import {MyForm} from '../components/MyForm'


export default function LoggaIn() {
    const [email, setEmail]=useState("")
    const [password,  setPassword]=useState("")
    const  navigate = useNavigate()
     //andree.campos@yh.nackademin.se
     //javascriptoramverk
     //<button type="submit">Logga In</button>

    function  handleOnSubmit(e){
        e.preventDefault()
    //console.log(email, password)
        const url="https://frebi.willandskill.eu/api-token-auth/"
        const payload = {email, password}

        fetch(url, {

            method: "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            const token =  data.token
           localStorage.setItem("final-project", token)
            navigate('/list')
        })

    }


    return (
        <MyDiv>
            <MyForm onSubmit={handleOnSubmit}>
            <h1>Login</h1>
                <MyInput
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder = "Email"
                />
                <br/>
                <MyInput
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder = "Password"
                />
                <br/>
               <Button type="submit">Logga In</Button>
            </MyForm>
        </MyDiv>
    )
}
