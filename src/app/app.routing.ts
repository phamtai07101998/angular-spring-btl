import { Routes, RouterModule, GuardsCheckEnd } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HopDongListComponent } from './danh-muc-hop-dong/hop-dong-list/hop-dong-list.component';
import { BoPhanListComponent } from './danh-muc-bo-phan/bo-phan-list/bo-phan-list.component';
import { PhongBanListComponent } from './danh-muc-phong-ban/phong-ban-list/phong-ban-list.component';
import { NhanSuListComponent } from './quan-ly-ho-so-nhan-su/nhan-su-list/nhan-su-list.component';
import { UserListComponent } from './quan-ly-user/user-list/user-list.component';
import { TrainingEmpComponent } from './training-emp/training-emp.component';
import { NhanVienCtyComponent } from './bao-cao-quan-ly/nhan-vien-cty/nhan-vien-cty.component';
import { NhanVienThuViecComponent } from './bao-cao-quan-ly/nhan-vien-thu-viec/nhan-vien-thu-viec.component';
import { TrainingEmpDetailComponent } from './training-emp-detail/training-emp-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import {AdminModule} from './admin/admin.module';



const routes: Routes = [

  { path: 'contract', component: HopDongListComponent, canActivate: [AuthGuard] },
  { path: 'parts', component: BoPhanListComponent, canActivate: [AuthGuard] },
  { path: 'department', component: PhongBanListComponent, canActivate: [AuthGuard] },
  { path: 'daotao', component: TrainingEmpComponent, canActivate: [AuthGuard] },
  { path: 'nhansu', component: NhanSuListComponent, canActivate: [AuthGuard] },
  { path: 'nhan-vien-cty', component: NhanVienCtyComponent, canActivate: [AuthGuard] },
  { path: 'nhan-vien-thu-viec', component: NhanVienThuViecComponent, canActivate: [AuthGuard] },
  { path: 'daotao/detail/:id', component: TrainingEmpDetailComponent, canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const appRoutingModule = RouterModule.forRoot(routes);