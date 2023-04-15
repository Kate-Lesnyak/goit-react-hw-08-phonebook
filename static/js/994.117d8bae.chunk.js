"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[994],{2366:function(e,n,r){r.d(n,{U:function(){return l}});var t=r(5705),a=r(6727),i=r(9434),s=r(9273),o=r(1598),c=r(3329),d=a.Ry().shape({email:a.Z_().trim().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,{message:"Email is invalid."}).required("Email is a required field"),password:a.Z_().trim().required("Password is a required field")}),l=function(){var e=(0,i.I0)();return(0,c.jsx)(t.J9,{initialValues:{email:"",password:""},validationSchema:d,onSubmit:function(n,r){var t=r.resetForm;e((0,s.Ib)(n)),t()},children:(0,c.jsxs)(o.Gq,{children:[(0,c.jsxs)(o.Ll,{children:[(0,c.jsx)(o.ar,{children:"Email"}),(0,c.jsx)(o.Fy,{type:"email",name:"email"}),(0,c.jsx)(o.Vv,{name:"email",component:"div"})]}),(0,c.jsxs)(o.Ll,{children:[(0,c.jsx)(o.ar,{children:"Password"}),(0,c.jsx)(o.Fy,{type:"password",name:"password"}),(0,c.jsx)(o.Vv,{name:"password",component:"div"})]}),(0,c.jsx)(o.Sn,{type:"submit",children:"Log in"})]})})}},3699:function(e,n,r){r.d(n,{B:function(){return l}});var t=r(5705),a=r(6727),i=r(9434),s=r(9273),o=r(1598),c=r(3329),d=a.Ry().shape({name:a.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."}).required("Name is a required field"),email:a.Z_().trim().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,{message:"Email is invalid."}).required("Email is a required field"),password:a.Z_().trim().min(7).required("Password is a required field")}),l=function(){var e=(0,i.I0)();return(0,c.jsx)(t.J9,{initialValues:{name:"",email:"",password:""},validationSchema:d,onSubmit:function(n,r){var t=r.resetForm;e((0,s.z2)(n)),t()},children:(0,c.jsxs)(o.Gq,{children:[(0,c.jsxs)(o.Ll,{children:[(0,c.jsx)(o.ar,{children:"Name"}),(0,c.jsx)(o.Fy,{type:"text",name:"name"}),(0,c.jsx)(o.Vv,{name:"name",component:"div"})]}),(0,c.jsxs)(o.Ll,{children:[(0,c.jsx)(o.ar,{children:"Email"}),(0,c.jsx)(o.Fy,{type:"email",name:"email"}),(0,c.jsx)(o.Vv,{name:"email",component:"div"})]}),(0,c.jsxs)(o.Ll,{children:[(0,c.jsx)(o.ar,{children:"Password"}),(0,c.jsx)(o.Fy,{type:"password",name:"password"}),(0,c.jsx)(o.Vv,{name:"password",component:"div"})]}),(0,c.jsx)(o.Sn,{type:"submit",children:"Register"})]})})}},4994:function(e,n,r){r.r(n),r.d(n,{default:function(){return D}});var t,a,i,s,o,c,d,l,m,u=r(2791),h=r(9434),p=r(3634),x=r(1775),f=(r(4907),r(2360),r(168)),j=r(6444),g=j.ZP.p(t||(t=(0,f.Z)(["\nfont-size: ",";\ntext-align: center;\ncolor: ",";\n"])),(function(e){return e.theme.fontSizes.large}),(function(e){return e.theme.colors.errorColor})),v=r(3329),b=function(e){var n=e.error;return(0,v.jsx)(g,{children:n})},y=r(5705),Z=r(1686),w=r(6727),z=r(1598),A=w.Ry().shape({name:w.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."}).required("Name is a required field"),number:w.Z_().trim().matches(/^\+?(\d{1,2})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,{message:"Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890, +91 (123) 456-7890"}).required("Number is a required field")}),q=function(){var e=(0,h.v9)(x.Af),n=(0,h.I0)();return(0,v.jsx)(y.J9,{initialValues:{name:"",number:""},validationSchema:A,onSubmit:function(r,t){var a=t.resetForm,i=r.name.toLowerCase();if(e.find((function(e){return e.name.toLowerCase()===i})))return Z.Notify.info("".concat(r.name," is already in contacts!"));n((0,p.uK)(r)),a()},children:(0,v.jsxs)(z.Gq,{children:[(0,v.jsxs)(z.Ll,{children:[(0,v.jsx)(z.ar,{children:"Name"}),(0,v.jsx)(z.Fy,{type:"text",name:"name"}),(0,v.jsx)(z.Vv,{name:"name",component:"div"})]}),(0,v.jsxs)(z.Ll,{children:[(0,v.jsx)(z.ar,{children:"Number"}),(0,v.jsx)(z.Fy,{type:"tel",name:"number"}),(0,v.jsx)(z.Vv,{name:"number",component:"div"})]}),(0,v.jsx)(z.Sn,{type:"submit",children:"Add contacts"})]})})},C=r(5309),P=r(7322),F=j.ZP.li(a||(a=(0,f.Z)(["\ndisplay: flex;\njustify-content: space-between;\ngap: ",";\nborder: ",";\nborder-radius: ",";\npadding: 8px 16px;\n"])),(function(e){return e.theme.spacing(3)}),(function(e){var n=e.theme;return"1px solid ".concat(n.colors.borderInputColor)}),(function(e){return e.theme.spacing(2)})),I=j.ZP.p(i||(i=(0,f.Z)(["\nfont-weight: 500;\n"]))),L=(0,j.ZP)(z.zx)(s||(s=(0,f.Z)(["\ndisplay: flex;\njustify-content: 'center';\nalign-items: center;\nborder-radius: 50%;\n"]))),S=function(e){var n=e.contact,r=n.id,t=n.name,a=n.number,i=(0,h.I0)();return(0,v.jsxs)(F,{children:[(0,v.jsxs)(I,{children:[t,":"]}),(0,v.jsxs)("p",{children:[" ",a," "]}),(0,v.jsx)(L,{type:"button",onClick:function(){return i((0,p.GK)(r))},children:(0,v.jsx)(P.XPx,{})})]})},_=j.ZP.ul(o||(o=(0,f.Z)(["\nwidth: 400px;\ndisplay: flex;\ngap: ",";\nflex-direction: column;\npadding: ",";\nborder: ",";\nborder-radius: ",";\nmargin-left: auto;\nmargin-right: auto;\nmargin-bottom: ",";\n"])),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.spacing(3)}),(function(e){var n=e.theme;return"1px solid ".concat(n.colors.backgroundAndBorderColor)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(5)})),k=(j.ZP.label(c||(c=(0,f.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: ",";\n"])),(function(e){return e.theme.spacing(1)})),function(){var e=(0,C.g)();return(0,v.jsx)(_,{children:e.map((function(e){return(0,v.jsx)(S,{contact:e},e.id)}))})}),V=r(3628),N=r(4808),E=j.ZP.label(d||(d=(0,f.Z)(["\ndisplay: flex;\ngap: ",";\nalign-items: center;\nwidth: 400px;\ncolor: ",";\nmargin-left: auto;\nmargin-right: auto;\nmargin-bottom: ",";\n"])),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.colors.primaryTextColor}),(function(e){return e.theme.spacing(3)})),$=j.ZP.input(l||(l=(0,f.Z)(["\npadding: 8px 16px;\nborder: ",";\nborder-radius: ",";\ntransition-property: border;\ntransition: ",";\n\n:focus {\noutline: none;\nborder: ",";\n}\n"])),(function(e){var n=e.theme;return"1px solid ".concat(n.colors.borderInputColor)}),(function(e){return e.theme.spacing(2)}),(function(e){var n=e.theme;return"border ".concat(n.colors.transition)}),(function(e){var n=e.theme;return"1px solid ".concat(n.colors.accentColor)})),J=function(){var e=(0,h.v9)(x.AD),n=(0,h.I0)();return(0,v.jsxs)(E,{children:["Find contacts by name",(0,v.jsx)(V.DebounceInput,{element:$,type:"text",name:"filter",value:e,minLength:2,debounceTimeout:300,onChange:function(e){return n((0,N.h)(e.target.value))}})]})},B=r(7013),G=(r(2366),r(9783),j.ZP.p(m||(m=(0,f.Z)(["\nfont-size: ",";\ntext-align: center;\n"])),(function(e){return e.theme.fontSizes.large}))),R=function(e){var n=e.message;return(0,v.jsx)(G,{children:n})},T=(r(3699),r(5911),r(6338),r(1552)),D=function(){var e=(0,h.v9)(x.Af),n=(0,h.v9)(x.xU),r=(0,h.v9)(x.zh),t=(0,h.I0)();return(0,u.useEffect)((function(){t((0,p.yF)())}),[t]),(0,v.jsx)(T.$,{children:(0,v.jsxs)(T.W,{children:[(0,v.jsx)("h1",{children:"Phone book"}),(0,v.jsx)(q,{}),(0,v.jsx)("h2",{children:"Contacts"}),n&&(0,v.jsx)(B.a,{}),r&&(0,v.jsx)("b",{children:(0,v.jsx)(b,{error:r})}),e.length>0?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(J,{}),(0,v.jsx)(k,{})]}):(0,v.jsx)("b",{children:(0,v.jsx)(R,{message:"There are no contacts in your phone book. Please add a contact!"})})]})})}}}]);
//# sourceMappingURL=994.117d8bae.chunk.js.map