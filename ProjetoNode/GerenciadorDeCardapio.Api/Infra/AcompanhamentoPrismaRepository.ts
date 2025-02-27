import { Acompanhamento } from "../Domain/Entities/Acompanhamento";
import { IAcompanhamentoRepository } from "./interfaces/IAcompanhamentoRepository";
import { prisma } from "./prisma";
export class AcompanhamentoPrismaRepository implements IAcompanhamentoRepository{
    async getAcompanhamentoById(id: number):Promise<Acompanhamento | null> {
        const data = await prisma.acompanhamento.findUnique({
            where: {
                cd_acompanhamento: id
            }
            
        });
        const acompanhamento = data == null? data : new Acompanhamento(data.cd_acompanhamento,data.nm_acompanhamento)
        return acompanhamento
    }
    async getAllAcompanhamento():Promise<Acompanhamento[]> {
        const data = await prisma.acompanhamento.findMany()
        return  data.map(data => new Acompanhamento(data.cd_acompanhamento,data.nm_acompanhamento))
    }

}