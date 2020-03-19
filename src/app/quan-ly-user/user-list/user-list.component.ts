import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { UserRoleService } from '../../service/user-role.service';
import { Observable } from 'rxjs';
import { Users } from 'src/app/model/user';
import { UserRole } from 'src/app/model/user-role';
import { Role } from 'src/app/model/role';
import { RoleService } from 'src/app/service/role.service';
import { error } from 'protractor';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<Users[]>;
  userRoleList: Observable<UserRole[]>;
  roles: Observable<Role[]>;
  userRole: UserRole = new UserRole();
  user: Users = new Users();
  roleSelectd: number;
  role: Role;
  idUser: number;
  idUserRole: number;
  listRole: Role[];

  constructor(private userService: UserService, private router: Router,
    private activatedRouter: ActivatedRoute, private userRoleService: UserRoleService,
    private roleService: RoleService) { }

  ngOnInit() {

    //Tự refresh lại dữ liệu mà không phải load lại trang
    this.userRoleService.refersh.subscribe(
      () => {
        this.load();
      });
    this.load();
    this.loadRole();
  }

  private load() {
    this.users = this.userService.getUserList();
    
  }

  loadRole() {
    this.roles = this.roleService.getRole();
  }

  findUser(id: number) {
    this.userService.getUserId(id).subscribe(
      data => {
        console.log(data); this.user = data
        this.roleSelectd = this.user.userId
      }, error => console.log(error)
    )

    this.idUserRole = id;
  }

  deleteUser(id: number) {
    this.userRoleService.deleteUserRole(id).subscribe(
      data => {
        console.log(data);
      }, error => console.log(error)
    )
    this.load();
  }

  createUser() {
    this.role = new Role();
    this.role.setRoleId = this.roleSelectd;
    this.listRole = new Array();
    this.listRole.push(this.role);
    console.log(this.listRole)
    this.user.setRoles = this.listRole;
    console.log(this.user)
    this.userService.createUser(this.user).subscribe(
      data => {
        console.log(data)
      }, error => console.log(error)
    )

  }

  updateUser() {
    this.role = new Role();
    this.role.setRoleId = this.roleSelectd;
    this.listRole = new Array();
    this.listRole.push(this.role);

    this.user.setRoles = this.listRole;

    this.userService.updateUser(this.idUserRole, this.user).subscribe(
      data => {
        console.log(data)
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.createUser();
  }
}
