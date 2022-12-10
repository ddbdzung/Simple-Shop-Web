export const V1 = '/api/v1'

export const ENDPOINTS = {
  AUTH: {
    BASE: 'auth',
    REGISTER: 'register',
    LOGIN: 'sign-in',
    FIND_ACCOUNT: 'find-account',
    RESETPW_EMAIL: 'resetpw-email',
    VALIDATE_PWCODE: 'confirm-pwcode',
    RESET_PASSWORD: 'reset-pw',
    REFRESH_TOKEN: 'refresh-token',
    LOGOUT: 'sign-out',
    TEST: 'test',
    PING: 'ping',
  },
  SSE: {
    BASE: 'sse',
    VALIDATE_EMAIL: 'activate-account',
  },
  USER: {
    BASE: 'user',
    VALIDATE_EMAIL: 'confirm-email',
  },
  PRODUCT: {
    BASE: 'product',
    GET_PRODUCTS: '',
    GET_PRODUCT: ':id',
    CREATE_PRODUCT: '',
    UPDATE_PRODUCT: ':id',
    DELETE_PRODUCT: ':id',
  },
  BRAND: {
    BASE: 'brand',
    GET_BRANDS: '',
    GET_BRAND: ':id',
    CREATE_BRAND: '',
    UPDATE_BRAND: ':id',
    DETELE_BRAND: ':id',
  },
  CATALOG: {
    BASE: 'catalog',
    GET_CATALOGS: '',
    GET_CATALOG: ':id',
    CREATE_CATALOG: '',
    UPDATE_CATALOG: ':id',
    DETELE_CATALOG: ':id',
  },
  DOCS: {
    BASE: 'docs',
  },
}
