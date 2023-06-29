package cl.profeseba.tiendatransbank.services;

import java.util.List;

import cl.profeseba.tiendatransbank.entities.Producto;

public interface ProductoService {

	public Producto save(Producto p);
	public List<Producto> getAll();
}
