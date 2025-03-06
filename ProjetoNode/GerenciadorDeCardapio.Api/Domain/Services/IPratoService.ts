import { Salada } from "../Entities/Salada"
import { Proteina } from "../Entities/Proteina"
import { Acompanhamento } from "../Entities/Acompanhamento"
import { PratoDTO } from "../../../GerenciadorDeCardapio.Models/Dtos/Models/PratoDto"
export interface IPratoService{
     validateSalada(id:number):Promise<boolean>
    validateProteina(id:number):Promise<boolean>
    validateAcompanhamento(id:number):Promise<boolean>
    createPrato(prato:PratoDTO):any
}