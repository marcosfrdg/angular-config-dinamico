import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { ConfiguracaoService } from '../shared/configuracao.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private http: HttpClient, private config: ConfiguracaoService) {
    // console.log(this.config.getConfig());
  }
}
