import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Toastr
import { ToastrModule } from 'ngx-toastr';

import { ProductosService } from './servicios/productos.service';

import { AppComponent } from './app.component';
import { ProductoFormComponent } from './componentes/productos/producto/producto-form.component';
import { ProductosContainerComponent } from './componentes/productos/productos-container.component';
import { ListaProductosComponent } from './componentes/productos/lista-productos/lista-productos.component';
import { LoadingComponent } from './componentes/loading/loading.component';

import { environment } from '../environments/environment';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoFormComponent,
    ProductosContainerComponent,
    ListaProductosComponent,
    LoadingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ToastrModule.forRoot(environment.toastrConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
