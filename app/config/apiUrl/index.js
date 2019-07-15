/**
 * Re-export all api config for easy import
 */

import * as companies from './companies';
import * as appointments from './appointments';
import * as services from './services';
import * as staffs from './staffs';
import * as user from './user';
import * as country from './country';
import * as building from './building';
import * as settings from './settings';

const apiUrl = {
  ...companies,
  ...appointments,
  ...services,
  ...staffs,
  ...user,
  ...country,
  ...building,
  ...settings,
};

export default apiUrl;
