var qs=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t){t.exports={a:"0.1.3"}},function(t,e,r){"use strict";r.r(e),r.d(e,"QuadSolver",function(){return n}),r.d(e,"QuadSolverCitardauq",function(){return a}),r.d(e,"CompleteSquare",function(){return u}),r.d(e,"GetVersion",function(){return i});var o=r(0);const n=(t,e,r)=>Math.pow(e,2)-4*t*r<0?["No Real Roots","No Real Roots"]:Math.pow(e,2)-4*t*r==0?[(-1*e+Math.sqrt(Math.pow(e,2)-4*t*r))/(2*t),"Only One Root"]:[(-1*e+Math.sqrt(Math.pow(e,2)-4*t*r))/(2*t),(-1*e-Math.sqrt(Math.pow(e,2)-4*t*r))/(2*t)],a=(t,e,r)=>Math.pow(e,2)-4*t*r<0?["No Real Roots","No Real Roots"]:Math.pow(e,2)-4*t*r==0?[(-1*e+Math.sqrt(Math.pow(e,2)-4*t*r))/(2*t),"Only One Root"]:[2*r/(-1*e-Math.sqrt(Math.pow(e,2)-4*t*r)),2*r/(-1*e+Math.sqrt(Math.pow(e,2)-4*t*r))],u=(t,e,r)=>(e/=t,r/=t,[Math.sqrt(Math.pow(e/2,2)-r)-e/2,-1*Math.sqrt(Math.pow(e/2,2)-r)-e/2]),i=()=>`quadratic-solver v${o.a}`}]);