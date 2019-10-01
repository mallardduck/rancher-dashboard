export const SCHEMA = 'schema';
export const COUNT = 'count';

export const POD = 'core.v1.pod';
export const NAMESPACE = 'core.v1.namespace';
export const CONFIG_MAP = 'core.v1.configmap';
export const SECRET = 'core.v1.secret';

export const CLOUD = {
  CLUSTER:            'cloud.rio.rancher.io.v1.cluster',
  REGISTRATION_TOKEN: 'cloud.rio.rancher.io.v1.registrationtoken',
};

export const RIO = {
  CLUSTER_DOMAIN:   'admin.rio.cattle.io.v1.clusterdomain',
  FEATURE:          'admin.rio.cattle.io.v1.feature',
  INFO:             'admin.rio.cattle.io.v1.rioinfo',

  APP:                   'rio.cattle.io.v1.app',
  EXTERNAL_SERVICE:      'rio.cattle.io.v1.externalservice',
  PUBLIC_DOMAIN:         'admin.rio.cattle.io.v1.publicdomain',
  CONTINUOUS_DEPLOYMENT: 'rio.cattle.io.v1.stack',
  ROUTER:                'rio.cattle.io.v1.router',
  SERVICE:               'rio.cattle.io.v1.service',
};

export const RANCHER = {
  PRINCIPAL: 'principal',
  USER:      'user',
};
