/* All config that depend on environment */
import development from './development';
import staging from './staging';
import hotfix from './hotfix';
import production from './production';

const environment = {
  development,
  staging,
  hotfix,
  production,
}[process.env.TARGET_ENV || 'development'];

export default {
  ...environment,
  TARGET_ENV: process.env.TARGET_ENV,
  NODE_ENV: process.env.NODE_ENV,
};
