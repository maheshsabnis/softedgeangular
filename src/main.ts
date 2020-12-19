// entry point of the aplication
// enableProdMode: To indicate the produciton build is created
import { enableProdMode } from '@angular/core';
// platformBrowserDynamic, boostrap the module in browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// AppModule, the class that is entry point to application
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// boostraping the module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
