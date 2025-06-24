// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function n(r,n,e,o,f){var s,t,l,a,i,u;if(t=n[1],l=n[0],s=[],e){for(a=0;a<t;a++)for(i=0;i<l;i++)s.push(o.call(f,r[i][a],[i,a],r));return s}for(i=0;i<l;i++)for(u=r[i],a=0;a<t;a++)s.push(o.call(f,u[a],[i,a],r));return s}function e(r,n,e,o,f,s,t,l){var a,i,u,c,d,p;if(a=n[1],i=n[0],p=s,e){for(u=0;u<a;u++)for(c=0;c<i;c++)o[p]=t.call(l,r[c][u],[c,u],r),p+=f;return o}for(c=0;c<i;c++)for(d=r[c],u=0;u<a;u++)o[p]=t.call(l,d[u],[c,u],r),p+=f;return o}r(n,"assign",e);export{e as assign,n as default};
//# sourceMappingURL=index.mjs.map
