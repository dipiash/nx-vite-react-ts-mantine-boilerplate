import{_ as u}from"./@mantine/core-a96b79a6.js";import{p as b}from"./graphql-ade7c8c8.js";var c=new Map,f=new Map,g=!0,m=!1;function p(e){return e.replace(/[\s,]+/g," ").trim()}function d(e){return p(e.source.body.substring(e.start,e.end))}function h(e){var r=new Set,a=[];return e.definitions.forEach(function(n){if(n.kind==="FragmentDefinition"){var t=n.name.value,i=d(n.loc),s=f.get(t);s&&!s.has(i)?g&&console.warn("Warning: fragment with name "+t+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||f.set(t,s=new Set),s.add(i),r.has(i)||(r.add(i),a.push(n))}else a.push(n)}),u(u({},e),{definitions:a})}function v(e){var r=new Set(e.definitions);r.forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(t){var i=n[t];i&&typeof i=="object"&&r.add(i)})});var a=e.loc;return a&&(delete a.startToken,delete a.endToken),e}function F(e){var r=p(e);if(!c.has(r)){var a=b(e,{experimentalFragmentVariables:m,allowLegacyFragmentVariables:m});if(!a||a.kind!=="Document")throw new Error("Not a valid GraphQL document.");c.set(r,v(h(a)))}return c.get(r)}function o(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];typeof e=="string"&&(e=[e]);var n=e[0];return r.forEach(function(t,i){t&&t.kind==="Document"?n+=t.loc.source.body:n+=t,n+=e[i+1]}),F(n)}function x(){c.clear(),f.clear()}function E(){g=!1}function w(){m=!0}function V(){m=!1}var l={gql:o,resetCaches:x,disableFragmentWarnings:E,enableExperimentalFragmentVariables:w,disableExperimentalFragmentVariables:V};(function(e){e.gql=l.gql,e.resetCaches=l.resetCaches,e.disableFragmentWarnings=l.disableFragmentWarnings,e.enableExperimentalFragmentVariables=l.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=l.disableExperimentalFragmentVariables})(o||(o={}));o.default=o;export{o as g};
