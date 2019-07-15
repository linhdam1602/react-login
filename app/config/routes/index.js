/**
 * All available routes
 */

export const routes = {
  index: '/',
  login: '/login',
  logout: '/logout',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  accessDenied: '/access-denied',
  faqs: '/faqs',

  admin: {
    index: '/admin',

    company: {
      index: '/admin/company',
      list: '/admin/company/list',
      add: '/admin/company/add',
    },

    setting: {
      index: '/admin/settings',
      general: '/admin/settings/general',
      payment: '/admin/settings/payment',
      notification: '/admin/settings/notification',
      user: '/admin/settings/user',
      faqs: '/admin/settings/faqs',
    },
  },

  company: {
    index: '/company',
    profile: '/company/profile',
    edit: '/company/edit',
  },

  appointment: {
    index: '/appointment',
    list: '/appointment',
    details: '/appointment/view/:appointmentId',
    archive: '/appointment/archive',
  },

  service: {
    index: '/service',
    list: '/service',
    view: '/service/:serviceId',
    add: '/service/add',
    edit: '/service/edit/:serviceId',
  },

  staff: {
    index: '/staff',
    list: '/staff',
    add: '/staff/add',
    edit: '/staff/edit/:staffId',
    view: '/staff/view/:staffId',
  },

  history: { index: '/history' },

  user: {
    index: '/user',
    profile: {
      index: '/user/profile',
    },
  },
};

/**
 * Config routes
 */
export const publicPaths = [routes.login, routes.forgotPassword, routes.resetPassword, routes.faqs];

export const cannotViewIfLoggedInPaths = [routes.login, routes.forgotPassword];

export default routes;
