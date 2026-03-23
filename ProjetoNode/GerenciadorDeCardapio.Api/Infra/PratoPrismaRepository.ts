import { PratoDTO } from "../../GerenciadorDeCardapio.Models/Dtos/Models/PratoDto";
import { Prato } from "../Domain/Entities/Prato";
import { IPratoRepository } from "./interfaces/IPratoRepository";
import { prisma } from "./prisma";
import { Proteina } from "../Domain/Entities/Proteina";
import { Salada } from "../Domain/Entities/Salada";
import { Acompanhamento } from "../Domain/Entities/Acompanhamento";
export class PratoPrismaRepository implements IPratoRepository{
     createInstance = <T>(data: any, Clazz: new (code: number, name: string) => T): T | null => {
        return data ? new Clazz(data[`cd_${Clazz.name.toLowerCase()}`], data[`nm_${Clazz.name.toLowerCase()}`]) : null;
    };
    async getAllPrato(): Promise<Prato[]> {
        
        const data = await prisma.prato.findMany({
            include: {
                proteina: true,
                acompanhamento: true,
                salada: true
            }
        });

       return data.map(pratoData => new Prato(
        pratoData.cd_prato,
        this.createInstance(pratoData.proteina, Proteina),
        pratoData.nm_detalhe,
        this.createInstance(pratoData.acompanhamento, Acompanhamento),
        this.createInstance(pratoData.salada, Salada)
    ));
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
        return  new Prato(
            pratoData.cd_prato,
            this.createInstance(pratoData.proteina, Proteina),
            pratoData.nm_detalhe,
            this.createInstance(pratoData.acompanhamento, Acompanhamento),
            this.createInstance(pratoData.salada, Salada)
        );
        
        
    }

}