import { useState } from "react";
import propertyContext from "./propertyContext";

const PropertyState = (props) => {
  const [propertyData, setPropertyData] = useState([]);

  const getProperties = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API}/api/properties/getproperties`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token":  `${localStorage.getItem('token')}`
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5Njk0NjM4MzIwZTliOTZhN2Y3OGVkIn0sImlhdCI6MTY4NzYwNDY4MX0.MQ-mFy4ArwsKg-n0_XAPI_p3OeyCyTIxylVoiq-BNRo",
        },
      }
    );
    const json = await response.json();
    // console.log(localStorage.getItem('token',"getNotes"));
    console.log(json);
    setPropertyData(json);
  };

  const addproperties = async (
    Owner_name,
    Owner_phone,
    Owner_address,
    Owner_email,
    Property_address,
    Property_status,
    Property_tenant_name,
    Property_tenant_address,
    Property_tenant_phone,
    Property_tenant_type,
    Property_type,
    Rooms,
    Toilets,
    Electricity,
    Water_supply,
    Security,
    Rent,
    Tenants_count
  ) => {
    // TODO: API Call
    // API Call
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API}/api/properties/addproperty`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": `${localStorage.getItem('token')}`
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5Njk0NjM4MzIwZTliOTZhN2Y3OGVkIn0sImlhdCI6MTY4NzYwNDY4MX0.MQ-mFy4ArwsKg-n0_XAPI_p3OeyCyTIxylVoiq-BNRo",
        },
        body: JSON.stringify(
          Property_status === "cccupied"
            ? {
                Owner_name,
                Owner_phone,
                Owner_address,
                Owner_email,
                Property_address,
                Property_status,
                Property_tenant_name,
                Property_tenant_address,
                Property_tenant_phone,
                Property_tenant_type,
                Property_type,
                Rooms,
                Toilets,
                Electricity,
                Water_supply,
                Security,
                Rent,
                Tenants_count,
              }
            : {
                Owner_name,
                Owner_phone,
                Owner_address,
                Owner_email,
                Property_address,
                Property_status,
                Property_type,
                Rooms,
                Toilets,
                Electricity,
                Water_supply,
                Security,
                Rent,
              }
        ),
      }
    );

    const property = await response.json();
    setPropertyData(propertyData.concat(property));
  };

  const updateProperties = async (
    id,
    Owner_name,
    Owner_phone,
    Owner_address,
    Owner_email,
    Property_address,
    Property_status,
    Property_tenant_name,
    Property_tenant_address,
    Property_tenant_phone,
    Property_tenant_type,
    Property_type,
    Rooms,
    Toilets,
    Electricity,
    Water_supply,
    Security,
    Rent,
    Tenants_count
  ) => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API}/api/properties/updateproperty/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": `${localStorage.getItem("token")}`,
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5Njk0NjM4MzIwZTliOTZhN2Y3OGVkIn0sImlhdCI6MTY4NzYwNDY4MX0.MQ-mFy4ArwsKg-n0_XAPI_p3OeyCyTIxylVoiq-BNRo",
        },
        body: JSON.stringify(
          Property_status === "cccupied"
            ? {
                Owner_name,
                Owner_phone,
                Owner_address,
                Owner_email,
                Property_address,
                Property_status,
                Property_tenant_name,
                Property_tenant_address,
                Property_tenant_phone,
                Property_tenant_type,
                Property_type,
                Rooms,
                Toilets,
                Electricity,
                Water_supply,
                Security,
                Rent,
                Tenants_count,
              }
            : {
                Owner_name,
                Owner_phone,
                Owner_address,
                Owner_email,
                Property_address,
                Property_status,
                Property_type,
                Rooms,
                Toilets,
                Electricity,
                Water_supply,
                Security,
                Rent,
              }
        ),
      }
    );

    const json = await response.json();

    let newProperty = JSON.parse(JSON.stringify(propertyData));

    if (Property_status === "Occupied") {
      for (let index = 0; index < newProperty.length; index++) {
        const element = newProperty[index];
        if (element._id === id) {
          newProperty[index].Owner_name = Owner_name;
          newProperty[index].Owner_phone = Owner_phone;
          newProperty[index].Owner_address = Owner_address;
          newProperty[index].Owner_email = Owner_email;
          newProperty[index].Property_address = Property_address;
          newProperty[index].Property_status = Property_status;
          newProperty[index].Property_tenant_name = Property_tenant_name;
          newProperty[index].Property_tenant_address = Property_tenant_address;
          newProperty[index].Property_tenant_phone = Property_tenant_phone;
          newProperty[index].Property_tenant_type = Property_tenant_type;
          newProperty[index].Property_type = Property_type;
          newProperty[index].Rooms = Rooms;
          newProperty[index].Toilets = Toilets;
          newProperty[index].Electricity = Electricity;
          newProperty[index].Water_supply = Water_supply;
          newProperty[index].Security = Security;
          newProperty[index].Rent = Rent;
        } else {
          newProperty[index].Owner_name = Owner_name;
          newProperty[index].Owner_phone = Owner_phone;
          newProperty[index].Owner_address = Owner_address;
          newProperty[index].Owner_email = Owner_email;
          newProperty[index].Property_address = Property_address;
          newProperty[index].Property_status = Property_status;
          newProperty[index].Property_type = Property_type;
          newProperty[index].Rooms = Rooms;
          newProperty[index].Toilets = Toilets;
          newProperty[index].Electricity = Electricity;
          newProperty[index].Water_supply = Water_supply;
          newProperty[index].Security = Security;
          newProperty[index].Rent = Rent;
        }
      }
    }

    setPropertyData(newProperty);
  };




  const deleteProperties = async (id) =>{
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/properties/deleteproperty/${id}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        // "auth-token":  `${localStorage.getItem('token')}`
        "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5Njk0NjM4MzIwZTliOTZhN2Y3OGVkIn0sImlhdCI6MTY4NzYwNDY4MX0.MQ-mFy4ArwsKg-n0_XAPI_p3OeyCyTIxylVoiq-BNRo",
      },
    });
    const json = await response.json()
    const newProperty = propertyData.filter((property)=>{return property._id!==id})
    setPropertyData(newProperty)
    
  }
  

  return (
    <propertyContext.Provider value={{propertyData,getProperties,addproperties,updateProperties,deleteProperties}}>
      {props.children}
    </propertyContext.Provider>
  );
};
export default PropertyState;
