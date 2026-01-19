/**
 * Custom logger utility that only logs in development mode
 * This avoids ESLint no-console warnings while keeping debug capabilities
 */

import { IS_DEV } from './browser';

export const LOGGER = {
  log: (...args: unknown[]): void => {
    if (IS_DEV) {
      // eslint-disable-next-line no-console
      console.log(...args);
    }
  },

  warn: (...args: unknown[]): void => {
    if (IS_DEV) {
      // eslint-disable-next-line no-console
      console.warn(...args);
    }
  },

  error: (...args: unknown[]): void => {
    // Always log errors, even in production
    // eslint-disable-next-line no-console
    console.error(...args);
  },

  debug: (...args: unknown[]): void => {
    if (IS_DEV) {
      // eslint-disable-next-line no-console
      console.debug(...args);
    }
  },

  info: (...args: unknown[]): void => {
    if (IS_DEV) {
      // eslint-disable-next-line no-console
      console.info(...args);
    }
  },
};

export default LOGGER;
