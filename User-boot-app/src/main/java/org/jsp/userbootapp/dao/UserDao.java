package org.jsp.userbootapp.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.userbootapp.dto.User;
import org.jsp.userbootapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.google.protobuf.Option;

@Repository
public class UserDao {
@Autowired

private UserRepository repository;
public  User saveUser(User u) {
	return repository.save(u);
	
}
public  User UpdateUser(User u) {
	return repository.save(u);
	
}
public  Optional<User>findById(int id)
{
	return repository.findById(id);
}

public void deleteUser(int id)
{
	repository.deleteById(id);
}
public List<User> findAll()
{
	return repository.findAll();
}
public Optional<User> verifyUser(long phone , String password)
{
	return repository.verifyUser(phone , password);
}
public Optional<User> verifyUser(String email , String password)
{
	return repository.verifyUser(email , password);
}
}
