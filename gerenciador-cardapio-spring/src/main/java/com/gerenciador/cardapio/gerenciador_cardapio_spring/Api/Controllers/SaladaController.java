package com.gerenciador.cardapio.gerenciador_cardapio_spring.Api.Controllers;
import com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities.Salada;
import com.gerenciador.cardapio.gerenciador_cardapio_spring.Infrastructure.Repository.SaladaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/salada")
public class SaladaController {
    private final SaladaRepository _saladaRepository;
    public SaladaController(SaladaRepository saladaRepository){
        this._saladaRepository = saladaRepository;
    }

    @GetMapping
    public List<Salada> getAll(){
        return  _saladaRepository.findAll();
    }
}
