import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ClientList = () => {
  const [empdata, empdatachange] = useState();
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/v1/clients/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/clients")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(empdata);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Client Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="client/create" className="btn btn-success">
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
              {empdata &&
                empdata.data.map((item) => (
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
                        onClick={() => {
                          Removefunction(item.id);
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

export default ClientList;
