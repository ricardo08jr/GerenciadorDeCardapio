import { Acompanhamento } from "../../../GerenciadorDeCardapio.Api/Domain/Entities/Acompanhamento";
export class AcompanhamentoDTO {
    cd_acompanhamento: number;
    nm_acompanhamento: string | null;
  
    constructor(acompanhamento: Acompanhamento) {
      this.cd_acompanhamento = acompanhamento.getCdAcompanhamento();
      this.nm_acompanhamento = acompanhamento.getNmAcompanhamento();
    }
  }