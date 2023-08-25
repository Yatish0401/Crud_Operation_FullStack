package org.jsp.userbootapp.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.userbootapp.dto.Product;
import org.jsp.userbootapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDao {
	@Autowired
	private ProductRepository repository;
	
	public Product saveProduct(Product  product)
	{
		return repository.save(product);
	}
	public Product updateProduct(Product product)
	{
		return repository.save(product);
		
	}
	public Optional<Product> findById(int id)
	{
		return repository.findById(id);
	}
	public boolean deleteProduct(int id)
	{  Optional<Product> recProduct = findById(id);
	if(recProduct.isPresent())
	{
		repository.delete(recProduct.get());
		return true;
	}
	return false;
		
	}
	public List<Product> findProductsByUserId(int id)
	{
		return repository.findProductsByUserId(id);
	}

}
