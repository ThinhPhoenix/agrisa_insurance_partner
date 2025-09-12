// Import and re-export các message modules
export {
  AUTH_MESSAGES,
  getAuthMessageIcon,
  getAuthMessageType,
  getRegisterError,
  getRegisterInfo,
  getRegisterMessage,
  getRegisterSuccess,
  getRegisterValidation,
  getRegisterWarning,
  getSignInError,
  getSignInInfo,
  getSignInMessage,
  getSignInMessageIcon,
  getSignInMessageType,
  getSignInSuccess,
  getSignInValidation,
  getSignInWarning,
  splitAuthMessage,
  splitSignInMessage,
} from "./auth-message.js";
export {
  COMMON_MESSAGES,
  getCommonMessage,
  getErrorMessage,
  getInfoMessage,
  getMessageIcon,
  getMessageType,
  getSuccessMessage,
  getValidationMessage,
  getWarningMessage,
  splitMessage,
} from "./common-message.js";

// Re-export with clearer names for easier usage
export { SIGNIN_MESSAGES as SignInMessages } from "./auth-message.js";
export { COMMON_MESSAGES as GeneralMessages } from "./common-message.js";

// Helper functions để dễ sử dụng hơn
export const Messages = {
  // General messages
  general: {
    success: (key, params) => getSuccessMessage(key, params),
    error: (key, params) => getErrorMessage(key, params),
    warning: (key, params) => getWarningMessage(key, params),
    info: (key, params) => getInfoMessage(key, params),
    validation: (key, params) => getValidationMessage(key, params),
  },

  // Register specific messages
  register: {
    success: (key, params) => getRegisterSuccess(key, params),
    error: (key, params) => getRegisterError(key, params),
    validation: (key, params) => getRegisterValidation(key, params),
    info: (key, params) => getRegisterInfo(key, params),
    warning: (key, params) => getRegisterWarning(key, params),
  },

  // SignIn specific messages
  signin: {
    success: (key, params) => getSignInSuccess(key, params),
    error: (key, params) => getSignInError(key, params),
    validation: (key, params) => getSignInValidation(key, params),
    info: (key, params) => getSignInInfo(key, params),
    warning: (key, params) => getSignInWarning(key, params),
  },

  // Utility functions
  utils: {
    getIcon: (type, key) => getMessageIcon(type, key),
    getType: (type, key) => getMessageType(type, key),
    split: (type, key) => splitMessage(type, key),
    getAuthIcon: (section, type, key) => getAuthMessageIcon(section, type, key),
    getAuthType: (section, type, key) => getAuthMessageType(section, type, key),
    splitAuth: (section, type, key) => splitAuthMessage(section, type, key),
    getSignInIcon: (type, key) => getSignInMessageIcon(type, key),
    getSignInType: (type, key) => getSignInMessageType(type, key),
    splitSignIn: (type, key) => splitSignInMessage(type, key),
  },
};
