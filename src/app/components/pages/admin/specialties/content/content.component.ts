import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ConnectionService } from 'src/app/services/connection.service'
import { ToastrService } from 'ngx-toastr'
import { Especialidade } from 'src/app/components/shared/model/specialities.model'
import { Observable, Subscription } from 'rxjs'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import Swal from 'sweetalert2'
import { QueryFn } from '@angular/fire/firestore'
import firebase from 'firebase'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  title: string = 'Adicionar tipo de estabelecimento'
  subscription: Array<Subscription> = []
  $itens: Observable<Especialidade[]>
  form: FormGroup
  isFormUpdate: boolean = false
  uidActive: string

  constructor(
    private modalService: NgbModal,
    private connectionService: ConnectionService,
    private toast: ToastrService,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      id: new FormControl(''),
    })

    this.getItens()
  }

  getItens() {
    const queryFn: QueryFn | undefined = (ref) => {
      let query:
        | firebase.firestore.CollectionReference
        | firebase.firestore.Query = ref

      query = query.orderBy('nome', 'asc') // Ordenar por nome em ordem ascendente
      return query
    }

    this.$itens = this.connectionService.getItems<Especialidade>(
      'specialties',
      queryFn,
    )
  }
  getTitleBtn() {
    if (this.isFormUpdate) {
      return 'Atualizar'
    } else {
      return 'Cadastrar'
    }
  }
  open(content: any) {
    this.form.reset('nome')
    this.title = 'Adicionar tipo de estabelecimento'
    this.isFormUpdate = false
    this.modalService.open(content, {
      centered: true,
      windowClass: 'on-load-modal',
    })
  }

  async onSubmit() {
    const validation = await this.connectionService.getData(
      'specialties',
      'nome',
      this.form.value.nome.toLowerCase().toLocaleUpperCase(),
    )
    if (validation) {
      this.toast.remove
      this.toast.error('Nome já existente...', 'Atenção!', {
        positionClass: 'toast-top-right',
        progressBar: true,
      })
    } else {
      const data: Especialidade = {
        dataUpdate: new Date(),
        id: this.isFormUpdate ? this.form.value.id : null,
        nome: this.form.value.nome.toLowerCase().toLocaleUpperCase(),
        status: true,
      }

      if (!this.isFormUpdate) {
        try {
          const insert = await this.connectionService.createData(
            'specialties',
            data,
          )

          if (insert) {
            this.modalService.dismissAll()
            this.toast.remove
            this.toast.success(
              'Tipo de estabelecimento adicionado...',
              'Parabéns!',
              {
                positionClass: 'toast-top-right',
                progressBar: true,
              },
            )
          }
        } catch (err) {
          this.connectionService.errorToast()
        }
      } else {
        try {
          const update = await this.connectionService.updateData(
            'specialties',
            this.form.value.id,
            data,
          )

          if (update) {
            this.modalService.dismissAll()
            this.toast.remove
            this.toast.success(
              'Tipo de estabelecimento atualizado...',
              'Parabéns!',
              {
                positionClass: 'toast-top-right',
                progressBar: true,
              },
            )
          }
        } catch (err) {
          this.connectionService.errorToast()
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach((a) => a.unsubscribe())
  }

  update(content: any, item: Especialidade) {
    this.isFormUpdate = true
    this.title = 'Atualizar tipo de estabelecimento'
    this.uidActive = item.id
    this.form.get('nome').patchValue(item.nome)
    this.form.get('id').patchValue(item.id)
    this.modalService.open(content, {
      centered: true,
      windowClass: 'on-load-modal',
    })
  }

  async remove(item: Especialidade) {
    const sweet = await this.connectionService.confirmDelete(
      'Atenção!',
      'Deseja remover este registro?',
    )

    if (sweet) {
      try {
        const confirmDelete = await this.connectionService.deleteData(
          'specialties',
          item.id,
        )
        debugger
        if (confirmDelete) {
          this.toast.remove
          this.toast.success(
            'Tipo de estabelecimento excluído...',
            'Parabéns!',
            {
              positionClass: 'toast-top-right',
              progressBar: true,
            },
          )
        }
      } catch (err) {
        this.connectionService.errorToast()
      }
    }
  }

  async changeFn(task) {
    const data = {
      status: !task.status,
    }
    await this.connectionService.updateData('specialties', task.id, data)
  }
}
