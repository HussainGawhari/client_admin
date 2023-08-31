import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ClientDetails = () => {
  const { id } = useParams();
console.log("ClientDetails",id);
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(headers);
    
    axios.get(`http://localhost:8000/v1/client/${id}`, { headers })
      .then(response => {
       
        // Handle the response from the server
        // setClientData(response.data);
        console.log("response from bakend", response.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>User deatils</h2>
          </div>
          <div className="card-body"></div>

          {empdata && (
            <div>
              <h2>
                User's name : <b>{empdata.name}</b> ({empdata.id})
              </h2>
              <h3>Contact Details</h3>
              <h5>Email is : {empdata.email}</h5>
              <h5>Phone is : {empdata.phone}</h5>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* </div>
            </div> */}
    </div>
  );
};

export default ClientDetails;
