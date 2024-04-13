package com.vinay.emsbackend.service;

import com.vinay.emsbackend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    EmployeeDto saveEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployeeById(Long employeeId, EmployeeDto employeeDto);

    void deleteEmployeeById(Long employeeId);

}
