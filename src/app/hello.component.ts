import { Component, Input } from '@angular/core';
import { ConfiguracaoService } from '../shared/configuracao.service';

@Component({
  selector: 'hello',
  template: `
    <br />
    Url:
    {{ dados.authUrl || 'Não foi possível carregar o arquivo de configuração.'
    }}<br /><br />
    Servidor 1:
    {{
      servidor.server1 ||
        'Não foi possível carregar o arquivo de configuração.'
    }}<br /><br />
    Servidor 2:
    {{
      servidor.server2 ||
        'Não foi possível carregar o arquivo de configuração.'
    }}<br /><br />
    Servidor 3:
    {{
      servidor.server3 ||
        'Não foi possível carregar o arquivo de configuração.'
    }}<br /><br />
  `,
  styles: [
    `
      h1 {
        font-family: Verdana, Segoe UI, Roboto, Cantarell, sans-serif;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  dados: any;
  servidor: any;

  constructor(private configuracao: ConfiguracaoService) {}

  ngOnInit() {
    this.servidor = this.configuracao.getConfig;
    this.dados = this.configuracao;
  }
}
