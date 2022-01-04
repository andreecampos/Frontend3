import React, {useState} from 'react'
import {Button, MyForm, MyDiv, MyInput} from '../components/StyledComponent'

export default function PostNyKund(props) {
    const  [name,  setName] = useState("")
    const [organisationNr, setOrganisationNr] = useState(0)
    const [vatNr, setVatNr]= useState(0)
    const [reference, setReference] = useState("")
    const [paymentTerm, setPaymentTerm] = useState(0)
    const [website, setWebsite] = useState("")
    const [email, setEmail]=useState("")
    const [phoneNumber,  setPhoneNumber]=useState("")

    function renderInput (type,  value, setValue, placeholder) {
        return (
            <MyInput
            type={type}   
            value={value}
           onChange={e => setValue(e.target.value)}
           placeholder={placeholder}
            />
            //pattern="SE\d{10}"
           //required
           //title="Must start with SE and follow up with 10 digist"
            )      
    }
   
    function handleOnSubmit(e){
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const payload = {
        name, organisationNr,  vatNr, reference, paymentTerm, 
        website, email, phoneNumber}
        const token  = localStorage.getItem("final-project")
        const headers = {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`};
                
        fetch(url, {
            method : "POST",
            headers : headers,
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => props.onSuccess())
    }
    
    return (
        <MyDiv>
            <MyForm onSubmit={handleOnSubmit}>
            <h1>Posta  nya kunder</h1>
            {renderInput("name", name, setName,  "Name")}
            {renderInput("organisationNr", organisationNr, setOrganisationNr,  "OrganisationNr")}
            {renderInput("vatNr", vatNr, setVatNr,  "Momsnummer") }
            {renderInput("reference", reference, setReference,  "reference")}
            {renderInput("paymentTerm", paymentTerm, setPaymentTerm,  "paymentTerm")}
            {renderInput("website", website, setWebsite,  "website")}
            {renderInput("phoneNumber", phoneNumber, setPhoneNumber,  "phoneNumber")}
            {renderInput("text", email, setEmail,  "Email")}
           
            <Button type="submit">Lägg Ny Kund</Button>
            
            </MyForm>
        </MyDiv>
    )
}
