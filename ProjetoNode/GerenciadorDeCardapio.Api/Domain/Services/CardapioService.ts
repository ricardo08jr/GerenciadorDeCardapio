import { CardapioDTO } from "../../../GerenciadorDeCardapio.Models/Dtos/Models/CardapioDto";
import { ICardapioRepository } from "../../Infra/interfaces/ICardapioRepository";
import { IPratoRepository } from "../../Infra/interfaces/IPratoRepository";
import { Cardapio } from "../Entities/Cardapio";
import { ICardapioService } from "./ICardapioService";

export class CardapioService implements ICardapioService{
    private _repository:ICardapioRepository
    private _repositoryPrato:IPratoRepository
    constructor(repositorio:ICardapioRepository, pratoRepositorio:IPratoRepository){
        this._repository = repositorio
        this._repositoryPrato = pratoRepositorio
    }
    validatePrato(id: number | null): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    createPrato(cardapio: CardapioDTO): Promise<Cardapio> {
        throw new Error("Method not implemented.");
    }

}