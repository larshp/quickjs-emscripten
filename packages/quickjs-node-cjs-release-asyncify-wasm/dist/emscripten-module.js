
var QuickJSRaw = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(moduleArg = {}) {

var c=moduleArg,aa,f;c.ready=new Promise((a,b)=>{aa=a;f=b});var ba=Object.assign({},c),m="./this.program",n=(a,b)=>{throw b;},r="",ca,u,fs=require("fs"),da=require("path");r=__dirname+"/";ca=a=>{a=ea(a)?new URL(a):da.normalize(a);return fs.readFileSync(a,void 0)};u=a=>{a=ca(a);a.buffer||(a=new Uint8Array(a));return a};!c.thisProgram&&1<process.argv.length&&(m=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);n=(a,b)=>{process.exitCode=a;throw b;};c.inspect=()=>"[Emscripten Module object]";
var fa=c.print||console.log.bind(console),v=c.printErr||console.error.bind(console);Object.assign(c,ba);ba=null;c.thisProgram&&(m=c.thisProgram);c.quit&&(n=c.quit);var w;c.wasmBinary&&(w=c.wasmBinary);"object"!=typeof WebAssembly&&y("no native wasm support detected");var z,A=!1,B,D,E,F,G;
function ha(){var a=z.buffer;c.HEAP8=D=new Int8Array(a);c.HEAP16=new Int16Array(a);c.HEAPU8=E=new Uint8Array(a);c.HEAPU16=new Uint16Array(a);c.HEAP32=F=new Int32Array(a);c.HEAPU32=G=new Uint32Array(a);c.HEAPF32=new Float32Array(a);c.HEAPF64=new Float64Array(a)}var ia=[],ja=[],ka=[];function la(){var a=c.preRun.shift();ia.unshift(a)}var H=0,I=null,J=null;
function oa(){var a=K;return Promise.resolve().then(()=>{if(a==K&&w)var b=new Uint8Array(w);else if(ma(a)?(b=a.slice(37),b=Buffer.from(b,"base64"),b=new Uint8Array(b.buffer,b.byteOffset,b.length)):b=void 0,!b)if(u)b=u(a);else throw"both async and sync fetching of the wasm failed";return b})}function pa(a,b){return oa().then(d=>WebAssembly.instantiate(d,a)).then(d=>d).then(b,d=>{v(`failed to asynchronously prepare wasm: ${d}`);y(d)})}function qa(a,b){return pa(a,b)}
function L(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var M=a=>{for(;0<a.length;)a.shift()(c)},ra=c.noExitRuntime||!0,sa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,N=(a,b,d)=>{var e=b+d;for(d=b;a[d]&&!(d>=e);)++d;if(16<d-b&&a.buffer&&sa)return sa.decode(a.subarray(b,d));for(e="";b<d;){var g=a[b++];if(g&128){var h=a[b++]&63;if(192==(g&224))e+=String.fromCharCode((g&31)<<6|h);else{var k=a[b++]&63;g=224==(g&240)?(g&15)<<12|h<<6|k:(g&7)<<18|h<<12|k<<6|a[b++]&63;65536>g?e+=String.fromCharCode(g):(g-=65536,e+=String.fromCharCode(55296|
g>>10,56320|g&1023))}}else e+=String.fromCharCode(g)}return e},ta=[0,31,60,91,121,152,182,213,244,274,305,335],ua=[0,31,59,90,120,151,181,212,243,273,304,334],O=a=>{for(var b=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);127>=e?b++:2047>=e?b+=2:55296<=e&&57343>=e?(b+=4,++d):b+=3}return b},P=(a,b,d)=>{var e=E;if(!(0<d))return 0;var g=b;d=b+d-1;for(var h=0;h<a.length;++h){var k=a.charCodeAt(h);if(55296<=k&&57343>=k){var l=a.charCodeAt(++h);k=65536+((k&1023)<<10)|l&1023}if(127>=k){if(b>=d)break;e[b++]=
k}else{if(2047>=k){if(b+1>=d)break;e[b++]=192|k>>6}else{if(65535>=k){if(b+2>=d)break;e[b++]=224|k>>12}else{if(b+3>=d)break;e[b++]=240|k>>18;e[b++]=128|k>>12&63}e[b++]=128|k>>6&63}e[b++]=128|k&63}}e[b]=0;return b-g},va=a=>{var b=O(a)+1,d=Q(b);d&&P(a,d,b);return d},R={},wa=()=>{if(!S){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:m||"./this.program"},b;for(b in R)void 0===
R[b]?delete a[b]:a[b]=R[b];var d=[];for(b in a)d.push(`${b}=${a[b]}`);S=d}return S},S,xa=[null,[],[]],T=a=>{try{a()}catch(b){y(b)}},U=0;function ya(){var a=V,b={},d;for(d in a)(function(e){var g=a[e];b[e]="function"==typeof g?function(){W.push(e);try{return g.apply(null,arguments)}finally{A||(W.pop()===e||y(),X&&1===Y&&0===W.length&&(Y=0,T(za),"undefined"!=typeof Fibers&&Fibers.Ga()))}}:g})(d);return b}var Y=0,Aa=81920,X=null,Ca=0,W=[],Da={},Ea={},Fa=0,Ga=null,Ha=[];
function Ia(){return new Promise((a,b)=>{Ga={resolve:a,reject:b}})}function Ja(){var a=Q(12+Aa),b=a+12,d=Aa;G[a>>2]=b;G[a+4>>2]=b+d;b=W[0];d=Da[b];void 0===d&&(d=Fa++,Da[b]=d,Ea[d]=b);F[a+8>>2]=d;return a}
function Ka(a){if(!A){if(0===Y){var b=!1,d=!1;a((e=0)=>{if(!A&&(Ca=e,b=!0,d)){Y=2;T(()=>La(X));"undefined"!=typeof Browser&&Browser.xa.Fa&&Browser.xa.resume();e=!1;try{var g=(0,V[Ea[F[X+8>>2]]])()}catch(l){g=l,e=!0}var h=!1;if(!X){var k=Ga;k&&(Ga=null,(e?k.reject:k.resolve)(g),h=!0)}if(e&&!h)throw g;}});d=!0;b||(Y=1,X=Ja(),"undefined"!=typeof Browser&&Browser.xa.Fa&&Browser.xa.pause(),T(()=>Ma(X)))}else 2===Y?(Y=0,T(Na),Oa(X),X=null,Ha.forEach(e=>{if(!A)try{if(e(),!(ra||0<U))try{B=B=e=B;if(!(ra||
0<U)){if(c.onExit)c.onExit(e);A=!0}n(e,new L(e))}catch(g){g instanceof L||"unwind"==g||n(1,g)}}catch(g){g instanceof L||"unwind"==g||n(1,g)}})):y(`invalid state: ${Y}`);return Ca}}
var Sa=(a,b,d,e,g)=>{function h(q){--U;0!==p&&Pa(p);return"string"===b?q?N(E,q):"":"boolean"===b?!!q:q}var k={string:q=>{var x=0;if(null!==q&&void 0!==q&&0!==q){x=O(q)+1;var Ba=Qa(x);P(q,Ba,x);x=Ba}return x},array:q=>{var x=Qa(q.length);D.set(q,x);return x}};a=c["_"+a];var l=[],p=0;if(e)for(var t=0;t<e.length;t++){var C=k[d[t]];C?(0===p&&(p=Ra()),l[t]=C(e[t])):l[t]=e[t]}d=X;e=a.apply(null,l);g=g&&g.async;U+=1;if(X!=d)return Ia().then(h);e=h(e);return g?Promise.resolve(e):e},Ta={a:(a,b,d,e)=>{y(`Assertion failed: ${a?
N(E,a):""}, at: `+[b?b?N(E,b):"":"unknown filename",d,e?e?N(E,e):"":"unknown function"])},i:function(a,b,d){a=new Date(1E3*(b+2097152>>>0<4194305-!!a?(a>>>0)+4294967296*b:NaN));F[d>>2]=a.getSeconds();F[d+4>>2]=a.getMinutes();F[d+8>>2]=a.getHours();F[d+12>>2]=a.getDate();F[d+16>>2]=a.getMonth();F[d+20>>2]=a.getFullYear()-1900;F[d+24>>2]=a.getDay();b=a.getFullYear();F[d+28>>2]=(0!==b%4||0===b%100&&0!==b%400?ua:ta)[a.getMonth()]+a.getDate()-1|0;F[d+36>>2]=-(60*a.getTimezoneOffset());b=(new Date(a.getFullYear(),
6,1)).getTimezoneOffset();var e=(new Date(a.getFullYear(),0,1)).getTimezoneOffset();F[d+32>>2]=(b!=e&&a.getTimezoneOffset()==Math.min(e,b))|0},l:(a,b,d)=>{function e(p){return(p=p.toTimeString().match(/\(([A-Za-z ]+)\)$/))?p[1]:"GMT"}var g=(new Date).getFullYear(),h=new Date(g,0,1),k=new Date(g,6,1);g=h.getTimezoneOffset();var l=k.getTimezoneOffset();G[a>>2]=60*Math.max(g,l);F[b>>2]=Number(g!=l);a=e(h);b=e(k);a=va(a);b=va(b);l<g?(G[d>>2]=a,G[d+4>>2]=b):(G[d>>2]=b,G[d+4>>2]=a)},b:()=>{y("")},m:()=>
Date.now(),k:a=>{var b=E.length;a>>>=0;if(2147483648<a)return!1;for(var d=1;4>=d;d*=2){var e=b*(1+.2/d);e=Math.min(e,a+100663296);var g=Math;e=Math.max(a,e);a:{g=(g.min.call(g,2147483648,e+(65536-e%65536)%65536)-z.buffer.byteLength+65535)/65536;try{z.grow(g);ha();var h=1;break a}catch(k){}h=void 0}if(h)return!0}return!1},d:(a,b)=>{var d=0;wa().forEach((e,g)=>{var h=b+d;g=G[a+4*g>>2]=h;for(h=0;h<e.length;++h)D[g++>>0]=e.charCodeAt(h);D[g>>0]=0;d+=e.length+1});return 0},e:(a,b)=>{var d=wa();G[a>>2]=
d.length;var e=0;d.forEach(g=>e+=g.length+1);G[b>>2]=e;return 0},c:()=>52,j:function(){return 70},n:(a,b,d,e)=>{for(var g=0,h=0;h<d;h++){var k=G[b>>2],l=G[b+4>>2];b+=8;for(var p=0;p<l;p++){var t=E[k+p],C=xa[a];0===t||10===t?((1===a?fa:v)(N(C,0)),C.length=0):C.push(t)}g+=l}G[e>>2]=g;return 0},o:function(a,b,d,e,g){return c.callbacks.callFunction({handleSleep:Ka},a,b,d,e,g)},h:function(a){return c.callbacks.shouldInterrupt(void 0,a)},g:function(a,b,d){const e={handleSleep:Ka};d=d?N(E,d):"";return c.callbacks.loadModuleSource(e,
a,b,d)},f:function(a,b,d,e){const g={handleSleep:Ka};d=d?N(E,d):"";e=e?N(E,e):"";return c.callbacks.normalizeModule(g,a,b,d,e)},p:function(a,b){Aa=a||b}},V=function(){function a(d){V=d.exports;V=ya();z=V.q;ha();ja.unshift(V.r);H--;c.monitorRunDependencies&&c.monitorRunDependencies(H);0==H&&(null!==I&&(clearInterval(I),I=null),J&&(d=J,J=null,d()));return V}var b={a:Ta};H++;c.monitorRunDependencies&&c.monitorRunDependencies(H);if(c.instantiateWasm)try{return c.instantiateWasm(b,a)}catch(d){v(`Module.instantiateWasm callback failed with error: ${d}`),
f(d)}qa(b,function(d){a(d.instance)}).catch(f);return{}}(),Q=c._malloc=a=>(Q=c._malloc=V.s)(a);c._QTS_Throw=(a,b)=>(c._QTS_Throw=V.t)(a,b);c._QTS_NewError=a=>(c._QTS_NewError=V.u)(a);c._QTS_RuntimeSetMemoryLimit=(a,b)=>(c._QTS_RuntimeSetMemoryLimit=V.v)(a,b);c._QTS_RuntimeComputeMemoryUsage=(a,b)=>(c._QTS_RuntimeComputeMemoryUsage=V.w)(a,b);c._QTS_RuntimeDumpMemoryUsage=a=>(c._QTS_RuntimeDumpMemoryUsage=V.x)(a);c._QTS_RecoverableLeakCheck=()=>(c._QTS_RecoverableLeakCheck=V.y)();
c._QTS_BuildIsSanitizeLeak=()=>(c._QTS_BuildIsSanitizeLeak=V.z)();c._QTS_RuntimeSetMaxStackSize=(a,b)=>(c._QTS_RuntimeSetMaxStackSize=V.A)(a,b);c._QTS_GetUndefined=()=>(c._QTS_GetUndefined=V.B)();c._QTS_GetNull=()=>(c._QTS_GetNull=V.C)();c._QTS_GetFalse=()=>(c._QTS_GetFalse=V.D)();c._QTS_GetTrue=()=>(c._QTS_GetTrue=V.E)();c._QTS_NewRuntime=()=>(c._QTS_NewRuntime=V.F)();c._QTS_FreeRuntime=a=>(c._QTS_FreeRuntime=V.G)(a);c._QTS_NewContext=a=>(c._QTS_NewContext=V.H)(a);
c._QTS_FreeContext=a=>(c._QTS_FreeContext=V.I)(a);c._QTS_FreeValuePointer=(a,b)=>(c._QTS_FreeValuePointer=V.J)(a,b);var Oa=c._free=a=>(Oa=c._free=V.K)(a);c._QTS_FreeValuePointerRuntime=(a,b)=>(c._QTS_FreeValuePointerRuntime=V.L)(a,b);c._QTS_FreeVoidPointer=(a,b)=>(c._QTS_FreeVoidPointer=V.M)(a,b);c._QTS_FreeCString=(a,b)=>(c._QTS_FreeCString=V.N)(a,b);c._QTS_DupValuePointer=(a,b)=>(c._QTS_DupValuePointer=V.O)(a,b);c._QTS_NewObject=a=>(c._QTS_NewObject=V.P)(a);
c._QTS_NewObjectProto=(a,b)=>(c._QTS_NewObjectProto=V.Q)(a,b);c._QTS_NewArray=a=>(c._QTS_NewArray=V.R)(a);c._QTS_NewArrayBuffer=(a,b,d)=>(c._QTS_NewArrayBuffer=V.S)(a,b,d);c._QTS_NewFloat64=(a,b)=>(c._QTS_NewFloat64=V.T)(a,b);c._QTS_GetFloat64=(a,b)=>(c._QTS_GetFloat64=V.U)(a,b);c._QTS_NewString=(a,b)=>(c._QTS_NewString=V.V)(a,b);c._QTS_GetString=(a,b)=>(c._QTS_GetString=V.W)(a,b);c._QTS_GetArrayBuffer=(a,b)=>(c._QTS_GetArrayBuffer=V.X)(a,b);
c._QTS_GetArrayBufferLength=(a,b)=>(c._QTS_GetArrayBufferLength=V.Y)(a,b);c._QTS_NewSymbol=(a,b,d)=>(c._QTS_NewSymbol=V.Z)(a,b,d);c._QTS_GetSymbolDescriptionOrKey=(a,b)=>(c._QTS_GetSymbolDescriptionOrKey=V._)(a,b);c._QTS_IsGlobalSymbol=(a,b)=>(c._QTS_IsGlobalSymbol=V.$)(a,b);c._QTS_IsJobPending=a=>(c._QTS_IsJobPending=V.aa)(a);c._QTS_ExecutePendingJob=(a,b,d)=>(c._QTS_ExecutePendingJob=V.ba)(a,b,d);c._QTS_GetProp=(a,b,d)=>(c._QTS_GetProp=V.ca)(a,b,d);
c._QTS_SetProp=(a,b,d,e)=>(c._QTS_SetProp=V.da)(a,b,d,e);c._QTS_DefineProp=(a,b,d,e,g,h,k,l,p)=>(c._QTS_DefineProp=V.ea)(a,b,d,e,g,h,k,l,p);c._QTS_Call=(a,b,d,e,g)=>(c._QTS_Call=V.fa)(a,b,d,e,g);c._QTS_ResolveException=(a,b)=>(c._QTS_ResolveException=V.ga)(a,b);c._QTS_Dump=(a,b)=>(c._QTS_Dump=V.ha)(a,b);c._QTS_Eval=(a,b,d,e,g)=>(c._QTS_Eval=V.ia)(a,b,d,e,g);c._QTS_Typeof=(a,b)=>(c._QTS_Typeof=V.ja)(a,b);c._QTS_GetGlobalObject=a=>(c._QTS_GetGlobalObject=V.ka)(a);
c._QTS_NewPromiseCapability=(a,b)=>(c._QTS_NewPromiseCapability=V.la)(a,b);c._QTS_TestStringArg=a=>(c._QTS_TestStringArg=V.ma)(a);c._QTS_BuildIsDebug=()=>(c._QTS_BuildIsDebug=V.na)();c._QTS_BuildIsAsyncify=()=>(c._QTS_BuildIsAsyncify=V.oa)();c._QTS_NewFunction=(a,b,d)=>(c._QTS_NewFunction=V.pa)(a,b,d);c._QTS_ArgvGetJSValueConstPointer=(a,b)=>(c._QTS_ArgvGetJSValueConstPointer=V.qa)(a,b);c._QTS_RuntimeEnableInterruptHandler=a=>(c._QTS_RuntimeEnableInterruptHandler=V.ra)(a);
c._QTS_RuntimeDisableInterruptHandler=a=>(c._QTS_RuntimeDisableInterruptHandler=V.sa)(a);c._QTS_RuntimeEnableModuleLoader=(a,b)=>(c._QTS_RuntimeEnableModuleLoader=V.ta)(a,b);c._QTS_RuntimeDisableModuleLoader=a=>(c._QTS_RuntimeDisableModuleLoader=V.ua)(a);c._QTS_bjson_encode=(a,b)=>(c._QTS_bjson_encode=V.va)(a,b);c._QTS_bjson_decode=(a,b)=>(c._QTS_bjson_decode=V.wa)(a,b);
var Ra=()=>(Ra=V.ya)(),Pa=a=>(Pa=V.za)(a),Qa=a=>(Qa=V.Aa)(a),Ma=a=>(Ma=V.Ba)(a),za=()=>(za=V.Ca)(),La=a=>(La=V.Da)(a),Na=()=>(Na=V.Ea)();c.___start_em_js=76516;c.___stop_em_js=77596;c.cwrap=(a,b,d,e)=>{var g=!d||d.every(h=>"number"===h||"boolean"===h);return"string"!==b&&g&&!e?c["_"+a]:function(){return Sa(a,b,d,arguments,e)}};c.UTF8ToString=(a,b)=>a?N(E,a,b):"";c.stringToUTF8=(a,b,d)=>P(a,b,d);c.lengthBytesUTF8=O;var Z;J=function Ua(){Z||Va();Z||(J=Ua)};
function Va(){function a(){if(!Z&&(Z=!0,c.calledRun=!0,!A)){M(ja);aa(c);if(c.onRuntimeInitialized)c.onRuntimeInitialized();if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var b=c.postRun.shift();ka.unshift(b)}M(ka)}}if(!(0<H)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)la();M(ia);0<H||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1);a()},1)):a())}}
if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();Va();


  return moduleArg.ready
}
);
})();
;
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = QuickJSRaw;
else if (typeof define === 'function' && define['amd'])
  define([], () => QuickJSRaw);