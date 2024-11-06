package com.demo.SpringBootEmployeeNgDemo;

import com.demo.SpringBootEmployeeNgDemo.entity.Address;
import com.demo.SpringBootEmployeeNgDemo.entity.Employee;
import com.demo.SpringBootEmployeeNgDemo.repo.EmployeeRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SpringBootEmployeeNgDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootEmployeeNgDemoApplication.class, args);
	}

	@Autowired
	private EmployeeRepo employeeRepo;

	@Autowired
	PasswordEncoder passwordEncoder;
	@PostConstruct
	public void generateData(){
		Address a1 = new Address();
		a1.setAid(1);
		a1.setCountry("India");
		a1.setCity("Delhi");
		a1.setZipcode("110001");

		Employee e1 = new Employee();
		e1.setEid(1);
		e1.setEname("John");
		e1.setEmail("j@j.com");
		e1.setPassword(passwordEncoder.encode("1234"));
		e1.setPhone("1234567890");
		e1.setAddress(a1);
		employeeRepo.save(e1);

		Address a2 = new Address();
		a2.setAid(2);
		a2.setCountry("India");
		a2.setCity("Pune");
		a2.setZipcode("110001");

		Employee e2 = new Employee();
		e2.setEid(2);
		e2.setEname("Jane");
		e2.setEmail("jane@j.com");
		e2.setPassword(passwordEncoder.encode("5678"));
		e2.setPhone("9999999999");
		e2.setAddress(a2);
		employeeRepo.save(e2);
	}




}
