// import { loadRemoteEntry } from '@angular-architects/module-federation';

// loadRemoteEntry({type: 'module', remoteEntry: 'http://localhost:4200/remoteEntry.js'})
//   .then(() => import('./bootstrap'))
//   .catch(err => console.error('err', err));

// import('./bootstrap').catch((err) => console.error(err));

import { loadRemoteEntry } from '@angular-architects/module-federation';

loadRemoteEntry({type: 'module', remoteEntry: 'http://localhost:3000/remoteEntry.js'})
  .then(() => import('./bootstrap'))
  .catch(err => console.error('err', err));