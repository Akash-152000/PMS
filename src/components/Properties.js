import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Properties = () => {
  return (
    <div className="properties">
      <div className="properties-header">
        <div className="properties-header-title">
          <p>Properties</p>
        </div>
        <div class="properties-search-container">
          <form action="/">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i class="fa fa-search" style={{ color: "#230750" }}></i>
            </button>
          </form>
        </div>
        <div className="header-property-status">
          <label className="property-status">Sort by:</label>
          <select className="status" id="status">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="occupied">Occupied</option>
            <option value="vacant">Vacant</option>
          </select>
        </div>
      </div>
      <div className="properties-table">
        {/* <div className="properties-table-title">
          <div className="column property-details">
            <p>Property details</p>
          </div>
          <div className="column property-status-table">
            <p>Occupied/Vacant</p>
          </div>
          <div className="column property-tenant-name">
            <p>Tenant-name</p>
          </div>
          <div className="column property-owner-name">
            <p>Owner name</p>
          </div>
          <div className="column call-tenant">
            <p>Call Tenant</p>
          </div>
          <div className="column call-owner">
            <p>Call Owner</p>
          </div>
        </div> */}
        <div className="property-wrapper">
          <div className="property-wrapper-child">
            <div className="column property-details-child">
              <p style={{ marginRight: "20px", marginLeft: "5px" }}>1.</p>
              <div className="property-table-image">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <p
                className="table-property-address"
                style={{ marginLeft: "30px" }}
              >
                B/301, Solitaire Heights
              </p>
            </div>
            <div className="column property-status-table-child">
              <p>Occupied</p>
            </div>
            <div className="column property-tenant-name-child">
              <p style={{ fontSize: "10px" }}>Tenant-name</p>
              <p>Kunal Khemu</p>
            </div>
            <div className="column property-owner-name-child">
              <p style={{ fontSize: "10px" }}>Owner-name</p>
              <p>Akash Yadav</p>
            </div>
            <div className="column call-tenant-child">
              <p style={{ fontSize: "10px" }}>Call Tenant</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column call-owner-child">
              <p style={{ fontSize: "10px" }}>Call owner</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <Link to="/properties/edit">
              <div className="column edit-property">
                <i
                  class="fa-solid fa-pen-to-square"
                  style={{
                    color: "#230750",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                ></i>
              </div>
            </Link>
          </div>
          <div className="property-wrapper-child">
            <div className="column property-details-child">
              <p style={{ marginRight: "20px", marginLeft: "5px" }}>2.</p>
              <div className="property-table-image">
                <img
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <p
                className="table-property-address"
                style={{ marginLeft: "30px" }}
              >
                A/301, Star Premier
              </p>
            </div>
            <div
              className="column property-status-table-child"
              style={{ backgroundColor: "#ee5c79" }}
            >
              <p>Vacant</p>
            </div>
            <div className="column property-tenant-name-child">
              <p style={{ fontSize: "10px" }}>Tenant-name</p>
              <p>Arun Kumar</p>
            </div>
            <div className="column property-owner-name-child">
              <p style={{ fontSize: "10px" }}>Owner-name</p>
              <p>Akash Yadav</p>
            </div>
            <div className="column call-tenant-child">
              <p style={{ fontSize: "10px" }}>Call Tenant</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column call-owner-child">
              <p style={{ fontSize: "10px" }}>Call owner</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <Link to="/properties/edit">
              <div className="column edit-property">
                <i
                  class="fa-solid fa-pen-to-square"
                  style={{
                    color: "#230750",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                ></i>
              </div>
            </Link>
          </div>
          <div className="property-wrapper-child">
            <div className="column property-details-child">
              <p style={{ marginRight: "20px", marginLeft: "5px" }}>3.</p>
              <div className="property-table-image">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <p
                className="table-property-address"
                style={{ marginLeft: "30px" }}
              >
                B/601, Daffodils Society
              </p>
            </div>
            <div className="column property-status-table-child">
              <p>Occupied</p>
            </div>
            <div className="column property-tenant-name-child">
              <p style={{ fontSize: "10px" }}>Tenant-name</p>
              <p>Jaykishan singh</p>
            </div>
            <div className="column property-owner-name-child">
              <p style={{ fontSize: "10px" }}>Owner-name</p>
              <p>Akash Yadav</p>
            </div>
            <div className="column call-tenant-child">
              <p style={{ fontSize: "10px" }}>Call Tenant</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column call-owner-child">
              <p style={{ fontSize: "10px" }}>Call owner</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <Link to="/properties/edit">
              <div className="column edit-property">
                <i
                  class="fa-solid fa-pen-to-square"
                  style={{
                    color: "#230750",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                ></i>
              </div>
            </Link>
          </div>
          <div className="property-wrapper-child">
            <div className="column property-details-child">
              <p style={{ marginRight: "20px", marginLeft: "5px" }}>4.</p>
              <div className="property-table-image">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <p
                className="table-property-address"
                style={{ marginLeft: "30px" }}
              >
                D/101, Muskaan Apart
              </p>
            </div>
            <div
              className="column property-status-table-child"
              style={{ backgroundColor: "#ee5c79" }}
            >
              <p>Vacant</p>
            </div>
            <div className="column property-tenant-name-child">
              <p style={{ fontSize: "10px" }}>Tenant-name</p>
              <p>Arvind Kejriwal</p>
            </div>
            <div className="column property-owner-name-child">
              <p style={{ fontSize: "10px" }}>Owner-name</p>
              <p>Akash Yadav</p>
            </div>
            <div className="column call-tenant-child">
              <p style={{ fontSize: "10px" }}>Call Tenant</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column call-owner-child">
              <p style={{ fontSize: "10px" }}>Call owner</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <Link to="/properties/edit">
              <div className="column edit-property">
                <i
                  class="fa-solid fa-pen-to-square"
                  style={{
                    color: "#230750",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                ></i>
              </div>
            </Link>
          </div>
          <div className="property-wrapper-child">
            <div className="column property-details-child">
              <p style={{ marginRight: "20px", marginLeft: "5px" }}>5.</p>
              <div className="property-table-image">
                <img
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <p
                className="table-property-address"
                style={{ marginLeft: "30px" }}
              >
                B/301, Solitaire Heights
              </p>
            </div>
            <div className="column property-status-table-child">
              <p>Occupied</p>
            </div>
            <div className="column property-tenant-name-child">
              <p style={{ fontSize: "10px" }}>Tenant-name</p>
              <p>Kunal Khemu</p>
            </div>
            <div className="column property-owner-name-child">
              <p style={{ fontSize: "10px" }}>Owner-name</p>
              <p>Akash Yadav</p>
            </div>
            <div className="column call-tenant-child">
              <p style={{ fontSize: "10px" }}>Call Tenant</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column call-owner-child">
              <p style={{ fontSize: "10px" }}>Call owner</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column edit-property">
              <i
                class="fa-solid fa-pen-to-square"
                style={{
                  color: "#230750",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
          <div className="property-wrapper-child">
            <div className="column property-details-child">
              <p style={{ marginRight: "20px", marginLeft: "5px" }}>6.</p>
              <div className="property-table-image">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <p
                className="table-property-address"
                style={{ marginLeft: "30px" }}
              >
                B/301, Solitaire Heights
              </p>
            </div>
            <div className="column property-status-table-child">
              <p>Occupied</p>
            </div>
            <div className="column property-tenant-name-child">
              <p style={{ fontSize: "10px" }}>Tenant-name</p>
              <p>Kunal Khemu</p>
            </div>
            <div className="column property-owner-name-child">
              <p style={{ fontSize: "10px" }}>Owner-name</p>
              <p>Akash Yadav</p>
            </div>
            <div className="column call-tenant-child">
              <p style={{ fontSize: "10px" }}>Call Tenant</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column call-owner-child">
              <p style={{ fontSize: "10px" }}>Call owner</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column edit-property">
              <i
                class="fa-solid fa-pen-to-square"
                style={{
                  color: "#230750",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
          <div className="property-wrapper-child">
            <div className="column property-details-child">
              <p style={{ marginRight: "20px", marginLeft: "5px" }}>7.</p>
              <div className="property-table-image">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <p
                className="table-property-address"
                style={{ marginLeft: "30px" }}
              >
                B/301, Solitaire Heights
              </p>
            </div>
            <div className="column property-status-table-child">
              <p>Occupied</p>
            </div>
            <div className="column property-tenant-name-child">
              <p style={{ fontSize: "10px" }}>Tenant-name</p>
              <p>Kunal Khemu</p>
            </div>
            <div className="column property-owner-name-child">
              <p style={{ fontSize: "10px" }}>Owner-name</p>
              <p>Akash Yadav</p>
            </div>
            <div className="column call-tenant-child">
              <p style={{ fontSize: "10px" }}>Call Tenant</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column call-owner-child">
              <p style={{ fontSize: "10px" }}>Call owner</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column edit-property">
              <i
                class="fa-solid fa-pen-to-square"
                style={{
                  color: "#230750",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
          <div className="property-wrapper-child">
            <div className="column property-details-child">
              <p style={{ marginRight: "20px", marginLeft: "5px" }}>8.</p>
              <div className="property-table-image">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <p
                className="table-property-address"
                style={{ marginLeft: "30px" }}
              >
                B/301, Solitaire Heights
              </p>
            </div>
            <div className="column property-status-table-child">
              <p>Occupied</p>
            </div>
            <div className="column property-tenant-name-child">
              <p style={{ fontSize: "10px" }}>Tenant-name</p>
              <p>Kunal Khemu</p>
            </div>
            <div className="column property-owner-name-child">
              <p style={{ fontSize: "10px" }}>Owner-name</p>
              <p>Akash Yadav</p>
            </div>
            <div className="column call-tenant-child">
              <p style={{ fontSize: "10px" }}>Call Tenant</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column call-owner-child">
              <p style={{ fontSize: "10px" }}>Call owner</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column edit-property">
              <i
                class="fa-solid fa-pen-to-square"
                style={{
                  color: "#230750",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
          <div className="property-wrapper-child">
            <div className="column property-details-child">
              <p style={{ marginRight: "20px", marginLeft: "5px" }}>1.</p>
              <div className="property-table-image">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <p
                className="table-property-address"
                style={{ marginLeft: "30px" }}
              >
                B/301, Solitaire Heights
              </p>
            </div>
            <div className="column property-status-table-child">
              <p>Occupied</p>
            </div>
            <div className="column property-tenant-name-child">
              <p style={{ fontSize: "10px" }}>Tenant-name</p>
              <p>Kunal Khemu</p>
            </div>
            <div className="column property-owner-name-child">
              <p style={{ fontSize: "10px" }}>Owner-name</p>
              <p>Akash Yadav</p>
            </div>
            <div className="column call-tenant-child">
              <p style={{ fontSize: "10px" }}>Call Tenant</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column call-owner-child">
              <p style={{ fontSize: "10px" }}>Call owner</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column edit-property">
              <i
                class="fa-solid fa-pen-to-square"
                style={{
                  color: "#230750",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
          <div className="property-wrapper-child">
            <div className="column property-details-child">
              <p style={{ marginRight: "20px", marginLeft: "5px" }}>1.</p>
              <div className="property-table-image">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <p
                className="table-property-address"
                style={{ marginLeft: "30px" }}
              >
                B/301, Solitaire Heights
              </p>
            </div>
            <div className="column property-status-table-child">
              <p>Occupied</p>
            </div>
            <div className="column property-tenant-name-child">
              <p style={{ fontSize: "10px" }}>Tenant-name</p>
              <p>Kunal Khemu</p>
            </div>
            <div className="column property-owner-name-child">
              <p style={{ fontSize: "10px" }}>Owner-name</p>
              <p>Akash Yadav</p>
            </div>
            <div className="column call-tenant-child">
              <p style={{ fontSize: "10px" }}>Call Tenant</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column call-owner-child">
              <p style={{ fontSize: "10px" }}>Call owner</p>
              <i
                class="fa-solid fa-phone"
                style={{
                  color: "#1ec83a",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <div className="column edit-property">
              <i
                class="fa-solid fa-pen-to-square"
                style={{
                  color: "#230750",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
