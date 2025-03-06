import { Cardapio } from "../../../GerenciadorDeCardapio.Api/Domain/Entities/Cardapio";

export class CardapioDTO {
    dt_cardapio: Date;
    cd_prato: number;
    nm_proteina: string | null = null;
    nm_salada : string | null = null;
    nm_acompanhamento: string | null = null;
    nm_detalhe: string | null = null
  
    constructor(cardapio:Cardapio) {
      const prato = cardapio.getPrato()
      const salada = prato.getSalada()
      const proteina = prato.getProteina()
      const acompanhamento = prato.getAcompanhamento()
      this.dt_cardapio = cardapio.getDtCardapio();
      this.cd_prato = cardapio.getPrato().getCdPrato();
      this.nm_detalhe = cardapio.getPrato().getNmDetalhe()
      if(proteina){
        this.nm_proteina = proteina.getNmProteina()
      }
      if(salada){
        this.nm_salada = salada.getNmSalada()
      }
      if(acompanhamento){
        this.nm_acompanhamento = acompanhamento.getNmAcompanhamento()
      }
      
    }
  }