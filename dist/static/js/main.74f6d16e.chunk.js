(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{220:function(e,t,n){},221:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var c=n(24),r=n(1),i=n(2),s=n(92),a=n.n(s),o=(n(220),n(5)),l=n(6),j=n(9),u=n(8),d=n(4),h=n(13),b=(n(221),n(7)),p=function(e,t,n,c){return"like"===n?function(r,i,s){s.getFirebase;(0,s.getFirestore)().collection("project").doc(e,n).update({Likes:t.Likes+1,Likedbyid:c[0].concat(t.Likedbyid),Likedby:c[1].concat(t.Likedby)}).then((function(){r({type:"UPDATE_PROJECT",project:e})})).catch((function(e){r({type:"UPDATE_PROJECT_ERROR",err:e})}))}:"unlike"===n?function(r,i,s){s.getFirebase;(0,s.getFirestore)().collection("project").doc(e,n).update({Likes:t.Likes-1,Likedbyid:c[0],Likedby:c[1]}).then((function(){r({type:"UPDATE_PROJECT",project:e})})).catch((function(e){r({type:"UPDATE_PROJECT_ERROR",err:e})}))}:"dp"===n?function(n,c,r){r.getFirebase;(0,r.getFirestore)().collection("users").doc(e).update({image:t}).then((function(){n({type:"UPDATE_PROJECT",project:e})})).catch((function(e){n({type:"UPDATE_PROJECT_ERROR",err:e})}))}:"update"===n?function(c,r,i){i.getFirebase;(0,i.getFirestore)().collection("project").doc(e,n).update({title:t.title,content:t.content}).then((function(){c({type:"UPDATE_PROJECT",project:e})})).catch((function(e){c({type:"UPDATE_PROJECT_ERROR",err:e})}))}:"comment"===n?function(n,r,i){i.getFirebase;(0,i.getFirestore)().collection("project").doc(e).update({Comments:[c].concat(t.Comments)}).then((function(){n({type:"UPDATE_PROJECT",project:e})})).catch((function(e){n({type:"UPDATE_PROJECT_ERROR",err:e})}))}:"deletecomment"===n?function(t,n,r){r.getFirebase;(0,r.getFirestore)().collection("project").doc(e).update({Comments:c}).then((function(){t({type:"UPDATE_PROJECT",project:e})})).catch((function(e){t({type:"UPDATE_PROJECT_ERROR",err:e})}))}:void 0},O=Object(b.b)(null,(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNED_OUT"})}))}))}}}))((function(e){return!0!==e.details.isEmpty?Object(r.jsx)("div",{className:"container right",children:Object(r.jsxs)("ul",{className:"right",children:[Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/Create",children:" New Projects"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{onClick:function(){return function(e){window.confirm("Are you sure you wish to Log Out?")&&e.signOut()}(e)},children:" Log Out "})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/upload",children:" UpDate DP"})}),Object(r.jsx)("li",{class:"pink lighten-1",children:Object(r.jsxs)(d.b,{to:e.k,children:[" ",e.profile.firstName,Object(r.jsx)("i",{class:"material-icons right",children:"account_circle"})]})})]})}):null})),f=function(e){return console.log(e,"signedout"),!0===e.details.isEmpty?Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("ul",{className:"right",children:[Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/SignIn",children:" Log In"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/SignUp",children:" Create New Account "})})]})}):null},m=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.profile,n=e.details,c="/profile/"+n.uid;return Object(r.jsxs)("nav",{className:"nav-wrapper grey darken-3",children:[Object(r.jsx)(d.b,{to:"/",class:"left",children:Object(r.jsx)("i",{class:"material-icons",children:"home"})}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(O,{details:n,profile:t,k:c}),Object(r.jsx)(f,{details:this.props.details})]})]})}}]),n}(i.Component),g=Object(b.b)((function(e){return console.log(e),{details:e.firebase.auth,profile:e.firebase.profile}}))(m),x=n(38),v=n(16),y=n(15),C=n(37);n(374),n(410),n(376);C.a.initializeApp({apiKey:"AIzaSyD7Om6kid5EqjKry2GpESGhQRqBxqUmTcc",authDomain:"net-ninja-marioplan-eef83.firebaseapp.com",projectId:"net-ninja-marioplan-eef83",storageBucket:"net-ninja-marioplan-eef83.appspot.com",messagingSenderId:"995471059952",appId:"1:995471059952:web:4e74c74ad74b6f472bcb35"}),C.a.firestore().settings({timestampsInSnapshots:!0});var N=C.a.storage(),k=Object(y.d)(Object(v.firestoreConnect)((function(){return["project"]})),Object(b.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{updateProject:function(t,n,c,r){e(p(t,n,c,r))}}})))((function(e){var t=Object(i.useState)(null),n=Object(x.a)(t,2),c=n[0],s=n[1],a=Object(i.useState)(""),o=Object(x.a)(a,2),l=o[0],j=o[1],u=Object(i.useState)(0),d=Object(x.a)(u,2),b=d[0],p=d[1],O="./profile/"+e.auth.uid;return console.log("image: ",c),e.auth.uid?Object(r.jsxs)("div",{class:"container white",children:["Progress Bar",Object(r.jsx)("br",{}),Object(r.jsx)("progress",{value:b,max:"100",class:"grey"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&s(e.target.files[0])}}),Object(r.jsx)("button",{class:"btn",onClick:function(){N.ref("images/".concat(c.name)).put(c).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);p(t)}),(function(e){console.log(e)}),(function(){N.ref("images").child(c.name).getDownloadURL().then((function(e){j(e)}))})),console.log(l)},children:"Upload"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{class:"btn",onClick:function(){return function(t){window.confirm("Are you sure?")&&(e.updateProject(e.auth.uid,t,"dp",0),e.history.push(O))}(l)},children:"Update"}),Object(r.jsx)("img",{src:l||"https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg",alt:"firebase-image",width:"100",height:"100"})]}):Object(r.jsx)(h.a,{to:"/SignIn/"})})),E=n(23),P=0,R=Object(b.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(){var e=Object(i.useState)(null),t=Object(x.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(""),a=Object(x.a)(s,2),o=a[0],l=a[1],j=Object(i.useState)(0),u=Object(x.a)(j,2),d=u[0],h=u[1];return console.log("image: ",n),Object(r.jsxs)("div",{class:"m10 mar",children:["Progress Bar",Object(r.jsx)("br",{}),Object(r.jsx)("progress",{value:d,max:"100",class:"grey"}),Object(r.jsxs)("c",{class:"right",children:[Object(r.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&c(e.target.files[0])}}),Object(r.jsx)("button",{onClick:function(){N.ref("images/".concat(n.name)).put(n).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);h(t)}),(function(e){console.log(e)}),(function(){N.ref("images").child(n.name).getDownloadURL().then((function(e){l(e)}))})),console.log(o)},children:"Upload"})]}),Object(r.jsx)("br",{}),P=o]})})),S=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:"",image:"",Likes:0,AuthorId:e.props.auth.uid,AuthorFirstName:e.props.profile.firstName,AuthorLastName:e.props.profile.lastName},e.handleChange=function(t){e.setState(Object(E.a)({},t.target.id,t.target.value))},e.handleDone=function(t){e.state.title&&(t&&e.setState({image:t}),document.getElementById("element1").style.display="none",document.getElementById("element2").style.display="inline")},e.handlePost=function(){e.state.title&&(console.log(e.state),e.props.createProject(e.state),e.props.history.push("/"))},e.handleCancel=function(){e.props.history.push("/")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.props.auth.uid?Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"white mar ",children:[Object(r.jsxs)("h5",{className:"grey-text text-darken-3",children:["Create New Project",Object(r.jsx)("button",{class:"btn-floating white right",children:Object(r.jsx)("i",{class:"material-icons black-text",onClick:this.handleCancel,children:"cancel"})})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"title",children:"Title"}),Object(r.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"content",children:"Project Content"}),Object(r.jsx)("textarea",{id:"content",class:"materialize-textarea",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field grey-text",children:["Add Images",Object(r.jsx)(R,{})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("button",{className:"btn z-depth-2",onClick:function(){return e.handleDone(P)},id:"element1",children:"1.Done"}),"--------\u27a4",Object(r.jsx)("button",{className:"btn z-depth-2 a",onClick:this.handlePost,id:"element2",children:"2.Post Project"})]})]})]}):Object(r.jsx)(h.a,{to:"/SignIn"})}}]),n}(i.Component),w=Object(b.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{createProject:function(t){e(function(e){return function(t,n,r){r.getFirebase,(0,r.getFirestore)().collection("project").add(Object(c.a)(Object(c.a)({},e),{},{createdAt:new Date,Likedby:[],Likedbyid:[],Comments:[]})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(S),A=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(E.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.props),e.props.signIn(e.state),console.log(e.state)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.autherror;return t.uid?Object(r.jsx)(h.a,{to:"/"}):Object(r.jsx)("div",{className:"container abcd",children:Object(r.jsxs)("form",{className:"white",onSubmit:this.handleSubmit,children:[Object(r.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign In"}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Login"}),Object(r.jsx)("div",{className:"red-text center",children:n?Object(r.jsx)("p",{children:n}):null})]})]})})}}]),n}(i.Component),L=Object(b.b)((function(e){return{autherror:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,c){(0,c.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(A),T=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(E.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.autherror;return t.uid?Object(r.jsx)(h.a,{to:"/"}):Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("form",{className:"white",onSubmit:this.handleSubmit,children:[Object(r.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign Up"}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(r.jsx)("input",{type:"text",id:"firstName",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(r.jsx)("input",{type:"text",id:"lastName",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Sign Up"}),Object(r.jsx)("div",{className:"red-text center",children:n?Object(r.jsx)("p",{children:n}):null})]})]})})}}]),n}(i.Component),F=Object(b.b)((function(e){return{auth:e.firebase.auth,autherror:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,c){var r=c.getFirebase,i=c.getFirestore,s=r(),a=i();s.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return a.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(T),_=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.list;return console.log(e,"List"),Object(r.jsxs)("div",{className:"black-text",children:[Object(r.jsx)("hr",{}),e&&e.map((function(e){return Object(r.jsx)("div",{children:e})}))]})}}]),n}(i.Component),U=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).deleteComment=function(t,n){for(var c=[],r=1,i=e.props.list;r<=i.length;r++)r!==t&&c.push(i[r-1]);e.props.updateProject(n.id,n,"deletecomment",c),console.log(c,r)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.comment,c=t.i,i=t.auth,s=t.project;return Object(r.jsxs)("div",{children:[console.log(c++,n.post),Object(r.jsx)("b",{children:n.name}),": ",n.post,n.aid===i.uid?Object(r.jsxs)(d.b,{class:"black-text",children:[" ",Object(r.jsx)("i",{class:"right material-icons",onClick:function(){return e.deleteComment(c,s)},children:"delete"})]}):null,Object(r.jsx)("hr",{})]})}}]),n}(i.Component),I=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={comment:"",w:""},e.handleChange=function(t){var n;console.log(t.target,"e"),e.setState((n={},Object(E.a)(n,t.target.id,t.target.value),Object(E.a)(n,"w",t),n))},e.deleteComment=function(e){console.log(e)},e.submitComment=function(t,n,c){e.state.comment&&(e.props.updateProject(n.id,n,"comment",{name:t.firstName,post:e.state.comment,aid:c.uid}),e.setState({comment:""}),e.state.w.target.value="")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.list,c=t.project,i=t.profile,s=t.auth,a=t.updateProject,o=0;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col s5 m10 input-field",children:[Object(r.jsx)("input",{type:"text",id:"comment",onChange:this.handleChange,className:"input-area"}),Object(r.jsx)("label",{htmlFor:"comment",children:"Type Comment"}),n&&n.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{project:c,comment:e,i:o,list:n,auth:s,updateProject:a}),console.log(o++)]})}))]}),Object(r.jsxs)("div",{className:"col s5 m1 offser-m5",children:["Post",Object(r.jsx)("button",{class:"btn-floating blue-text waves-effect i22 z-depth-0",type:"submit",onClick:function(){return e.submitComment(i,c,s)}})]})]})})}}]),n}(i.Component),D=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={commentlist:!1,likelist:!1},e.handleLike=function(t){e.props.updateProject(t.id,t,"like",[[e.props.auth.uid],[e.props.profile.firstName]]),console.log(t.Likes,e.props.auth.uid,e.props.profile.firstName)},e.handleCommentList=function(){e.setState({commentlist:!e.state.commentlist})},e.handleLikeList=function(){e.setState({likelist:!e.state.likelist})},e.handleUnlike=function(t){for(var n=0,c=[],r=[];n<t.Likedbyid.length;n++)t.Likedbyid[n]!==e.props.auth.uid&&(c.push(t.Likedbyid[n]),r.push(t.Likedby[n]));console.log(e.props.auth.uid,c),e.props.updateProject(t.id,t,"unlike",[c,r])},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=!1,n=0,c=this.props,i=c.auth,s=c.project,a=c.profile;for(console.log(a,"profile"),console.log(this.props,0x3415a33e725fbc0);n<s.Likedbyid.length;n++)s.Likedbyid[n]===i.uid&&(t=!0);return Object(r.jsxs)("div",{children:[!1===t?Object(r.jsx)("div",{class:"btn-floating  waves-effect waves-light z-depth-10 li",onClick:function(){return e.handleLike(s)}}):Object(r.jsx)("div",{class:"btn-floating waves-effect waves-light z-depth-10 li2",onClick:function(){return e.handleUnlike(s)}}),Object(r.jsx)("div",{class:"row",children:Object(r.jsxs)("div",{class:"col m3 card grey lighten-3 z-depth-1",onClick:this.handleLikeList,children:[Object(r.jsxs)("m",{class:"black-text",children:["Liked by ",s.Likes]}),!0===this.state.likelist?Object(r.jsx)(_,{list:s.Likedby}):null]})}),Object(r.jsxs)("div",{className:"black-text card z-depth-1 grey lighten-3",children:[Object(r.jsx)("h6",{onClick:this.handleCommentList,children:"Comments"}),Object(r.jsx)("hr",{}),!0===this.state.commentlist?Object(r.jsx)(I,{list:s.Comments,project:s,profile:a,auth:i,updateProject:this.props.updateProject}):null]})]})}}]),n}(i.Component),J=Object(y.d)(Object(v.firestoreConnect)((function(){return["project"]})),Object(b.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}})))(D),z=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={comment:!1},e.handleClick=function(){window.confirm("Are you sure you wish to delete this item?")&&(e.props.deleteProject(e.props.match.params.id),e.props.history.push("/"))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.match.params.id,t="/edit/"+e,n=this.props.auth,c=this.props.project,i=!1;return c&&(i=c.find((function(t){return t.id===e}))),n.uid&&i&&console.log(i,345678345678),n.uid?i?Object(r.jsxs)("div",{class:"container section project-details",children:[Object(r.jsxs)("div",{class:"card z-depth-0",children:[Object(r.jsxs)("div",{class:"card-content",children:[Object(r.jsxs)("span",{class:"card-title blue-text",children:[i.title,n.uid===i.AuthorId?Object(r.jsx)(d.b,{to:t,children:Object(r.jsx)("div",{class:"right btn-small butt z-depth-10"})}):null]}),Object(r.jsxs)("div",{class:"row",children:[i.image?Object(r.jsx)("img",{src:i.image,class:"col left"}):null,Object(r.jsx)("p",{class:"card col m6 right",children:i.content})]})]}),Object(r.jsxs)("div",{class:"card-action gret lighten-4 grey-text",children:[Object(r.jsx)(J,{auth:n,project:i,updateProject:this.props.updateProject}),"Posted by ",i.AuthorFirstName," ",i.AuthorLastName,Object(r.jsx)("div",{children:i.createdAt.toDate().toString().slice(0,15)})]})]}),Object(r.jsx)("div",{className:"center",children:n.uid===i.AuthorId?Object(r.jsx)("button",{className:"btn white black-text z-depth-10",onClick:this.handleClick,children:"Delete Post"}):null})]}):null:Object(r.jsx)(h.a,{to:"/SignIn"})}}]),n}(i.Component),G=Object(y.d)(Object(v.firestoreConnect)((function(){return["project"]})),Object(b.b)((function(e){return{project:e.firestore.ordered.project,auth:e.firebase.auth}}),(function(e){return{deleteProject:function(t){e(function(e){return function(t,n,c){c.getFirebase,(0,c.getFirestore)().collection("project").doc(e).delete().then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))},updateProject:function(t,n,c,r){e(p(t,n,c,r))}}})))(z),B=function(){return Object(r.jsx)("div",{})},M=function(e){var t=e.project,n="/project/"+t.id;return Object(r.jsx)("div",{className:"card z-depth-2 project-summary",children:Object(r.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(r.jsx)(d.b,{to:n,children:Object(r.jsx)("span",{className:"card-title ",children:t.title})}),Object(r.jsxs)("p",{children:[t.content.slice(0,60),"..."]}),Object(r.jsxs)("p",{class:"card-action gret lighten-4 grey-text",children:["Posted by ",t.AuthorFirstName," Ninja",Object(r.jsx)("p",{children:t.createdAt.toDate().toString().slice(0,15)})]})]})})},q=function(e){var t=e.projects;return Object(r.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(r.jsx)(M,{project:e},e.id)}))})},H=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){console.log(this.props,"dashboard12334");var e=this.props,t=e.projects;return e.auth.uid?Object(r.jsx)("div",{className:"dashboard container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col s12 m6",children:Object(r.jsx)(q,{projects:t})}),Object(r.jsxs)("div",{className:"col s12 m5 offser-m1",children:[Object(r.jsx)("br",{}),Object(r.jsx)(B,{})]})]})}):Object(r.jsx)(h.a,{to:"/SignIn"})}}]),n}(i.Component),K=Object(y.d)(Object(v.firestoreConnect)((function(){return["project"]})),Object(b.b)((function(e){return console.log(e),{projects:e.firestore.ordered.project,users:e.firestore.ordered.users,auth:e.firebase.auth}})))(H),W=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:"",Likes:0,c:0},e.fun=function(t){""===e.state.title&&e.setState({title:t.title}),""===e.state.content&&0===e.state.c&&e.setState({c:1,content:t.content})},e.handleChange=function(t){console.log(e.state),e.setState(Object(E.a)({},t.target.id,t.target.value)),"content"===t.target.id&&e.setState({c:1})},e.handleSubmit=function(t,n){console.log(e.state);var c={title:e.state.title,content:e.state.content};console.log(e.state),e.state.title&&(console.log("HERE I M"),e.props.updateProject(t.id,c,"update",0)),console.log(e.props),e.props.history.push(n)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.auth,n=this.props.match.params.id,c=0;this.props.project&&(c=this.props.project.find((function(e){return e.id===n})));var i="/project/"+c.id;return t.uid?c?Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("script",{type:"text/javascript",children:"this.fun(project)"}),Object(r.jsxs)("form",{className:"white",onSubmit:function(){return e.handleSubmit(c,i)},children:[Object(r.jsx)("h5",{className:"grey-text text-darken-3",children:"Edit Project"}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"title",children:"Title"}),Object(r.jsx)("textarea",{id:"title",class:"materialize-textarea",onChange:this.handleChange,children:c.title})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"content",children:"Project Content"}),Object(r.jsx)("textarea",{id:"content",class:"materialize-textarea",onChange:this.handleChange,children:c.content})]}),Object(r.jsx)("div",{className:"input-field",children:Object(r.jsx)("button",{className:"btn pink lighten-1 z-depth-0",onMouseEnter:function(){return e.fun(c)},children:Object(r.jsx)("span",{className:"card-title ",children:"Edit and Save"})})})]})]}):null:Object(r.jsx)(h.a,{to:"/SignIn"})}}]),n}(i.Component),Y=Object(y.d)(Object(v.firestoreConnect)((function(){return["project"]})),Object(b.b)((function(e){return{project:e.firestore.ordered.project,auth:e.firebase.auth}}),(function(e){return{updateProject:function(t,n,c,r){e(p(t,n,c,r))}}})))(W),Q=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.users,n=e.aid;return Object(r.jsxs)("div",{className:"card mar right offser-m1 right z-depth-4",children:[Object(r.jsx)("div",{className:"card-title blue-text",children:"You May Know!! "}),t&&t.map((function(e){return e.id!==n?Object(r.jsxs)("div",{className:"card center",children:[Object(r.jsx)(d.b,{to:"/profile/"+e.id,children:e&&e.image?Object(r.jsxs)("b",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("img",{src:e.image,width:"80",height:"80",class:"img"})]}):Object(r.jsx)("i",{class:"large blue-text material-icons",children:"account_circle"})}),Object(r.jsx)("br",{}),Object(r.jsx)(d.b,{to:"/profile/"+e.id,class:"black-text",children:Object(r.jsxs)("div",{class:"m10 pink lighten-3",children:[e.firstName," ",e.lastName]})})]}):null}))]})}}]),n}(i.Component),V=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.projects,c=e.users,i=this.props.match.params.id,s=!1,a=0;return c&&(s=c.find((function(e){return e.id===i}))),s&&console.log(s,c),console.log(i),t.uid?Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("h5",{className:"card-title white blue-text mar",children:[s&&t.uid===s.id?Object(r.jsxs)("c",{children:[Object(r.jsx)("i",{class:"material-icons",children:"pan_tool "})," Hello,"]}):null,s?Object(r.jsxs)("c",{children:[s.firstName," ",s.lastName,Object(r.jsx)("i",{class:"small material-icons right",children:"account_circle"})]}):null]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col s12 m6",children:[s&&s.image?Object(r.jsx)("img",{src:s.image,width:"80",height:"80",class:"out img"}):null,n&&n.map((function(e){return e.AuthorId===i?Object(r.jsxs)("c",{children:[console.log(a++),Object(r.jsx)(M,{project:e},e.id)]}):null})),0===a?Object(r.jsx)("c",{children:"No Projects Yet :-("}):null]}),Object(r.jsxs)("div",{className:"col s12 m6 offser-m1 right mar",children:[console.log(this.props.users),Object(r.jsx)(Q,{users:c,aid:t.uid})]})]})]}):Object(r.jsx)(h.a,{to:"/SignIn"})}}]),n}(i.Component),X=Object(y.d)(Object(v.firestoreConnect)((function(){return["project","users"]})),Object(b.b)((function(e){return console.log(e),{auth:e.firebase.auth,projects:e.firestore.ordered.project,users:e.firestore.ordered.users,profile:e.firebase.profile}})))(V),Z=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(d.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(g,{}),Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.b,{path:!0,exact:"/",component:K}),Object(r.jsx)(h.b,{path:"/upload",component:k}),Object(r.jsx)(h.b,{path:"/SignIN",component:L}),Object(r.jsx)(h.b,{path:"/SignUp",component:F}),Object(r.jsx)(h.b,{path:"/Create",component:w}),Object(r.jsx)(h.b,{path:"/project/:id",component:G}),Object(r.jsx)(h.b,{path:"/edit/:id",component:Y}),Object(r.jsx)(h.b,{path:"/profile/:id",component:X})]})]})})}}]),n}(i.Component),$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,411)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))},ee={authError:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(c.a)(Object(c.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),{authError:null};case"SIGNED_OUT":return console.log("signed out"),{state:e};case"SIGNUP_SUCCESS":return console.log("signup success"),Object(c.a)(Object(c.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(c.a)(Object(c.a)({},e),{},{authError:t.err.message});default:return e}},ne={projects:[]},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT_SUCCESS":return console.log("create project success"),e;case"CREATE_PROJECT_ERROR":return console.log("create project error"),e;case"UPDATE_PROJECT":return console.log("UPDATE project"),e;case"UPDATE_PROJECT_ERROR":return console.log("update project error"),e;default:return e}},re=n(56),ie=Object(y.c)({auth:te,project:ce,firestore:re.firestoreReducer,firebase:v.firebaseReducer}),se=n(214),ae=Object(y.e)(ie,Object(y.d)(Object(y.a)(se.a.withExtraArgument({getFirebase:v.getFirebase,getFirestore:re.getFirestore})),Object(re.reduxFirestore)(C.a,C.a))),oe={firebase:C.a,config:{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1},dispatch:ae.dispatch,createFirestoreInstance:re.createFirestoreInstance};function le(e){var t=e.children,n=Object(b.c)((function(e){return e.firebase.auth}));return Object(v.isLoaded)(n)?t:Object(r.jsx)("div",{children:"Loading Screen..."})}a.a.render(Object(r.jsx)(b.a,{store:ae,children:Object(r.jsx)(v.ReactReduxFirebaseProvider,Object(c.a)(Object(c.a)({},oe),{},{children:Object(r.jsxs)(le,{children:[" ",Object(r.jsx)(Z,{})]})}))}),document.getElementById("root")),$()}},[[409,1,2]]]);
//# sourceMappingURL=main.74f6d16e.chunk.js.map