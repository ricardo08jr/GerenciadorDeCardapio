package com.gerenciador.cardapio.gerenciador_cardapio_spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // Porta de Entrada do Spring Boot composto por 3 outros
// @Configuration  define que as classes definem bean
// @EnableAutoCOnfiguration
// ComponentScan -> Permitir que o spring rastrei os componentes
public class GerenciadorCardapioSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(GerenciadorCardapioSpringApplication.class, args);
	}

}
