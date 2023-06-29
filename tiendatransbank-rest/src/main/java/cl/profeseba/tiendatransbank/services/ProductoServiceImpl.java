package cl.profeseba.tiendatransbank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.profeseba.tiendatransbank.entities.Producto;
import cl.profeseba.tiendatransbank.repositories.ProductosRepository;

@Service
public class ProductoServiceImpl implements ProductoService {

	@Autowired
	private ProductosRepository prodRep;
	
	@Override
	public Producto save(Producto p) {
		// TODO Auto-generated method stub
		return prodRep.save(p);
	}

	@Override
	public List<Producto> getAll() {
		// TODO Auto-generated method stub
		return prodRep.findAll();
	}

}
