package com.sicpa.employees.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sicpa.employees.modelo.Empleado;

@Repository
public interface EmpleadoRepositorio extends JpaRepository<Empleado, Long>{
	

}
