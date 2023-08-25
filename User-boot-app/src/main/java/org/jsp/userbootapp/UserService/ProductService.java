package org.jsp.userbootapp.UserService;

import java.util.List;
import java.util.Optional;


import org.jsp.userbootapp.dao.ProductDao;
import org.jsp.userbootapp.dao.UserDao;
import org.jsp.userbootapp.dto.Product;
import org.jsp.userbootapp.dto.ResponseStructure;
import org.jsp.userbootapp.dto.User;
import org.jsp.userbootapp.exception.IdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class ProductService {
	@Autowired
	private ProductDao dao;
	@Autowired
	private UserDao userDao;
	
	public ResponseEntity<ResponseStructure<Product>> saveProduct(Product product , int user_id ){
		Optional<User> recUser = userDao.findById(user_id);
		ResponseStructure<Product> structure = new ResponseStructure<>();
		if(recUser.isPresent())
		{
			User u = recUser.get();
			u.getProducts().add(product);
			product.setUsers(recUser.get());
			userDao.UpdateUser(recUser.get());
			dao.saveProduct(product);
			structure.setData(product);
			structure.setMessage("product added successfully");
			structure.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Product>>(structure,HttpStatus.CREATED);
		}
		
		throw new IdNotFoundException();
		
	}
	public ResponseEntity<ResponseStructure<Product>> updateProduct(Product product, int user_id) {
		Optional<User> recUser = userDao.findById(user_id);
		ResponseStructure<Product> structure = new ResponseStructure<>();
		if(recUser.isPresent())
		{
			product.setUsers(recUser.get());
			dao.updateProduct(product);
			structure.setData(product);
			structure.setMessage("product update Successfully");
			structure.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Product>>(structure, HttpStatus.CREATED );
		}
		return null;
	}
	public ResponseEntity<ResponseStructure<Product>> findById( int id ){
		ResponseStructure<Product> structure = new ResponseStructure<>();
		Optional<Product> recProduct = dao.findById(id);
		if(recProduct.isPresent()) {
			structure.setData(recProduct.get());
			structure.setMessage("product Get Successfully");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Product>>(structure,HttpStatus.OK);
		}
		
		throw new IdNotFoundException();
		
	}
    
	
	public ResponseEntity<ResponseStructure<String>> deleteProduct(int id) {
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<Product> recProduct = dao.findById(id);
		if(recProduct.isPresent()) {
			dao.deleteProduct(id);
			structure.setData("product deleted");
			structure.setMessage("product found");
		    structure.setStatusCode(HttpStatus.OK.value());
		    return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.OK);
		}
		return null;
	}
	
	public ResponseEntity<ResponseStructure<List<Product>>> findProductsByUserId(int id)
	{ResponseStructure<List<Product>> structure = new ResponseStructure<>();
	structure.setData(dao.findProductsByUserId(id));
	structure.setMessage("products Found for User Id");
	structure.setStatusCode(HttpStatus.OK.value());
	return new ResponseEntity<ResponseStructure<List<Product>>>(structure, HttpStatus.OK);
		
	}
	
	
	
	
	
}
