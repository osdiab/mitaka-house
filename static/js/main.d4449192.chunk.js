(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(n,e,t){n.exports=t(52)},52:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(17),o=t(0),a=t(12),l=t(7);function c(n){return l(n).lighten(.3).saturate(.3).string()}var s,m={palette:{primary:"#5C5FBC",secondary:"#D3697D",background:"#F9F7F3",disabled:"#888888"},text:{fontFamily:"Source Serif Pro",fontFallback:"serif",size:{paragraph:"1.2rem"}},mediaQueries:{sizes:{medium:"1008px",small:"640px"}}},d=t(23),u=t(25),p=t(9),h=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return r.c(e,n),e.prototype.render=function(){return o.createElement("div",null,o.createElement("h1",null,"BlogPost ",this.props.match.params.lessonId),o.createElement(p.a,{to:"/"},"Back"))},e}(o.Component),f=t(27),g=f.default,b=f.css,E=(f.keyframes,f.createGlobalStyle),x=f.ThemeProvider,k=g,y=t(13),w=t(29),v=t(20),z=t(31),T=console;z.polyfill(),function(n){n.HYPERLINK="HYPERLINK",n.UNSTYLED="UNSTYLED"}(s||(s={}));var L=k.a(S||(S=r.e(["\n  color: ",";\n  font-weight: 700;\n  transition: color 0.1s ease-in;\n\n  :hover {\n    color: ","\n"],["\n  color: ",";\n  font-weight: 700;\n  transition: color 0.1s ease-in;\n\n  :hover {\n    color: ","\n"])),function(n){return n.theme.palette.secondary},function(n){return c(n.theme.palette.secondary)}),I=k.a(Y||(Y=r.e(["\n  text-decoration: none;\n  color: inherit;\n"],["\n  text-decoration: none;\n  color: inherit;\n"]))),N=L.withComponent(v.HashLink),R=I.withComponent(v.HashLink);function M(n){T.error("Invalid link appearance: '"+n+"'. Rendering as hyperlink.")}var S,Y,A,C,O,U=function(n){var e=n.to,t=n.appearance,i={href:e,children:n.children};switch(t){default:M(t);case void 0:case s.HYPERLINK:return o.createElement(L,r.a({},i));case s.UNSTYLED:return o.createElement(I,r.a({},i))}},D=function(n){var e=n.to,t=n.appearance,i={children:n.children,smooth:!0,to:e};switch(t){default:M(t);case void 0:case s.HYPERLINK:return o.createElement(N,r.a({},i));case s.UNSTYLED:return o.createElement(R,r.a({},i))}},F=function(n){return!n.forceExternal&&w(n.to)?o.createElement(D,r.a({},n)):o.createElement(U,r.a({},n))};function K(n){var e=n.disabled,t=n.role,r=n.palette;return t!==C.PRIMARY?e?r.disabled:r.primary:l(e?r.disabled:r.primary).isLight()?"black":"white"}function P(n){return r.a({},y.b(["role","disabled"],n),{palette:r.a({},y.b(["primary","disabled"],n.theme.palette))})}!function(n){n.LINK="LINK",n.FUNCTION="FUNCTION",n.SUBMIT="SUBMIT"}(A||(A={})),function(n){n.PRIMARY="PRIMARY",n.SECONDARY="SECONDARY",n.TEXT_ONLY="TEXT_ONLY"}(C||(C={})),function(n){n.SMALL="SMALL",n.MEDIUM="MEDIUM",n.LARGE="LARGE"}(O||(O={}));var j=k.button(H||(H=r.e(["\n  display: inline-block;\n  border: 2px solid;\n  border-color: ",";\n  border-radius: 2px;\n  padding: ",";\n  background-color: ",";\n  font-size: ",";\n  font-weight: 700;\n  appearance: none;\n  color: ",";\n  transition: background-color 0.1s ease-in, border-color 0.1s ease-in,\n    color 0.1s ease-in;\n\n  :hover {\n    border-color: ",";\n    background-color: ",";\n    color: ",";\n    cursor: ",";\n  }\n"],["\n  display: inline-block;\n  border: 2px solid;\n  border-color: ",";\n  border-radius: 2px;\n  padding: ",";\n  background-color: ",";\n  font-size: ",";\n  font-weight: 700;\n  appearance: none;\n  color: ",";\n  transition: background-color 0.1s ease-in, border-color 0.1s ease-in,\n    color 0.1s ease-in;\n\n  :hover {\n    border-color: ",";\n    background-color: ",";\n    color: ",";\n    cursor: ",";\n  }\n"])),function(n){return e=P(n),t=e.disabled,r=e.role,i=e.palette,r===C.TEXT_ONLY?"transparent":t?i.disabled:i.primary;var e,t,r,i},function(n){return function(n){switch(n.size){default:G(n.size);case O.SMALL:return"8px 15px";case O.MEDIUM:return"10px 20px";case O.LARGE:return"15px 25px"}}(n)},function(n){return e=P(n),t=e.disabled,r=e.role,i=e.palette,r!==C.PRIMARY?"transparent":t?i.disabled:i.primary;var e,t,r,i},function(n){return function(n){switch(n){default:G(n);case void 0:case O.MEDIUM:return"1.2rem";case O.SMALL:return"1rem";case O.LARGE:return"1.4rem"}}(n.size)},function(n){return K(P(n))},function(n){return e=P(n),t=e.disabled,r=e.role,i=e.palette,r===C.TEXT_ONLY?"transparent":t?i.disabled:c(i.primary);var e,t,r,i},function(n){return e=P(n),t=e.disabled,r=e.role,i=e.palette,r===C.TEXT_ONLY?"transparent":t?i.disabled:c(i.primary);var e,t,r,i},function(n){return function(n){switch(n.role){case C.PRIMARY:return K(n);case C.SECONDARY:return K(r.a({},n,{role:C.PRIMARY}));case C.TEXT_ONLY:return c(n.palette.primary).toString()}}(P(n))},function(n){return n.disabled?"not-allowed":"pointer"}),B=j.withComponent(k.div(Q||(Q=r.e([""],[""]))));function G(n){T.error("Invalid button size '"+n+"'. Rendering as medium size.")}var H,Q,X,_,J,W,q,V,Z,$,nn,en,tn,rn,on,an={size:O.MEDIUM,disabled:!1,role:C.PRIMARY},ln=function(n){var e=r.a({},an,y.c(y.a,n)),t=e.onClick,i=e.size,a=e.disabled,l=e.role,c=e.children;switch(t.kind){case A.LINK:var m=o.createElement(B,{disabled:a,size:i,role:l},c);return a?m:o.createElement(F,{appearance:s.UNSTYLED,to:t.action},m);case A.SUBMIT:return o.createElement(j,{disabled:a,size:i,role:l,type:"submit"},c);case A.FUNCTION:return o.createElement(j,{disabled:a,size:i,role:l,onClick:t.action},c);default:return function(n){T.error("Invalid button target kind "+n.kind+". Not rendering.")}(t),o.createElement(o.Fragment,null)}},cn=b(X||(X=r.e(["\n  :not(:last-child) {\n    margin-bottom: 1.2rem;\n  }\n"],["\n  :not(:last-child) {\n    margin-bottom: 1.2rem;\n  }\n"]))),sn=b(_||(_=r.e(["\n  font-size: 1.2rem;\n  line-height: 1.5;\n"],["\n  font-size: 1.2rem;\n  line-height: 1.5;\n"]))),mn=k.p(J||(J=r.e(["\n  "," ",";\n"],["\n  "," ",";\n"])),sn,cn),dn=b(W||(W=r.e(["\n  font-weight: 700;\n"],["\n  font-weight: 700;\n"]))),un=k.h1(q||(q=r.e(["\n  font-size: 3.5rem;\n  @media (min-width: ",") {\n    font-size: 5rem;\n  }\n  ",";\n  ",";\n"],["\n  font-size: 3.5rem;\n  @media (min-width: ",") {\n    font-size: 5rem;\n  }\n  ",";\n  ",";\n"])),function(n){return n.theme.mediaQueries.sizes.small},dn,cn),pn=k.h2(V||(V=r.e(["\n  font-size: 2.5rem;\n  @media (min-width: ",") {\n    font-size: 3.5rem;\n  }\n  ",";\n  ",";\n"],["\n  font-size: 2.5rem;\n  @media (min-width: ",") {\n    font-size: 3.5rem;\n  }\n  ",";\n  ",";\n"])),function(n){return n.theme.mediaQueries.sizes.small},dn,cn),hn=k.h3(Z||(Z=r.e(["\n  font-size: 2rem;\n  @media (min-width: ",") {\n    font-size: 2.5rem;\n  }\n  ",";\n  ",";\n"],["\n  font-size: 2rem;\n  @media (min-width: ",") {\n    font-size: 2.5rem;\n  }\n  ",";\n  ",";\n"])),function(n){return n.theme.mediaQueries.sizes.small},dn,cn),fn=k(mn)($||($=r.e(["\n  font-size: 1.6rem;\n  @media (min-width: ",") {\n    font-size: 2rem;\n  }\n  ",";\n  ",";\n"],["\n  font-size: 1.6rem;\n  @media (min-width: ",") {\n    font-size: 2rem;\n  }\n  ",";\n  ",";\n"])),function(n){return n.theme.mediaQueries.sizes.small},dn,cn),gn=(k(mn)(nn||(nn=r.e(["\n  font-size: 1.4rem;\n  ",";\n  ",";\n"],["\n  font-size: 1.4rem;\n  ",";\n  ",";\n"])),dn,cn),b(en||(en=r.e(["\n  padding: 20px 60px;\n\n  @media (max-width: 500px) {\n    padding: 20px;\n  }\n"],["\n  padding: 20px 60px;\n\n  @media (max-width: 500px) {\n    padding: 20px;\n  }\n"])))),bn=b(tn||(tn=r.e(["\n  max-width: 1000px;\n  margin: 0 auto;\n"],["\n  max-width: 1000px;\n  margin: 0 auto;\n"]))),En=b(rn||(rn=r.e(["\n  ",";\n  ",";\n"],["\n  ",";\n  ",";\n"])),gn,bn);!function(n){n.BUTTON="BUTTON",n.LINK="LINK"}(on||(on={}));var xn,kn,yn,wn,vn,zn,Tn,Ln,In,Nn,Rn,Mn,Sn,Yn,An,Cn,On,Un,Dn,Fn,Kn,Pn=k.nav(xn||(xn=r.e(["\n  ",";\n"],["\n  ",";\n"])),En),jn=k.ul(kn||(kn=r.e(["\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n\n  @media (max-width: 576px) {\n    justify-content: center;\n  }\n\n  > li {\n    margin-bottom: 1.2rem;\n  }\n\n  > li:not(:last-child) {\n    margin-right: 20px;\n  }\n"],["\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n\n  @media (max-width: 576px) {\n    justify-content: center;\n  }\n\n  > li {\n    margin-bottom: 1.2rem;\n  }\n\n  > li:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),Bn=function(n){var e=n.entries;return o.createElement(Pn,null,o.createElement(jn,null,e.map(function(n,e){var t=n.displayText,r=n.to,i=n.kind;return o.createElement("li",{key:e},i===on.LINK?o.createElement(F,{to:r},t):o.createElement(ln,{onClick:{kind:A.LINK,action:r}},t))})))},Gn=k.main(yn||(yn=r.e(["\n  ",";\n"],["\n  ",";\n"])),En),Hn=b(wn||(wn=r.e(["\n  font-weight: 700;\n  color: ",";\n"],["\n  font-weight: 700;\n  color: ",";\n"])),function(n){return n.theme.palette.primary}),Qn=[{displayText:"The Neighborhood",to:"#neighborhood-description",kind:on.LINK},{displayText:"The Rooms",to:"#room-description",kind:on.LINK},{displayText:"The Amenities",to:"#amenities-description",kind:on.LINK},{displayText:"Rent Today",to:"#contact",kind:on.BUTTON}],Xn=k(pn)(vn||(vn=r.e(["\n  color: ",";\n"],["\n  color: ",";\n"])),function(n){return n.theme.palette.secondary}),_n=k(hn)(zn||(zn=r.e(["\n  color: ",";\n"],["\n  color: ",";\n"])),function(n){return n.theme.palette.primary}),Jn=k.section(Tn||(Tn=r.e(["\n  ",';\n\n  position: relative;\n  margin-bottom: 1.4rem;\n  background-image: url("/assets/images/neighborhoods/inokashira.jpg");\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  padding-top: 60px;\n  padding-bottom: 60px;\n\n  :before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(256, 256, 256, 0.6);\n    z-index: 0;\n  }\n\n  > * {\n    ',";\n    position: relative;\n    z-index: 1;\n  }\n"],["\n  ",';\n\n  position: relative;\n  margin-bottom: 1.4rem;\n  background-image: url("/assets/images/neighborhoods/inokashira.jpg");\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  padding-top: 60px;\n  padding-bottom: 60px;\n\n  :before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(256, 256, 256, 0.6);\n    z-index: 0;\n  }\n\n  > * {\n    ',";\n    position: relative;\n    z-index: 1;\n  }\n"])),gn,bn),Wn=k.section(Ln||(Ln=r.e(["\n  ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  @media (min-width: ",") {\n    align-items: flex-start;\n    text-align: left;\n  }\n"],["\n  ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  @media (min-width: ",") {\n    align-items: flex-start;\n    text-align: left;\n  }\n"])),En,function(n){return n.theme.mediaQueries.sizes.small}),qn=k(pn)(In||(In=r.e(["\n  ",";\n"],["\n  ",";\n"])),Hn),Vn=k(hn)(Nn||(Nn=r.e(["\n  font-weight: 400;\n"],["\n  font-weight: 400;\n"]))),Zn=k(hn)(Rn||(Rn=r.e(["\n  color: ",";\n  font-weight: 700;\n"],["\n  color: ",";\n  font-weight: 700;\n"])),function(n){return n.theme.palette.secondary}),$n=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return r.c(e,n),e.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement(Bn,{entries:Qn}),o.createElement(Jn,null,o.createElement(qn,null,"Welcome to your new home in Tokyo."),o.createElement(Vn,null,"Peace. Authenticity. Minutes from hot neighborhoods."," "),o.createElement(Zn,null,"45,000\u5186/mo")),o.createElement(Wn,null,o.createElement(fn,null,"To get the process started, ",o.createElement(F,{to:"#contact"},"contact us")," ","about availability today."),o.createElement(ln,{size:O.LARGE,onClick:{kind:A.LINK,action:"#contact"}},"Get In Touch")),o.createElement(Gn,null,o.createElement(Xn,{id:"neighborhood-description"},"The Neighborhood"),o.createElement(_n,null,"Mitaka House is just minutes from Tokyo's hottest neighborhoods."),o.createElement(hn,null,"\u5409\u7965\u5bfa Kichij\u014dji"),o.createElement(hn,null,"\u4e0b\u5317\u6ca2 Shimokitazawa"),o.createElement(hn,null,"\u6e0b\u8c37 Shibuya"),o.createElement(hn,null,"\u65b0\u5bbf Shinjuku"),o.createElement(hn,null,"\u4e2d\u91ce Mitaka"),o.createElement(Xn,{id:"room-description"},"The Rooms"),o.createElement(_n,null,"Simple Living"),o.createElement(_n,null,"Affordable rent, starting at 45,000\u5186"),o.createElement(Xn,{id:"amenities-description"},"We're at your service."),o.createElement(_n,null,"Moving to Japan can be intimidating.")))},e}(o.Component),ne=function(){return o.createElement("main",null,o.createElement("h1",null,"Not Found"),o.createElement(p.a,{to:"/"},"Back"))},ee=t(24),te=E(Mn||(Mn=r.e(["\n  * {\n    margin: 0;\n    padding: 0;\n    font-family: ",",\n      ",";\n  }\n\n  html, body, #reactRoot {\n    min-height: 100vh;\n  }\n"],["\n  * {\n    margin: 0;\n    padding: 0;\n    font-family: ",",\n      ",";\n  }\n\n  html, body, #reactRoot {\n    min-height: 100vh;\n  }\n"])),function(n){return n.theme.text.fontFamily},function(n){return n.theme.text.fontFallback}),re=k.section(Sn||(Sn=r.e(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  background-color: ",";\n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  background-color: ",";\n"])),function(n){return l(n.theme.palette.primary).darken(.4).desaturate(.4).string()}),ie=k.section(Yn||(Yn=r.e(["\n  ",";\n  padding-bottom: 2rem;\n  align-self: flex-start;\n"],["\n  ",";\n  padding-bottom: 2rem;\n  align-self: flex-start;\n"])),En),oe=k(pn)(An||(An=r.e(["\n  ",";\n"],["\n  ",";\n"])),Hn),ae=k.span(Cn||(Cn=r.e(["\n  ",";\n"],["\n  ",";\n"])),Hn),le=function(){return o.createElement("footer",null,o.createElement(ie,{id:"contact"},o.createElement(oe,{id:"contact"},"Get in touch"),o.createElement(hn,null,"Inquire about your new home in Tokyo ",o.createElement(ae,null,"today")),o.createElement(mn,null,"Shoot us an email at"," ",o.createElement(F,{to:"mailto:hi@mitakahome.com"},"hi@mitakahome.com"),", and we'll get everything squared off. Welcome to your new home in Tokyo!")),o.createElement(re,null,o.createElement(mn,null,"Like this site? Feel free to"," ",o.createElement(F,{to:"https://github.com/osdiab/mitaka-house/"},"fork it on Github")," ","and make it your own."),o.createElement(mn,null,o.createElement(F,{forceExternal:!0,to:"/assets/images/CREDITS.txt"},"Image credits")),o.createElement(mn,null,"Mitaka House, ",(new Date).getFullYear())))},ce=k.header(On||(On=r.e(["\n  "," display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 0;\n  border: 0;\n"],["\n  "," display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 0;\n  border: 0;\n"])),En),se=k.span(Un||(Un=r.e(["\n  max-width: 140px;\n  min-height: 140px;\n  flex: 1;\n  align-self: stretch;\n\n  background-image: url(/assets/images/avatar.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n\n  margin-right: 20px;\n  border-radius: 2px;\n"],["\n  max-width: 140px;\n  min-height: 140px;\n  flex: 1;\n  align-self: stretch;\n\n  background-image: url(/assets/images/avatar.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n\n  margin-right: 20px;\n  border-radius: 2px;\n"]))),me=k(un)(Dn||(Dn=r.e(["\n  margin: 0;\n  flex: 1;\n"],["\n  margin: 0;\n  flex: 1;\n"]))),de=k.span(Fn||(Fn=r.e(["\n  color: ",";\n  display: inline-block;\n"],["\n  color: ",";\n  display: inline-block;\n"])),function(n){return n.theme.palette.primary}),ue=function(){return o.createElement(ce,null,o.createElement(se,null),o.createElement(me,null,o.createElement(de,null,"Mitaka House")))},pe=k.div(Kn||(Kn=r.e(["\n  min-height: 100vh;\n  background: linear-gradient(\n    to bottom,\n    ",",\n    ","\n  );\n\n  font-size: ",";\n"],["\n  min-height: 100vh;\n  background: linear-gradient(\n    to bottom,\n    ",",\n    ","\n  );\n\n  font-size: ",";\n"])),function(n){return l(n.theme.palette.background).lighten(.2).string()},function(n){return n.theme.palette.background},function(n){return n.theme.text.size.paragraph}),he=function(n){var e=n.children;return o.createElement(pe,null,o.createElement(te,null),o.createElement(ue,null),e,o.createElement(le,null))};var fe=function(n){var e,t=n.component,i=r.f(n,["component"]);return o.createElement(ee.a,r.a({},i,{render:(e=t,function(n){return o.createElement(he,null,e&&o.createElement(e,r.a({},n)))})}))},ge=function(){return o.createElement(d.a,null,o.createElement(u.a,null,o.createElement(fe,{exact:!0,path:"/",component:$n}),o.createElement(fe,{path:"/lesson/:lessonId",component:h}),o.createElement(fe,{component:ne})))},be=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return r.c(e,n),e.prototype.render=function(){return o.createElement(x,{theme:m},o.createElement(ge,null))},e}(o.Component);!function(){r.b(this,void 0,void 0,function(){var n;return r.d(this,function(e){switch(e.label){case 0:return n=document.getElementById("reactRoot"),window.snapSaveState=function(){return Object(i.a)()},n.hasChildNodes()?[4,Object(i.b)()]:[3,2];case 1:return e.sent(),Object(a.hydrate)(o.createElement(be,null),n),[3,3];case 2:Object(a.render)(o.createElement(be,null),n),e.label=3;case 3:return[2]}})})}()}},[[33,2,1]]]);
//# sourceMappingURL=main.d4449192.chunk.js.map