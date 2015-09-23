'use strict';

angular.module('ee_demo_app.version', [
  'ee_demo_app.version.interpolate-filter',
  'ee_demo_app.version.version-directive'
])

.value('version', '0.1');
