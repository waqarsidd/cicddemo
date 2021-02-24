export const URL_CONSTANTS = {
  DEV: 'https://core.voyant.dev.com/api/v1/',
  PRODUCTION: 'https://core.voyant.com/api/v1/',
  LOCAL: 'http://localhost:8000/api/',
  MOCK_URL: 'http://localhost:8000/',
};

export const DIALOG_CONSTANT = {
  mediumWidth: '450px',
  largeWidth: '80%',
};

export const NETWORK_ID = '4b9781a9-d44c-44cd-981a-6ccd22cd7123';

export const LOCAL_STORAGE_CONSTANTS = {
  API_MODE: 'api_mode',
  TOKEN: 'token',
  EXPIRES_IN: 'expires_in',
  LOGGED_IN_USER: 'loggedin_user',
  USERNAME: 'username',
  USERID: 'userid',
};

export const APP_CONSTANTS = {
  RELEASE: 'DEV',
  VERSION: '1.1.0',
  LANGUAGE: 'en',
};

export const MODES = Object.freeze({
  DEV: {
    cid: 'DEV',
    name: 'Dev',
    code: '338',
    keypad: '##338##',
  },
  MOCK: {
    cid: 'MOCK',
    name: 'mock',
    code: '6625',
    keypad: '##6625##',
  },
  LOCAL: {
    cid: 'LOCAL',
    name: 'Local',
    code: '56225',
    keypad: '##56225##',
  },
  PRODUCTION: {
    cid: 'PRODUCTION',
    name: 'Production',
    code: '7763828466',
    keypad: '##7763828466##',
  },
});
