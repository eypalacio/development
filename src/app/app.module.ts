import { LOCALE_ID, NgModule } from '@angular/core';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(es);

import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MensajesComponent } from './mensajes/mensajes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
// import { SwiftComponent } from './modals/swift/swift.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatDatepickerContent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { MatButtonModule } from '@angular/material/button';
import { MatTable, MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { FrontendComponent } from './frontend/frontend.component';
import { ConteoComponent } from './conteo/conteo.component';
import { ConteoT24Component } from './conteo-t24/conteo-t24.component';
import { ConteoSlbtrComponent } from './conteo-slbtr/conteo-slbtr.component';
import { RepairComponent } from './repair/repair.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper'; 


@NgModule({
  declarations: [
    AppComponent,
    MensajesComponent,
    // SwiftComponent,
    ContenedorComponent,
    FrontendComponent,
    ConteoComponent,
    ConteoT24Component,
    ConteoSlbtrComponent,
    RepairComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    HammerModule,
    // MatInputModule,
    MatCheckboxModule,
    MatStepperModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
