import { useState, useEffect } from "react";
import ContactCard from "./ContactCards";


const Fetch=()=>
{
    const [retriveData, setRetrievd]= useState([]);
    const url="https://randomuser.me/api/";
    
    useEffect(()=>{

         const Fetch = async()=>{
            let res=await fetch(url);
            let data=await res.json();
            
            setRetrievd(data.results)
        }
        Fetch()
    },[])

        const test=()=>{
            for(let item=0; item<retriveData.length; item++){
            return<>
                <ContactCard
                    key={retriveData[item].id.value}
                    id={"ID:"+(retriveData[item].id.name + retriveData[item].id.value)}
                    dob={"Age: "+retriveData[item].dob.age}
                    phone={"Phone: "+retriveData[item].phone}
                    gender={"Gender: "+retriveData[item].gender}
                    email={"Email: "+retriveData[item].email}
                    Address={"Address: "+(retriveData[item].location.street.number+", " + retriveData[item].location.street.name+", "+retriveData[item].location.city+", "+retriveData[item].location.state) }
                    country={"Country: "+retriveData[item].location.country}
                    src={retriveData[item].picture.medium}
                    name={(retriveData[item].name.title+" " + retriveData[item].name.first+" "+ retriveData[item].name.last)}   
                />
               </>
               }
        }

    return<div>
           <h1 id="fetchHeading">Random Person's Profile</h1>
           {test()}
    </div>
}
export default Fetch;