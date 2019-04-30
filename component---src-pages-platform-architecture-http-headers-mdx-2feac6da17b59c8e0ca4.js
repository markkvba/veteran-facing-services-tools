(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{308:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),r=a(3),m=a.n(r),s=a(2),c=a.n(s),i=a(4),l=a(347),p={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},c.a.createElement("h1",{id:"http-headers-used-on-vagov"},"HTTP Headers used on VA.gov"),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"overview"},"Overview"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"HTTP headers control browser behavior"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Browser behavior is a front end concern"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Shared responsibility between devops and front end",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"configuration"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"management"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"user experience"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Typically",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"devops responsible for the how (e.g. Terraform)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"front end responsible for the why (e.g. security, caching behavior)")))),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"http-example"},"HTTP Example"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"raw request and response")),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-mermaidjs"}},"graph TB\n    subgraph HTTP\n      F[HTTP <br/>Headers]\nsubgraph HTTP Body\n       G[HTML<br />Head]\n       A[HTML Body]\n       end\n    end\n")),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"http-request-example"},"HTTP Request Example"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"GET /health-care/ HTTP/1.1"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"action to perform, resource location, http version"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"GET"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"POST"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"PUT"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DELETE")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Host: www.va.gov")," - derived from URI"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Connection: keep-alive"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"HTTP persistent connection"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"reduces latency and traffic by reusing TCP connection"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Upgrade-Insecure-Requests: 1"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"supports ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Security-Policy: upgrade-insecure-requests")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"basically tells server to redirect http requests to https"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"User-Agent: ...")," - identifying information about client software e.g. OS, version")),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"http-request-example-continued"},"HTTP Request Example continued"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Accepts: ..."),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"MIME types supported"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Server chooses one as the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Type")," on the response"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Accept-Encoding: gzip, defat, br")," - supported compression algorithms"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Accept-Language: en-US,en;q=0.9"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"supported language and localization preference"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"q=0.9")," expresses order of preference")))),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"http-response-example"},"HTTP Response Example"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"HTTP/1.1 200 OK")," - response version and status code"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Date: ...")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"x-amz-...: ...")," -  Amazon custom response headers"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Referrer-Policy: no-referrer-when-downgrade"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"determines ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Referer")," header behavior i.e. previous page link"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"no-referrer-when-downgrade")," is default behavior- sends previous page link when security protocol is the same"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Strict-Transport-Security: ..."),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"tells the browser to only connect to website via https"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"impacts all future connections to a site")))),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"http-response-example-continued"},"HTTP Response Example continued"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"X-Content-Type-Options: no-sniff"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"follow the mime-types in the http content-type"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"only applies to scripts and styles right now"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"X-Frame-Options: deny"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"determines if browser can render page in a frame"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"prevents clickjacking attacks"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"X-XSS-Protection: 1; report=/csp-report"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"used by older browsers- tells them to stop loading the page if cross-site scripting attack is detected"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Encoding: gzip")," - encoding used on body"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Set-Cookie: ...")," - cookie from server")),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"http-response-example-continued-2"},"HTTP Response Example continued 2"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Transfer-Encoding: chunked"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"form of encoding used between nodes (hop-by-hop)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"chunked: ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Length")," is unknown"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Connection: Keep-alive")," - see request example")),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"cache-control-response"},"Cache Control Response"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Cache-Control: public, max-age=86400"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"can be stored by any cache"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"private")," indicates response can be cached but contains user specific info"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"max-age=86400")," - number of minutes cache can be used before checking if updated (60 days)"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Etag: [hash]"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"file hash used when checking if file is updated"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"when matched, server will return status code ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"304 Not Modified"))))),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"cache-control-request"},"Cache Control Request"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Cache-Control: no-cache")," & ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Pragma: no-cache"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"HTTP 1.1 and 1.0"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"check if resource has changed using ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ETag")," or ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Last-Modified")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"If-None-Match: [hash]")," & ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"If-Modified-Since: [date]"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"when ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"max-age")," is reached, browser includes in request"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"[date]")," header is used only if ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"[hash]")," is not supported")))),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"cross-origin-resource-sharing-cors"},"Cross-Origin Resource Sharing (CORS)"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Applies to all XHR requests not on the same origin"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"CORS headers are returned by the server allowing it to control a range of permissions",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Origin: https://www.va.gov")," - if allowed origin doesn't match the current origin, then the browser will not load the resource",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"... has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"VA.gov is configured to only add this header when the request contains an origin that matches our whitelist"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Server ",c.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"li"},"can")," block the request- ours do not opting to always return the resource")))))),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"cross-origin-resource-sharing-cors-options"},"Cross-Origin Resource Sharing (CORS) OPTIONS"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Preflight checks are required for methods that can cause change: POST, DELETE, UPDATE"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"OPTIONS request",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Request-Headers")," - list of headers client intends to send"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"OPTIONS response",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Methods: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Headers: x-key-inflection")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Expose-Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"If any of these permissions don't match the intended request, the browser will cancel it")),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"cross-origin-resource-sharing-cors-other-directives"},"Cross-Origin Resource Sharing (CORS) Other directives"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Vary: Origin, Access-Control-Request-Headers, Access-Control-Request-Method"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"indicates that response will vary depending on the value of these headers"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Other controls: ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Methods: GET"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Countrol-Max-Age: 0"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Credentials: true"))),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"content-security-policy-csp"},"Content Security Policy (CSP)"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"can be an HTTP header or an HTML meta tag"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"whitelist of valid sources of scripts",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"script-src: http://search.usa.gov")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"can set set up to report CSP violations")),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h2",{id:"configs"},"Configs"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"CSP",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-prod.yml"}},"prod")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-staging.yml"}},"staging")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-dev.yml"}},"dev")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"CORS (requires manual deployment)",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-prod/main.tf"}},"prod")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-staging/main.tf"}},"staging")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-dev/main.tf"}},"dev")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"cache-control",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/d928cbfab6fd791c3b05464bc759a0cd9b4cd6b2/ansible/deployment/roles/deploy-static-assets/tasks/upload-public.yml"}},"prod"))))))},n}(c.a.Component),u={}},340:function(e,n,a){"use strict";a.d(n,"b",function(){return l});var t=a(2),o=a.n(t),r=a(13),m=a.n(r),s=a(68),c=a.n(s);a.d(n,"a",function(){return c.a});a(342);var i=o.a.createContext({}),l=function(e){return o.a.createElement(i.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},341:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,n,a){var t;e.exports=(t=a(344))&&t.default||t},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,n,a){"use strict";a.r(n);var t=a(18),o=a.n(t),r=a(2),m=a.n(r),s=a(13),c=a.n(s),i=a(94),l=a(9),p=function(e){var n=e.location,a=l.default.getResourcesForPathnameSync(n.pathname);return a?m.a.createElement(i.a,o()({location:n,pageResources:a},a.json)):null};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=p},345:function(e,n,a){"use strict";var t=a(3),o=a.n(t),r=a(343),m=a(2),s=a.n(m),c=a(13),i=a.n(c),l=a(348),p=a.n(l),d=a(340),u=(a(17),a(133),a(134),a(341)),g=a.n(u),h=a(18),E=a.n(h),f=a(349),T=a.n(f),v=function(e){function n(n){var a;return(a=e.call(this,n)||this).state=g.a.sections.reduce(function(e,n){var a;return E()(((a={})[n.id]=!1,a),e)},{}),a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,a=n.open,t=n.onClose,o=n.location;return s.a.createElement("div",{className:T()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},s.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(n){return s.a.createElement("div",{key:n.id},s.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},s.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[n.id]=!e.state[n.id],a))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),s.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},s.a.createElement("ul",{className:"site-c-mobile-nav-list"},s.a.createElement("li",{className:"site-c-mobile-nav-list__item"},s.a.createElement(d.a,{className:T()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(s.a.Component),M=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={navOpen:!1},a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return s.a.createElement("div",null,s.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),s.a.createElement("header",{className:"site-c-header",role:"banner"},s.a.createElement("div",{className:"site-l-wrapper"},s.a.createElement("div",{className:"site-c-header__masthead"},s.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},s.a.createElement("em",{className:"site-c-header__logo-text"},s.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},s.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",s.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),s.a.createElement("div",{className:"site-c-header__utility-links"},s.a.createElement("div",{id:"search-container",className:"site-search-container"},s.a.createElement("i",{className:"fas fa-search search-icon"}),s.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),s.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),s.a.createElement("nav",{className:"site-c-header__nav"},s.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return s.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},s.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),s.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},s.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),s.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&s.a.createElement("div",{className:"site-c-overlay is-visible"}),s.a.createElement(v,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(s.a.Component),N=(a(350),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,n=e.children,a=e.location;return s.a.createElement(d.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(M,{location:a}),n)},data:r})},n}(s.a.Component));N.propTypes={children:i.a.node.isRequired};n.a=N},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),m=a.n(r),s=a(345),c=(a(133),a(134),a(135),a(17),a(346)),i=a(340);function l(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(i.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(341),u=a.n(d);function g(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function h(e){var n=e.children,a=e.location;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-http-headers-mdx-2feac6da17b59c8e0ca4.js.map