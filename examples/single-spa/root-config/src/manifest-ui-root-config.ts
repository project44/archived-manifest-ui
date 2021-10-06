import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@manifest-ui/app-parcel',
  app: () => System.import('@manifest-ui/app-parcel'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
