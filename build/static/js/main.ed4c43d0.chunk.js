(this["webpackJsonpshoe-store"]=this["webpackJsonpshoe-store"]||[]).push([[0],{89:function(e,t,a){e.exports=a(98)},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=a(128),s=a(6),l=a(25),m=a(8),d=a(132),u=a(133),p=a(150),g=a(131),f=a(72),_=a.n(f),b=a(17),E=a(44),h=Object(o.a)((function(e){var t=e.palette.primary.contrastText;return{container:{padding:e.spacing(3),border:"0px solid transparent",borderBottomWidth:"4px",color:t,textDecoration:"none","&:hover":{cursor:"pointer",borderColor:e.palette.grey[400]}},active:{borderColor:t},nameText:{color:t,fontWeight:"bolder"}}})),y=function(e){var t=e.name,a=e.to,n=e.end,i=h();return r.a.createElement(b.c,{to:a,className:i.container,activeClassName:i.active,end:n},r.a.createElement(E.a,{variant:"button",className:i.nameText},t))},v=a(71),N=a.n(v),k={products:[],cart:[]},x=Object(n.createContext)(k),S=Object(o.a)((function(e){return{root:{position:"relative"},icon:{color:e.palette.primary.contrastText},dot:{position:"absolute",top:0,right:0,backgroundColor:e.palette.error.main,borderRadius:"50%",width:18,height:18,display:"flex",justifyContent:"center",alignItems:"center"},cartItemText:{color:e.palette.common.white,fontSize:"0.85rem",fontWeight:"bold"}}})),j=function(){var e=S(),t=Object(s.h)(),a=Object(n.useContext)(x).cart.map((function(e){return e.items})),i=0;return a.length&&(i=a.reduce((function(e,t){return e+t}))),r.a.createElement(g.a,{onClick:function(){return t("cart")},className:e.root},i>0&&r.a.createElement("div",{className:e.dot},r.a.createElement(E.a,{className:e.cartItemText},i)),r.a.createElement(N.a,{className:e.icon}))},O=Object(o.a)((function(e){return{container:{display:"flex",justifyContent:"space-between"},appBar:{zIndex:e.zIndex.drawer+1},links:{display:"flex"},menuButton:{color:e.palette.primary.contrastText},rightContainer:Object(m.a)({},e.breakpoints.up("md"),{marginLeft:80})}})),C=function(e){var t=e.onMenuClickHandler,a=O();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{position:"sticky",className:a.appBar},r.a.createElement(u.a,{className:a.container},r.a.createElement(b.b,{to:"/"},r.a.createElement("img",{src:"/logo.png",alt:"logo",width:"128px"})),r.a.createElement(p.a,{xsDown:!0},r.a.createElement("div",{className:a.links},r.a.createElement(y,{name:"Home",to:"/",end:!0}),r.a.createElement(y,{name:"Men",to:"men"}),r.a.createElement(y,{name:"Women",to:"women"}),r.a.createElement(y,{name:"Kids",to:"kids"}))),r.a.createElement("div",{className:a.rightContainer},r.a.createElement(j,null),r.a.createElement(p.a,{smUp:!0},r.a.createElement(g.a,{className:a.menuButton,edge:"end","aria-label":"menu",onClick:t},r.a.createElement(_.a,null)))))))},R=a(148),w=a(136),L=a(137),U=a(73),A=a.n(U),I=a(152),M=a(134),P=a(135),D=a(27),T=Object(o.a)((function(e){return{drawerPaper:{width:240}}})),H=function(e){var t=e.name,a=e.icon,n=e.onClickHandler;return r.a.createElement(I.a,{button:!0,onClick:n},r.a.createElement(M.a,null,a),r.a.createElement(P.a,{primary:t}))},F=function(e){var t=e.open,a=e.onClickHandler,n=T(),i=Object(s.h)();return r.a.createElement(R.a,{variant:"temporary",anchor:"right",open:t,classes:{paper:n.drawerPaper},onClick:a},r.a.createElement(w.a,null,r.a.createElement(H,{name:"Home",icon:r.a.createElement(A.a,null),onClickHandler:function(){return i("/")}}),r.a.createElement(L.a,null),r.a.createElement(H,{name:"Men",icon:r.a.createElement(D.f,{size:24}),onClickHandler:function(){return i("men")}}),r.a.createElement(H,{name:"Women",icon:r.a.createElement(D.c,{size:24}),onClickHandler:function(){return i("women")}}),r.a.createElement(H,{name:"Kids",icon:r.a.createElement(D.a,{size:24}),onClickHandler:function(){return i("kids")}})))},B=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{onMenuClickHandler:function(){n(!0)}}),r.a.createElement(F,{open:a,onClickHandler:function(){n(!1)}}))},z=a(138),W=a(139),K=Object(o.a)((function(e){return{footer:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},container:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"space-around",padding:e.spacing(1)},e.breakpoints.down("sm"),{flexDirection:"column"}),btn:{color:e.palette.secondary.contrastText}}})),G=function(){var e=K();return r.a.createElement("footer",{className:e.footer},r.a.createElement(z.a,{className:e.container},r.a.createElement(E.a,null,"Created by Salman Zafar"),r.a.createElement("div",null,r.a.createElement(g.a,{className:e.btn,"aria-label":"facebook"},r.a.createElement(W.a,{href:"https://facebook.com/maanizfar",color:"inherit",target:"_blank"},r.a.createElement(D.b,null))),r.a.createElement(g.a,{className:e.btn,"aria-label":"github"},r.a.createElement(W.a,{href:"https://github.com/maanizfar",color:"inherit",target:"_blank"},r.a.createElement(D.d,null))),r.a.createElement(g.a,{className:e.btn,"aria-label":"linkedin"},r.a.createElement(W.a,{href:"https://linkedin.com/in/maanizfar/",color:"inherit",target:"_blank"},r.a.createElement(D.e,null))))))},V=a(143),$=a(140),q=a(142),J=a(141),X=a(3),Y=a(56),Q=a.n(Y),Z=Object(o.a)((function(e){var t,a,n;return{root:{height:"100%",position:"relative","&:hover":{cursor:"pointer"}},media:(t={height:300},Object(m.a)(t,e.breakpoints.down("md"),{height:200}),Object(m.a)(t,e.breakpoints.down("xs"),{height:120}),t),cardContent:(a={display:"flex",justifyContent:"space-between"},Object(m.a)(a,e.breakpoints.only("md"),{flexDirection:"column"}),Object(m.a)(a,e.breakpoints.only("xs"),{flexDirection:"column"}),a),h3ResponsiveText:(n={},Object(m.a)(n,e.breakpoints.only("md"),{fontSize:"1rem"}),Object(m.a)(n,e.breakpoints.only("xs"),{fontSize:"0.9rem"}),n),btnResponsiveText:Object(m.a)({},e.breakpoints.only("xs"),{fontSize:"0.8rem"}),row:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"}}})),ee=function(e){var t=e.product,a=Z(),i=Object(n.useContext)(x).addToCart,c=Object(s.h)();return r.a.createElement($.a,{className:a.root,onClick:function(e){console.log(e.target.value),c("/products/".concat(t.slug))}},r.a.createElement(J.a,{className:a.media,image:t.imageURL,title:t.name}),r.a.createElement(q.a,{className:a.cardContent},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{className:a.row},r.a.createElement(E.a,{variant:"h6",component:"h3",className:a.h3ResponsiveText},t.name),r.a.createElement(p.a,{xsDown:!0},r.a.createElement(E.a,{variant:"h6",component:"h3",className:Object(X.a)(a.h3ResponsiveText),align:"right"},"$",t.price))),r.a.createElement(E.a,{variant:"button",color:"textSecondary",component:"p",className:a.btnResponsiveText},t.brand),t.items_left>0?r.a.createElement("div",{className:a.row,style:{alignItems:"center"}},r.a.createElement(p.a,{xsDown:!0},r.a.createElement(E.a,{variant:"button",color:"textSecondary",component:"p",className:a.btnResponsiveText},"Items left: ",r.a.createElement("strong",null,t.items_left))),r.a.createElement(p.a,{smUp:!0},r.a.createElement(E.a,{variant:"h4",className:Object(X.a)(a.h3ResponsiveText),align:"right"},"$",t.price)),r.a.createElement(g.a,{color:"inherit",onClick:function(e){e.stopPropagation(),i(t)}},r.a.createElement(Q.a,null))):r.a.createElement(E.a,{variant:"button",color:"error",component:"p"},"Out of Stock"))))},te=Object(o.a)((function(e){return{root:{overflow:"auto",margin:0,width:"100%"}}})),ae=function(e){var t=e.products,a=te();return r.a.createElement(V.a,{container:!0,spacing:2,className:a.root},t.length>0?t.map((function(e){return r.a.createElement(V.a,{key:e.id,item:!0,xs:6,md:4},r.a.createElement(ee,{product:e}))})):r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(E.a,{color:"error",variant:"body1",style:{textAlign:"center",padding:"1rem"}},"No product available")))},ne=a(149),re=a(144),ie=Object(o.a)((function(e){return{root:Object(m.a)({display:"flex",minHeight:"80vh"},e.breakpoints.down("sm"),{flexDirection:"column"}),drawer:{width:240,flexShrink:0},drawerPaper:{width:240,height:"92%",backgroundColor:"transparent",border:"none"},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)}}}));var ce=function(e){var t=e.category,a=ie(),i=Object(n.useState)(0),c=Object(l.a)(i,2),o=c[0],m=c[1],g=["All","Running","Football","Casual","Formal"],f=Object(n.useContext)(x).products.filter((function(e){return e.gender.toLowerCase()===t.toLowerCase()})),_=function(e,t){switch(e){case 0:return t;case 1:return t.filter((function(e){return"RUNNING"===e.category}));case 2:return t.filter((function(e){return"FOOTBALL"===e.category}));case 3:return t.filter((function(e){return"CASUAL"===e.category}));case 4:return t.filter((function(e){return"FORMAL"===e.category}))}}(o,f),b=function(e,t){m(t)};return r.a.createElement("div",{className:a.root},r.a.createElement(p.a,{mdUp:!0},r.a.createElement("div",{className:a.categoryNav},r.a.createElement(d.a,{position:"static",color:"default"},r.a.createElement(ne.a,{value:o,onChange:b,indicatorColor:"primary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},g.map((function(e,t){return r.a.createElement(re.a,{label:e,key:t})})))))),r.a.createElement(p.a,{smDown:!0},r.a.createElement(R.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper}},r.a.createElement(u.a,null),r.a.createElement("div",{className:a.drawerContainer},r.a.createElement(w.a,null,g.map((function(e,t){return r.a.createElement(I.a,{button:!0,key:e,selected:o===t,onClick:function(e){return b(0,t)}},r.a.createElement(P.a,{primary:e}))})))))),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(ae,{products:_})),r.a.createElement(s.a,null))},oe=a(74),se=a.n(oe),le=Object(o.a)((function(e){return{root:Object(m.a)({minHeight:200,width:"100%",border:"1px solid ".concat(e.palette.text.secondary),position:"relative",marginBottom:e.spacing(2),backgroundColor:e.palette.background.paper},e.breakpoints.only("xs"),{border:"none",backgroundColor:e.palette.background.default,minHeight:150}),media:Object(m.a)({width:"100%",height:"100%"},e.breakpoints.only("xs"),{height:"60%"}),content:{padding:e.spacing(2),display:"flex",flexDirection:"column",justifyContent:"space-between"},bottomRow:Object(m.a)({display:"flex",justifyContent:"space-between"},e.breakpoints.only("xs"),{color:"black"}),responsiveText:Object(m.a)({fontSize:"1.2rem"},e.breakpoints.down("xs"),{fontSize:"1rem"}),blackOnXS:Object(m.a)({},e.breakpoints.down("xs"),{color:e.palette.text.primary,fontWeight:"bolder"}),cancelBtn:{position:"absolute",fontSize:"2rem",right:2,top:2}}})),me=function(e){var t=e.product,a=le(),i=Object(n.useContext)(x).cancelCartItem;return r.a.createElement(V.a,{container:!0,className:a.root},r.a.createElement(g.a,{color:"inherit",className:a.cancelBtn,onClick:function(){console.log("cancel ",t.name),i(t)}},r.a.createElement(se.a,null)),r.a.createElement(V.a,{item:!0,xs:4},r.a.createElement(J.a,{className:a.media,image:t.imageURL,title:t.name})),r.a.createElement(V.a,{item:!0,xs:8,className:a.content},r.a.createElement("div",null,r.a.createElement(E.a,{variant:"h6",component:"h3",color:"textSecondary",className:a.responsiveText},t.name),r.a.createElement(E.a,{variant:"button",color:"textSecondary",component:"p"},t.brand)),r.a.createElement("div",{className:a.bottomRow},r.a.createElement(E.a,{variant:"button",color:"textSecondary",className:Object(X.a)(a.responsiveText,a.blackOnXS)},"$",t.price),r.a.createElement(E.a,{variant:"button",color:"textSecondary",className:Object(X.a)(a.responsiveText,a.blackOnXS)},"Qty: ",t.items))))},de=function(){var e=Object(n.useContext)(x).cart;return r.a.createElement(r.a.Fragment,null,e.length>0?e.map((function(e){return r.a.createElement(me,{key:e.id,product:e})})):r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(E.a,{color:"error",variant:"body1"},"Cart is empty")))},ue=a(145),pe=Object(o.a)((function(e){return{root:{border:"1px solid ".concat(e.palette.grey[400]),padding:e.spacing(2),backgroundColor:e.palette.background.paper},heading:{textTransform:"uppercase",fontWeight:"bold",marginBottom:e.spacing(3)},row:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(1)},checkoutBtn:{marginTop:e.spacing(3),marginBottom:e.spacing(3)}}})),ge=function(){var e=pe(),t=Object(n.useContext)(x),a=t.cart,i=t.cancelCartItem,c=a.map((function(e){return e.items})),o=a.map((function(e){return e.price*e.items})),s=0,l=0;return c.length&&(s=c.reduce((function(e,t){return e+t}))),o.length&&(l=o.reduce((function(e,t){return e+t}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{container:!0,className:e.root},r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"h5",className:e.heading},"Order Summary")),r.a.createElement(V.a,{item:!0,xs:12,className:e.row},r.a.createElement(E.a,{variant:"button"},s," items"),r.a.createElement(E.a,{variant:"button"},"$",l)),r.a.createElement(V.a,{item:!0,xs:12,className:e.row},r.a.createElement(E.a,{variant:"button"},"Delivery"),r.a.createElement(E.a,{variant:"button"},"Free")),r.a.createElement(V.a,{item:!0,xs:12,className:e.row},r.a.createElement(E.a,{variant:"button"},"Sales Tax"),r.a.createElement(E.a,{variant:"button"},"-")),r.a.createElement(V.a,{item:!0,xs:12,className:e.row},r.a.createElement(E.a,{variant:"button"},"Total"),r.a.createElement(E.a,{variant:"button"},"$",l))),r.a.createElement(ue.a,{className:e.checkoutBtn,variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){a.map((function(e){return i(e)}))}},"Checkout"))},fe=Object(o.a)((function(e){return{root:{flexGrow:10},heading:{textTransform:"uppercase",fontWeight:"bold",marginTop:e.spacing(4)},total:{marginBottom:e.spacing(4)}}})),_e=function(){var e=fe(),t=Object(n.useContext)(x).cart.map((function(e){return e.price*e.items})),a=0;return t.length&&(a=t.reduce((function(e,t){return e+t}))),r.a.createElement(z.a,{className:e.root},r.a.createElement(E.a,{variant:"h4",component:"h4",className:e.heading},"Your cart"),r.a.createElement(E.a,{variant:"button",component:"p",className:e.total},"Total: ",r.a.createElement("strong",null,"$",a)),r.a.createElement(V.a,{container:!0,spacing:4},r.a.createElement(V.a,{item:!0,xs:12,md:8},r.a.createElement(de,null)),r.a.createElement(V.a,{item:!0,xs:12,md:4},r.a.createElement(ge,null))))},be=[{id:1,name:"Nike React Infinity Run Flyknit",brand:"NIKE",gender:"MEN",category:"RUNNING",price:160,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",slug:"nike-react-infinity-run-flyknit"},{id:2,name:"Nike React Miler",brand:"NIKE",gender:"MEN",category:"RUNNING",price:130,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",slug:"nike-react-miler"},{id:3,name:"Nike Air Zoom Pegasus 37",brand:"NIKE",gender:"WOMEN",category:"RUNNING",price:120,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",slug:"nike-air-zoom-pegasus-37"},{id:4,name:"Nike Joyride Run Flyknit",brand:"NIKE",gender:"WOMEN",category:"RUNNING",price:180,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",slug:"nike-joyride-run-flyknit"},{id:5,name:"Nike Mercurial Vapor 13 Elite FG",brand:"NIKE",gender:"WOMEN",category:"FOOTBALL",price:250,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",slug:"nike-mercurial-vapor-13-elite-fg"},{id:6,name:"Nike Phantom Vision Elite Dynamic Fit FG",brand:"NIKE",gender:"WOMEN",category:"FOOTBALL",price:150,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",slug:"nike-phantom-vision-elite-dynamic-fit-fg"},{id:7,name:"Nike Phantom Venom Academy FG",brand:"NIKE",gender:"WOMEN",category:"FOOTBALL",price:80,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",slug:"nike-phantom-venom-academy-fg"},{id:8,name:"Nike Mercurial Vapor 13 Elite Tech Craft FG",brand:"NIKE",gender:"MEN",category:"FOOTBALL",price:145,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",slug:"nike-mercurial-vapor-13-elite-tech-craft-fg"},{id:9,name:"Nike Mercurial Superfly 7 Pro MDS FG",brand:"NIKE",gender:"MEN",category:"FOOTBALL",price:137,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",slug:"nike-mercurial-superfly-7-pro-mds-fg"},{id:10,name:"Nike Air Force 1",brand:"NIKE",gender:"KIDS",category:"CASUAL",price:90,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",slug:"nike-air-force-1"},{id:11,name:"Nike Air Max 90",brand:"NIKE",gender:"KIDS",category:"CASUAL",price:100,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",slug:"nike-air-max-90"},{id:12,name:"Nike Air Max 90 LTR",brand:"NIKE",gender:"KIDS",category:"CASUAL",price:110,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg",slug:"nike-air-max-90-ltr"},{id:13,name:"Nike Joyride Dual Run",brand:"NIKE",gender:"KIDS",category:"RUNNING",price:110,is_in_inventory:!1,items_left:3,imageURL:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg",slug:"nike-joyride-dual-run"},{id:14,name:"Nike Renew Run",brand:"NIKE",gender:"KIDS",category:"RUNNING",price:80,is_in_inventory:!0,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg",slug:"nike-renew-run"},{id:16,name:"Bridgport Advice",brand:"HUSHPUPPIES",gender:"MEN",category:"FORMAL",price:30,is_in_inventory:!0,items_left:4,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/BRIDGPORT_ADVICE-BLACK_1_800x800.jpg?v=1576567903",slug:"bridgport-advice"},{id:15,name:"Beck",brand:"HUSHPUPPIES",gender:"MEN",category:"FORMAL",price:80,is_in_inventory:!0,items_left:5,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Beck-Black_800x800.jpg",slug:"beck"},{id:17,name:"Fester",brand:"HUSHPUPPIES",gender:"MEN",category:"FORMAL",price:70,is_in_inventory:!0,items_left:6,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/fester-Tan_800x800.jpg?v=1575537531",slug:"fester"},{id:18,name:"Pixel",brand:"HUSHPUPPIES",gender:"MEN",category:"FORMAL",price:75,is_in_inventory:!0,items_left:7,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/PIXEL-TAN_800x800.jpg?v=1577420506",slug:"pixel"},{id:19,name:"Austin",brand:"HUSHPUPPIES",gender:"MEN",category:"FORMAL",price:75,is_in_inventory:!0,items_left:2,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Austin-Coffee_800x800.jpg?v=1574772988",slug:"austin"},{id:20,name:"SS-HL-0135",brand:"HUSHPUPPIES",gender:"WOMEN",category:"FORMAL",price:30,is_in_inventory:!0,items_left:6,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009240000-11-SS-HL-0135-Black_800x800.jpg?v=1572264270",slug:"ss-hl-0135"},{id:21,name:"SS-HL-0136",brand:"HUSHPUPPIES",gender:"WOMEN",category:"FORMAL",price:50,is_in_inventory:!0,items_left:4,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009250000-779-SS-HL-0136-Coffee_800x800.jpg?v=1571900372",slug:"ss-hl-0136"},{id:22,name:"SS-HL-0128",brand:"HUSHPUPPIES",gender:"WOMEN",category:"FORMAL",price:35,is_in_inventory:!0,items_left:3,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/000300242-484-SS-HL-0128-Blue_800x800.jpg?v=1583235174",slug:"ss-hl-0128"},{id:23,name:"SS-MS-0075",brand:"HUSHPUPPIES",gender:"WOMEN",category:"CASUAL",price:25,is_in_inventory:!0,items_left:7,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-479-SS-MS-0075-Red_800x800.jpg?v=1570688687",slug:"ss-ms-0075"},{id:24,name:"SS-MS-0075",brand:"HUSHPUPPIES",gender:"WOMEN",category:"CASUAL",price:35,is_in_inventory:!0,items_left:4,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-615-SS-MS-0075-TAN_800x800.jpg?v=1570688687",slug:"ss-ms-0075"},{id:25,name:"SS-PM-0093",brand:"HUSHPUPPIES",gender:"WOMEN",category:"CASUAL",price:30,is_in_inventory:!0,items_left:3,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/SS-PM-0093_1_800x800.jpg?v=1570601253",slug:"ss-pm-0093"},{id:26,name:"Nizza X Disney",brand:"ADIDAS",gender:"KIDS",category:"CASUAL",price:55,is_in_inventory:!0,items_left:6,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg",slug:"nizza-x-disney"},{id:27,name:"X_PLR",brand:"ADIDAS",gender:"KIDS",category:"CASUAL",price:65,is_in_inventory:!0,items_left:5,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg",slug:"x_plr"},{id:28,name:"Stan Smith",brand:"ADIDAS",gender:"KIDS",category:"CASUAL",price:55,is_in_inventory:!0,items_left:3,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/d0720712d81e42b1b30fa80800826447_9366/Stan_Smith_Shoes_White_M20607_M20607_01_standard.jpg",slug:"stan-smith"},{id:29,name:"NMD_R1",brand:"ADIDAS",gender:"KIDS",category:"RUNNING",price:120,is_in_inventory:!0,items_left:3,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",slug:"nmd_r1"},{id:30,name:"NMD_R1 Flash Red",brand:"ADIDAS",gender:"WOMEN",category:"CASUAL",price:140,is_in_inventory:!0,items_left:5,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg",slug:"nmd_r1-flash-red"},{id:31,name:"Superstar",brand:"ADIDAS",gender:"WOMEN",category:"CASUAL",price:90,is_in_inventory:!0,items_left:3,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg",slug:"superstar"},{id:32,name:"Club C Revenge Mens",brand:"Reebok",gender:"MEN",category:"CASUAL",price:70,is_in_inventory:!0,items_left:3,imageURL:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7599294868804d78a1b1ab6f01718a5e_9366/Club_C_Revenge_Men's_Shoes_White_FV9877_01_standard.jpg",slug:"club-c-revenge-mens"},{id:33,name:"SK80-Low",brand:"Vans",gender:"MEN",category:"CASUAL",price:60,is_in_inventory:!0,items_left:3,imageURL:"https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",slug:"sk80-low"},{id:34,name:"Michael Feburary SK8-Hi",brand:"Vans",gender:"MEN",category:"CASUAL",price:72,is_in_inventory:!0,items_left:3,imageURL:"https://images.vans.com/is/image/Vans/MV122M-HERO?$583x583$",slug:"michael-feburary-sk8-hi"}],Ee=a(151),he=Object(o.a)((function(e){return{container:{padding:e.spacing(2),flexGrow:10},image:{width:"100%",height:"auto"},button:{marginTop:e.spacing(5)},name:Object(m.a)({},e.breakpoints.down("xs"),{fontSize:"1.6rem"})}})),ye=function(){var e=he(),t=Object(s.i)().slug,a=Object(n.useContext)(x),i=a.products,c=a.addToCart,o=Object(n.useState)(3.5),m=Object(l.a)(o,1)[0],d=i.find((function(e){return e.slug===t}));if(!d)return r.a.createElement("p",null,"Product not found");return r.a.createElement(z.a,{className:e.container},r.a.createElement(V.a,{container:!0,spacing:3},r.a.createElement(V.a,{item:!0,xs:12,md:6},r.a.createElement("img",{className:e.image,src:d.imageURL,alt:d.name})),r.a.createElement(V.a,{item:!0,xs:12,md:6,container:!0,direction:"column"},r.a.createElement(V.a,{item:!0},r.a.createElement(E.a,{variant:"h4",className:e.name},d.name),r.a.createElement(E.a,{variant:"h6",color:"textSecondary",gutterBottom:!0},d.brand)),r.a.createElement(V.a,{item:!0,container:!0,justify:"center",spacing:1,style:{marginTop:20}},r.a.createElement(V.a,{item:!0,xs:6},r.a.createElement(E.a,{variant:"button"},"Price")),r.a.createElement(V.a,{item:!0,xs:6},r.a.createElement(E.a,{variant:"button"}," $",d.price)),r.a.createElement(V.a,{item:!0,xs:6},r.a.createElement(E.a,{variant:"button"},"Items left")),r.a.createElement(V.a,{item:!0,xs:6},r.a.createElement(E.a,{variant:"button"},d.items_left)),r.a.createElement(V.a,{item:!0,xs:6},r.a.createElement(E.a,{variant:"button"},"Rating")),r.a.createElement(V.a,{item:!0,xs:6},r.a.createElement(Ee.a,{value:m,precision:.5,readOnly:!0}))),r.a.createElement(V.a,{item:!0,container:!0},r.a.createElement(ue.a,{variant:"contained",color:"secondary",className:e.button,startIcon:r.a.createElement(Q.a,null),onClick:function(){c(d)},disabled:d.items_left<=0,fullWidth:!0},"Add to cart")))))},ve=Object(o.a)((function(e){return{root:{width:"100%",margin:e.spacing(2),borderRadius:"8px","&:hover":{cursor:"pointer"}},media:{height:160},cardContent:{},name:{textAlign:"center"}}})),Ne=function(e){var t=e.name,a=e.imageURL,n=e.onClick,i=ve();return r.a.createElement($.a,{className:i.root,onClick:n},r.a.createElement(J.a,{className:i.media,image:a,title:t}),r.a.createElement(q.a,{className:i.cardContent},r.a.createElement(E.a,{variant:"h6",component:"h3",className:i.name},t)))},ke=Object(o.a)((function(e){var t;return{root:Object(m.a)({flexGrow:10,backgroundImage:'url("bg.jpg")',backgroundSize:"cover",backgroundPosition:"center",display:"flex"},e.breakpoints.down("sm"),{backgroundImage:'url("bg_portrait.jpg")'}),heading:Object(m.a)({fontWeight:"bold",marginTop:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:"3rem"}),subHeading:(t={fontWeight:"100",marginBottom:e.spacing(10)},Object(m.a)(t,e.breakpoints.down("sm"),{fontSize:"1.5rem",marginBottom:e.spacing(4)}),Object(m.a)(t,e.breakpoints.down("xs"),{fontSize:"1rem"}),t),cardContainer:Object(m.a)({display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("sm"),{flexDirection:"column"})}})),xe=function(){var e=ke(),t=Object(s.h)();return r.a.createElement("div",{className:e.root},r.a.createElement(z.a,null,r.a.createElement(E.a,{variant:"h1",color:"primary",align:"center",className:e.heading},"Shoe Store"),r.a.createElement(E.a,{variant:"h4",color:"primary",align:"center",className:e.subHeading},"streetwear / lifestyle / sports"),r.a.createElement("div",{className:e.cardContainer},r.a.createElement(Ne,{name:"Men",imageURL:"https://i.insider.com/5ad60080146e712d008b4ba3?width=1136&format=jpeg",onClick:function(){return t("/men")}}),r.a.createElement(Ne,{name:"Women",imageURL:"https://girottishoes.com/media/wysiwyg/750x427-category-top-banner-women-shoes-2020-m.jpg",onClick:function(){return t("/women")}}),r.a.createElement(Ne,{name:"Kids",imageURL:"https://cdn.shopify.com/s/files/1/2541/5718/products/product-image-327426219_1200x1200.jpg",onClick:function(){return t("/kids")}}))))},Se=Object(o.a)((function(e){return{root:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}}}));var je=function(){var e=Object(n.useContext)(x),t=e.recieveProducts,a=e.products,i=Se();return Object(n.useEffect)((function(){t(be)}),[]),r.a.createElement("div",{className:i.root},r.a.createElement(B,null),a.length>0?r.a.createElement(s.d,{className:i.content},r.a.createElement(s.b,{path:"/",element:r.a.createElement(xe,null)}),r.a.createElement(s.b,{path:"/men",element:r.a.createElement(ce,{category:"men"})}),r.a.createElement(s.b,{path:"/women",element:r.a.createElement(ce,{category:"women"})}),r.a.createElement(s.b,{path:"/kids",element:r.a.createElement(ce,{category:"kids"})}),r.a.createElement(s.b,{path:"/cart",element:r.a.createElement(_e,null)}),r.a.createElement(s.b,{path:"/products/:slug",element:r.a.createElement(ye,null)})):r.a.createElement("p",null,"Fetching data..."),r.a.createElement(G,null))},Oe=a(146),Ce=a(75),Re=Object(Ce.a)({palette:{primary:{main:"#ffffff"},secondary:{main:"#1f2833"}},typography:{fontFamily:"'Sahitya', serif"}}),we=a(147),Le=a(37),Ue=a(76),Ae=function(e,t){switch(t.type){case"RECIEVE_PRODUCTS":return Object(Le.a)({},e,{products:t.payload});case"ADD_TO_CART":var a=[];a=e.cart.some((function(e){return e.id===t.payload.id}))?e.cart.map((function(e){return e.id===t.payload.id&&e.items++,e})):[].concat(Object(Ue.a)(e.cart),[t.payload]);var n=e.products.map((function(e){return e.id===t.payload.id&&e.items_left>0&&e.items_left--,e}));return Object(Le.a)({},e,{products:n,cart:a});case"CANCEL_CART":var r=e.products.map((function(e){return e.id===t.payload.id&&(e.items_left+=t.payload.items),e}));return Object(Le.a)({},e,{products:r,cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});default:return e}},Ie=function(e){var t=e.children,a=Object(n.useReducer)(Ae,k),i=Object(l.a)(a,2),c=i[0],o=i[1];return r.a.createElement(x.Provider,{value:{products:c.products,cart:c.cart,recieveProducts:function(e){o({type:"RECIEVE_PRODUCTS",payload:e})},addToCart:function(e){o({type:"ADD_TO_CART",payload:Object(Le.a)({},e,{items:1})})},cancelCartItem:function(e){o({type:"CANCEL_CART",payload:e})}}},t)};c.a.render(r.a.createElement(Oe.a,{theme:Re},r.a.createElement(we.a,null),r.a.createElement(b.a,null,r.a.createElement(Ie,null,r.a.createElement(je,null)))),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.ed4c43d0.chunk.js.map