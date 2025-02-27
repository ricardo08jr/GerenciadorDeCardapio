import { FastifyInstance } from "fastify";
import { IAcompanhamentoRepository } from "../Infra/interfaces/IAcompanhamentoRepository";
import { request } from "http";
import {AcompanhamentoDTO } from "../../GerenciadorDeCardapio.Models/Dtos/Models/AcompanhamentoDto"
import { z } from 'zod';
export class AcompanhamentoController{
    private _repository:IAcompanhamentoRepository
    constructor(repository:IAcompanhamentoRepository){
        this._repository = repository
    }
    getSalada = async (app:FastifyInstance) => {
        app.get('/acompanhamento', async (request,reply) =>{
            const acompanhamentos = await this._repository.getAllAcompanhamento()
            const acompanhamentosDto = acompanhamentos.map(a => new AcompanhamentoDTO(a))
            return reply.status(200).send(acompanhamentosDto)
        })
        app.get('/acompanhamento/:id',async (request,reply) =>{
            const params = z.object({
                id : z.string()
            })
           const { id } = params.parse(request.params)
           const acompanhamento = await this._repository.getAcompanhamentoById(Number(id))
           const acompanhamentoDto = acompanhamento == null?null: new AcompanhamentoDTO(acompanhamento)
           return reply.status(200).send(acompanhamentoDto)
        })
    }
}