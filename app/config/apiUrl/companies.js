import envConfig from 'config/environment';
import { stringifyParams } from 'utils/common';

const { host } = envConfig.api;

export const getListCompaniesURL = (params) =>
  `${host}/v1/company/list?${stringifyParams(params)}`;

export const deleteCompanyURL = (companyId) =>
  `${host}/v1/company/delete/${companyId}`;

export const createNewCompanyURL = () => `${host}/v1/company/create`;

export const getCompanyInfoURL = (companyId) =>
  `${host}/v1/company/info/${companyId}`;

export const updateCompanyInfoURL = (companyId) =>
  `${host}/v1/company/update-profile/${companyId}`;

export const getCompanyBankInfoURL = (companyId) =>
  `${host}/v1/bank/detail/${companyId}`;

export const updateCompanyBankInfoURL = (companyId) =>
  `${host}/v1/bank/update-bank/${companyId}`;

export const getListIndustryOptionsURL = () => `${host}/v1/company/industries`;

export const updateCompanyStatusURL = (id) =>
  `${host}/v1/company/change-status/${id}`;

export const postChangeCompanyPasswordURL = () =>
  `${host}/v1/company/change-password`;

export const getListServiceIndustryURL = () => `${host}/v1/company/industries`;
