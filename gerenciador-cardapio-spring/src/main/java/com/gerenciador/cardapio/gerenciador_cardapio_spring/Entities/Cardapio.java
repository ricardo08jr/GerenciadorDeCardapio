package com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(
        name = "cardapio",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"data", "prato_id"})
        }
)
public class Cardapio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDateTime data;

    @ManyToOne
    @JoinColumn(name = "prato_id")
    private Prato prato;
}
