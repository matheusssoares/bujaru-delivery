import { DadosBancarios } from './bank-data.model'
import { Especialidade } from './specialities.model'

export interface StoreInfo {
  cnpj: string
  razaoSocial: string
  nomeLoja: string
  contatoLoja: string
  especialidade: Especialidade
  dadosBancarios: DadosBancarios
  contratoAssinado: boolean
  status: number
  aberto: boolean
  aguardandoAprovacao: boolean
  fotoRestaurante: string
  fotoCapa: string
  horarioAbertura: string
  horarioFechamento: string
  pedidoMinimo: number
  seloRecomendado: boolean
  avaliacoes: string
  comentarios: string
}
