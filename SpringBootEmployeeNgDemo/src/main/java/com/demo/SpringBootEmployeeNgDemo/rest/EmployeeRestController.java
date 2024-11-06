package com.demo.SpringBootEmployeeNgDemo.rest;

import com.demo.SpringBootEmployeeNgDemo.constants.ApplicationConstants;
import com.demo.SpringBootEmployeeNgDemo.entity.Employee;
import com.demo.SpringBootEmployeeNgDemo.repo.EmployeeRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
public class EmployeeRestController {


    private final EmployeeRepo employeeRepo;
    private final PasswordEncoder passwordEncoder;


    @GetMapping()
    public List<Employee> getEmployees() {
        return employeeRepo.findAll();
    }
    @GetMapping("/{eid}")
    public ResponseEntity<Map<String, Object>> getEmployeeById(@PathVariable int eid) {
        Map<String, Object> map = new HashMap<>();
        if (employeeRepo.existsById(eid)) {
            map.put("status", "success");
            map.put("employee", employeeRepo.findById(eid));
            return ResponseEntity.ok(map);
        }
        map.put("message", "employee not found");
        return ResponseEntity.badRequest().body(map);
    }
    @PostMapping
    public ResponseEntity<Object> addEmployee(@RequestBody Employee employee) {
        System.out.println(employee);
        Map<String, String> map = new HashMap<>();
        try {
            String hashPwd = passwordEncoder.encode(employee.getPassword());

            employee.setPassword(hashPwd);
            Employee savedEmployee = employeeRepo.save(employee);

            if (savedEmployee.getEid() > 0) {
                map.put("message", "user registered successfully");
                return ResponseEntity.status(HttpStatus.CREATED).
                        body(map);
            } else {
                map.put("message", "user registration failed");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).
                        body(map);
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).
                    body("An exception occurred: " + ex.getMessage());
        }
    }
    @DeleteMapping("/{eid}")
    public ResponseEntity<Object> deleteEmployee(@PathVariable int eid) {
        Map<String, String> map = new HashMap<>();
        if (employeeRepo.existsById(eid)) {
            employeeRepo.deleteById(eid);
            map.put("message", "employee deleted successfully");
            return ResponseEntity.ok(map);
        }
        map.put("message", "employee not found");
        return ResponseEntity.badRequest().body(map);
    }
    @PutMapping
    public Employee updateEmployee(@RequestBody Employee employee) {
        return employeeRepo.save(employee);
    }

}
