import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate()

  useEffect(() => {
    getAllEmployees()
  }, []);

  const getAllEmployees = ()=>{
    listEmployees()
      .then((response) => setEmployees(response.data))
      .catch((error) => {
        console.log(error);
      });
  }
  
  const addNewEmployee = ()=>{
    navigator('/addemployee')
  }

  const handleUpdate = (id)=>{
    navigator(`/editemployee/${id}`)
  }

  const handleDelete = (id)=>{
    deleteEmployee(id)
    .then((response)=>{
      console.log(response.data);
      getAllEmployees()
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-5 text-center">Employee List</h1>
        <button className="btn btn-dark mb-3" onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Employee Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button className="btn btn-outline-success ms-3 me-3" onClick={()=>handleUpdate(employee.id)}>Update</button>
                    <button className="btn btn-outline-danger" onClick={()=>handleDelete(employee.id)} >Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
