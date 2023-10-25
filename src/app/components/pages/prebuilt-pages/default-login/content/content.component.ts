import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  closeResult: string;
  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router
  ) { }
  open(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-min' });
  }
  loginForm: FormGroup;

  ngOnInit(): void {
    // Login Form
    this.loginForm = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
  }
  async onSubmit() {
    try {
      const valid = await this.authService.login(this.loginForm.value);
      if(valid === 'login-success') {
        this.router.navigateByUrl('dashboard/home');
      }

    } catch (err) {
      console.log(err);

    }
  }

}
