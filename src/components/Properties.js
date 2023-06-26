import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import propertyContext from "../context/property/propertyContext";

const Properties = () => {
  const context = useContext(propertyContext);
  const { propertyData, getProperties } = context;
  const navigate = useNavigate();


  const handleButtonClick = (id) => {
    navigate(`/properties/edit/${id}`)
  };


  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className="properties">
      {console.log(propertyData, "data")}
      {/* {propertyData === undefined && 'No notes to display'} */}
      <div className="properties-header">
        <div className="properties-header-title">
          <p>Properties</p>
        </div>
        <div className="properties-search-container">
          <form action="/">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i className="fa fa-search" style={{ color: "#230750" }}></i>
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

        <Link to="/properties/add" style={{ textDecoration: "none" }}>
          <button className="add_property_btn">Add +</button>
        </Link>
      </div>
      <div className="properties-table">
        <div className="property-wrapper">
          {propertyData.map((property) => {
            return (
              <div key={property.id} className="property-wrapper-child">
                <div key={property.id}  className="column property-details-child">
                  {/* <p style={{ marginRight: "20px", marginLeft: "5px" }}>1.</p> */}
                  <div key={property.id}  className="property-table-image">
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
                    {property.Property_address}
                  </p>
                </div>
                <div key={property.id} 
                  className="column property-status-table-child"
                  style={{
                    backgroundColor: `${
                      property.Property_status === "vacant" ? "red" : "#39d353"
                    }`,
                  }}
                >
                  <p>{property.Property_status}</p>
                </div>
                <div key={property.id}  className="column property-tenant-name-child">
                  <p style={{ fontSize: "10px" }}>Tenant-name</p>
                  <p>{property.Property_status==="vacant"?"-":`${property.Property_tenant_name}`}</p>
                </div>
                <div key={property.id}  className="column property-owner-name-child">
                  <p style={{ fontSize: "10px" }}>Owner-name</p>
                  <p>{property.Owner_name}</p>
                </div>
                <div key={property.id}  className="column call-tenant-child" style={{cursor:`${property.Property_status==="vacant"?"not-allowed":"pointer"}`}}>
                  <p style={{ fontSize: "10px" }}>Call Tenant</p>
                  <i
                    className="fa-solid fa-phone"
                    style={{
                      color: `${property.Property_status==="vacant"?"#dadada":"#1ec83a"}`,
                      marginTop: "5px",
                      cursor:`${property.Property_status==="vacant"?"not-allowed":"pointer"}`,
                    }}
                  ></i>
                </div>
                <div key={property.id}  className="column call-owner-child">
                  <p style={{ fontSize: "10px" }}>Call owner</p>
                  <i
                    className="fa-solid fa-phone"
                    style={{
                      color: "#1ec83a",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
                {/* <Link key={property.id}  to={{pathname:"/properties/edit",state:property._id}}> */}
                  <div key={property.id} onClick={()=>{handleButtonClick(property._id)}} className="column edit-property">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{
                        color: "#230750",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                {/* </Link> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Properties;
