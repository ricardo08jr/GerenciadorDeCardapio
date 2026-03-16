package com.gerenciador.cardapio.gerenciador_cardapio_spring.Api.Controllers;

import com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities.Cardapio;
import com.gerenciador.cardapio.gerenciador_cardapio_spring.Infrastructure.Repository.CardapioRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/cardapio")
public class CardapioController {
    private final CardapioRepository _cardapioRepository;

    public CardapioController(CardapioRepository cardapioRepository){
        this._cardapioRepository = cardapioRepository;
    }

    @GetMapping
    public List<Cardapio> getAll(){
        return this._cardapioRepository.findAll();
    }

    @PostMapping
    public Cardapio createCardapio(@RequestBody Cardapio cardapio) {
        return this._cardapioRepository.save(cardapio);
    }
}
