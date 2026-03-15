package Domain.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
public class Acompanhamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
}