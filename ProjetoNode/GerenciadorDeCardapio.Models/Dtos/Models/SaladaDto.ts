import { Salada } from "../../../GerenciadorDeCardapio.Api/Domain/Entities/Salada";

export class SaladaDTO {
    cd_salada: number;
    nm_salada: string | null;
  
    constructor(salada:Salada) {
      this.cd_salada = salada.getCdSalada();
      this.nm_salada = salada.getNmSalada();
    }
  }