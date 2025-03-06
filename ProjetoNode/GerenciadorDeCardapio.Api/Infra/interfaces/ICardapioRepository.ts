import { Cardapio } from "../../Domain/Entities/Cardapio";
import { CardapioDTO } from "../../../GerenciadorDeCardapio.Models/Dtos/Models/CardapioDto"
export interface ICardapioRepository{
    getAllCardapio():Promise<Cardapio[]>
    createCardapio(cardapio:CardapioDTO):Promise<Cardapio>
}