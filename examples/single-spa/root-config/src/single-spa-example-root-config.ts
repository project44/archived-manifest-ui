import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@single-spa-example/app-parcel',
  app: () => System.import('@single-spa-example/app-parcel'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
