import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      // Working as expected
      { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('./sample'), title: 'Sample' }
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('./test/testsample'), title: 'Sample' }
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('./test_feature/testfeaturesample'), title: 'Sample' }
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('./test_plugin/testpluginsample'), title: 'Sample' }

      // Not working?
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('test_alias/sample'), title: 'Sample' }
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('test_alias/test/testsample'), title: 'Sample' }
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('test_alias/test_feature/testfeaturesample'), title: 'Sample' }
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('test_alias/test_plugin/testpluginsample'), title: 'Sample' }

      // Somehow working?
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('sample'), title: 'Sample' }
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('test/testsample'), title: 'Sample' }
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('test_feature/testfeaturesample'), title: 'Sample' }
      // { route: ['', 'sample'], name: 'sample', moduleId: PLATFORM.moduleName('test_plugin/testpluginsample'), title: 'Sample' }
    ]);

    this.router = router;
  }
}
