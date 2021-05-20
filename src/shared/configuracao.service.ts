import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService {
  configData: any;

  constructor(private httpClient: HttpClient) {}

  async loadConfig() {
    const data = await this.httpClient
      .get<any>('./assets/config.json')
      .toPromise()
      .then((config: any) => {
        this.configData = config;
        console.log('Retorno:', this.configData);
      })
      .catch((err: any) => {
        console.error(err);
      });
    // this.configData = data;
    // console.log(this.configData);
    return data;
  }

  get getConfig(): any {
    if (!this.configData) {
      console.error('Não foi possível carregar o arquivo de configuração.');
    }
    return this.configData;
  }

  get authUrl(): any {
    if (!this.configData) {
      console.error('config could not be loaded from app config servcie.');
    }
    return this.configData.authConfig.authUrl;
  }
}
