package cl.profeseba.tiendatransbank.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Document(collection = "ventas")
@Getter
@Setter
@ToString
public class Venta {

	@Id
	private String id;
	private int total;
	private String estado;
}
