import { Acompanhamento } from "../../Domain/Entities/Acompanhamento";

export interface IAcompanhamentoRepository{
    getAcompanhamentoById(cd_acompanhamento:number):Promise<Acompanhamento | null>
    getAllAcompanhamento(): Promise<Acompanhamento[]>
}