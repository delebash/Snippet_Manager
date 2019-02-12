import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: PLATFORM.moduleName( 'welcome'),      nav: true, title: 'Welcome' },
      { route: 'syncfusion',         name: 'syncfusion',        moduleId: PLATFORM.moduleName( 'syncfusion'),        nav: true, title: 'Syncfusion' }
    ]);

    this.router = router;
  }
}
