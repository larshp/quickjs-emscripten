[quickjs-emscripten](../../packages.md) • **quickjs-emscripten** • [Readme](../README.md) \| [Exports](../exports.md)

***

[quickjs-emscripten](../../packages.md) / [quickjs-emscripten](../exports.md) / QuickJSContext

# Class: QuickJSContext

QuickJSContext wraps a QuickJS Javascript context (JSContext*) within a
runtime. The contexts within the same runtime may exchange objects freely.
You can think of separate runtimes like different domains in a browser, and
the contexts within a runtime like the different windows open to the same
domain. The [runtime](QuickJSContext.md#runtime) references the context's runtime.

This class's methods return [QuickJSHandle](../exports.md#quickjshandle), which wrap C pointers (JSValue*).
It's the caller's responsibility to call `.dispose()` on any
handles you create to free memory once you're done with the handle.

Use [QuickJSRuntime#newContext](QuickJSRuntime.md#newcontext) or [QuickJSWASMModule#newContext](QuickJSWASMModule.md#newcontext)
to create a new QuickJSContext.

Create QuickJS values inside the interpreter with methods like
[newNumber](QuickJSContext.md#newnumber), [newString](QuickJSContext.md#newstring), [newArray](QuickJSContext.md#newarray), [newObject](QuickJSContext.md#newobject),
[newFunction](QuickJSContext.md#newfunction), and [newPromise](QuickJSContext.md#newpromise).

Call [setProp](QuickJSContext.md#setprop) or [defineProp](QuickJSContext.md#defineprop) to customize objects. Use those methods
with [global](QuickJSContext.md#global) to expose the values you create to the interior of the
interpreter, so they can be used in [evalCode](QuickJSContext.md#evalcode).

Use [evalCode](QuickJSContext.md#evalcode) or [callFunction](QuickJSContext.md#callfunction) to execute Javascript inside the VM. If
you're using asynchronous code inside the QuickJSContext, you may need to also
call [QuickJSRuntime#executePendingJobs](QuickJSRuntime.md#executependingjobs). Executing code inside the runtime returns a
result object representing successful execution or an error. You must dispose
of any such results to avoid leaking memory inside the VM.

Implement memory and CPU constraints at the runtime level, using [runtime](QuickJSContext.md#runtime).
See [QuickJSRuntime](QuickJSRuntime.md) for more information.

## Contents

- [Extended By](QuickJSContext.md#extended-by)
- [Implements](QuickJSContext.md#implements)
- [Constructors](QuickJSContext.md#constructors)
  - [new QuickJSContext(args)](QuickJSContext.md#new-quickjscontextargs)
- [Properties](QuickJSContext.md#properties)
  - [runtime](QuickJSContext.md#runtime)
- [Accessors](QuickJSContext.md#accessors)
  - [alive](QuickJSContext.md#alive)
  - [false](QuickJSContext.md#false)
  - [global](QuickJSContext.md#global)
  - [null](QuickJSContext.md#null)
  - [true](QuickJSContext.md#true)
  - [undefined](QuickJSContext.md#undefined)
- [Methods](QuickJSContext.md#methods)
  - [callFunction()](QuickJSContext.md#callfunction)
  - [decodeBinaryJSON()](QuickJSContext.md#decodebinaryjson)
  - [defineProp()](QuickJSContext.md#defineprop)
  - [dispose()](QuickJSContext.md#dispose)
  - [dump()](QuickJSContext.md#dump)
  - [encodeBinaryJSON()](QuickJSContext.md#encodebinaryjson)
  - [evalCode()](QuickJSContext.md#evalcode)
  - [getArrayBuffer()](QuickJSContext.md#getarraybuffer)
  - [getBigInt()](QuickJSContext.md#getbigint)
  - [getNumber()](QuickJSContext.md#getnumber)
  - [getProp()](QuickJSContext.md#getprop)
  - [getString()](QuickJSContext.md#getstring)
  - [getSymbol()](QuickJSContext.md#getsymbol)
  - [newArray()](QuickJSContext.md#newarray)
  - [newArrayBuffer()](QuickJSContext.md#newarraybuffer)
  - [newBigInt()](QuickJSContext.md#newbigint)
  - [newError()](QuickJSContext.md#newerror)
  - [newFunction()](QuickJSContext.md#newfunction)
  - [newNumber()](QuickJSContext.md#newnumber)
  - [newObject()](QuickJSContext.md#newobject)
  - [newPromise()](QuickJSContext.md#newpromise)
  - [newString()](QuickJSContext.md#newstring)
  - [newSymbolFor()](QuickJSContext.md#newsymbolfor)
  - [newUniqueSymbol()](QuickJSContext.md#newuniquesymbol)
  - [resolvePromise()](QuickJSContext.md#resolvepromise)
  - [setProp()](QuickJSContext.md#setprop)
  - [throw()](QuickJSContext.md#throw)
  - [typeof()](QuickJSContext.md#typeof)
  - [unwrapResult()](QuickJSContext.md#unwrapresult)

## Extended By

- [`QuickJSAsyncContext`](QuickJSAsyncContext.md)

## Implements

- [`LowLevelJavascriptVm`](../interfaces/LowLevelJavascriptVm.md)\<[`QuickJSHandle`](../exports.md#quickjshandle)\>
- [`Disposable`](../interfaces/Disposable.md)

## Constructors

### new QuickJSContext(args)

> **new QuickJSContext**(`args`): [`QuickJSContext`](QuickJSContext.md)

Use [QuickJSRuntime#newContext](QuickJSRuntime.md#newcontext) or [QuickJSWASMModule#newContext](QuickJSWASMModule.md#newcontext)
to create a new QuickJSContext.

#### Parameters

• **args**: `Object`

• **args\.callbacks**: `QuickJSModuleCallbacks`

• **args\.ctx**: [`Lifetime`](Lifetime.md)\<[`JSContextPointer`](../exports.md#jscontextpointer), `never`, `never`\>

• **args\.ffi**: `EitherFFI`

• **args\.module**: [`EitherModule`](../exports.md#eithermodule)

• **args\.ownedLifetimes?**: [`Disposable`](../interfaces/Disposable.md)[]

• **args\.rt**: [`Lifetime`](Lifetime.md)\<[`JSRuntimePointer`](../exports.md#jsruntimepointer), `never`, `never`\>

• **args\.runtime**: [`QuickJSRuntime`](QuickJSRuntime.md)

#### Returns

[`QuickJSContext`](QuickJSContext.md)

#### Source

quickjs-emscripten-core/dist/index.d.ts:760

## Properties

### runtime

> **`readonly`** **runtime**: [`QuickJSRuntime`](QuickJSRuntime.md)

The runtime that created this context.

#### Source

quickjs-emscripten-core/dist/index.d.ts:733

## Accessors

### alive

> **`get`** **alive**(): `boolean`

#### Returns

`boolean`

true if the object is alive

false after the object has been [dispose](QuickJSContext.md#dispose)d

#### Source

quickjs-emscripten-core/dist/index.d.ts:769

***

### false

> **`get`** **false**(): [`QuickJSHandle`](../exports.md#quickjshandle)

[`false`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/false).

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:792

***

### global

> **`get`** **global**(): [`QuickJSHandle`](../exports.md#quickjshandle)

[`global`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).
A handle to the global object inside the interpreter.
You can set properties to create global variables.

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:798

***

### null

> **`get`** **null**(): [`QuickJSHandle`](../exports.md#quickjshandle)

[`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null).

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:784

***

### true

> **`get`** **true**(): [`QuickJSHandle`](../exports.md#quickjshandle)

[`true`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/true).

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:788

***

### undefined

> **`get`** **undefined**(): [`QuickJSHandle`](../exports.md#quickjshandle)

[`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined).

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:780

## Methods

### callFunction()

> **callFunction**(`func`, `thisVal`, ...`args`): [`VmCallResult`](../exports.md#vmcallresultvmhandle)\<[`QuickJSHandle`](../exports.md#quickjshandle)\>

[`func.call(thisVal, ...args)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call).
Call a JSValue as a function.

See [unwrapResult](QuickJSContext.md#unwrapresult), which will throw if the function returned an error, or
return the result handle directly. If evaluation returned a handle containing
a promise, use [resolvePromise](QuickJSContext.md#resolvepromise) to convert it to a native promise and
[runtime](QuickJSContext.md#runtime).[QuickJSRuntime#executePendingJobs](QuickJSRuntime.md#executependingjobs) to finish evaluating the promise.

#### Parameters

• **func**: [`QuickJSHandle`](../exports.md#quickjshandle)

• **thisVal**: [`QuickJSHandle`](../exports.md#quickjshandle)

• ...**args**: [`QuickJSHandle`](../exports.md#quickjshandle)[]

#### Returns

[`VmCallResult`](../exports.md#vmcallresultvmhandle)\<[`QuickJSHandle`](../exports.md#quickjshandle)\>

A result. If the function threw synchronously, `result.error` be a
handle to the exception. Otherwise `result.value` will be a handle to the
value.

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.callFunction`](../interfaces/LowLevelJavascriptVm.md#callfunction)

#### Source

quickjs-emscripten-core/dist/index.d.ts:964

***

### decodeBinaryJSON()

> **decodeBinaryJSON**(`handle`): [`QuickJSHandle`](../exports.md#quickjshandle)

Outputs Handle of the given QuickJS Object in binary form

```ts
// imagine receiving data from another via IPC
socket.on("data", chunk => {
 context.newArrayBuffer(chunk)
   ?.consume(handle => context.decodeBinaryJSON(handle))
   ?.consume(handle => console.log(context.dump(handle)))
})
```

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:1057

***

### defineProp()

> **defineProp**(`handle`, `key`, `descriptor`): `void`

[`Object.defineProperty(handle, key, descriptor)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

• **key**: [`QuickJSPropertyKey`](../exports.md#quickjspropertykey)

The property may be specified as a JSValue handle, or as a
Javascript string or number (which will be converted automatically to a JSValue).

• **descriptor**: [`VmPropertyDescriptor`](../interfaces/VmPropertyDescriptor.md)\<[`QuickJSHandle`](../exports.md#quickjshandle)\>

#### Returns

`void`

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.defineProp`](../interfaces/LowLevelJavascriptVm.md#defineprop)

#### Source

quickjs-emscripten-core/dist/index.d.ts:950

***

### dispose()

> **dispose**(): `void`

Dispose of this VM's underlying resources.

#### Returns

`void`

#### Implementation of

[`quickjs-emscripten.Disposable.dispose`](../interfaces/Disposable.md#dispose)

#### Throws

Calling this method without disposing of all created handles
will result in an error.

#### Source

quickjs-emscripten-core/dist/index.d.ts:776

***

### dump()

> **dump**(`handle`): `any`

Dump a JSValue to Javascript in a best-effort fashion.
Returns `handle.toString()` if it cannot be serialized to JSON.

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

`any`

#### Source

quickjs-emscripten-core/dist/index.d.ts:1010

***

### encodeBinaryJSON()

> **encodeBinaryJSON**(`handle`): [`QuickJSHandle`](../exports.md#quickjshandle)

Outputs QuickJS Objects in binary form

**WARNING**: QuickJS's binary JSON doesn't have a standard so expect it to change between version

```ts
// imagine sending data to another via IPC
let dataLifetime = context.newString("This is an example")
 ?.consume(handle => context.encodeBinaryJSON(handle))
 ?.consume(handle => context.getArrayBuffer(handle))
socket.write(dataLifetime?.value)
```

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:1044

***

### evalCode()

> **evalCode**(`code`, `filename`?, `options`?): [`VmCallResult`](../exports.md#vmcallresultvmhandle)\<[`QuickJSHandle`](../exports.md#quickjshandle)\>

Like [`eval(code)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Description).
Evaluates the Javascript source `code` in the global scope of this VM.
When working with async code, you many need to call [runtime](QuickJSContext.md#runtime).[QuickJSRuntime#executePendingJobs](QuickJSRuntime.md#executependingjobs)
to execute callbacks pending after synchronous evaluation returns.

See [unwrapResult](QuickJSContext.md#unwrapresult), which will throw if the function returned an error, or
return the result handle directly. If evaluation returned a handle containing
a promise, use [resolvePromise](QuickJSContext.md#resolvepromise) to convert it to a native promise and
[QuickJSRuntime#executePendingJobs](QuickJSRuntime.md#executependingjobs) to finish evaluating the promise.

*Note*: to protect against infinite loops, provide an interrupt handler to
[QuickJSRuntime#setInterruptHandler](QuickJSRuntime.md#setinterrupthandler). You can use [shouldInterruptAfterDeadline](../exports.md#shouldinterruptafterdeadline) to
create a time-based deadline.

#### Parameters

• **code**: `string`

• **filename?**: `string`

• **options?**: `number` \| [`ContextEvalOptions`](../interfaces/ContextEvalOptions.md)

If no options are passed, a heuristic will be used to detect if `code` is
an ES module.

See [EvalFlags](../exports.md#evalflags) for number semantics.

#### Returns

[`VmCallResult`](../exports.md#vmcallresultvmhandle)\<[`QuickJSHandle`](../exports.md#quickjshandle)\>

The last statement's value. If the code threw synchronously,
`result.error` will be a handle to the exception. If execution was
interrupted, the error will have name `InternalError` and message
`interrupted`.

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.evalCode`](../interfaces/LowLevelJavascriptVm.md#evalcode)

#### Source

quickjs-emscripten-core/dist/index.d.ts:985

***

### getArrayBuffer()

> **getArrayBuffer**(`handle`): [`Lifetime`](Lifetime.md)\<`Uint8Array`, `never`, `never`\>

Coverts `handle` to a JavaScript ArrayBuffer

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

[`Lifetime`](Lifetime.md)\<`Uint8Array`, `never`, `never`\>

#### Source

quickjs-emscripten-core/dist/index.d.ts:912

***

### getBigInt()

> **getBigInt**(`handle`): `bigint`

Converts `handle` to a Javascript bigint.

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

`bigint`

#### Source

quickjs-emscripten-core/dist/index.d.ts:908

***

### getNumber()

> **getNumber**(`handle`): `number`

Converts `handle` into a Javascript number.

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

`number`

`NaN` on error, otherwise a `number`.

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.getNumber`](../interfaces/LowLevelJavascriptVm.md#getnumber)

#### Source

quickjs-emscripten-core/dist/index.d.ts:895

***

### getProp()

> **getProp**(`handle`, `key`): [`QuickJSHandle`](../exports.md#quickjshandle)

`handle[key]`.
Get a property from a JSValue.

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

• **key**: [`QuickJSPropertyKey`](../exports.md#quickjspropertykey)

The property may be specified as a JSValue handle, or as a
Javascript string (which will be converted automatically).

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.getProp`](../interfaces/LowLevelJavascriptVm.md#getprop)

#### Source

quickjs-emscripten-core/dist/index.d.ts:931

***

### getString()

> **getString**(`handle`): `string`

Converts `handle` to a Javascript string.

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

`string`

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.getString`](../interfaces/LowLevelJavascriptVm.md#getstring)

#### Source

quickjs-emscripten-core/dist/index.d.ts:899

***

### getSymbol()

> **getSymbol**(`handle`): `symbol`

Converts `handle` into a Javascript symbol. If the symbol is in the global
registry in the guest, it will be created with Symbol.for on the host.

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

`symbol`

#### Source

quickjs-emscripten-core/dist/index.d.ts:904

***

### newArray()

> **newArray**(): [`QuickJSHandle`](../exports.md#quickjshandle)

`[]`.
Create a new QuickJS [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:832

***

### newArrayBuffer()

> **newArrayBuffer**(`buffer`): [`QuickJSHandle`](../exports.md#quickjshandle)

Create a new QuickJS [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

#### Parameters

• **buffer**: `ArrayBufferLike`

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:836

***

### newBigInt()

> **newBigInt**(`num`): [`QuickJSHandle`](../exports.md#quickjshandle)

Create a QuickJS [bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) value.

#### Parameters

• **num**: `bigint`

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:820

***

### newError()

#### newError(error)

> **newError**(`error`): [`QuickJSHandle`](../exports.md#quickjshandle)

##### Parameters

• **error**: `Object`

• **error\.message**: `string`

• **error\.name**: `string`

##### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

##### Source

quickjs-emscripten-core/dist/index.d.ts:878

#### newError(message)

> **newError**(`message`): [`QuickJSHandle`](../exports.md#quickjshandle)

##### Parameters

• **message**: `string`

##### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

##### Source

quickjs-emscripten-core/dist/index.d.ts:882

#### newError(undefined)

> **newError**(): [`QuickJSHandle`](../exports.md#quickjshandle)

##### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

##### Source

quickjs-emscripten-core/dist/index.d.ts:883

***

### newFunction()

> **newFunction**(`name`, `fn`): [`QuickJSHandle`](../exports.md#quickjshandle)

Convert a Javascript function into a QuickJS function value.
See [VmFunctionImplementation](../exports.md#vmfunctionimplementationvmhandle) for more details.

A [VmFunctionImplementation](../exports.md#vmfunctionimplementationvmhandle) should not free its arguments or its return
value. A VmFunctionImplementation should also not retain any references to
its return value.

To implement an async function, create a promise with [newPromise](QuickJSContext.md#newpromise), then
return the deferred promise handle from `deferred.handle` from your
function implementation:

```
const deferred = vm.newPromise()
someNativeAsyncFunction().then(deferred.resolve)
return deferred.handle
```

#### Parameters

• **name**: `string`

• **fn**: [`VmFunctionImplementation`](../exports.md#vmfunctionimplementationvmhandle)\<[`QuickJSHandle`](../exports.md#quickjshandle)\>

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.newFunction`](../interfaces/LowLevelJavascriptVm.md#newfunction)

#### Source

quickjs-emscripten-core/dist/index.d.ts:877

***

### newNumber()

> **newNumber**(`num`): [`QuickJSHandle`](../exports.md#quickjshandle)

Converts a Javascript number into a QuickJS value.

#### Parameters

• **num**: `number`

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.newNumber`](../interfaces/LowLevelJavascriptVm.md#newnumber)

#### Source

quickjs-emscripten-core/dist/index.d.ts:802

***

### newObject()

> **newObject**(`prototype`?): [`QuickJSHandle`](../exports.md#quickjshandle)

`{}`.
Create a new QuickJS [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

#### Parameters

• **prototype?**: [`QuickJSHandle`](../exports.md#quickjshandle)

Like [`Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create).

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.newObject`](../interfaces/LowLevelJavascriptVm.md#newobject)

#### Source

quickjs-emscripten-core/dist/index.d.ts:827

***

### newPromise()

#### newPromise(undefined)

> **newPromise**(): [`QuickJSDeferredPromise`](QuickJSDeferredPromise.md)

Create a new [QuickJSDeferredPromise](QuickJSDeferredPromise.md). Use `deferred.resolve(handle)` and
`deferred.reject(handle)` to fulfill the promise handle available at `deferred.handle`.
Note that you are responsible for calling `deferred.dispose()` to free the underlying
resources; see the documentation on [QuickJSDeferredPromise](QuickJSDeferredPromise.md) for details.

##### Returns

[`QuickJSDeferredPromise`](QuickJSDeferredPromise.md)

##### Source

quickjs-emscripten-core/dist/index.d.ts:843

#### newPromise(promise)

> **newPromise**(`promise`): [`QuickJSDeferredPromise`](QuickJSDeferredPromise.md)

Create a new [QuickJSDeferredPromise](QuickJSDeferredPromise.md) that resolves when the
given native Promise`<QuickJSHandle>`  resolves. Rejections will be coerced
to a QuickJS error.

You can still resolve/reject the created promise "early" using its methods.

##### Parameters

• **promise**: `Promise`\<[`QuickJSHandle`](../exports.md#quickjshandle)\>

##### Returns

[`QuickJSDeferredPromise`](QuickJSDeferredPromise.md)

##### Source

quickjs-emscripten-core/dist/index.d.ts:851

#### newPromise(newPromiseFn)

> **newPromise**(`newPromiseFn`): [`QuickJSDeferredPromise`](QuickJSDeferredPromise.md)

Construct a new native Promise`<QuickJSHandle>` , and then convert it into a
[QuickJSDeferredPromise](QuickJSDeferredPromise.md).

You can still resolve/reject the created promise "early" using its methods.

##### Parameters

• **newPromiseFn**: [`PromiseExecutor`](../exports.md#promiseexecutorresolvet-rejectt)\<[`QuickJSHandle`](../exports.md#quickjshandle), `Error` \| [`QuickJSHandle`](../exports.md#quickjshandle)\>

##### Returns

[`QuickJSDeferredPromise`](QuickJSDeferredPromise.md)

##### Source

quickjs-emscripten-core/dist/index.d.ts:858

***

### newString()

> **newString**(`str`): [`QuickJSHandle`](../exports.md#quickjshandle)

Create a QuickJS [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) value.

#### Parameters

• **str**: `string`

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.newString`](../interfaces/LowLevelJavascriptVm.md#newstring)

#### Source

quickjs-emscripten-core/dist/index.d.ts:806

***

### newSymbolFor()

> **newSymbolFor**(`key`): [`QuickJSHandle`](../exports.md#quickjshandle)

Get a symbol from the [global registry](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) for the given key.
All symbols created with the same key will be the same value.

#### Parameters

• **key**: `string` \| `symbol`

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:816

***

### newUniqueSymbol()

> **newUniqueSymbol**(`description`): [`QuickJSHandle`](../exports.md#quickjshandle)

Create a QuickJS [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) value.
No two symbols created with this function will be the same value.

#### Parameters

• **description**: `string` \| `symbol`

#### Returns

[`QuickJSHandle`](../exports.md#quickjshandle)

#### Source

quickjs-emscripten-core/dist/index.d.ts:811

***

### resolvePromise()

> **resolvePromise**(`promiseLikeHandle`): `Promise`\<[`VmCallResult`](../exports.md#vmcallresultvmhandle)\<[`QuickJSHandle`](../exports.md#quickjshandle)\>\>

`Promise.resolve(value)`.
Convert a handle containing a Promise-like value inside the VM into an
actual promise on the host.

#### Parameters

• **promiseLikeHandle**: [`QuickJSHandle`](../exports.md#quickjshandle)

A handle to a Promise-like value with a `.then(onSuccess, onError)` method.

#### Returns

`Promise`\<[`VmCallResult`](../exports.md#vmcallresultvmhandle)\<[`QuickJSHandle`](../exports.md#quickjshandle)\>\>

#### Remarks

You may need to call [runtime](QuickJSContext.md#runtime).[QuickJSRuntime#executePendingJobs](QuickJSRuntime.md#executependingjobs) to ensure that the promise is resolved.

#### Source

quickjs-emscripten-core/dist/index.d.ts:923

***

### setProp()

> **setProp**(`handle`, `key`, `value`): `void`

`handle[key] = value`.
Set a property on a JSValue.

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

• **key**: [`QuickJSPropertyKey`](../exports.md#quickjspropertykey)

The property may be specified as a JSValue handle, or as a
Javascript string or number (which will be converted automatically to a JSValue).

• **value**: [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

`void`

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.setProp`](../interfaces/LowLevelJavascriptVm.md#setprop)

#### Remarks

Note that the QuickJS authors recommend using [defineProp](QuickJSContext.md#defineprop) to define new
properties.

#### Source

quickjs-emscripten-core/dist/index.d.ts:943

***

### throw()

> **throw**(`error`): [`JSValuePointer`](../exports.md#jsvaluepointer)

Throw an error in the VM, interrupted whatever current execution is in progress when execution resumes.

#### Parameters

• **error**: `Error` \| [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

[`JSValuePointer`](../exports.md#jsvaluepointer)

#### Source

quickjs-emscripten-core/dist/index.d.ts:997

***

### typeof()

> **typeof**(`handle`): `string`

`typeof` operator. **Not** [standards compliant](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

#### Parameters

• **handle**: [`QuickJSHandle`](../exports.md#quickjshandle)

#### Returns

`string`

#### Implementation of

[`quickjs-emscripten.LowLevelJavascriptVm.typeof`](../interfaces/LowLevelJavascriptVm.md#typeof)

#### Remarks

Does not support BigInt values correctly.

#### Source

quickjs-emscripten-core/dist/index.d.ts:890

***

### unwrapResult()

> **unwrapResult**\<`T`\>(`result`): `T`

Unwrap a SuccessOrFail result such as a [VmCallResult](../exports.md#vmcallresultvmhandle) or a
[ExecutePendingJobsResult](../exports.md#executependingjobsresult), where the fail branch contains a handle to a QuickJS error value.
If the result is a success, returns the value.
If the result is an error, converts the error to a native object and throws the error.

#### Type parameters

• **T**

#### Parameters

• **result**: [`SuccessOrFail`](../exports.md#successorfails-f)\<`T`, [`QuickJSHandle`](../exports.md#quickjshandle)\>

#### Returns

`T`

#### Source

quickjs-emscripten-core/dist/index.d.ts:1017

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)