package com.sicpa.employees.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sicpa.employees.excepciones.ResourceNotFoundException;
import com.sicpa.employees.modelo.Empresa;
import com.sicpa.employees.repositorio.EmpresaRepositorio;

@RestController
@RequestMapping("/api/v3/")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class EmpresaControlador {

	
	@Autowired
	private EmpresaRepositorio repositorio;
	
 	@GetMapping("/empresas")
	public List<Empresa> listarTodosLasEmpresa(){
		return repositorio.findAll();
	}
	
	@PostMapping("/empresas")
	public Empresa guardarEmpresa(@RequestBody Empresa empresa) {
		return repositorio.save(empresa);
	}

	@GetMapping("/empresas/{id}")
	public ResponseEntity<Empresa> obtenerEmpresaPorId(@PathVariable Long id){
		Empresa empresa = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el Empresa con el ID : "+id));
		return ResponseEntity.ok(empresa);
	}
	
	@PutMapping("/empresas/{id}")
	public ResponseEntity<Empresa> actualizarEmpresa(@PathVariable Long id,@RequestBody Empresa detallesEmpresa){
		Empresa empresa = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el Empresa con el ID : " + id));
		
		empresa.setNombre(detallesEmpresa.getNombre());
		empresa.setDireccion(detallesEmpresa.getDireccion());
		empresa.setTelefono(detallesEmpresa.getTelefono());
		empresa.setEstado(detallesEmpresa.getEstado());
		
		Empresa empresaActualizado = repositorio.save(empresa);
		return ResponseEntity.ok(empresaActualizado);
    }
	
	@DeleteMapping("/empresas/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarEmpresa(@PathVariable Long id){
		Empresa empresa = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el Empresa con el ID : " + id));
		
		repositorio.delete(empresa);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }
	
	
	
}
