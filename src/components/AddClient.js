import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddClient = () => {
  const [id, idchange] = useState("");
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setPhone] = useState("");
  const [last_name, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState(true);
  const [postal_code, setPostalCode] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const clientdata = {
      first_name,
      last_name,
      telephone,
      email,
      status,
      street,
      postal_code,
      city,
      country,
    };

    console.log("clientdata", clientdata);

    try {
      const response = await axios.post(
        "http://localhost:8000/addclient",
        clientdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response)

      if (response.status === 200) {
        alert("Saved successfully.");
      } else {
        console.log("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Create new client</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        required
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control"
                      ></input>
                      <label>Last Name</label>
                      <input
                        required
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control"
                      ></input>
                      {/* {name.length == 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )} */}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        value={telephone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Street</label>
                      <input
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Postal code</label>
                      <input
                        value={postal_code}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={status}
                        onChange={(e) => setStatus(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
