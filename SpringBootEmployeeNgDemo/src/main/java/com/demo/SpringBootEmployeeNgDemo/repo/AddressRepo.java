package com.demo.SpringBootEmployeeNgDemo.repo;

import com.demo.SpringBootEmployeeNgDemo.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepo extends JpaRepository<Address, Integer> {
}
