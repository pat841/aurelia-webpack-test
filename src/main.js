// we want font-awesome to load as soon as possible to show the fa-spinner
import '../static/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'babel-polyfill';
import * as Bluebird from 'bluebird';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

import {PLATFORM} from 'aurelia-pal';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

    /**
     *  FEATURE EXAMPLES
     */

    // Working as expected
    // .feature(PLATFORM.moduleName('test_feature/index'));

    // Not working?
    // .feature(PLATFORM.moduleName('test_feature'));
    // .feature(PLATFORM.moduleName('./test_feature/index'));
    // .feature(PLATFORM.moduleName('./test_feature'));

    /**
     *  PLUGIN EXAMPLES
     */

    // Working as expected
    // .plugin(PLATFORM.moduleName('test_plugin/index'));
    // .plugin(PLATFORM.moduleName('test_plugin'));

    // Not working?
    // .plugin(PLATFORM.moduleName('./test_plugin/index'));
    // .plugin(PLATFORM.moduleName('./test_plugin'));

    /**
     *  ALIAS EXAMPLES
     */

    // Working as expected
    // .feature(PLATFORM.moduleName('test_alias/test_feature/index'));
    // .plugin(PLATFORM.moduleName('test_alias/test_plugin/index'));
    // .plugin(PLATFORM.moduleName('test_alias/test_plugin'));

    // Not working?
    // .feature(PLATFORM.moduleName('test_alias/test_feature'));


  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
