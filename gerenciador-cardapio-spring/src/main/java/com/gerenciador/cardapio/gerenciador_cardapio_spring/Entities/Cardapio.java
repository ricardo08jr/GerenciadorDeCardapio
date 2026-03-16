package com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities;
import jakarta.persistence.*;
import lombok.Getter;

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
    @Getter
    private long id;

    @Getter
    private LocalDateTime data;

    @ManyToOne
    @JoinColumn(name = "prato_id")
    @Getter
    private Prato prato;
}
