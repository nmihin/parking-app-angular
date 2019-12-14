// This file is required by karma.conf.js and loads recursively all the .spec and framework files

<<<<<<< HEAD
import 'zone.js/dist/zone-testing';
=======
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
>>>>>>> aed10a091be6f1f07faacd509ef2f6a9c3cea105
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

<<<<<<< HEAD
declare const require: any;

=======
// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare const __karma__: any;
declare const require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function () {};

>>>>>>> aed10a091be6f1f07faacd509ef2f6a9c3cea105
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
<<<<<<< HEAD
=======
// Finally, start Karma to run the tests.
__karma__.start();
>>>>>>> aed10a091be6f1f07faacd509ef2f6a9c3cea105
