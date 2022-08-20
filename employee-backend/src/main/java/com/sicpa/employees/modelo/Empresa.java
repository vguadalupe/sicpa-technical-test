package com.sicpa.employees.modelo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "enterprises")
public class Empresa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;

	@Column(name = "nombre", length = 60, nullable = false)
	private String nombre;

	@Column(name = "direccion", length = 60, nullable = false)
	private String direccion;
	
	@Column(name = "telefono", length = 60, nullable = false)
	private String telefono;
	
	@Column(name = "estado", length = 60, nullable = false)
	private String estado;
	
	@Column(name = "creado_por", length = 60, nullable = true)
	private String creado_por;
	
	@Column(name = "creado_fecha", length = 60, nullable = true)
	private Date creado_fecha;
	
	@Column(name = "modificado_por", length = 60, nullable = true)
	private String modificado_por;
	
	@Column(name = "modificado_fecha", length = 60, nullable = true)
	private Date modificado_fecha;

	public Empresa() {
		
	}
	public Empresa(Long id, String nombre, String direccion, String telefono, String estado, String creado_por,
			Date creado_fecha, String modificado_por, Date modificado_fecha) {
		super();
		Id = id;
		this.nombre = nombre;
		this.direccion = direccion;
		this.telefono = telefono;
		this.estado = estado;
		this.creado_por = creado_por;
		this.creado_fecha = creado_fecha;
		this.modificado_por = modificado_por;
		this.modificado_fecha = modificado_fecha;
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

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCreado_por() {
		return creado_por;
	}

	public void setCreado_por(String creado_por) {
		this.creado_por = creado_por;
	}

	public Date getCreado_fecha() {
		return creado_fecha;
	}

	public void setCreado_fecha(Date creado_fecha) {
		this.creado_fecha = creado_fecha;
	}

	public String getModificado_por() {
		return modificado_por;
	}

	public void setModificado_por(String modificado_por) {
		this.modificado_por = modificado_por;
	}

	public Date getModificado_fecha() {
		return modificado_fecha;
	}

	public void setModificado_fecha(Date modificado_fecha) {
		this.modificado_fecha = modificado_fecha;
	}
	
	
}
