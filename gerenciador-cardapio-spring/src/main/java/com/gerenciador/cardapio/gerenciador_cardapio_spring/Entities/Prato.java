package com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities;

import jakarta.persistence.*;

@Entity
public class Prato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String detalhe;

    @ManyToOne
    @JoinColumn(name = "proteina_id")
    private Proteina proteina;

    @ManyToOne
    @JoinColumn(name="acompanhamento_id")
    private Acompanhamento acompanhamento;

    @ManyToOne
    @JoinColumn(name = "salada_id")
    private Salada salada;

}
