import React, {useState} from 'react'

export default function UserCreate() {

const [email, setEmail] = useState("")
const [password, setPassword] =  useState("")
const [firstName, setFirstName] =  useState("")
const [lastName, setLastName] =  useState("")



const [response, setResponse] = useState(null)

function renderInput(type,  value,  setValue, placeholder) {
    return (
  <input
    type={type}
    value={value}
    onChange={e => setValue(e.target.value)}
    placeholder={placeholder}
  />
  )
}

function handleOnSubmit(e){
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/auth/users/create/"
    const  payload  = {
        firstName,
        lastName,
        email,
        password,
        organisationKind:0,
        organisationName:"aa",
    }
    
    fetch(url, {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => setResponse(data))
}





    return (
        <div>
            <h1>UserCreate</h1>

            <form onSubmit={handleOnSubmit}>
            {renderInput("text", email, setEmail,  "Email")}
            {renderInput("text", firstName, setFirstName,  "First Name")}
            {renderInput("text", lastName, setLastName,  "Last Name")}
            {renderInput("password", password, setPassword,  "Password")}
            
            <button type="submit">Create user</button>
            </form>
{response && (
    <p>{response.email[0]}</p>
)}
        </div>
    )
}
//minuto 01:29:00