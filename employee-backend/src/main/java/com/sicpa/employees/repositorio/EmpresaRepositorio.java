package com.sicpa.employees.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sicpa.employees.modelo.Empresa;

@Repository
public interface EmpresaRepositorio extends JpaRepository<Empresa, Long>{

}
