(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{307:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"_frontmatter",function(){return u});t(42);var n=t(43),o=t.n(n),r=t(3),s=t.n(r),m=t(2),i=t.n(m),c=t(4),l=t(347),p={},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=l.a,t}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:a},i.a.createElement("h1",{id:"review"},"Review"),i.a.createElement("h2",{id:"submit-pull-request"},"Submit pull request"),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Pull master")," and ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"push feature branch")," to ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-website")," repository")),i.a.createElement(c.MDXTag,{name:"pre",components:a},i.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"git pull origin master\ngit push origin 12345-issue-title\n")),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"Always ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"em"},"pull master")," into your feature branch before creating a pull request.")),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Create a pull request")," indicating that your code is ready for review."),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Request peer review")," on Github by tagging a fellow team member who you feel is qualified to review the code (this prevents the pull request from just sitting). You may also want to tag developers on other teams if the changes cover more than one application.")),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"Depending on the type of work done, you may need a product person to review and / or a developer to review. See ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}},"Code Review Norms")," for more information on how we do code reviews.")),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Use Zenhub to ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"connect")," pull request with a ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"linked issue"))),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"If you use the Zenhub Chrome ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd"}},"extension"),', there will be a "Connect this pull request with an existing issue" section at the bottom of Github\'s create pull request UI. You can click the "Connect with an issue" button to link the PR to the original issue in Zenhub.')),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"765px"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.934640522875817%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"PR deployment list",title:"",src:"/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png",srcSet:"/static/d16a8f63d7f7ad20701141bbe9190083/f4a45/connect-issue.png 259w,\n/static/d16a8f63d7f7ad20701141bbe9190083/ef0f6/connect-issue.png 518w,\n/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png 765w",sizes:"(max-width: 765px) 100vw, 765px"})))),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Change status")," of the ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"linked issue")," to ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"validate"))),i.a.createElement("h2",{id:"run-tests-and-compliance-scans"},"Run tests and compliance scans"),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Jenkins")," automatically ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"builds")," and ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"runs all tests")," your feature branch:",i.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"when the pull request is created"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"after a pull request is created when the feature branch is updated"))),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Test results are displayed on the pull request page")),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"699px"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.024320457796854%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"PR deployment list",title:"",src:"/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png",srcSet:"/static/4faf58036ea7db547dd9a3340a594242/f4a45/test-results.png 259w,\n/static/4faf58036ea7db547dd9a3340a594242/ef0f6/test-results.png 518w,\n/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png 699w",sizes:"(max-width: 699px) 100vw, 699px"})))),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"See ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"/getting-started/common-tasks/test"}},"Run Tests")," to run these tests locally")),i.a.createElement("h2",{id:"manually-test-change"},"Manually test change"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Manual testing can involve some separate things:"),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Making sure the functionality works in the web browsers users are most likely to use"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Run the code on production-like environment. This could be done by spinning up a cloud instance that resembles production, or launching a container that is production like (such as a Docker image, etc.)"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"See if there are there any bugs or unexpected nuisances that users might encounter"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Does it meet the requirements?")),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"em"},"The person making the change is responsible")," for ensuring the change is adequately tested. Testing can include automated tests or manual testing by stakeholders on the review instance or staging build.")),i.a.createElement("h3",{id:"review-instance-automatic-creation"},"Review instance automatic creation"),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"Jenkins")," automatically ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"deploys")," two remote ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"review instances")," of a ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"feature branch")," when a pull request is created:"),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},"an instance that just includes static pages content deployed by ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"va-bot"))),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},"an instance that includes static pages and the VA.gov client application deployed by ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"va-vfs-bot")),i.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"Example of deployment links:")),i.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"709px"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.375176304654442%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"PR deployment list",title:"",src:"/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png",srcSet:"/static/82df6872c5a0578f1ad667636438ad90/f4a45/PR-deployment-list.png 259w,\n/static/82df6872c5a0578f1ad667636438ad90/ef0f6/PR-deployment-list.png 518w,\n/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png 709w",sizes:"(max-width: 709px) 100vw, 709px"})))))),i.a.createElement(c.MDXTag,{name:"p",components:a},"After a pull request is created, ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"Jenkins")," will automatically ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"rebuild")," these instances when feature branch ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"changes are pushed")),i.a.createElement(c.MDXTag,{name:"p",components:a},"  ",i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"You will need your browser configured to access the vetsgov-internal domain via the SOCKS proxy. Please see the ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"/getting-started/internal-tools"}},"2. Access internal tools")," for detailed instructions.")),i.a.createElement("h3",{id:"review-instance-manual-creation"},"Review instance manual creation"),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"Jenkins")," can be ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"manually triggered")," to build a ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"review instance"),"."),i.a.createElement(c.MDXTag,{name:"ol",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},"Visit ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/vets-review-instance-deploy/"}},"http://jenkins.vetsgov-internal/job/vets-review-instance-deploy/")," and log in."),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},'Select "Build with Parameters"'),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},"Specify the branch names for ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"api_branch")," and ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"web_branch"),". These branches will be deployed together with the review instance."),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},"When the process is completed, the URL for the review instance will be provided at the end of the output logs.")),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"A Jenkins job will run periodically and remove review instances for which the source branches no longer exist. To ensure that your instance is cleaned up appropriately, just delete the branch from the origin repository.")),i.a.createElement("h2",{id:"peer-review-and-merge"},"Peer review and merge"),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Get at least one ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"pull request approval")," from a peer"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.blog/2016-04-01-squash-your-commits/"}},"Squash your commits")," and ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"merge")," into ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"master")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Delete")," pull request branch")),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"See our team's ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}},"code review norms")," for details on how code review work and what needs to be checked.")))},a}(i.a.Component),u={}},340:function(e,a,t){"use strict";t.d(a,"b",function(){return l});var n=t(2),o=t.n(n),r=t(13),s=t.n(r),m=t(68),i=t.n(m);t.d(a,"a",function(){return i.a});t(342);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},341:function(e,a){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,a,t){var n;e.exports=(n=t(344))&&n.default||n},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,a,t){"use strict";t.r(a);var n=t(18),o=t.n(n),r=t(2),s=t.n(r),m=t(13),i=t.n(m),c=t(94),l=t(9),p=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return t?s.a.createElement(c.a,o()({location:a,pageResources:t},t.json)):null};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=p},345:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(343),s=t(2),m=t.n(s),i=t(13),c=t.n(i),l=t(348),p=t.n(l),d=t(340),u=(t(17),t(133),t(134),t(341)),g=t.n(u),h=t(18),f=t.n(h),b=t(349),v=t.n(b),E=function(e){function a(a){var t;return(t=e.call(this,a)||this).state=g.a.sections.reduce(function(e,a){var t;return f()(((t={})[a.id]=!1,t),e)},{}),t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.open,n=a.onClose,o=a.location;return m.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},m.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},m.a.createElement("i",{className:"fas fa-times"})),m.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(a){return m.a.createElement("div",{key:a.id},m.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},m.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[a.id]=!e.state[a.id],t))},"aria-expanded":e.state[a.id]?"true":"false","aria-controls":"nav-"+a.id},a.name)),m.a.createElement("div",{id:"nav-"+a.id,"aria-hidden":e.state[a.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},m.a.createElement("ul",{className:"site-c-mobile-nav-list"},m.a.createElement("li",{className:"site-c-mobile-nav-list__item"},m.a.createElement(d.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===a.href}),to:a.href},"Overview")))))})))},a}(m.a.Component),y=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navOpen:!1},t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props.location;return m.a.createElement("div",null,m.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),m.a.createElement("header",{className:"site-c-header",role:"banner"},m.a.createElement("div",{className:"site-l-wrapper"},m.a.createElement("div",{className:"site-c-header__masthead"},m.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},m.a.createElement("em",{className:"site-c-header__logo-text"},m.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},m.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",m.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),m.a.createElement("div",{className:"site-c-header__utility-links"},m.a.createElement("div",{id:"search-container",className:"site-search-container"},m.a.createElement("i",{className:"fas fa-search search-icon"}),m.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),m.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},m.a.createElement("i",{className:"fas fa-search"})),m.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),m.a.createElement("nav",{className:"site-c-header__nav"},m.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return m.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},m.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(a.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),m.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},m.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),m.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&m.a.createElement("div",{className:"site-c-overlay is-visible"}),m.a.createElement(E,{location:a,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},a}(m.a.Component),w=(t(350),function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,a=e.children,t=e.location;return m.a.createElement(d.b,{query:"1044757290",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},m.a.createElement("html",{lang:"en"})),m.a.createElement(y,{location:t}),a)},data:r})},a}(m.a.Component));w.propTypes={children:c.a.node.isRequired};a.a=w},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}}]}}}},347:function(e,a,t){"use strict";var n=t(2),o=t.n(n),r=t(13),s=t.n(r),m=t(345),i=(t(133),t(134),t(135),t(17),t(346)),c=t(340);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var a=e.items,t=e.isSublist,n=void 0!==t&&t;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=t(341),u=t.n(d);function g(e){var a=e.location,t=u.a.sections.find(function(e){return a.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function h(e){var a=e.children,t=e.location;return o.a.createElement(m.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}t.d(a,"a",function(){return h}),h.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-review-mdx-fbe3cb3f2451a306af3a.js.map