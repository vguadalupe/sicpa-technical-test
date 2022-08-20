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
import com.sicpa.employees.modelo.Departamento;
import com.sicpa.employees.repositorio.DepartamentoRepositorio;

@RestController
@RequestMapping("/api/v2/")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class DepartamentoControlador {

	@Autowired
	private DepartamentoRepositorio repositorio;
	
	@GetMapping("/departamentos")
	public List<Departamento> listarTodosLosDepartamentos(){
		return repositorio.findAll();
	}
	
	@PostMapping("/departamentos")
	public Departamento guardarDepartamento(@RequestBody Departamento departamento) {
		return repositorio.save(departamento);
	}

	@GetMapping("/departamentos/{id}")
	public ResponseEntity<Departamento> obtenerDepartamentoPorId(@PathVariable Long id){
		Departamento departamento = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el departamento con el ID : "+id));
		return ResponseEntity.ok(departamento);
	}
	
	@PutMapping("/departamentos/{id}")
	public ResponseEntity<Departamento> actualizarDepartamento(@PathVariable Long id,@RequestBody Departamento detallesDepartamento){
		Departamento departamento = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el Departamento con el ID : " + id));
		
		departamento.setNombre(detallesDepartamento.getNombre());
		departamento.setDescripcion(detallesDepartamento.getDescripcion());
		departamento.setEstado(detallesDepartamento.getEstado());
		departamento.setTelefono(detallesDepartamento.getTelefono());
 		
		Departamento departamentoActualizado = repositorio.save(departamento);
		return ResponseEntity.ok(departamentoActualizado);
    }
	
	@DeleteMapping("/departamentos/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarDepartamento(@PathVariable Long id){
		Departamento departamento = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el departamento con el ID : " + id));
		
		repositorio.delete(departamento);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }
	
}
