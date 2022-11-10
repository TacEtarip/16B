import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TppLibRefreshModule, TppLibRefreshService } from 'tpp-lib-refresh';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeModule } from './prime.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '@env/environment';
import { SharedModule as InternalSharedModule } from '@shared';
import { ErrorInterceptor } from '@shared/interceptors/error.interceptor';
import { BlockUIModule } from 'ng-block-ui';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { AssignedAgmarComponent } from './components/assigned-agmar/assigned-agmar.component';
import { MainComponent } from './components/main/main.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { FiltersComponent } from './components/filters/filters.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent, MainComponent, AssignedAgmarComponent, MessageModalComponent, FiltersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InternalSharedModule,
    PrimeModule,
    DialogModule,
    BlockUIModule.forRoot(),
    DynamicDialogModule,
    TppLibRefreshModule.forRoot({ url: environment.credentialsEndpoint }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TppLibRefreshService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
