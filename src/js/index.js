import '../style/index.scss';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

import $ from 'jquery';
import { TimelineMax, TweenMax } from 'gsap';
import test from './vendor/test';
import ubigeo from '../json/ubigeo.json';
import { fillUbigeo } from './libs/ubigeo.js';

//fillUbigeo(ubigeo, 'departamento', 'provincia', 'distrito');

$('#button').on('click', function() {
  tl
    .to($('#prueba'), 0.5, { opacity: 0.5 })
    .to($('#prueba'), 0.5, { scale: 0.5 })
    .to($('#prueba'), 0.5, { rotation: 360 })
    .to($('#prueba'), 0.5, { opacity: 1 })
    .to($('#prueba'), 0.5, { scale: 1.5 });
});
$('#prueba').css({ opacity: 1 });
const tl = new TimelineMax();
test.test();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

if (module.hot) {
  module.hot.accept();
}
