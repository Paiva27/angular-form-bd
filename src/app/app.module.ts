import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ChartsModule} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { UsuarioService } from './shared/usuario.service';
import { LoginComponent } from './login/login.component';
import { ReitorComponent } from './reitor/reitor.component';
import { HttpClientModule } from '@angular/common/http';
import { AreaComponent } from './usuarios/area/area.component';
import { CursoComponent } from './usuarios/curso/curso.component';
import { DepartamentoComponent } from './usuarios/departamento/departamento.component';
import { QuestaoComponent } from './usuarios/questao/questao.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioComponent,
    LoginComponent,
    ReitorComponent,
    AreaComponent,
    CursoComponent,
    DepartamentoComponent,
    QuestaoComponent,
    ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ChartsModule,
    HttpClientModule,
    
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
