import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.scss']
})
export class UserPerfilComponent implements OnInit {
  currentUser: Object = {};

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
  }

  ngOnInit() { }
}