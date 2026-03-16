package com.gerenciador.cardapio.gerenciador_cardapio_spring.Infrastructure.Repository;

import com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities.Prato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PratoRepository extends JpaRepository<Prato,Long> {
}
