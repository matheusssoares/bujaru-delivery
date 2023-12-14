import { Component, OnInit } from '@angular/core'
import navigation from '../../../data/navigation.json'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  profile = 3 // 1: Usuário normal (cliente), 2: Estabelecimento (parceiros), 3: Administrador
  public navlist
  constructor() {}
  //public navlist = navigation;
  navToggle = () => {
    document.getElementById('body').classList.toggle('ms-aside-left-open')
    document.getElementById('ms-side-nav').classList.toggle('ms-aside-open')
    document.getElementById('overlayleft').classList.toggle('d-block')
  }

  ngOnInit(): void {
    this.navlist = [
      {
        id: 1,
        linktext: 'Dashboard',
        iconclass: 'material-icons fs-16',
        icon: 'dashboard',
        child: true,
        submenu: [
          {
            id: 1.1,
            linktext: 'Início',
            link: 'dashboard/home',
          },
        ],
      },
      {
        id: 2,
        linktext: 'Gerenciar',
        iconclass: 'fa fa-cog fs-16',
        icon: '',
        child: true,
        submenu: [
          {
            id: 2.1,
            linktext: 'Estabelecimentos',
            link: '../../admin/establishments',
          },
          {
            id: 2.2,
            linktext: 'Entregadores',
            link: 'delivery-men',
          },
          {
            id: 2.3,
            linktext: 'Clientes',
            link: 'client',
          },
          {
            id: 2.4,
            linktext: 'Usuários',
            link: 'users',
          },
        ],
      },
      {
        id: 4,
        linktext: 'Aplicativo',
        iconclass: 'fa fa-mobile fs-16',
        icon: '',
        child: true,
        submenu: [
          {
            id: 4.1,
            linktext: 'Tipos de Estabelecimentos',
            link: '../../admin/specialties',
          },
          {
            id: 4.2,
            linktext: 'Categorias',
            link: 'category',
          },
          {
            id: 4.3,
            linktext: 'Cupons',
            link: 'coupons',
          },
          {
            id: 4.4,
            linktext: 'Dimensões',
            link: 'dimensions',
          },
          {
            id: 4.5,
            linktext: 'Notícias',
            link: 'news',
          },
          {
            id: 4.6,
            linktext: 'Avaliações',
            link: 'assessments',
          },
          {
            id: 4.7,
            linktext: 'Banners',
            link: 'banners',
          },
          {
            id: 4.8,
            linktext: 'Alertas',
            link: 'alerts',
          },
        ],
      },
      {
        id: 5,
        linktext: 'Notificações',
        iconclass: 'fa fa-bell fs-16',
        icon: '',
        child: true,
        submenu: [
          {
            id: 5.1,
            linktext: 'Listar',
            link: 'category',
          },
          {
            id: 4.2,
            linktext: 'Enviar',
            link: 'coupons',
          },
        ],
      },
      {
        id: 6,
        linktext: 'Relatórios & Métricas',
        iconclass: 'fa fa-file fs-16',
        icon: '',
        child: false,
      },
    ]
  }
}
