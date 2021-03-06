/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'localforage': 'vendor/localforage/dist/localforage.js',
  'sweetalert2': 'vendor/sweetalert2/dist/sweetalert2.common.js',
  'es6-shim':     'vendor/es6-shim/es6-shim.js',
};

/** User packages configuration. */
const packages: any = {
  'sweetalert2': { 
    format: 'cjs', 
    defaultExtension: 'js' 
  },
  'localforage': { 
    format: 'global', 
    defaultExtension: 'js' 
  },
  'es6-shim': { 
    format: 'global', 
    defaultExtension: 'js'
  },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router-deprecated',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+login',
  'app/+register',
  'app/+dashboard',
  'app/widgets',
  'app/loopback',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
