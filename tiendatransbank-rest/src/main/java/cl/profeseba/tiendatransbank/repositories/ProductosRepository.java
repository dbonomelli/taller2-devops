package cl.profeseba.tiendatransbank.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import cl.profeseba.tiendatransbank.entities.Producto;

public interface ProductosRepository extends MongoRepository<Producto,String> {

}
