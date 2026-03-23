package com.gerenciador.cardapio.gerenciador_cardapio_spring.Infrastructure.Repository;

import com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities.Salada;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaladaRepository extends JpaRepository<Salada,Long> {
}
