import { PratoDTO } from "../../../GerenciadorDeCardapio.Models/Dtos/Models/PratoDto";
import { Acompanhamento } from "../Entities/Acompanhamento";
import { Proteina } from "../Entities/Proteina";
import { Salada } from "../Entities/Salada";
import { IPratoService } from "./IPratoService";
import { ISaladaRepository } from "../../Infra/interfaces/ISaladaRepository";
import { IPratoRepository } from "../../Infra/interfaces/IPratoRepository";
import { IProteinaRepository } from "../../Infra/interfaces/IProteinaRepository";
import { IAcompanhamentoRepository } from "../../Infra/interfaces/IAcompanhamentoRepository";
export class PratoService implements IPratoService{
    private _saladaRepository
    private _pratoRepository
    private _proteinaRepository
    private _acompanhamentoRepository
    constructor(saladaRepository:ISaladaRepository,pratoRepository:IPratoRepository,
        proteinaRepository:IProteinaRepository,acompanhamentoRepository:IAcompanhamentoRepository){
        this._saladaRepository = saladaRepository
        this._pratoRepository = pratoRepository
        this._proteinaRepository = proteinaRepository
        this._acompanhamentoRepository = acompanhamentoRepository
    }
     validateSalada = async (id: number | null) => {
        if(id){
            return await this._saladaRepository.getSaladaById(id) == null?false:true
        }
        else{
            return true
        }
        
    }
    validateProteina = async (id: number | null) => {
        if(id){
            return await this._proteinaRepository.getProteinaById(id) == null?false:true
        }else{
            return true
        }
        
    }
    validateAcompanhamento = async(id: number | null) => {
        if (id){
            return await this._acompanhamentoRepository.getAcompanhamentoById(id) == null?false:true
        }else{
            return true
        }
        
    }
    createPrato = async (dto: PratoDTO) => {
        const validationResults = await Promise.all([
            this.validateProteina(dto.cd_proteina),
            this.validateAcompanhamento(dto.cd_acompanhamento),
            this.validateSalada(dto.cd_salada)
        ]);

        const [isProteinaValid, isAcompanhamentoValid, isSaladaValid] = validationResults;
        
        if (!isProteinaValid || !isAcompanhamentoValid || !isSaladaValid) {
            const errors = [];
            if (!isProteinaValid) errors.push('Proteína inválida');
            if (!isAcompanhamentoValid) errors.push('Acompanhamento inválido');
            if (!isSaladaValid) errors.push('Salada inválida');
            
            throw new Error(`Erro de validação: ${errors.join(', ')}`);
        }

        // Converter DTO para entidade de domínio
        const novoPrato = await this._pratoRepository.createPrato(dto);

        return novoPrato;
    }

}