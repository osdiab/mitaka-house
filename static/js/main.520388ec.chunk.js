(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(n,e,t){n.exports=t(52)},52:function(n,e,t){"use strict";t.r(e);var o=t(2),r=t(17),a=t(0),i=t(13),l=t(9),c={primary:"#6198D2",secondary:"#27A721",background:"#F9F7F3",disabled:"#888888"};function s(n){return l(n).lighten(.2).saturate(.1).string()}var m,u={palette:c,text:{fontFamily:"Nunito Sans",fontFallback:"sans-serif",size:{paragraph:"1.2rem"}},mediaQueries:{sizes:{medium:"1008px",small:"640px"}}},d=t(23),h=t(25),p=t(10),f=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return o.c(e,n),e.prototype.render=function(){return a.createElement("div",null,a.createElement("h1",null,"BlogPost ",this.props.match.params.lessonId),a.createElement(p.a,{to:"/"},"Back"))},e}(a.Component),g=t(27),b=g.default,E=g.css,y=(g.keyframes,g.createGlobalStyle),k=g.ThemeProvider,x=b,w=t(7),v=t(29),T=t(20),z=t(31),I=console;z.polyfill(),function(n){n.HYPERLINK="HYPERLINK",n.UNSTYLED="UNSTYLED"}(m||(m={}));var L=x.a(Y||(Y=o.e(["\n  color: ",";\n  font-weight: 700;\n  transition: color 0.1s ease-in;\n\n  :hover {\n    color: ","\n"],["\n  color: ",";\n  font-weight: 700;\n  transition: color 0.1s ease-in;\n\n  :hover {\n    color: ","\n"])),function(n){return n.theme.palette.secondary},function(n){return s(n.theme.palette.secondary)}),N=x.a(C||(C=o.e(["\n  text-decoration: none;\n  color: inherit;\n"],["\n  text-decoration: none;\n  color: inherit;\n"]))),R=L.withComponent(T.HashLink),M=N.withComponent(T.HashLink);function S(n){I.error("Invalid link appearance: '"+n+"'. Rendering as hyperlink.")}var Y,C,j,A,K,U=function(n){var e=n.to,t=n.appearance,r={href:e,children:n.children};switch(t){default:S(t);case void 0:case m.HYPERLINK:return a.createElement(L,o.a({},r));case m.UNSTYLED:return a.createElement(N,o.a({},r))}},O=function(n){var e=n.to,t=n.appearance,r={children:n.children,smooth:!0,to:e};switch(t){default:S(t);case void 0:case m.HYPERLINK:return a.createElement(R,o.a({},r));case m.UNSTYLED:return a.createElement(M,o.a({},r))}},F=function(n){return!n.forceExternal&&v(n.to)?a.createElement(O,o.a({},n)):a.createElement(U,o.a({},n))};function H(n){var e=n.disabled,t=n.role,o=n.palette,r=n.color;return t!==A.PRIMARY?e?o.disabled:r||o.primary:e?"black":"white"}function D(n){return o.a({},w.c(["role","disabled","color"],n),{palette:o.a({},w.c(["primary","disabled"],n.theme.palette))})}!function(n){n.LINK="LINK",n.FUNCTION="FUNCTION",n.SUBMIT="SUBMIT"}(j||(j={})),function(n){n.PRIMARY="PRIMARY",n.SECONDARY="SECONDARY",n.TEXT_ONLY="TEXT_ONLY"}(A||(A={})),function(n){n.SMALL="SMALL",n.MEDIUM="MEDIUM",n.LARGE="LARGE"}(K||(K={}));var P=x.button(J||(J=o.e(["\n  display: inline-block;\n  border: 2px solid;\n  border-color: ",";\n  border-radius: 2px;\n  padding: ",";\n  background-color: ",";\n  font-size: ",";\n  font-weight: 700;\n  appearance: none;\n  color: ",";\n  transition: background-color 0.1s ease-in, border-color 0.1s ease-in,\n    color 0.1s ease-in;\n\n  :hover {\n    border-color: ",";\n    background-color: ",";\n    color: ",";\n    cursor: ",";\n  }\n"],["\n  display: inline-block;\n  border: 2px solid;\n  border-color: ",";\n  border-radius: 2px;\n  padding: ",";\n  background-color: ",";\n  font-size: ",";\n  font-weight: 700;\n  appearance: none;\n  color: ",";\n  transition: background-color 0.1s ease-in, border-color 0.1s ease-in,\n    color 0.1s ease-in;\n\n  :hover {\n    border-color: ",";\n    background-color: ",";\n    color: ",";\n    cursor: ",";\n  }\n"])),function(n){return e=D(n),t=e.disabled,o=e.role,r=e.palette,a=e.color,o===A.TEXT_ONLY?"transparent":t?r.disabled:a||r.primary;var e,t,o,r,a},function(n){return function(n){switch(n.size){default:G(n.size);case K.SMALL:return"8px 15px";case K.MEDIUM:return"10px 20px";case K.LARGE:return"15px 25px"}}(n)},function(n){return e=D(n),t=e.disabled,o=e.role,r=e.palette,a=e.color,o!==A.PRIMARY?"transparent":t?r.disabled:a||r.primary;var e,t,o,r,a},function(n){return function(n){switch(n){default:G(n);case void 0:case K.MEDIUM:return"1.2rem";case K.SMALL:return"1rem";case K.LARGE:return"1.4rem"}}(n.size)},function(n){return H(D(n))},function(n){return e=D(n),t=e.disabled,o=e.role,r=e.palette,a=e.color,o===A.TEXT_ONLY?"transparent":t?r.disabled:s(a||r.primary);var e,t,o,r,a},function(n){return e=D(n),t=e.disabled,o=e.role,r=e.palette,a=e.color,o===A.TEXT_ONLY?"transparent":t?r.disabled:s(a||r.primary);var e,t,o,r,a},function(n){return function(n){switch(n.role){case A.PRIMARY:return H(n);case A.SECONDARY:return H(o.a({},n,{role:A.PRIMARY}));case A.TEXT_ONLY:return s(n.color?n.color:n.palette.primary).toString()}}(D(n))},function(n){return n.disabled?"not-allowed":"pointer"}),B=P.withComponent(x.div(Q||(Q=o.e([""],[""]))));function G(n){I.error("Invalid button size '"+n+"'. Rendering as medium size.")}var J,Q,X,_,W,q,V,Z,$,nn,en,tn,on,rn,an,ln={size:K.MEDIUM,disabled:!1,role:A.PRIMARY},cn=function(n){var e,t=o.a({},ln,w.d(w.a,n));switch(t.onClick.kind){case j.LINK:var r=a.createElement(B,o.a({},w.b(["onClick"],t)));return t.disabled?r:a.createElement(F,{appearance:m.UNSTYLED,to:t.onClick.action},r);case j.SUBMIT:return a.createElement(P,o.a({type:"submit"},w.b(["onClick"],t)));case j.FUNCTION:return a.createElement(P,o.a({onClick:t.onClick.action},w.b(["onClick"],t)));default:return e=t.onClick,I.error("Invalid button target kind "+e.kind+". Not rendering."),a.createElement(a.Fragment,null)}},sn=E(X||(X=o.e(["\n  :not(:last-child) {\n    margin-bottom: 1.2rem;\n  }\n"],["\n  :not(:last-child) {\n    margin-bottom: 1.2rem;\n  }\n"]))),mn=E(_||(_=o.e(["\n  font-size: 1.2rem;\n  line-height: 1.5;\n"],["\n  font-size: 1.2rem;\n  line-height: 1.5;\n"]))),un=x.p(W||(W=o.e(["\n  "," ",";\n"],["\n  "," ",";\n"])),mn,sn),dn=E(q||(q=o.e(["\n  font-weight: 700;\n"],["\n  font-weight: 700;\n"]))),hn=(x.h1(V||(V=o.e(["\n  font-size: 3.5rem;\n  @media (min-width: ",") {\n    font-size: 5rem;\n  }\n  ",";\n  ",";\n"],["\n  font-size: 3.5rem;\n  @media (min-width: ",") {\n    font-size: 5rem;\n  }\n  ",";\n  ",";\n"])),function(n){return n.theme.mediaQueries.sizes.small},dn,sn),x.h2(Z||(Z=o.e(["\n  font-size: 2.5rem;\n  @media (min-width: ",") {\n    font-size: 3.5rem;\n  }\n  ",";\n  ",";\n"],["\n  font-size: 2.5rem;\n  @media (min-width: ",") {\n    font-size: 3.5rem;\n  }\n  ",";\n  ",";\n"])),function(n){return n.theme.mediaQueries.sizes.small},dn,sn)),pn=x.h3($||($=o.e(["\n  font-size: 2rem;\n  @media (min-width: ",") {\n    font-size: 2.5rem;\n  }\n  ",";\n  ",";\n"],["\n  font-size: 2rem;\n  @media (min-width: ",") {\n    font-size: 2.5rem;\n  }\n  ",";\n  ",";\n"])),function(n){return n.theme.mediaQueries.sizes.small},dn,sn),fn=x(un)(nn||(nn=o.e(["\n  font-size: 1.6rem;\n  @media (min-width: ",") {\n    font-size: 2rem;\n  }\n  ",";\n  ",";\n"],["\n  font-size: 1.6rem;\n  @media (min-width: ",") {\n    font-size: 2rem;\n  }\n  ",";\n  ",";\n"])),function(n){return n.theme.mediaQueries.sizes.small},dn,sn),gn=(x(un)(en||(en=o.e(["\n  font-size: 1.4rem;\n  ",";\n  ",";\n"],["\n  font-size: 1.4rem;\n  ",";\n  ",";\n"])),dn,sn),E(tn||(tn=o.e(["\n  padding: 20px 60px;\n\n  @media (max-width: 500px) {\n    padding: 20px;\n  }\n"],["\n  padding: 20px 60px;\n\n  @media (max-width: 500px) {\n    padding: 20px;\n  }\n"])))),bn=E(on||(on=o.e(["\n  max-width: 1000px;\n  margin: 0 auto;\n"],["\n  max-width: 1000px;\n  margin: 0 auto;\n"]))),En=E(rn||(rn=o.e(["\n  ",";\n  ",";\n"],["\n  ",";\n  ",";\n"])),gn,bn);!function(n){n.BUTTON="BUTTON",n.LINK="LINK"}(an||(an={}));var yn,kn,xn,wn,vn,Tn,zn,In,Ln,Nn,Rn,Mn,Sn,Yn,Cn,jn,An,Kn,Un,On,Fn,Hn,Dn,Pn,Bn=x.nav(yn||(yn=o.e(["\n  ",";\n"],["\n  ",";\n"])),En),Gn=x.ul(kn||(kn=o.e(["\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n\n  @media (max-width: 576px) {\n    justify-content: center;\n  }\n\n  > li {\n    margin-bottom: 1.2rem;\n  }\n\n  > li:not(:last-child) {\n    margin-right: 20px;\n  }\n"],["\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n\n  @media (max-width: 576px) {\n    justify-content: center;\n  }\n\n  > li {\n    margin-bottom: 1.2rem;\n  }\n\n  > li:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),Jn=function(n){var e=n.entries;return a.createElement(Bn,null,a.createElement(Gn,null,e.map(function(n,e){var t=n.displayText,o=n.to,r=n.kind;return a.createElement("li",{key:e},r===an.LINK?a.createElement(F,{to:o},t):a.createElement(cn,{color:c.secondary,onClick:{kind:j.LINK,action:o}},t))})))},Qn=x.main(xn||(xn=o.e(["\n  ",";\n"],["\n  ",";\n"])),En),Xn=E(wn||(wn=o.e(["\n  font-weight: 700;\n  color: ",";\n"],["\n  font-weight: 700;\n  color: ",";\n"])),function(n){return n.theme.palette.primary}),_n=[{displayText:"The Neighborhood",to:"#neighborhood-description",kind:an.LINK},{displayText:"The Rooms",to:"#room-description",kind:an.LINK},{displayText:"The Amenities",to:"#amenities-description",kind:an.LINK},{displayText:"Rent Today",to:"#contact",kind:an.BUTTON}],Wn=x(hn)(vn||(vn=o.e(["\n  color: ",";\n"],["\n  color: ",";\n"])),function(n){return n.theme.palette.secondary}),qn=x(pn)(Tn||(Tn=o.e(["\n  color: ",";\n"],["\n  color: ",";\n"])),function(n){return n.theme.palette.primary}),Vn=x.section(zn||(zn=o.e(["\n  ",';\n\n  position: relative;\n  margin-bottom: 1.4rem;\n  background-image: url("/assets/images/neighborhoods/inokashira.jpg");\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  padding-top: 60px;\n  padding-bottom: 60px;\n\n  :before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(256, 256, 256, 0.7);\n    z-index: 0;\n  }\n\n  > * {\n    ',";\n    position: relative;\n    z-index: 1;\n  }\n"],["\n  ",';\n\n  position: relative;\n  margin-bottom: 1.4rem;\n  background-image: url("/assets/images/neighborhoods/inokashira.jpg");\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  padding-top: 60px;\n  padding-bottom: 60px;\n\n  :before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(256, 256, 256, 0.7);\n    z-index: 0;\n  }\n\n  > * {\n    ',";\n    position: relative;\n    z-index: 1;\n  }\n"])),gn,bn),Zn=x.section(In||(In=o.e(["\n  ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  @media (min-width: ",") {\n    align-items: flex-start;\n    text-align: left;\n  }\n"],["\n  ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  @media (min-width: ",") {\n    align-items: flex-start;\n    text-align: left;\n  }\n"])),En,function(n){return n.theme.mediaQueries.sizes.small}),$n=x.span(Ln||(Ln=o.e(["\n  ",";\n"],["\n  ",";\n"])),Xn),ne=x(hn)(Nn||(Nn=o.e(["\n  ",";\n"],["\n  ",";\n"])),Xn),ee=x(pn)(Rn||(Rn=o.e(["\n  font-weight: 400;\n"],["\n  font-weight: 400;\n"]))),te=x(pn)(Mn||(Mn=o.e(["\n  color: ",";\n  font-weight: 700;\n"],["\n  color: ",";\n  font-weight: 700;\n"])),function(n){return n.theme.palette.secondary}),oe=x(un)(Sn||(Sn=o.e(["\n  font-style: italic;\n  color: #666666;\n"],["\n  font-style: italic;\n  color: #666666;\n"]))),re=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return o.c(e,n),e.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement(Jn,{entries:_n}),a.createElement(Vn,null,a.createElement(ne,null,"Welcome to your new home in Tokyo."),a.createElement(ee,null,"Peace, authenticity, just minutes from the hottest neighborhoods."),a.createElement(te,null,"45,000\u5186 month-to-month")),a.createElement(Zn,null,a.createElement(fn,null,"To get the process started, ",a.createElement(F,{to:"#contact"},"contact us")," ","about availability today."),a.createElement(cn,{size:K.LARGE,onClick:{kind:j.LINK,action:"#contact"}},"Get In Touch")),a.createElement(Qn,null,a.createElement(Wn,{id:"neighborhood-description"},"The Neighborhood"),a.createElement(qn,null,"Mitaka House is near many of Tokyo's hottest neighborhoods."),a.createElement(pn,null,"\u5409\u7965\u5bfa Kichij\u014dji"),a.createElement(oe,null,"20 minutes from Mitaka House by bus (every 5-7 minutes), or 45 minutes by foot."),a.createElement(un,null,"Rated"," ",a.createElement(F,{to:"https://resources.realestate.co.jp/living/best-places-to-live-in-tokyo-2017-survey/"},"Eastern Japan's #1 most livable city"),", Kichij\u014dji is home to some of Tokyo's best caf\xe9s, restaurants, clothing and thrift stores, as well as"," ",a.createElement($n,null,"Inokashira Park"),", known for its cherry blossoms (sakura), swan boats, and the"," ",a.createElement($n,null,"Studio Ghibli Museum"),"."),a.createElement(pn,null,"\u4e0b\u5317\u6ca2 Shimokitazawa"),a.createElement(oe,null,"10 minutes from Kichij\u014dji by Keio Inokashira Line (\u4eac\u738b\u4e95\u306e\u982d\u7dda)."),a.createElement(pn,null,"\u6e0b\u8c37 Shibuya"),a.createElement(oe,null,"15 minutes from Kichij\u014dji by Keio Inokashira Line (\u4eac\u738b\u4e95\u306e\u982d\u7dda)."),a.createElement(pn,null,"\u65b0\u5bbf Shinjuku"),a.createElement(oe,null,"20 minutes from Kichij\u014dji by JR Ch\u016b\u014d Line (JR\u4e2d\u592e\u7dda)."),a.createElement(pn,null,"\u4e09\u9df9 Mitaka"),a.createElement(oe,null,"Home, sweet home."),a.createElement(un,null,"Mitaka House is in Shinkawa (\u65b0\u5ddd), a quiet neighborhood with small, local restaurants, some farms you can buy fresh produce from directly, and the lovely Maruike (\u4e38\u6c60\u516c\u5712) and Shinkawa parks."),a.createElement(un,null,"You can also experience"," ",a.createElement(F,{to:"http://www.yumorinosato.com/"},"a beautiful, natural onsen (hot spring) at historic Jindaiji Temple (\u795e\u4ee3\u5bfa)"),", 15 minutes from Mitaka House by bus."),a.createElement(un,null,"Conveniently, 7/11, Lawson, and Family Mart all within 2-4 minute walks. Two supermarkets, a pharmacy and the Ky\u014drin University Hospital (\u674f\u6797\u5927\u5b66\u75c5\u9662) are within 5 minute walks as well (don't worry, you'll almost never hear sirens here!)."),a.createElement(Wn,{id:"room-description"},"The Rooms"),a.createElement(qn,null,"Simple Living"),a.createElement(un,null,"Experience authentic Japanese life, sleeping on a comfortable futon bed (\u5e03\u56e3) on tatami mats, cooking food in the modestly sized kitchen and enjoying the cozy, quiet atmosphere."),a.createElement(un,null,"Apartments at Mitaka House are 6\u7573 (j\u014d, the size of a tatami mat),"," ",a.createElement(F,{to:"https://resources.realestate.co.jp/living/1r-1k-1dk-1ldk-apartment-whats-the-difference-and-which-should-i-rent/"},"1K apartments"),". That means there's a separated kitchen and bedroom, and the combined bedroom/living room area is about 10m\xb2 (107 ft\xb2)."),a.createElement(qn,null,"Foreign- and short-term friendly"),a.createElement(un,null,"The landlord is able to speak some English, but if you need any help, we've got you're back."),a.createElement(un,null,"We'll ",a.createElement($n,null,"explain to you in English")," how to pay your bills, where to wash your clothes, how to get unlimited bus and train passes, and anything else you need to have a pleasant time in Japan."),a.createElement(un,null,"We will also"," ",a.createElement($n,null,"provide the basic appliances you'd expect")," in a western apartment, including a refrigerator for your leftovers, and air conditioning for hot summer days."),a.createElement(un,null,"We are also happy to accept"," ",a.createElement($n,null,"month-to-month rentals"),", since we understand how hard it is to find such arrangements in Japan."),a.createElement(qn,null,"Affordable rent, starting at 45,000\u5186/mo"),a.createElement(un,null,"You know how expensive Tokyo can be, so there's not much more to say about this!")))},e}(a.Component),ae=function(){return a.createElement("main",null,a.createElement("h1",null,"Not Found"),a.createElement(p.a,{to:"/"},"Back"))},ie=t(24),le=y(Yn||(Yn=o.e(["\n  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700');\n  * {\n    margin: 0;\n    padding: 0;\n    font-family: ",",\n      ",";\n  }\n\n  html, body, #reactRoot {\n    min-height: 100vh;\n  }\n"],["\n  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700');\n  * {\n    margin: 0;\n    padding: 0;\n    font-family: ",",\n      ",";\n  }\n\n  html, body, #reactRoot {\n    min-height: 100vh;\n  }\n"])),function(n){return n.theme.text.fontFamily},function(n){return n.theme.text.fontFallback}),ce=x.section(Cn||(Cn=o.e(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  background-color: ",";\n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 2rem;\n  color: white;\n  background-color: ",";\n"])),function(n){return l(n.theme.palette.primary).darken(.4).desaturate(.4).string()}),se=x.section(jn||(jn=o.e(["\n  ",";\n  padding-bottom: 2rem;\n  align-self: flex-start;\n"],["\n  ",";\n  padding-bottom: 2rem;\n  align-self: flex-start;\n"])),En),me=x(hn)(An||(An=o.e(["\n  color: ",";\n"],["\n  color: ",";\n"])),function(n){return n.theme.palette.secondary}),ue=x.span(Kn||(Kn=o.e(["\n  ",";\n"],["\n  ",";\n"])),Xn),de="mailto:hi@mitakahome.com?subject="+encodeURI("I'm interested in renting at Mitaka House!")+"&body="+encodeURI("Hello,\n          \n I'm interested in renting an apartment at Mitaka House! Here is some information about myself:\n \n - Full Name:\n - Best way to contact you (if not email, then please tell us how, i.e. phone number):\n - Languages spoken:\n - Annual income, approximately:\n - Anything else you'd like to tell us?\n\nTalk to you soon!\n\n "),he=function(){return a.createElement("footer",null,a.createElement(se,{id:"contact"},a.createElement(me,{id:"contact"},"Get in touch"),a.createElement(pn,null,"Inquire about your new home in Tokyo ",a.createElement(ue,null,"today")),a.createElement(un,null,"Shoot us an email at ",a.createElement(F,{to:de},"hi@mitakahome.com"),", and we'll get everything squared off. Welcome to your new home in Tokyo!"),a.createElement(cn,{onClick:{kind:j.LINK,action:de}},"Send us an email today")),a.createElement(ce,null,a.createElement(un,null,"Like this site? Feel free to"," ",a.createElement(F,{to:"https://github.com/osdiab/mitaka-house/"},"fork it on Github")," ","and make it your own."),a.createElement(un,null,a.createElement(F,{forceExternal:!0,to:"/assets/images/CREDITS.txt"},"Image credits")),a.createElement(un,null,"Mitaka House, ",(new Date).getFullYear())))},pe=x.header(Un||(Un=o.e(["\n  "," display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 0;\n  border: 0;\n"],["\n  "," display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 0;\n  border: 0;\n"])),En),fe=x.span(On||(On=o.e(["\n  max-width: 140px;\n  min-width: 100px;\n  flex: 1;\n  align-self: stretch;\n\n  background-image: url(/assets/images/logo/logo.png);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n\n  margin-right: 10px;\n  @media (min-width: ",") {\n    margin-right: 20px;\n  }\n"],["\n  max-width: 140px;\n  min-width: 100px;\n  flex: 1;\n  align-self: stretch;\n\n  background-image: url(/assets/images/logo/logo.png);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n\n  margin-right: 10px;\n  @media (min-width: ",") {\n    margin-right: 20px;\n  }\n"])),function(n){return n.theme.mediaQueries.sizes.small}),ge=x.section(Fn||(Fn=o.e(["\n  display: flex;\n  flex-direction: column;\n"],["\n  display: flex;\n  flex-direction: column;\n"]))),be=x.img(Hn||(Hn=o.e(["\n  flex-basis: 5rem;\n  flex: 1;\n  max-width: 100%;\n"],["\n  flex-basis: 5rem;\n  flex: 1;\n  max-width: 100%;\n"]))),Ee=x(pn)(Dn||(Dn=o.e(["\n  color: ",";\n  display: block;\n"],["\n  color: ",";\n  display: block;\n"])),function(n){return n.theme.palette.secondary}),ye=function(){return a.createElement(pe,null,a.createElement(fe,null),a.createElement(ge,null,a.createElement(be,{src:"/assets/images/logo/text-logo.svg"}),a.createElement(Ee,null,"\u4e09\u9df9\u30cf\u30a6\u30b9")))},ke=x.div(Pn||(Pn=o.e(["\n  min-height: 100vh;\n  background: ",";\n  background: linear-gradient(\n    to bottom,\n    ",",\n    ","\n  );\n\n  font-size: ",";\n"],["\n  min-height: 100vh;\n  background: ",";\n  background: linear-gradient(\n    to bottom,\n    ",",\n    ","\n  );\n\n  font-size: ",";\n"])),function(n){return n.theme.palette.background},function(n){return l(n.theme.palette.background).lighten(.2).string()},function(n){return n.theme.palette.background},function(n){return n.theme.text.size.paragraph}),xe=function(n){var e=n.children;return a.createElement(ke,null,a.createElement(le,null),a.createElement(ye,null),e,a.createElement(he,null))};var we=function(n){var e,t=n.component,r=o.f(n,["component"]);return a.createElement(ie.a,o.a({},r,{render:(e=t,function(n){return a.createElement(xe,null,e&&a.createElement(e,o.a({},n)))})}))},ve=function(){return a.createElement(d.a,null,a.createElement(h.a,null,a.createElement(we,{exact:!0,path:"/",component:re}),a.createElement(we,{path:"/lesson/:lessonId",component:f}),a.createElement(we,{component:ae})))},Te=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return o.c(e,n),e.prototype.render=function(){return a.createElement(k,{theme:u},a.createElement(ve,null))},e}(a.Component);!function(){o.b(this,void 0,void 0,function(){var n;return o.d(this,function(e){switch(e.label){case 0:return n=document.getElementById("reactRoot"),window.snapSaveState=function(){return Object(r.a)()},n.hasChildNodes()?[4,Object(r.b)()]:[3,2];case 1:return e.sent(),Object(i.hydrate)(a.createElement(Te,null),n),[3,3];case 2:Object(i.render)(a.createElement(Te,null),n),e.label=3;case 3:return[2]}})})}()}},[[33,2,1]]]);
//# sourceMappingURL=main.520388ec.chunk.js.map