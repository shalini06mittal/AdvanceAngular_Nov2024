package com.demo.SpringBootEmployeeNgDemo.config;


import com.demo.SpringBootEmployeeNgDemo.entity.Employee;
import com.demo.SpringBootEmployeeNgDemo.repo.EmployeeRepo;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeUserDetailsService implements UserDetailsService {

    private final EmployeeRepo employeeRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("Service "+username);
        Employee employee = employeeRepo.findByEmail(username).orElseThrow(() -> new
                UsernameNotFoundException("User details not found for the user: " + username));


        System.out.println(employee);
        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("USER"));
        return new User(employee.getEmail(), employee.getPassword(),authorities );
    }
}

