import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConfiguracaoService } from '../shared/configuracao.service';
import { HttpClientModule } from '@angular/common/http';

export function initConfig(appConfig: ConfiguracaoService) {
  return () => appConfig.loadConfig();
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ConfiguracaoService],
      multi: true
    }
  ]
})
export class AppModule {}
