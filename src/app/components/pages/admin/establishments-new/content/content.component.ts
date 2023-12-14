import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ViewChild } from '@angular/core'
import { ConnectionService } from 'src/app/services/connection.service'

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
  especialidades: any = []
  @ViewChild('nav') nav: any

  constructor(private conncetionService: ConnectionService) {}

  ngOnInit(): void {
    this.initForm()
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
          console.log('deu certo')
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
}
