import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import {
  GoldenLayoutModule,
} from "@embedded-enterprises/ng6-golden-layout";
import * as $ from "jquery";
import { GoldenConfig } from "./golden-config";
import { GraficoPrincipalComponent } from "./componentes/grafico-principal/grafico-principal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmptyCompComponent } from "./componentes/empty-comp/empty-comp.component";
import { ComunicadorSubject } from "./services/comunicator-subject";
import { OperabilidadGraficos } from "./componentes/grafico-principal/services/operabilidad-graficos";
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
window["$"] = $;

@NgModule({
  declarations: [
    AppComponent,
    GraficoPrincipalComponent,
    EmptyCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    GoldenLayoutModule.forRoot(GoldenConfig.GoldenConfigObj),
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    //MDBBootstrapModule.forRoot()

  ],
  entryComponents: [
    GraficoPrincipalComponent,
    EmptyCompComponent,
  ],
  providers: [ComunicadorSubject, OperabilidadGraficos],
  bootstrap: [AppComponent]
})
export class AppModule {}
