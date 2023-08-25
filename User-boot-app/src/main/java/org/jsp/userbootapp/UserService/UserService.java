package org.jsp.userbootapp.UserService;

import java.util.List;
import java.util.Optional;

import org.jsp.userbootapp.dao.UserDao;
import org.jsp.userbootapp.dto.ResponseStructure;
import org.jsp.userbootapp.dto.User;
import org.jsp.userbootapp.exception.IdNotFoundException;
import org.jsp.userbootapp.exception.InvalidCredentialException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;

@Service
public class UserService {
	@Autowired
	private UserDao dao;
	public ResponseEntity<ResponseStructure<User>> saveUser( User u)
	{  ResponseStructure<User> structure = new ResponseStructure<>();
	   structure.setData(dao.saveUser(u));
	   structure.setMessage("User saved with id:" + u.getId());
	   structure.setStatusCode(HttpStatus.CREATED.value());
	   return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.CREATED);
			
	}
	
	@PutMapping("/users")
	public ResponseEntity<ResponseStructure<User>> updateUser( User u)
	{ResponseStructure<User> structure = new ResponseStructure<>();
	   structure.setData(dao.saveUser(u));
	   structure.setMessage("User updated");
	   structure.setStatusCode(HttpStatus.ACCEPTED.value());
	   return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.ACCEPTED);
		}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<ResponseStructure<User>> findById( int id)
	{    ResponseStructure<User> structure = new ResponseStructure<>();
		Optional<User> recUser = dao.findById(id);
		if(recUser.isPresent())
		{
			structure.setMessage("User found");
		    structure.setData(recUser.get());
		   structure.setStatusCode(HttpStatus.OK.value());
		   return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
		}
			throw new IdNotFoundException();
		
	}
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<ResponseStructure<String>> deleteUser( int id)
	{ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<User> recUser = dao.findById(id);
		if(recUser.isPresent())
		{
			structure.setMessage("User deleted");
		    structure.setData("user found");
		   structure.setStatusCode(HttpStatus.OK.value());
		   dao.deleteUser(id);
		   return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
			
		}
		structure.setMessage("User not deleted");
	    structure.setData("user not found");
	   structure.setStatusCode(HttpStatus.NOT_FOUND.value());
	   return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.NOT_FOUND);
		
	}
	
	public ResponseEntity<ResponseStructure<List<User>>> findAll()
	{
	   ResponseStructure<List<User>> structure = new ResponseStructure<>();
	   structure.setData(dao.findAll());
	   structure.setMessage("list of all Users");
	   structure.setStatusCode(HttpStatus.OK.value());
		return  new ResponseEntity<ResponseStructure<List<User>>>(structure, HttpStatus.OK);
		
	}
	public ResponseEntity<ResponseStructure<User>> verifyUser(long phone , String password){
		ResponseStructure<User> structure = new ResponseStructure<>();
		Optional<User> recUser = dao.verifyUser(phone, password);
		if(recUser.isPresent()){
			structure.setData(recUser.get());
			structure.setMessage("user verified successfully");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.OK);
		}
		throw new InvalidCredentialException();
		
	}
	public ResponseEntity<ResponseStructure<User>> verifyUser(String email , String password){
		ResponseStructure<User> structure = new ResponseStructure<>();
		Optional<User> recUser = dao.verifyUser(email, password);
		if(recUser.isPresent()){
			structure.setData(recUser.get());
			structure.setMessage("user verified successfully");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.OK);
		}
		throw new InvalidCredentialException();
		
	}
	

}
