"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var v=s(function(k,q){
var l=require('@stdlib/strided-base-reinterpret-complex128/dist');function z(e,r,a,t){var n,i,u;if(e<=0)return!1;for(n=l(r,0),i=t*2,a*=2,u=0;u<e;u++){if(n[i]||n[i+1])return!0;i+=a}return!1}q.exports=z
});var y=s(function(A,f){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=v();function R(e,r,a){var t=j(e,a);return m(e,r,a,t)}f.exports=R
});var x=s(function(B,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=y(),w=v();_(c,"ndarray",w);p.exports=c
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=x(),o,d=O(E(__dirname,"./native.js"));b(d)?o=g:o=d;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
