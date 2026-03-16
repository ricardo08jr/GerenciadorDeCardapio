package com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
public class Prato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Getter
    private String detalhe;

    @ManyToOne
    @JoinColumn(name = "proteina_id")
    @Getter
    private Proteina proteina;

    @ManyToOne
    @JoinColumn(name="acompanhamento_id")
    @Getter
    private Acompanhamento acompanhamento;

    @ManyToOne
    @JoinColumn(name = "salada_id")
    @Getter
    private Salada salada;

}
