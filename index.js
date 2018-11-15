const WINDOW = 'window';
const GLOBAL = 'global';

/**
 * The global scope, can be either "global" or "window".
 * @type {Object}
 */
export const globalScope = (Function().constructor('return this'))();

const checkGlobalObject = (globalObject) => new Function(`try {return this===${globalObject};}catch(e){ return false;}`)();

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
