package org.jsp.practicespringboot.controller;

import org.jsp.practicespringboot.dto.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping(value = "/home")
    public String home() {
        return "welcome to the spring world";
    }
    
    @PostMapping("/sum")
//    @GetMapping("/sum")
    public String getsum(@RequestParam int n1 , @RequestParam int n2)
    {
    	return "the sum of:" + (n1+n2);
    	
    }
    
    @PostMapping("/div")
    public String getdiv(@RequestParam int n1 , @RequestParam int n2)
    {
    	return "the div of:" + (n1/n2);
    }
    
    
    @PostMapping("/multi")
    public String getmulti(@RequestParam int n1 , @RequestParam int n2)
    {
    	return "the multi of:" + (n1*n2);
    }

    
    @PostMapping("/substract")
    public String getsubstract(@RequestParam int n1 , @RequestParam int n2)
    {
    	return "the substract of:" + (n1-n2);
    }

    
    @PostMapping("/modules")
    public String getmodules(@RequestParam int n1 , @RequestParam int n2)
    {
    	return "the modules of:" + (n1%n2);
    }
    
    @GetMapping("/Users")
    public User getUser()
    {
		return new User(1, "yatish" , 952921 , "yatish1234");
    	
    }
    
    @PostMapping("/Users")
    public String printUser(@RequestBody  User u)
    {  
    	System.out.println("id:"+ u.getId());
    	System.out.println("name:"+ u.getName());
    	System.out.println("phone number:"+ u.getPhone());
    	System.out.println("password:"+ u.getPassword());
		return "User details printed";
    	
    }
}

