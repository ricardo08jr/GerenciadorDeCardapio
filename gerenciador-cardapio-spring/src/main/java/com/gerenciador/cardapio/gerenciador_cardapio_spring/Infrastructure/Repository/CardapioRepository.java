package com.gerenciador.cardapio.gerenciador_cardapio_spring.Infrastructure.Repository;

import com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities.Cardapio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardapioRepository extends JpaRepository<Cardapio, Long> {

}