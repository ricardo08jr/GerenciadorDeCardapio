
import { Cardapio } from "../Entities/Cardapio";
import { CardapioDTO } from "../../../GerenciadorDeCardapio.Models/Dtos/Models/CardapioDto";

export interface ICardapioService{
    validatePrato(id:number | null):Promise<boolean>
    createPrato(cardapio:CardapioDTO):Promise<Cardapio>
}