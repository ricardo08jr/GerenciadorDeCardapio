import { FastifyInstance } from "fastify";
import { IPratoRepository } from "../Infra/interfaces/IPratoRepository";
import { request } from "http";
import { PratoDTO } from "../../GerenciadorDeCardapio.Models/Dtos/Models/PratoDto"
import { z } from 'zod';
import { IPratoService } from "../Domain/Services/IPratoService";
export class PratoController{
    private _repository:IPratoRepository
    private _pratoService:IPratoService
    constructor(repository:IPratoRepository, service:IPratoService){
        this._repository = repository
        this._pratoService = service
    }
    getPrato = async (app:FastifyInstance) => {
        app.get('/prato', async (request,reply) =>{
            const pratos = await this._repository.getAllPrato()
            const pratosDto = pratos.map(p => new PratoDTO(p))
            return reply.status(200).send(pratosDto)
        })
      
    }
    createPrato = async(app:FastifyInstance) => {
        app.put('/prato',async(request,reply) =>{
            try {
                const dto = request.body as PratoDTO;
                const pratoCriado = await this._pratoService.createPrato(dto);
                return reply.status(201).send(pratoCriado);
            } catch (error) {
                if (error instanceof Error) {
                    return reply.status(400).send({ error: error.message });
                }
                return reply.status(500).send({ error: 'Erro interno' });
            }
        })
    }
}