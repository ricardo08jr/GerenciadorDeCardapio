import { Salada } from "../../Domain/Entities/Salada"

export interface ISaladaRepository{
    
    getSaladaById(cd_proteina:number):Promise<Salada | null>
    getAllSalada():Promise<Salada[]>
    
}