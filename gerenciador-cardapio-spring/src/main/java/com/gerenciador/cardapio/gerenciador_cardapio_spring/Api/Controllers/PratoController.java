package com.gerenciador.cardapio.gerenciador_cardapio_spring.Api.Controllers;

import com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities.Prato;
import com.gerenciador.cardapio.gerenciador_cardapio_spring.Infrastructure.Repository.PratoRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/prato")
public class PratoController {
    private final PratoRepository _pratoRepository;
    public PratoController(PratoRepository pratoRepository){
        this._pratoRepository = pratoRepository;
    }

    @GetMapping
    public List<Prato> getAll(){
        return _pratoRepository.findAll();
    }
}
