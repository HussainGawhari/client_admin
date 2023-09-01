import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const ClientList = () => {
  const [clientdata, setClientData] = useState();
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/details/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/edit/" + id);
  };
  
  const Removefunction = (id) => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    if (window.confirm("Do you want to remove?")) {
      axios.delete(`http://localhost:8000/v1/client/${id}`, { headers })
      .then(response => {
        // Handle the response from the server
        setClientData(response.data);
        console.log(response)
      })
      
      
    }
  };

  useEffect(() => {
   const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(headers);
    
    axios.get("http://localhost:8000/v1/clients", { headers })
      .then(response => {
        // Handle the response from the server
        setClientData(response.data);
        console.log(response)
      })
      .catch(error => {
        // Handle errors
      });
  }, [10]);
  console.log(clientdata);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Client Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/addclient" className="btn btn-success">
              Add client (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {clientdata && 
                clientdata.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.telephone}</td>
                    <td>{item.status === true ? "Active" : "Inactive"}</td>
                    {/* <td>                    {item.status === true ? (
                      <i className="bi bi-lightbulb text-success align-middle"></i>
                    ) : (
                      <i className="bi bi-lightbulb-off align-middle"></i>
                    )}</td> */}
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={(e) => {
                          e.preventDefault()
                          Removefunction(item.id)
                         
                          
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientList ;
