import { FastifyInstance } from "fastify";
import { z } from 'zod';
import {ProteinaDTO } from "../../GerenciadorDeCardapio.Models/Dtos/Models/ProteinaDto"
import { request } from "http";
import { IProteinaRepository } from "../Infra/interfaces/IProteinaRepository";
export class ProteinaController{
    private repository:IProteinaRepository
    constructor(repository: IProteinaRepository) {
          this.repository = repository;
          
        }
        getProteina = async (app: FastifyInstance) => {
            app.get('/proteina', async (request, reply) => {
                // Adicionar await para garantir que a Promise seja resolvida
                const proteins = await this.repository.getAllProteina();
                const proteinsDTO = proteins.map(p => new ProteinaDTO(p))
                return reply.status(200).send(proteinsDTO);
            });
            app.get('/proteina/:id', async (request, reply) => {
                // Adicionar await para garantir que a Promise seja resolvida
                const params = z.object({
                    id: z.string()
                })
                const {id} = params.parse(request.params)
                const protein = await this.repository.getProteinaById(Number(id));
                const proteinDto = protein?new ProteinaDTO(protein):null
                return reply.status(200).send(protein);
            });
        };
}