package com.gerenciador.cardapio.gerenciador_cardapio_spring.Api.Controllers;

import com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities.Proteina;
import com.gerenciador.cardapio.gerenciador_cardapio_spring.Infrastructure.Repository.ProteinaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/proteina")
public class ProteinaController {
    private final ProteinaRepository _proteinaRepository;

    public ProteinaController(ProteinaRepository proteinaRepository){
        this._proteinaRepository = proteinaRepository;
    }

    @GetMapping
    public List<Proteina> getAll(){
        return _proteinaRepository.findAll();
    }
}
