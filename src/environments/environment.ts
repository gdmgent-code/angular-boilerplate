// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAmloq3-C0gs9FE7Tlfd9B97PinbXpWeQ0",
    authDomain: "nmd2018-ebdea.firebaseapp.com",
    databaseURL: "https://nmd2018-ebdea.firebaseio.com",
    projectId: "nmd2018-ebdea",
    storageBucket: "nmd2018-ebdea.appspot.com",
    messagingSenderId: "342192563642"
  },
  nmdAPIV1: {
    url: 'http://10.5.140.13:8080/assets/data/api/v1',
    endPoints: {
      'posts': '/posts.json'
    }
  },
  trotsAPI: {
    url: 'http://www.gdm.gent/trots/api/',
    endPoints: {
      'projects': '/projects.json'
    }
  }
};
