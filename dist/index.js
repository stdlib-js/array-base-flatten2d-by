"use strict";var p=function(i,t){return function(){try{return t||i((t={exports:{}}).exports,t),t.exports}catch(s){throw (t=0, s)}};};var y=p(function(z,q){
function O(i,t,s,f,l){var n,o,u,r,a,e;if(o=t[1],u=t[0],n=[],s){for(r=0;r<o;r++)for(a=0;a<u;a++)n.push(f.call(l,i[a][r],[a,r],i));return n}for(a=0;a<u;a++)for(e=i[a],r=0;r<o;r++)n.push(f.call(l,e[r],[a,r],i));return n}q.exports=O
});var B=p(function(C,d){
function R(i,t,s,f,l,n,o,u){var r,a,e,v,S,c;if(r=t[1],a=t[0],c=n,s){for(e=0;e<r;e++)for(v=0;v<a;v++)f[c]=o.call(u,i[v][e],[v,e],i),c+=l;return f}for(v=0;v<a;v++)for(S=i[v],e=0;e<r;e++)f[c]=o.call(u,S[e],[v,e],i),c+=l;return f}d.exports=R
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=y(),j=B();g(m,"assign",j);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
