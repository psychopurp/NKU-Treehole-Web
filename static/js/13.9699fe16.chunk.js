(this["webpackJsonpnku-treehole-web"]=this["webpackJsonpnku-treehole-web"]||[]).push([[13],{140:function(t,e,o){"use strict";var a=o(25),i=o(2),r=(o(0),o(158)),n=o(159),l=o(156),c=o(141),p=o.n(c),s=o(3);e.a=function(t){var e=t.title,o=Object(i.a)(t,["title"]);return Object(s.jsx)("div",{children:Object(s.jsx)(r.a,Object(a.a)(Object(a.a)({},o),{},{className:p.a.appbar,position:"relative",children:Object(s.jsx)(n.a,{children:Object(s.jsx)(l.a,{variant:"subtitle1",children:e})})}))})}},141:function(t,e,o){},156:function(t,e,o){"use strict";var a=o(1),i=o(2),r=o(0),n=(o(5),o(11)),l=o(14),c=o(23),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},s=r.forwardRef((function(t,e){var o=t.align,l=void 0===o?"inherit":o,s=t.classes,d=t.className,h=t.color,u=void 0===h?"initial":h,g=t.component,b=t.display,y=void 0===b?"initial":b,m=t.gutterBottom,f=void 0!==m&&m,v=t.noWrap,x=void 0!==v&&v,j=t.paragraph,O=void 0!==j&&j,k=t.variant,w=void 0===k?"body1":k,N=t.variantMapping,B=void 0===N?p:N,S=Object(i.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),T=g||(O?"p":B[w]||p[w])||"span";return r.createElement(T,Object(a.a)({className:Object(n.a)(s.root,d,"inherit"!==w&&s[w],"initial"!==u&&s["color".concat(Object(c.a)(u))],x&&s.noWrap,f&&s.gutterBottom,O&&s.paragraph,"inherit"!==l&&s["align".concat(Object(c.a)(l))],"initial"!==y&&s["display".concat(Object(c.a)(y))]),ref:e},S))}));e.a=Object(l.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(s)},158:function(t,e,o){"use strict";var a=o(1),i=o(2),r=o(0),n=(o(5),o(11)),l=o(14),c=o(23),p=o(101),s=r.forwardRef((function(t,e){var o=t.classes,l=t.className,s=t.color,d=void 0===s?"primary":s,h=t.position,u=void 0===h?"fixed":h,g=Object(i.a)(t,["classes","className","color","position"]);return r.createElement(p.a,Object(a.a)({square:!0,component:"header",elevation:4,className:Object(n.a)(o.root,o["position".concat(Object(c.a)(u))],o["color".concat(Object(c.a)(d))],l,"fixed"===u&&"mui-fixed"),ref:e},g))}));e.a=Object(l.a)((function(t){var e="light"===t.palette.type?t.palette.grey[100]:t.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:t.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:e,color:t.palette.getContrastText(e)},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(s)},159:function(t,e,o){"use strict";var a=o(1),i=o(2),r=o(6),n=o(0),l=(o(5),o(11)),c=o(14),p=n.forwardRef((function(t,e){var o=t.classes,r=t.className,c=t.component,p=void 0===c?"div":c,s=t.disableGutters,d=void 0!==s&&s,h=t.variant,u=void 0===h?"regular":h,g=Object(i.a)(t,["classes","className","component","disableGutters","variant"]);return n.createElement(p,Object(a.a)({className:Object(l.a)(o.root,o[u],r,!d&&o.gutters),ref:e},g))}));e.a=Object(c.a)((function(t){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(r.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),regular:t.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(p)},214:function(t,e,o){t.exports={appbar:"index_appbar__xJSmq"}},241:function(t,e,o){"use strict";o.r(e);var a=o(140),i=o(214),r=o.n(i),n=o(3);e.default=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(a.a,{className:r.a.appbar,title:"profile"}),"Profile"]})}}}]);
//# sourceMappingURL=13.9699fe16.chunk.js.map