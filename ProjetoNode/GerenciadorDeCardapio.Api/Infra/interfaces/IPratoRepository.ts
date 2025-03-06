import { Prato } from "../../Domain/Entities/Prato";
import { PratoDTO } from "../../../GerenciadorDeCardapio.Models/Dtos/Models/PratoDto"
export interface IPratoRepository{
    getAllPrato():Promise<Prato[]>
    createPrato(prato:PratoDTO):Promise<Prato>
}