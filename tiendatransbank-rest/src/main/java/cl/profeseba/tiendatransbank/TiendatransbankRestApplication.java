package cl.profeseba.tiendatransbank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class TiendatransbankRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(TiendatransbankRestApplication.class, args);
	}

}
