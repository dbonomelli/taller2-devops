package cl.profeseba.tiendatransbank.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class RespuestaTransbank {

	private String url;
	private String token;
}
