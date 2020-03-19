import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {MatButtonModule, MatInputModule, MatSelectModule, MatOptionModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {appRoutingModule} from './app.routing';
import { NavComponent } from './pages/nav/nav.component';
import { SideLeftComponent } from './pages/side-left/side-left.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HopDongListComponent,
    BoPhanListComponent,
    PhongBanListComponent,
    NhanSuListComponent,
    UserListComponent,
    TrainingEmpComponent,
    NhanVienCtyComponent,
    NhanVienThuViecComponent,
    TrainingEmpDetailComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    SideLeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    appRoutingModule
  ],
  providers: [AuthGuard,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
