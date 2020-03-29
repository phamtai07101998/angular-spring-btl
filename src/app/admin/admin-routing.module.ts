import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HopDongListComponent } from '../danh-muc-hop-dong/hop-dong-list/hop-dong-list.component';
import { BoPhanListComponent } from '../danh-muc-bo-phan/bo-phan-list/bo-phan-list.component';
import { PhongBanListComponent } from '../danh-muc-phong-ban/phong-ban-list/phong-ban-list.component';
import { NhanSuListComponent } from '../quan-ly-ho-so-nhan-su/nhan-su-list/nhan-su-list.component';
import { UserListComponent } from '../quan-ly-user/user-list/user-list.component';
import { TrainingEmpComponent } from '../training-emp/training-emp.component';
import { NhanVienCtyComponent } from '../bao-cao-quan-ly/nhan-vien-cty/nhan-vien-cty.component';
import { NhanVienThuViecComponent } from '../bao-cao-quan-ly/nhan-vien-thu-viec/nhan-vien-thu-viec.component';
import { TrainingEmpDetailComponent } from '../training-emp-detail/training-emp-detail.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            // { path: 'user', component: UserListComponent, canActivate: [AuthGuard] },
            
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModel { }
