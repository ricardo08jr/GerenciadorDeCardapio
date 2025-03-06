import { PratoDTO } from "../../GerenciadorDeCardapio.Models/Dtos/Models/PratoDto";
import { Prato } from "../Domain/Entities/Prato";
import { IPratoRepository } from "./interfaces/IPratoRepository";
import { prisma } from "./prisma";
import { Proteina } from "../Domain/Entities/Proteina";
import { Salada } from "../Domain/Entities/Salada";
import { Acompanhamento } from "../Domain/Entities/Acompanhamento";
export class PratoPrismaRepository implements IPratoRepository{
    async getAllPrato(): Promise<Prato[]> {
        const data = await prisma.prato.findMany({
            include: {
                proteina: true,
                acompanhamento: true,
                salada: true
            }
        });

        return data.map(pratoData => {
            let proteina = null
            let salada = null
            let acompanhamento = null
            if( pratoData.proteina){
                 proteina = new Proteina(
                    pratoData.proteina.cd_proteina,
                    pratoData.proteina.nm_proteina
                );
            }
            if(pratoData.acompanhamento){
                acompanhamento = new Acompanhamento(
                    pratoData.acompanhamento.cd_acompanhamento,
                    pratoData.acompanhamento.nm_acompanhamento
                );
            }
            if(pratoData.salada)
            {
                 salada = new Salada(
                    pratoData.salada.cd_salada,
                    pratoData.salada.nm_salada
                );
     
            } 

            return new Prato(
                pratoData.cd_prato,
                proteina,
                pratoData.nm_detalhe,
                acompanhamento,
                salada
            );
        });
    }
   
    async createPrato(prato: PratoDTO): Promise<Prato> {
        const pratoData = await prisma.prato.create({
            data: prato,
            include: {
                proteina: true,
                acompanhamento: true,
                salada: true
            }
        })
        let proteina = null
            let salada = null
            let acompanhamento = null
            if( pratoData.proteina){
                 proteina = new Proteina(
                    pratoData.proteina.cd_proteina,
                    pratoData.proteina.nm_proteina
                );
            }
            if(pratoData.acompanhamento){
                acompanhamento = new Acompanhamento(
                    pratoData.acompanhamento.cd_acompanhamento,
                    pratoData.acompanhamento.nm_acompanhamento
                );
            }
            if(pratoData.salada)
            {
                 salada = new Salada(
                    pratoData.salada.cd_salada,
                    pratoData.salada.nm_salada
                );
     
            } 

            return new Prato(
                pratoData.cd_prato,
                proteina,
                pratoData.nm_detalhe,
                acompanhamento,
                salada
            );
        
        
    }

}