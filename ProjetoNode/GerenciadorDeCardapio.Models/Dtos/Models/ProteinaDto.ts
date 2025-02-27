import {Proteina} from "../../../GerenciadorDeCardapio.Api/Domain/Entities/Proteina"
export class ProteinaDTO {
    cd_proteina: number;
    nm_proteina: string | null;
  
    constructor(proteina:Proteina) {
      this.cd_proteina = proteina.getCdProteina();
      this.nm_proteina = proteina.getNmProteina();
    }
}