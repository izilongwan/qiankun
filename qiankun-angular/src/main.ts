import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// (<{ hot?: { accept?: Function } }> module)?.hot?.accept?.()

let app: void | NgModuleRef<AppModule>;

async function render() {
  app = await platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap(props: Object) {

}

export async function mount(props: Object) {
  render()
}

export async function unmount(props: Object) {
  (<NgModuleRef<AppModule>>app).destroy();
}
