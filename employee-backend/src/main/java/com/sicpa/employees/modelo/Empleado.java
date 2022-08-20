package com.sicpa.employees.modelo;

 
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
 

@Entity
@Table(name = "employees")
public class Empleado {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	

	@Column(name = "nombre", length = 60, nullable = false)
	private String nombre;

	@Column(name = "apellido", length = 60, nullable = false)
	private String apellido;

	@Column(name = "email", length = 60, nullable = false, unique = true)
	private String email;

	@Column(name = "posicion", length = 60, nullable = false)
	private String posicion;
	
	@Column(name = "edad", length = 60, nullable = false)
	private Integer edad;
	
	@Column(name = "estado", length = 60, nullable = false)
	private String estado;

	
	public Empleado() {

	}


	public Empleado(Long id, String nombre, String apellido, String email, String posicion, Integer edad,
			String estado) {
		super();
		Id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.posicion = posicion;
		this.edad = edad;
		this.estado = estado;
	}


	public Long getId() {
		return Id;
	}


	public void setId(Long id) {
		Id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellido() {
		return apellido;
	}


	public void setApellido(String apellido) {
		this.apellido = apellido;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPosicion() {
		return posicion;
	}


	public void setPosicion(String posicion) {
		this.posicion = posicion;
	}


	public Integer getEdad() {
		return edad;
	}


	public void setEdad(Integer edad) {
		this.edad = edad;
	}


	public String getEstado() {
		return estado;
	}


	public void setEstado(String estado) {
		this.estado = estado;
	}
 
 
	

	
}
