import envConfig from 'config/environment';

const { host } = envConfig.api;

export const getListCountryOptionsURL = () => `${host}/v1/countries`;
