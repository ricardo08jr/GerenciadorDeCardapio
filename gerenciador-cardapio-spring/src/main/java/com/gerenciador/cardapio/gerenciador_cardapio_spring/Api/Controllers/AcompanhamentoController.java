package com.gerenciador.cardapio.gerenciador_cardapio_spring.Api.Controllers;

import com.gerenciador.cardapio.gerenciador_cardapio_spring.Entities.Acompanhamento;
import com.gerenciador.cardapio.gerenciador_cardapio_spring.Infrastructure.Repository.AcompanhamentoRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController// ela compões mais dois decorators
// @Controller
// @ResponseBody
@RequestMapping("/acompanhamento")
public class AcompanhamentoController {
    private final AcompanhamentoRepository _acompanhamentoRepository;

    public AcompanhamentoController(AcompanhamentoRepository acompanhamentoRepository){
        this._acompanhamentoRepository = acompanhamentoRepository;
    }
    @GetMapping
    public List<Acompanhamento> getAll(){
        return _acompanhamentoRepository.findAll();
    }
}
