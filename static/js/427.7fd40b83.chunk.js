"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[427],{2366:function(n,e,r){r.d(e,{U:function(){return l}});var t=r(5705),a=r(6727),i=r(9434),s=r(9273),o=r(1598),c=r(3329),d={email:"",password:""},u=a.Ry().shape({email:a.Z_().trim().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,{message:"Email is invalid."}).required("Email is a required field"),password:a.Z_().trim().required("Password is a required field")}),l=function(){var n=(0,i.I0)();return(0,c.jsx)(t.J9,{initialValues:d,validationSchema:u,onSubmit:function(e,r){var t=r.resetForm;n((0,s.Ib)(e)),t()},children:(0,c.jsxs)(o.Gq,{children:[(0,c.jsxs)(o.Ll,{children:[(0,c.jsx)(o.ar,{children:"Email"}),(0,c.jsx)(o.Fy,{type:"email",name:"email"}),(0,c.jsx)(o.Vv,{name:"email",component:"div"})]}),(0,c.jsxs)(o.Ll,{children:[(0,c.jsx)(o.ar,{children:"Password"}),(0,c.jsx)(o.Fy,{type:"password",name:"password"}),(0,c.jsx)(o.Vv,{name:"password",component:"div"})]}),(0,c.jsx)(o.Sn,{type:"submit",children:"Log in"})]})})}},3699:function(n,e,r){r.d(e,{B:function(){return l}});var t=r(5705),a=r(6727),i=r(9434),s=r(9273),o=r(1598),c=r(3329),d={name:"",email:"",password:""},u=a.Ry().shape({name:a.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."}).required("Name is a required field"),email:a.Z_().trim().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,{message:"Email is invalid"}).required("Email is a required field"),password:a.Z_().trim().min(7).required("Password is a required field")}),l=function(){var n=(0,i.I0)();return(0,c.jsx)(t.J9,{initialValues:d,validationSchema:u,onSubmit:function(e,r){var t=r.resetForm;n((0,s.z2)(e)),t()},children:(0,c.jsxs)(o.Gq,{children:[(0,c.jsxs)(o.Ll,{children:[(0,c.jsx)(o.ar,{children:"Name"}),(0,c.jsx)(o.Fy,{type:"text",name:"name"}),(0,c.jsx)(o.Vv,{name:"name",component:"div"})]}),(0,c.jsxs)(o.Ll,{children:[(0,c.jsx)(o.ar,{children:"Email"}),(0,c.jsx)(o.Fy,{type:"email",name:"email"}),(0,c.jsx)(o.Vv,{name:"email",component:"div"})]}),(0,c.jsxs)(o.Ll,{children:[(0,c.jsx)(o.ar,{children:"Password"}),(0,c.jsx)(o.Fy,{type:"password",name:"password"}),(0,c.jsx)(o.Vv,{name:"password",component:"div"})]}),(0,c.jsx)(o.Sn,{type:"submit",children:"Register"})]})})}},7735:function(n,e,r){r.d(e,{t:function(){return q},CR:function(){return S},jj:function(){return f},wn:function(){return J},aN:function(){return R.a},P_:function(){return G}});r(4989),r(2360);var t,a,i,s,o,c,d,u,l,m=r(168),p=r(6444),h=p.ZP.p(t||(t=(0,m.Z)(["\nfont-size: ",";\ntext-align: center;\ncolor: ",";\n"])),(function(n){return n.theme.fontSizes.large}),(function(n){return n.theme.colors.errorColor})),x=r(3329),f=function(n){var e=n.error;return(0,x.jsx)(h,{children:e})},j=r(5705),g=r(1686),v=r(6727),b=r(9434),y=r(3634),Z=r(1775),w=r(1598),z={name:"",number:""},A=v.Ry().shape({name:v.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."}).required("Name is a required field"),number:v.Z_().trim().matches(/^\+?(\d{1,2})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,{message:"Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890, +91 (123) 456-7890"}).required("Number is a required field")}),q=function(){var n=(0,b.v9)(Z.Af),e=(0,b.I0)();return(0,x.jsx)(j.J9,{initialValues:z,validationSchema:A,onSubmit:function(r,t){var a=t.resetForm,i=r.name.toLowerCase();if(n.find((function(n){return n.name.toLowerCase()===i})))return g.Notify.info("".concat(r.name," is already in contacts!"));e((0,y.uK)(r)),a()},children:(0,x.jsxs)(w.Gq,{children:[(0,x.jsxs)(w.Ll,{children:[(0,x.jsx)(w.ar,{children:"Name"}),(0,x.jsx)(w.Fy,{type:"text",name:"name"}),(0,x.jsx)(w.Vv,{name:"name",component:"div"})]}),(0,x.jsxs)(w.Ll,{children:[(0,x.jsx)(w.ar,{children:"Number"}),(0,x.jsx)(w.Fy,{type:"tel",name:"number"}),(0,x.jsx)(w.Vv,{name:"number",component:"div"})]}),(0,x.jsx)(w.Sn,{type:"submit",children:"Add contacts"})]})})},C=r(5309),P=r(7322),F=p.ZP.li(a||(a=(0,m.Z)(["\ndisplay: flex;\njustify-content: space-between;\ngap: ",";\nborder: ",";\nborder-radius: ",";\npadding: 8px 16px;\n"])),(function(n){return n.theme.spacing(3)}),(function(n){var e=n.theme;return"1px solid ".concat(e.colors.borderInputColor)}),(function(n){return n.theme.spacing(2)})),L=p.ZP.p(i||(i=(0,m.Z)(["\nfont-weight: 500;\n"]))),I=(0,p.ZP)(w.zx)(s||(s=(0,m.Z)(["\ndisplay: flex;\njustify-content: 'center';\nalign-items: center;\nborder-radius: 50%;\n"]))),_=function(n){var e=n.contact,r=e.id,t=e.name,a=e.number,i=(0,b.I0)();return(0,x.jsxs)(F,{children:[(0,x.jsxs)(L,{children:[t,":"]}),(0,x.jsxs)("p",{children:[" ",a," "]}),(0,x.jsx)(I,{type:"button",onClick:function(){return i((0,y.GK)(r))},children:(0,x.jsx)(P.XPx,{})})]})},N=p.ZP.ul(o||(o=(0,m.Z)(["\nwidth: 400px;\ndisplay: flex;\ngap: ",";\nflex-direction: column;\npadding: ",";\nborder: ",";\nborder-radius: ",";\nmargin-left: auto;\nmargin-right: auto;\nmargin-bottom: ",";\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(3)}),(function(n){var e=n.theme;return"1px solid ".concat(e.colors.backgroundAndBorderColor)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(5)})),S=(p.ZP.label(c||(c=(0,m.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: ",";\n"])),(function(n){return n.theme.spacing(1)})),function(){var n=(0,C.g)();return(0,x.jsx)(N,{children:n.map((function(n){return(0,x.jsx)(_,{contact:n},n.id)}))})}),V=r(3628),k=r(4808),E=p.ZP.label(d||(d=(0,m.Z)(["\ndisplay: flex;\ngap: ",";\nalign-items: center;\nwidth: 400px;\ncolor: ",";\nmargin-left: auto;\nmargin-right: auto;\nmargin-bottom: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.primaryTextColor}),(function(n){return n.theme.spacing(3)})),$=p.ZP.input(u||(u=(0,m.Z)(["\npadding: 8px 16px;\nborder: ",";\nborder-radius: ",";\ntransition-property: border;\ntransition: ",";\n\n:focus {\noutline: none;\nborder: ",";\n}\n"])),(function(n){var e=n.theme;return"1px solid ".concat(e.colors.borderInputColor)}),(function(n){return n.theme.spacing(2)}),(function(n){var e=n.theme;return"border ".concat(e.colors.transition)}),(function(n){var e=n.theme;return"1px solid ".concat(e.colors.accentColor)})),J=function(){var n=(0,b.v9)(Z.AD),e=(0,b.I0)();return(0,x.jsxs)(E,{children:["Find contacts by name",(0,x.jsx)(V.DebounceInput,{element:$,type:"text",name:"filter",value:n,minLength:2,debounceTimeout:300,onChange:function(n){return e((0,k.h)(n.target.value))}})]})},R=r(7013),B=(r(2366),r(9783),p.ZP.p(l||(l=(0,m.Z)(["\nfont-size: ",";\ntext-align: center;\n"])),(function(n){return n.theme.fontSizes.large}))),G=function(n){var e=n.message;return(0,x.jsx)(B,{children:e})};r(3699),r(5911),r(6338)},7427:function(n,e,r){r.r(e);var t=r(7735),a=r(1552),i=r(2366),s=r(5309),o=r(3329);e.default=function(){var n=(0,s.a)(),e=n.isLoading,r=n.error;return(0,o.jsx)(a.$,{children:(0,o.jsxs)(a.W,{children:[(0,o.jsx)("h1",{children:"Log in"}),(0,o.jsx)(i.U,{}),e&&(0,o.jsx)(t.aN,{}),r&&(0,o.jsx)("b",{children:(0,o.jsx)(t.jj,{error:r})})]})})}}}]);
//# sourceMappingURL=427.7fd40b83.chunk.js.map