package com.demo.SpringBootEmployeeNgDemo.repo;

import com.demo.SpringBootEmployeeNgDemo.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
    Optional<Employee> findByEmail(String username);
}
