package com.demo.SpringBootEmployeeNgDemo.rest;


import com.demo.SpringBootEmployeeNgDemo.constants.ApplicationConstants;
import com.demo.SpringBootEmployeeNgDemo.dto.LoginRequestDTO;
import com.demo.SpringBootEmployeeNgDemo.dto.LoginResponseDTO;
import com.demo.SpringBootEmployeeNgDemo.entity.Employee;
import com.demo.SpringBootEmployeeNgDemo.jwt.GenerateToken;
import com.demo.SpringBootEmployeeNgDemo.repo.EmployeeRepo;

import lombok.RequiredArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final EmployeeRepo employeeRepo;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;
    private final Environment env;
    private final GenerateToken generateToken;

    /**
     * {
     * "eid": 3,
     * "ename": "shalini",
     * "email": "s@s.com",
     * "phone": "7777777777",
     * "password": "sha",
     * "address": {
     * "aid": 3,
     * "country": "India",
     * "city": "Delhi",
     * "zipcode": "110001"
     * }
     * }
     */
    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@RequestBody Employee employee) {
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

    //happy@example.com : EazyBytes@54321


    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> apiLogin (@RequestBody LoginRequestDTO loginRequest) {
        String jwt = "";
        System.out.println(loginRequest.email()+" "+ loginRequest.password());
//        Authentication authenticationResponse = UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.email(),
//                loginRequest.password());
        Authentication authenticationResponse =

                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.email(),loginRequest.password()));
        System.out.println(authenticationResponse);
        if(null != authenticationResponse && authenticationResponse.isAuthenticated()) {
            if (null != env) {
                jwt = generateToken.createToken(authenticationResponse);
            }
        }
        return ResponseEntity.status(HttpStatus.OK).header(ApplicationConstants.JWT_HEADER,jwt)
                .body(new LoginResponseDTO(HttpStatus.OK.getReasonPhrase(), jwt));
    }

}
