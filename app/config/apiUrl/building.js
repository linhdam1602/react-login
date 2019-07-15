import envConfig from 'config/environment';
// import { stringifyParams } from 'utils/common';

const { host } = envConfig.api;

export const getListBuildingsURL = () => `${host}/v1/company/list-buildings`;
