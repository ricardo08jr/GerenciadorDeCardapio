import { ICardapioRepository } from "../Infra/interfaces/ICardapioRepository";
import { ICardapioService } from "../Domain/Services/ICardapioService";
import { FastifyInstance } from "fastify";
import { request } from "node:http";
import { CardapioDTO } from "../../GerenciadorDeCardapio.Models/Dtos/Models/CardapioDto";
export class CardapioController{
    private _repository:ICardapioRepository
    private _cardapioService:ICardapioService
    constructor(repositorio:ICardapioRepository,cardapioService:ICardapioService){
        this._repository = repositorio
        this._cardapioService = cardapioService
    }
    getCardapio = (app:FastifyInstance) => {
        app.get('/cardapio', async (request,reply) =>{
            const list = await this._repository.getAllCardapio()
            const cardapiosDto = list.map(c => new CardapioDTO(c))
            return reply.status(200).send(cardapiosDto)
        })
    }
}