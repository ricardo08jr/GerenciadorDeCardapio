import { Prato } from "../../../GerenciadorDeCardapio.Api/Domain/Entities/Prato";

export class PratoDTO {
    cd_prato: number;
    cd_proteina: number | null;
    nm_proteina: string | null;
    nm_detalhe: string | null;
    cd_acompanhamento: number | null;
    nm_acompanhamento: string | null;
    cd_salada: number | null;
    nm_salada: string | null;
  
    constructor(
     prato:Prato
    ) {
      const proteina =  prato.getProteina()
      const salada = prato.getSalada()
      const acompanhamento = prato.getAcompanhamento()
      this.cd_prato = prato.getCdPrato();
      this.cd_proteina = proteina? proteina.getCdProteina() : null ;
      this.nm_proteina =  proteina? proteina.getNmProteina() : null ;
      this.nm_detalhe = prato.getNmDetalhe();

      this.cd_acompanhamento = acompanhamento? acompanhamento.getCdAcompanhamento() : null;
      this.nm_acompanhamento = acompanhamento? acompanhamento.getNmAcompanhamento() : null;
      this.cd_salada =salada?salada.getCdSalada():null;
      this.nm_salada = salada?salada.getNmSalada():null;
    }
  }