# environment [![](https://img.shields.io/npm/v/@cocopina/environment.svg?colorA=cb3837&colorB=474a50)](https://www.npmjs.com/package/@cocopina/environment)

A collection of runtime environment utilities and indicators, providing an easy interface to decipher the current runtime environment.

## Table of Contents

- [Installation](#installation)
- [API](#api)
    * [`globalScope [Object]`](#globalscope-object)
    * [`node [Boolean]`](#node-boolean)
    * [`browser [Boolean]`](#browser-boolean)

## Installation

Install the package:
```sh
npm i @cocopina/environment
```

## API

### `globalScope [Object]`

The global scope, can be either "global" or "window".

#### Examples

```js
// Browser

import { globalScope } from '@cocopina/environment';

console.log(globalScope === window); // true
```

```js
// Node

const { globalScope } = require('@cocopina/environment');

console.log(globalScope === global); // true
```

### `node [Boolean]`

Whether the current enironment is a node-like environment.

#### Examples

```js
// Browser

import { node } from '@cocopina/environment';

console.log(node); // false
```

```js
// Node

const { node } = require('@cocopina/environment');

console.log(node); // true
```

### `browser [Boolean]`

Whether the current enironment is a browser environment.

#### Examples

```js
// Browser

import { browser } from '@cocopina/environment';

console.log(browser); // true
```

```js
// Node

const { browser } = require('@cocopina/environment');

console.log(browser); // false
```
