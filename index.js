const WINDOW = 'window';
const GLOBAL = 'global';

/**
 * The global scope, can be either "global" or "window".
 * @type {Object}
 */
export const globalScope = Function('return this')();

const checkGlobalObject = (globalObject) => Function(`try {return this===${globalObject};}catch(e){ return false;}`)();

/**
 * Whether the current enironment is a node-like environment.
 * @type {Boolean}
 */
export const node = checkGlobalObject(GLOBAL);

/**
 * Whether the current enironment is a browser environment.
 * @type {Boolean}
 */
export const browser = checkGlobalObject(WINDOW);
