package com.ibm.springboot.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("hello")
public class HelloController {

//	http://localhost:8080/hello/get-data

	@GetMapping("get-data")
	public String hi() {
		System.out.println("Hello!");
		return "Hello world!";
	}

}

//package com.ibm.springboot.demo.controller;
//
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.service.annotation.DeleteExchange;
//
//@RestController
//@RequestMapping("hello")
//public class HelloController {
//
//
////	HelloController
//
//	// http://localhost:8080/hi
//
////	@RequestMapping("")
////	@PostMapping("aaa")
////	@PutMapping("aaa")
////	@DeleteMapping("aaa")
//
////	http://localhost:8080/hello/get-data
//
//	@GetMapping("get-data")
//	public String hi() {
//		System.out.println("Hello!");
//		return "Hello world!";
//	}
//
//	@GetMapping("abc")
//	public String hi2() {
//		System.out.println("Hello2!");
//		return "Hello world2!";
//	}
//
//}