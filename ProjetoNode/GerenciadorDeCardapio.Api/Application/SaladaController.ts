import { FastifyInstance } from "fastify";
import { z } from 'zod';
import {SaladaDTO } from "../../GerenciadorDeCardapio.Models/Dtos/Models/SaladaDto"
import { request } from "http";
import { ISaladaRepository } from "../Infra/interfaces/ISaladaRepository";
export class SaladaController{
    private repository:ISaladaRepository
    constructor(repository: ISaladaRepository) {
          this.repository = repository;
          
        }
        getSalada = async (app: FastifyInstance) => {
            app.get('/salada', async (request, reply) => {
                // Adicionar await para garantir que a Promise seja resolvida
                const salads = await this.repository.getAllSalada();
                const saladsDTO = salads.map(s => new SaladaDTO(s))
                return reply.status(200).send(saladsDTO);
            });
            app.get('/salada/:id', async (request, reply) => {
                // Adicionar await para garantir que a Promise seja resolvida
                const params = z.object({
                    id: z.string()
                })
                const {id} = params.parse(request.params)
                const salad = await this.repository.getSaladaById(Number(id));
                const saladDto = salad?new SaladaDTO(salad):null
                return reply.status(200).send(salad);
            });
        };
}