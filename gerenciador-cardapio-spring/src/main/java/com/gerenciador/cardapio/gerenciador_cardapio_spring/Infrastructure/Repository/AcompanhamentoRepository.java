package com.gerenciador.cardapio.gerenciador_cardapio_spring.Infrastructure.Repository;

import com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities.Acompanhamento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
// findAll()	busca todos os registros
// findById(id)	busca por id
// save(entity)	salva ou atualiza
// deleteById(id)	deleta por id
// count()	conta registros
public interface AcompanhamentoRepository extends JpaRepository<Acompanhamento, Long> {

}