import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public autService: AutenticacionService) { }

  ngOnInit() {
  }

}
