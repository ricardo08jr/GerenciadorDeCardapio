import { ISaladaRepository } from "./interfaces/ISaladaRepository";
import { Salada } from "../Domain/Entities/Salada";
import { prisma } from "./prisma";
export class SaladaPrismaRepository implements ISaladaRepository{
    async getSaladaById(id: number):Promise<Salada | null> {
        const data = await prisma.salada.findUnique({
            where: {
                cd_salada: id
            }
         });
         const salada = data == null? null: new Salada(data.cd_salada,data.nm_salada)
         return salada
    }
    async getAllSalada(): Promise<Salada[]> {
        const list =  await prisma.salada.findMany()
        const salads = list.map(salad => new Salada(salad.cd_salada,salad.nm_salada))
        return salads
    }

}