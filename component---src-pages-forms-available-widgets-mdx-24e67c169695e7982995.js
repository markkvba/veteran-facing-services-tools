(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{286:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"_frontmatter",function(){return u});t(42);var n=t(43),o=t.n(n),r=t(3),m=t.n(r),s=t(2),i=t.n(s),c=t(4),l=t(347),p={},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=l.a,t}return m()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:a},i.a.createElement("h1",{id:"available-form-widgets"},"Available form widgets"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Widgets are React components that return specific form elements. Set these widgets in a config file while building your form."),i.a.createElement(c.MDXTag,{name:"p",components:a},"Some widgets are associated with particular schema types or formats. There are additional widgets available, but VAFS uses definitions they're included in, rather than just the field."),i.a.createElement(c.MDXTag,{name:"p",components:a},"Widgets from the ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"./about-the-schema-and-uischema-objects.md#understanding-the-uischema-object"}},"react-jsonschema-form library")," include string mappings. Widgets created specifically for VAFS do not have mappings, and therefore must be specified by passing the component for the widget directly to the config. To include such widgets, import the widget at the top of the file:"),i.a.createElement(c.MDXTag,{name:"pre",components:a},i.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"import CurrencyWidget from 'platform/forms-system/src/js/widgets/CurrencyWidget';\n")),i.a.createElement(c.MDXTag,{name:"p",components:a},"Then, set the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ui:widget")," field to the imported widget name:"),i.a.createElement(c.MDXTag,{name:"pre",components:a},i.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"uiSchema: {\n  ...\n  'ui:widget': CurrencyWidget,\n  ...\n}\n")),i.a.createElement(c.MDXTag,{name:"p",components:a},"Available widgets are:"),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#arraycountwidget"}},"ArrayCountWidget")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#checkboxwidget"}},"CheckboxWidget")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#currencywidget"}},"CurrencyWidget")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#datewidget"}},"DateWidget")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#emailwidget"}},"EmailWidget")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#phonenumberwidget"}},"PhoneNumberWidget")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#radiowidget"}},"RadioWidget")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#selectwidget"}},"SelectWidget")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#ssnwidget"}},"SSNWidget")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#textwidget"}},"TextWidget")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#yesnowidget"}},"YesNoWidget"))),i.a.createElement("h2",{id:"arraycountwidget"},"ArrayCountWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'<input type="number">'),' HTML element, and is used when determining how many times a group of questions should be rendered. For more information about grouping common questions, see "',i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines.md#sequential-duplicate-form-groups"}},"Sequential duplicate form groups"),'."'),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/ArrayCountWidget.jsx"}},"ArrayCountWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': ArrayCountWidget")," for the given field.")),i.a.createElement("h2",{id:"checkboxwidget"},"CheckboxWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Renders a single ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'<input type="checkbox">'),' HTML element. For information about rendering multiple checkboxes together, see "',i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines.md#checkbox-group"}},"Checkbox Group"),'."'),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CheckboxWidget.jsx"}},"CheckboxWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," Usually the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"CheckboxWidget")," is not specified directly in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"type: 'boolean'"),".")),i.a.createElement("h2",{id:"currencywidget"},"CurrencyWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<input>")," HTML element with some additional logic to handle parsing currency inputs."),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CurrencyWidget.jsx"}},"CurrencyWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': CurrencyWidget")," for the given field.")),i.a.createElement("h2",{id:"datewidget"},"DateWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Renders three separate fields for dates, two ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<select>")," elements for month and day and one ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<input>")," element for the year."),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/DateWidget.jsx"}},"DateWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': 'date'")," for the given field.")),i.a.createElement("h2",{id:"emailwidget"},"EmailWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TextWidget")," with the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'type: "email"')," passed to the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<input>")," element."),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/EmailWidget.jsx"}},"EmailWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': 'email'")," for the given field.")),i.a.createElement("h2",{id:"phonenumberwidget"},"PhoneNumberWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TextWidget")," with additional logic to strip non-numeric characters from the input before saving the input."),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/PhoneNumberWidget.jsx"}},"PhoneNumberWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': PhoneNumberWidget")," for the given field.")),i.a.createElement("h2",{id:"radiowidget"},"RadioWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Renders a single radio button for each ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," value. This overrides the default ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"SelectWidget")," that is normally rendered where ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," exists."),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/RadioWidget.jsx"}},"RadioWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': 'radio'")," for the given field. Usually used with ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:options': { labels: {}}")," so you can specify the label for each radio button. To see a code example, refer to ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines.md#radio-button-group"}},"radio button group in form features"),".")),i.a.createElement("h2",{id:"selectwidget"},"SelectWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<select>")," HTML element. This is the default widget for data of ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type: 'string'")," with an ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," property."),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SelectWidget.jsx"}},"SelectWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," Usually the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"SelectWidget")," is not specified directly in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"type: 'string'")," with an ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"enum")," property.")),i.a.createElement("h2",{id:"ssnwidget"},"SSNWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TextWidget")," with additional logic to strip the dashes before saving the input."),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SSNWidget.jsx"}},"SSNWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': SSNWidget")," for the given field.")),i.a.createElement("h2",{id:"textwidget"},"TextWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<input>")," HTML element, and is the default widget for data of ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type: 'string'"),"."),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/TextWidget.jsx"}},"TextWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," Usually the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"TextWidget")," is not specified directly in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"type: 'string'"),".")),i.a.createElement("h2",{id:"yesnowidget"},"YesNoWidget"),i.a.createElement(c.MDXTag,{name:"p",components:a},'Renders two radio buttons, one with a value of "Yes" and one with a value of "No".'),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/YesNoWidget.jsx"}},"YesNoWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': 'yesNo'")," for the given field.")))},a}(i.a.Component),u={}},340:function(e,a,t){"use strict";t.d(a,"b",function(){return l});var n=t(2),o=t.n(n),r=t(13),m=t.n(r),s=t(68),i=t.n(s);t.d(a,"a",function(){return i.a});t(342);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},341:function(e,a){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,a,t){var n;e.exports=(n=t(344))&&n.default||n},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,a,t){"use strict";t.r(a);var n=t(18),o=t.n(n),r=t(2),m=t.n(r),s=t(13),i=t.n(s),c=t(94),l=t(9),p=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return t?m.a.createElement(c.a,o()({location:a,pageResources:t},t.json)):null};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=p},345:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(343),m=t(2),s=t.n(m),i=t(13),c=t.n(i),l=t(348),p=t.n(l),d=t(340),u=(t(17),t(133),t(134),t(341)),g=t.n(u),h=t(18),f=t.n(h),E=t(349),v=t.n(E),N=function(e){function a(a){var t;return(t=e.call(this,a)||this).state=g.a.sections.reduce(function(e,a){var t;return f()(((t={})[a.id]=!1,t),e)},{}),t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.open,n=a.onClose,o=a.location;return s.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},s.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(a){return s.a.createElement("div",{key:a.id},s.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},s.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[a.id]=!e.state[a.id],t))},"aria-expanded":e.state[a.id]?"true":"false","aria-controls":"nav-"+a.id},a.name)),s.a.createElement("div",{id:"nav-"+a.id,"aria-hidden":e.state[a.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},s.a.createElement("ul",{className:"site-c-mobile-nav-list"},s.a.createElement("li",{className:"site-c-mobile-nav-list__item"},s.a.createElement(d.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===a.href}),to:a.href},"Overview")))))})))},a}(s.a.Component),T=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navOpen:!1},t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props.location;return s.a.createElement("div",null,s.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),s.a.createElement("header",{className:"site-c-header",role:"banner"},s.a.createElement("div",{className:"site-l-wrapper"},s.a.createElement("div",{className:"site-c-header__masthead"},s.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},s.a.createElement("em",{className:"site-c-header__logo-text"},s.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},s.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",s.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),s.a.createElement("div",{className:"site-c-header__utility-links"},s.a.createElement("div",{id:"search-container",className:"site-search-container"},s.a.createElement("i",{className:"fas fa-search search-icon"}),s.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),s.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),s.a.createElement("nav",{className:"site-c-header__nav"},s.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return s.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},s.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(a.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),s.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},s.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),s.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&s.a.createElement("div",{className:"site-c-overlay is-visible"}),s.a.createElement(N,{location:a,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},a}(s.a.Component),b=(t(350),function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,a=e.children,t=e.location;return s.a.createElement(d.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(T,{location:t}),a)},data:r})},a}(s.a.Component));b.propTypes={children:c.a.node.isRequired};a.a=b},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,a,t){"use strict";var n=t(2),o=t.n(n),r=t(13),m=t.n(r),s=t(345),i=(t(133),t(134),t(135),t(17),t(346)),c=t(340);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var a=e.items,t=e.isSublist,n=void 0!==t&&t;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=t(341),u=t.n(d);function g(e){var a=e.location,t=u.a.sections.find(function(e){return a.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function h(e){var a=e.children,t=e.location;return o.a.createElement(s.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}t.d(a,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-available-widgets-mdx-24e67c169695e7982995.js.map