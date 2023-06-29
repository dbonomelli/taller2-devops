package cl.profeseba.tiendatransbank.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import cl.profeseba.tiendatransbank.entities.Producto;
import cl.profeseba.tiendatransbank.services.ProductoService;

@RestController
@CrossOrigin(origins = "*")
public class ProductosController {

	@Autowired
	private ProductoService prodService;
	
	@GetMapping("/productos")

	public List<Producto> index() {
		return prodService.getAll();
	}
	
	@PostMapping("/producto/add")
	public Producto save(@RequestBody Producto prod) {
		return prodService.save(prod);
	}
	
}
