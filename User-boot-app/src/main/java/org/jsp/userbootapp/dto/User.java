package org.jsp.userbootapp.dto;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data

public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
//	@Column( nullable = false)
	private String name;
//	@Column(unique = true , nullable = false)
	private long phone;
//	@Column(unique = true , nullable = false)
	private String email;
//	@Column( nullable = false)
	private String password;
	@OneToMany(mappedBy = "users")
	private List<Product> products;
	
	

}
