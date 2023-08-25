package org.jsp.userbootapp.exception;

public class InvalidCredentialException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public String getMessage() {
		
		return "the email  , phone and password is wrong";
	}

}
