(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{9295:function(e,t,i){"use strict";i.d(t,{Header:function(){return f}});var s=i(7437),a=i(9376),r=i(2265),n=i(4007),l=i(2275),o=i.n(l),d=i(5783),c=i(9390);let h=e=>{let{timeZone:t,locale:i="en-GB"}=e,[a,n]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e=()=>{let e=new Date;n(new Intl.DateTimeFormat(i,{timeZone:t,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(e))};e();let s=setInterval(e,1e3);return()=>clearInterval(s)},[t,i]),(0,s.jsx)(s.Fragment,{children:a})},f=()=>{var e;let t=null!==(e=(0,a.usePathname)())&&void 0!==e?e:"";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pT,{hide:"s",fillWidth:!0,position:"fixed",height:"80",zIndex:9}),(0,s.jsx)(n.pT,{show:"s",fillWidth:!0,position:"fixed",bottom:"0",to:"top",height:"80",zIndex:9}),(0,s.jsxs)(n.kC,{fitHeight:!0,className:o().position,as:"header",zIndex:9,fillWidth:!0,padding:"8",horizontal:"center",children:[(0,s.jsx)(n.kC,{paddingLeft:"12",fillWidth:!0,vertical:"center",textVariant:"body-default-s",children:d.jf.location&&(0,s.jsx)(n.kC,{hide:"s",children:c.lB.location})}),(0,s.jsx)(n.kC,{fillWidth:!0,horizontal:"center",children:(0,s.jsx)(n.kC,{background:"surface",border:"neutral-medium",radius:"m-4",shadow:"l",padding:"4",horizontal:"center",children:(0,s.jsxs)(n.kC,{gap:"4",vertical:"center",textVariant:"body-default-s",children:[d._j["/"]&&(0,s.jsx)(n.CO,{prefixIcon:"home",href:"/",selected:"/"===t}),d._j["/"]&&(0,s.jsx)(n.x1,{vert:!0,maxHeight:"24"}),d._j["/about"]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.CO,{className:"s-flex-hide",prefixIcon:"person",href:"/about",label:c.jZ.label,selected:"/about"===t}),(0,s.jsx)(n.CO,{className:"s-flex-show",prefixIcon:"person",href:"/about",selected:"/about"===t})]}),d._j["/work"]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.CO,{className:"s-flex-hide",prefixIcon:"grid",href:"/work",label:c.ZT.label,selected:t.startsWith("/work")}),(0,s.jsx)(n.CO,{className:"s-flex-show",prefixIcon:"grid",href:"/work",selected:t.startsWith("/work")})]}),d._j["/blog"]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.CO,{className:"s-flex-hide",prefixIcon:"book",href:"/blog",label:c.tQ.label,selected:t.startsWith("/blog")}),(0,s.jsx)(n.CO,{className:"s-flex-show",prefixIcon:"book",href:"/blog",selected:t.startsWith("/blog")})]}),d._j["/gallery"]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.CO,{className:"s-flex-hide",prefixIcon:"gallery",href:"/gallery",label:c.lj.label,selected:t.startsWith("/gallery")}),(0,s.jsx)(n.CO,{className:"s-flex-show",prefixIcon:"gallery",href:"/gallery",selected:t.startsWith("/gallery")})]})]})})}),(0,s.jsx)(n.kC,{fillWidth:!0,horizontal:"end",vertical:"center",children:(0,s.jsx)(n.kC,{paddingRight:"12",horizontal:"end",vertical:"center",textVariant:"body-default-s",gap:"20",children:(0,s.jsx)(n.kC,{hide:"s",children:d.jf.time&&(0,s.jsx)(h,{timeZone:c.lB.location})})})})]})]})}},1288:function(e,t,i){"use strict";i.d(t,{HeadingLink:function(){return l}});var s=i(7437);i(2265);var a=i(4007),r=i(9187),n=i.n(r);let l=e=>{let{id:t,level:i,children:r,style:l}=e,{addToast:o}=(0,a.pm)(),d=e=>{let t="".concat(window.location.origin).concat(window.location.pathname,"#").concat(e);navigator.clipboard.writeText(t).then(()=>{o({variant:"success",message:"Link copied to clipboard."})},()=>{o({variant:"danger",message:"Failed to copy link."})})};return(0,s.jsxs)(a.kC,{style:l,onClick:()=>d(t),className:n().control,vertical:"center",gap:"4",children:[(0,s.jsx)(a.X6,{className:n().text,id:t,variant:{1:"display-strong-xs",2:"heading-strong-xl",3:"heading-strong-l",4:"heading-strong-m",5:"heading-strong-s",6:"heading-strong-xs"}[i],as:"h".concat(i),children:r}),(0,s.jsx)(a.hU,{className:n().visibility,size:"s",icon:"openLink",variant:"ghost",tooltip:"Copy",tooltipPosition:"right"})]})}},1214:function(e,t,i){"use strict";i.d(t,{Mailchimp:function(){return l}});var s=i(7437),a=i(5783),r=i(4007),n=i(2265);let l=e=>{let t,{newsletter:i}=e,[l,o]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[h,f]=(0,n.useState)(!1),p=e=>""===e||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),x=e=>{let t=e.target.value;o(t),p(t)?c(""):c("Please enter a valid email address.")},g=function(){for(var e=arguments.length,i=Array(e),s=0;s<e;s++)i[s]=arguments[s];clearTimeout(t),t=setTimeout(()=>x(...i),2e3)};return(0,s.jsxs)(r.sg,{overflow:"hidden",position:"relative",fillWidth:!0,padding:"xl",radius:"l",marginBottom:"m",horizontal:"center",align:"center",background:"surface",border:"neutral-medium",children:[(0,s.jsx)(r.Aq,{mask:{cursor:a.Gp.effects.mask.cursor,x:a.Gp.effects.mask.x,y:a.Gp.effects.mask.y,radius:a.Gp.effects.mask.radius},gradient:{display:a.Gp.effects.gradient.display,x:a.Gp.effects.gradient.x,y:a.Gp.effects.gradient.y,width:a.Gp.effects.gradient.width,height:a.Gp.effects.gradient.height,tilt:a.Gp.effects.gradient.tilt,colorStart:a.Gp.effects.gradient.colorStart,colorEnd:a.Gp.effects.gradient.colorEnd,opacity:a.Gp.effects.gradient.opacity},dots:{display:a.Gp.effects.dots.display,color:a.Gp.effects.dots.color,size:a.Gp.effects.dots.size,opacity:a.Gp.effects.dots.opacity},grid:{display:a.Gp.effects.grid.display,color:a.Gp.effects.grid.color,width:a.Gp.effects.grid.width,height:a.Gp.effects.grid.height,opacity:a.Gp.effects.grid.opacity},lines:{display:a.Gp.effects.lines.display,opacity:a.Gp.effects.lines.opacity}}),(0,s.jsx)(r.X6,{style:{position:"relative"},marginBottom:"s",variant:"display-strong-xs",children:i.title}),(0,s.jsx)(r.xv,{style:{position:"relative",maxWidth:"var(--responsive-width-xs)"},wrap:"balance",marginBottom:"l",onBackground:"neutral-medium",children:i.description}),(0,s.jsx)("form",{style:{width:"100%",display:"flex",justifyContent:"center"},action:a.Gp.action,method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",children:(0,s.jsxs)(r.kC,{id:"mc_embed_signup_scroll",fillWidth:!0,maxWidth:24,gap:"8",children:[(0,s.jsx)(r.II,{formNoValidate:!0,labelAsPlaceholder:!0,id:"mce-EMAIL",name:"EMAIL",type:"email",label:"Email",required:!0,onChange:e=>{d?x(e):g(e)},onBlur:()=>{f(!0),p(l)||c("Please enter a valid email address.")},errorMessage:d}),(0,s.jsx)("div",{style:{display:"none"},children:(0,s.jsx)("input",{type:"checkbox",readOnly:!0,name:"group[3492][1]",id:"mce-group[3492]-3492-0",value:"",checked:!0})}),(0,s.jsxs)("div",{id:"mce-responses",className:"clearfalse",children:[(0,s.jsx)("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),(0,s.jsx)("div",{className:"response",id:"mce-success-response",style:{display:"none"}})]}),(0,s.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:"-5000px"},children:(0,s.jsx)("input",{type:"text",readOnly:!0,name:"b_c1a5a210340eb6c7bff33b2ba_0462d244aa",tabIndex:-1,value:""})}),(0,s.jsx)("div",{className:"clear",children:(0,s.jsx)(r.kC,{height:"48",vertical:"center",children:(0,s.jsx)(r.zx,{id:"mc-embedded-subscribe",value:"Subscribe",size:"m",fillWidth:!0,children:"Subscribe"})})})]})})]})}},9818:function(e,t,i){"use strict";i.d(t,{ProjectCard:function(){return r}});var s=i(7437),a=i(4007);let r=e=>{let{href:t,images:i=[],title:r,content:n,description:l,avatars:o,link:d}=e;return(0,s.jsxs)(a.sg,{fillWidth:!0,gap:"m",children:[(0,s.jsx)(a.lr,{sizes:"(max-width: 960px) 100vw, 960px",images:i.map(e=>({src:e,alt:r}))}),(0,s.jsxs)(a.kC,{mobileDirection:"column",fillWidth:!0,paddingX:"s",paddingTop:"12",paddingBottom:"24",gap:"l",children:[r&&(0,s.jsx)(a.kC,{flex:5,children:(0,s.jsx)(a.X6,{as:"h2",wrap:"balance",variant:"heading-strong-xl",children:r})}),((null==o?void 0:o.length)>0||(null==l?void 0:l.trim())||(null==n?void 0:n.trim()))&&(0,s.jsxs)(a.sg,{flex:7,gap:"16",children:[(null==o?void 0:o.length)>0&&(0,s.jsx)(a.HE,{avatars:o,size:"m",reverse:!0}),(null==l?void 0:l.trim())&&(0,s.jsx)(a.xv,{wrap:"balance",variant:"body-default-s",onBackground:"neutral-weak",children:l}),(0,s.jsxs)(a.kC,{gap:"24",wrap:!0,children:[(null==n?void 0:n.trim())&&(0,s.jsx)(a.IW,{suffixIcon:"arrowRight",style:{margin:"0",width:"fit-content"},href:t,children:(0,s.jsx)(a.xv,{variant:"body-default-s",children:"Read case study"})}),d&&(0,s.jsx)(a.IW,{suffixIcon:"arrowUpRightFromSquare",style:{margin:"0",width:"fit-content"},href:d,children:(0,s.jsx)(a.xv,{variant:"body-default-s",children:"View project"})})]})]})]})]})}},2847:function(e,t,i){"use strict";i.d(t,{RouteGuard:function(){return o}});var s=i(7437),a=i(2265),r=i(9376),n=i(5783),l=i(4007);let o=e=>{let{children:t}=e,i=(0,r.usePathname)(),[o,d]=(0,a.useState)(!1),[c,h]=(0,a.useState)(!1),[f,p]=(0,a.useState)(""),[x,g]=(0,a.useState)(!1),[u,m]=(0,a.useState)(void 0),[j,b]=(0,a.useState)(!0);(0,a.useEffect)(()=>{(async()=>{b(!0),d(!1),h(!1),g(!1),d((()=>{if(!i)return!1;if(i in n._j)return n._j[i];for(let e of["/blog","/work"])if((null==i?void 0:i.startsWith(e))&&n._j[e])return!0;return!1})()),n.Fl[i]&&(h(!0),(await fetch("/api/check-auth")).ok&&g(!0)),b(!1)})()},[i]);let y=async()=>{(await fetch("/api/authenticate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:f})})).ok?(g(!0),m(void 0)):m("Incorrect password")};return j||!o?(0,s.jsx)(l.kC,{fillWidth:!0,paddingY:"128",horizontal:"center",children:(0,s.jsx)(l.$j,{})}):c&&!x?(0,s.jsxs)(l.sg,{paddingY:"128",maxWidth:24,gap:"24",center:!0,children:[(0,s.jsx)(l.X6,{align:"center",wrap:"balance",children:"This page is password protected"}),(0,s.jsxs)(l.sg,{fillWidth:!0,gap:"8",horizontal:"center",children:[(0,s.jsx)(l.II,{id:"password",label:"Password",type:"password",value:f,onChange:e=>p(e.target.value),errorMessage:u}),(0,s.jsx)(l.zx,{onClick:y,children:"Submit"})]})]}):(0,s.jsx)(s.Fragment,{children:t})}},2275:function(e){e.exports={position:"Header_position__y2w_C",mask:"Header_mask__joAFr"}},9187:function(e){e.exports={control:"HeadingLink_control__SRvcO",visibility:"HeadingLink_visibility__B5_8u",text:"HeadingLink_text__5SJxI"}}}]);