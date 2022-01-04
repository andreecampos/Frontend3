import React, { useContext, useEffect, useState } from "react";
import { NameContext } from "../App";
import { Link, Navigate } from "react-router-dom";
import PostNyKund from "./PostNyKund";


export default function ListSida(props) {
  const [myData, setMyData] = useState(null)
  const  [name,  setName] = useState("")
    const [organisationNr, setOrganisationNr] = useState(0)
    const [vatNr, setVatNr]= useState(0)
    const [reference, setReference] = useState("")
    const [paymentTerm, setPaymentTerm] = useState(0)
    const [website, setWebsite] = useState("")
    const [email, setEmail]=useState("")
    const [phoneNumber,  setPhoneNumber]=useState("")


  const { postList, setPostList } = useContext(NameContext);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("final-project");
    const headers = {
      "Content-Type": "application/json",
      'Authorization' : `Bearer ${token}`
    };
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      //.then(data => console.log(data))
      .then((data) => setPostList(data.results));
  }
//DELETE 
  function handleOnDelete(id) {
    console.log(id);
    const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
    const token = localStorage.getItem("final-project");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    fetch(url, {
      headers: headers,
      method: "DELETE",
    }).then((res) => fetchData());
  }
  //Patch funktion
  function handleOnSubmit(id){
  //e.preventDefault()
    const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
    const token = localStorage.getItem("final-project");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const  payload  = {
      name, organisationNr,  vatNr, reference, paymentTerm, 
      website, email, phoneNumber
    };
    
    fetch(url, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(payload)
    })
    //console.log(payload)
    .then((res)=> res.json())
    .then((data)=>{
     setPostList(data.postList)
     fetchData()
    })
    //.then((res) => fetchData())
    ;
}
  

  return (
    
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h3>List Sida av alla kunder</h3>
            {postList && postList.map((item, index) => {
                return (
                  <div key={item.id}>
                    <Link to={`/list/${index}`} key={index}>
                      {" "}
                      <br/>
                      {item.name} - {item.email}
                    </Link>

                    <br />
                    <button onClick={(e) => handleOnDelete(item.id)}>
                      DELETE
                    </button>
                    <button onClick={(e) => handleOnSubmit(item.id)}>Uppdatera info</button>
                  </div>
                );
              })}
          </div>
          <br/>
                    <Link to="/ussers" className="btn btn-primary btn-block">
                    See alla inloggad ussers här
                  </Link>
                  <br/>
      <Link to="/logga-in" className="btn btn-success">tillbaka</Link>
      <br/>
      <Link to="/user-create" className="btn btn-success">User Create</Link>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <PostNyKund onSuccess={fetchData} />
          </div>
        </div>
      </div>
    </div>
  );
}
