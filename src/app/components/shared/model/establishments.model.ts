import { Endereco } from "./address.model";
import { StoreInfo } from "./store-info.model";

export interface Estabelecimentos {
    nomeProprietario: string;
    emailProprietario: string;
    contatoProprietario: string;
    id?: string;
    endereco: Endereco;
    cpf: string;
    rg: string;
    infoEstabelecimento: StoreInfo;
  }
  