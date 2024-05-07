package com.ibm.springboot.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ibm.springboot.demo.model.Employee;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {

	// no need to define methods for basic CRUD operations

	// you may need to define methods for other business operations -
//	findByFirstName
//	findBySalary
//	findBySalaryGreaterThan

	public abstract List<Employee> findByFirstName(String firstName);

//	documentation :
//	https://docs.spring.io/spring-data/mongodb/reference/repositories/query-methods-details.html
//	https://docs.spring.io/spring-data/jpa/docs/3.1.3/reference/html/#repository-query-keywords

}