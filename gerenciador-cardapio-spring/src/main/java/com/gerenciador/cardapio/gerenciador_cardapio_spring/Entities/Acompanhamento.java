package com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
public class Acompanhamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter // cria o metodo get sozinho
    private long id;

    @Getter
    private String nome;

}