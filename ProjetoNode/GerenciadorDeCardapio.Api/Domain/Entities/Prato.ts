import { Proteina } from "./Proteina";
import { Acompanhamento } from "./Acompanhamento";
import { Salada } from "./Salada";
export class Prato {
    private cd_prato: number;
    private proteina: Proteina | null;
    private nm_detalhe: string | null;
    private acompanhamento: Acompanhamento | null;
    private salada: Salada | null;
  
    constructor(
      cd_prato: number,
      proteina: Proteina | null,
      nm_detalhe: string | null,
      acompanhamento: Acompanhamento | null ,
      salada: Salada | null
    ) {
      this.cd_prato = cd_prato;
      this.proteina = proteina;
      this.nm_detalhe = nm_detalhe;
      this.acompanhamento = acompanhamento;
      this.salada = salada;
    }
  
    getCdPrato(): number {
      return this.cd_prato;
    }
  
    getProteina(): Proteina | null {
      return this.proteina;
    }
  
    getNmDetalhe(): string | null {
      return this.nm_detalhe;
    }
  
    getAcompanhamento(): Acompanhamento | null {
      return this.acompanhamento;
    }
  
    getSalada(): Salada | null {
      return this.salada;
    }
  
    setNmDetalhe(nm_detalhe: string): void {
      this.nm_detalhe = nm_detalhe;
    }
  }