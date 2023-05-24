import React from "react";
import CardDetails from "./CardDetails";
import Avatar from "./Avatar";

const ContactCard =(properity)=>{
    return<>
        
      <div className="card">
        <div className="top">

          <h2>{properity.name}</h2>
          <Avatar img={properity.src} />
        </div>
       <div className="bottom">
        <CardDetails info={properity.id} /><br/>
        <CardDetails info= {properity.gender}/><br/>
        <CardDetails info={properity.dob}/><br/>
        <CardDetails info={properity.phone}/><br/>
        <CardDetails info={properity.email}/><br/>
        <CardDetails info={properity.Address}/><br/>
        <CardDetails info={properity.country}/>

        </div>
      </div>

    </>
}
export default ContactCard;