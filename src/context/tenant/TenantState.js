import { useState } from "react";
import tenantContext from "./tenantContext";

const TenantState = (props) => {
  const [tenantData, setTenantData] = useState([]);

  const getTenants = async () => {
    const response = await fetch(
      `${process.env.backend_api}/api/tenants/gettenants`,
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
    setTenantData(json);
  };

  const addTenants = async (
    Tenant_name,
    Tenant_phone,
    Tenant_address,
    Tenant_email,
    Tenant_adhaar,
    Tenant_type,
    Property_address,
    Owner_name,
    Property_type,
    Security,
    Rent
  ) => {
    // TODO: API Call
    // API Call
    const response = await fetch(
      `${process.env.backend_api}/api/tenants/addtenants`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": `${localStorage.getItem('token')}`
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5Njk0NjM4MzIwZTliOTZhN2Y3OGVkIn0sImlhdCI6MTY4NzYwNDY4MX0.MQ-mFy4ArwsKg-n0_XAPI_p3OeyCyTIxylVoiq-BNRo",
        },
        body: JSON.stringify(
          Tenant_name,
          Tenant_phone,
          Tenant_address,
          Tenant_email,
          Tenant_adhaar,
          Tenant_type,
          Property_address,
          Owner_name,
          Property_type,
          Security,
          Rent
        ),
      }
    );

    const tenant = await response.json();
    setTenantData(tenantData.concat(tenant));
  };

  const updateTenants = async (
    id,
    Tenant_name,
    Tenant_phone,
    Tenant_address,
    Tenant_email,
    Tenant_adhaar,
    Tenant_type,
    Property_address,
    Owner_name,
    Property_type,
    Security,
    Rent
  ) => {
    const response = await fetch(
      `${process.env.backend_api}/api/tenants/updatetenants/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": `${localStorage.getItem("token")}`,
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5Njk0NjM4MzIwZTliOTZhN2Y3OGVkIn0sImlhdCI6MTY4NzYwNDY4MX0.MQ-mFy4ArwsKg-n0_XAPI_p3OeyCyTIxylVoiq-BNRo",
        },
        body: JSON.stringify(
          Tenant_name,
          Tenant_phone,
          Tenant_address,
          Tenant_email,
          Tenant_adhaar,
          Tenant_type,
          Property_address,
          Owner_name,
          Property_type,
          Security,
          Rent
        ),
      }
    );

    const json = await response.json();

    let newTenant = JSON.parse(JSON.stringify(tenantData));
    for (let index = 0; index < newTenant.length; index++) {
      const element = newTenant[index];
      if (element._id === id) {
        newTenant[index].Tenant_name = Tenant_name;
        newTenant[index].Tenant_phone = Tenant_phone;
        newTenant[index].Tenant_address = Tenant_address;
        newTenant[index].Tenant_email = Tenant_email;
        newTenant[index].Tenant_adhaar = Tenant_adhaar;
        newTenant[index].Tenant_type = Tenant_type;
        newTenant[index].Property_address = Property_address;
        newTenant[index].Owner_name = Owner_name;
        newTenant[index].Property_type = Property_type;
        newTenant[index].Security = Security;
        newTenant[index].Rent = Rent;
      }
    }

    setTenantData(newTenant);
  };

  const deleteTenants = async (id) => {
    const response = await fetch(
      `${process.env.backend_api}/api/tenants/deletetenants/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // "auth-token":  `${localStorage.getItem('token')}`
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5Njk0NjM4MzIwZTliOTZhN2Y3OGVkIn0sImlhdCI6MTY4NzYwNDY4MX0.MQ-mFy4ArwsKg-n0_XAPI_p3OeyCyTIxylVoiq-BNRo",
        },
      }
    );
    const json = await response.json();
    const newTenant = tenantData.filter((tenant) => {
      return tenant._id !== id;
    });
    setTenantData(newTenant);
  };

  return (
    <tenantContext.Provider
      value={{ getTenants, addTenants, updateTenants, deleteTenants }}
    >
      {props.children}
    </tenantContext.Provider>
  );
};
export default TenantState;
