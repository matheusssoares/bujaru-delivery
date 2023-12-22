import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ViewChild } from '@angular/core'
import { ConnectionService } from 'src/app/services/connection.service'
import { Especialidade } from 'src/app/components/shared/model/specialities.model'
import { Observable } from 'rxjs'
import { QueryFn } from '@angular/fire/firestore'
import firebase from 'firebase'
import { Estabelecimentos } from 'src/app/components/shared/model/establishments.model'
import { StatusEstabelecimento } from 'src/app/components/shared/model/enum.model'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  form: FormGroup
  form2: FormGroup
  form3: FormGroup
  step = 1
  $itensSpecialts: Observable<Especialidade[]>
  especialidadeSelecionada: Especialidade
  @ViewChild('nav') nav: any

  constructor(private connectionService: ConnectionService) {}

  ngOnInit(): void {
    this.initForm()
    this.getItens()
  }

  getItens() {
    const queryFn: QueryFn | undefined = (ref) => {
      let query:
        | firebase.firestore.CollectionReference
        | firebase.firestore.Query = ref

      query = query.orderBy('nome', 'asc') // Ordenar por nome em ordem ascendente
      query = query.where('status', '==', true)
      return query
    }

    this.$itensSpecialts = this.connectionService.getItems<Especialidade>(
      'specialties',
      queryFn,
    )
  }

  async initForm() {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required]),
      contato: new FormControl('', [Validators.required]),
    })

    this.form2 = new FormGroup({
      cep: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      numero: new FormControl(''),
      complemento: new FormControl(''),
    })

    this.form3 = new FormGroup({
      nomeEstabelecimento: new FormControl('', [Validators.required]),
      whatsappEstabelecimento: new FormControl('', [Validators.required]),
      especialidade: new FormControl('', [Validators.required]),
      tipoChavePix: new FormControl('', [Validators.required]),
      chavePix: new FormControl('', [Validators.required]),
    })

    const data: Estabelecimentos = {
      nomeProprietario: this.form.value.nome.toLowerCase().toUpperCase(),
      emailProprietario: this.form.value.email.toLowerCase(),
      contatoProprietario: this.form.value.contato,
      cpf: null,
      endereco: {
        cep: this.form2.value.cep,
        estado: this.form2.value.estado.toLowerCase().toUpperCase(),
        cidade: this.form2.value.cidade.toLowerCase().toUpperCase(),
        bairro: this.form2.value.bairro.toLowerCase().toUpperCase(),
        endereco: this.form2.value.endereco.toLowerCase().toUpperCase(),
        numero: this.form2.value.numero,
        complemento: this.form2.value.complemento.toLowerCase().toUpperCase(),
        pontoRef: null,
      },
      infoEstabelecimento: {
        aberto: false,
        aguardandoAprovacao: true,
        avaliacoes: null,
        cnpj: null,
        comentarios: null,
        contatoLoja: null,
        contratoAssinado: false,
        dadosBancarios: {
          chavePix: this.form3.value.chavePix,
          mesmoVinculoProprietarioLoja: true,
          tipoChavePix: this.form3.value.tipoChavePix,
        },
        especialidade: this.especialidadeSelecionada,
        fotoCapa: '',
        fotoRestaurante: '',
        horarioAbertura: '',
        horarioFechamento: '',
        nomeLoja: this.form3.value.nomeEstabelecimento
          .toLowerCase()
          .toUpperCase(),
        pedidoMinimo: 0,
        razaoSocial: '',
        seloRecomendado: false,
        status: StatusEstabelecimento.AGUARDANDO_ATIVACAO,
      },
      rg: '',
    }

    /* this.conncetionService.getAllDatas('specialties').subscribe((data) => {
      console.log(data)
    }) */
  }

  ngOnDestroy(): void {}

  onSubmit() {
    switch (this.step) {
      case 1:
        if (this.form.valid) {
          this.step++
          this.nav.select(this.step)
        }
        break

      case 2:
        if (this.form2.valid) {
          this.step++
          this.nav.select(this.step)
        }
        break

      case 3:
        if (this.form3.valid) {
          const data = {
            ...this.form.value,
            ...this.form2.value,
            ...this.form3.value,
          }

          console.log(data)
        }
        break

      default:
        break
    }
  }

  changed(e) {
    this.step = e
  }

  voltar() {
    this.step--
    this.nav.select(this.step)
  }

  onEspecialidadeChange(event: any) {
    this.especialidadeSelecionada = event.target.value
  }
}
