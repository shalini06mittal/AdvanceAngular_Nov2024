package com.demo.SpringBootEmployeeNgDemo.filter;



import com.demo.SpringBootEmployeeNgDemo.constants.ApplicationConstants;
import com.demo.SpringBootEmployeeNgDemo.jwt.GenerateToken;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@Slf4j
public class JWTTokenGeneratorFilter extends OncePerRequestFilter {

    @Autowired
    private GenerateToken generateToken;
    /**
     * @param request
     * @param response
     * @param filterChain
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();


        // generate token only if authentication is successful
        if (null != authentication) {
            log.info("JWT Token Generation is in progress "+ authentication.getName());

                String jwt = generateToken.createToken(authentication);
                response.setHeader(ApplicationConstants.JWT_HEADER, jwt);

        }
        filterChain.doFilter(request, response);
    }

    /**
     * This filter should not be invoked if this method returns true
     *
     * @param request current HTTP request
     * @return
     * @throws ServletException
     */
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        return !request.getServletPath().equals("/user");
    }

}
