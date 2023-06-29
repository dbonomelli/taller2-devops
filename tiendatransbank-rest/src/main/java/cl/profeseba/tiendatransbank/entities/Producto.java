package cl.profeseba.tiendatransbank.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import lombok.Setter;

@Document(collection = "productos")
@Getter
@Setter
@ToString
@AllArgsConstructor
public class Producto {

	@Id
	private String id;
	
	private String nombre;
	private String descripcion;
	private int rating;
	private String categoria;
	private int precio = 1000;
	//TODO: Agregar el stock
}
