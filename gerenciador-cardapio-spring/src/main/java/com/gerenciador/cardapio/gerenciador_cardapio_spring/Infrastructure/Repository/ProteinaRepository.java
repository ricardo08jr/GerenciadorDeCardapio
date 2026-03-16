package com.gerenciador.cardapio.gerenciador_cardapio_spring.Infrastructure.Repository;

import com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities.Proteina;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProteinaRepository extends JpaRepository<Proteina, Long> {
}
