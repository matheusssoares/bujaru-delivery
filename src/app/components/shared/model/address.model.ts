export interface Endereco {
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    endereco: string;
    numero: string;
    complemento?: string;
    pontoRef?: string;
}