import{r as a,j as e,L as m,a as _}from"./index-D6JJyj7V.js";import{H as u,F as N}from"./Footer-BDgCYY6j.js";import{p as v}from"./page-header-bg-img-CYfOjHp2.js";const k=()=>e.jsx("div",{className:"col-xl-4 col-lg-4",children:e.jsxs("div",{className:"blog-skeleton",children:[e.jsx("div",{className:"blog-skeleton__img"}),e.jsxs("div",{className:"blog-skeleton__content",children:[e.jsx("div",{className:"blog-skeleton__date"}),e.jsx("div",{className:"blog-skeleton__title"}),e.jsxs("div",{className:"blog-skeleton__description",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]})]})]})});function S(){const[o,h]=a.useState([]),[i,p]=a.useState(1),[n,r]=a.useState(!0),t=6;a.useEffect(()=>{(async()=>{r(!0);try{const f=(await _.get("https://bulavo-backend1-xi.vercel.app/blog/allblog")).data.map(x=>({...x,formattedDate:new Date(x.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}));h(f)}catch(l){console.error("Error fetching blogs:",l)}r(!1)})()},[]);const c=i*t,b=c-t,j=o.slice(b,c),d=Math.ceil(o.length/t),g=s=>{p(s)};return e.jsxs("div",{className:"page-wrapper",children:[e.jsx(u,{}),e.jsxs("section",{className:"page-header",children:[e.jsx("div",{className:"page-header__bg",style:{backgroundImage:`url(${v})`}}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-xl-12",children:e.jsxs("div",{className:"page-header__inner",children:[e.jsx("h2",{className:"page-header__title",children:"Blog"}),e.jsxs("ul",{className:"thm-breadcrumb list-unstyled",children:[e.jsx("li",{children:e.jsx(m,{to:"/",children:"Home"})}),e.jsx("li",{children:"Blog"})]})]})})})})]}),e.jsxs("section",{className:"blog-one",children:[e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"blog-one__top",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-xl-7 col-lg-6",children:e.jsx("div",{className:"blog-one__top-left",children:e.jsxs("div",{className:"section-title text-left",children:[e.jsx("span",{className:"section-title__tagline",children:"our blogs"}),e.jsx("h2",{className:"section-title__title",children:"News & Articles"})]})})})})}),e.jsx("div",{className:"blog-one__bottom",children:e.jsx("div",{className:"row",children:n?[...Array(6)].map((s,l)=>e.jsx(k,{},l)):j.map(s=>e.jsx("div",{className:"col-xl-4 col-lg-4 wow fadeInUp","data-wow-delay":"300ms",children:e.jsx(m,{to:`/blog/${s.slag}`,children:e.jsxs("div",{className:"blog-one__single",children:[e.jsx("div",{className:"blog-one__img-box",children:e.jsx("div",{className:"blog-one__img",children:e.jsx("img",{src:s.blogimage,alt:s.blogtitle,style:{height:"200px"}})})}),e.jsxs("div",{className:"blog-one__content-box",children:[e.jsx("div",{className:"blog-one__date",children:e.jsxs("p",{children:[e.jsx("span",{children:"Admin"}),s.formattedDate]})}),e.jsx("h3",{style:{paddingBottom:"10px"},className:"blog-one__title blog-title",children:s.blogtitle}),e.jsx("span",{className:"blog-description",children:s.blogdese})]})]})})},s._id))})})]}),!n&&e.jsx("div",{className:"blog-page__pagination",children:e.jsxs("ul",{className:"pg-pagination list-unstyled",children:[Array.from({length:d},(s,l)=>e.jsx("li",{className:i===l+1?"active":"",children:e.jsx("a",{href:"#",onClick:()=>g(l+1),children:l+1})},l+1)),e.jsx("li",{className:"next",children:e.jsx("a",{href:"#",onClick:()=>g(Math.min(i+1,d)),"aria-label":"Next",children:e.jsx("i",{className:"fa fa-arrow-right"})})})]})})]}),e.jsx("style",{jsx:"true",children:`
        .blog-title,
        .blog-description {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
        }

        .blog-title {
          -webkit-line-clamp: 2;
          font-size: 1.5rem;
        }

        .blog-description {
          -webkit-line-clamp: 4;
          font-size: 1rem;
          text-align: justify;
        }

        /* Skeleton Styles */
        .blog-skeleton {
          background: #fff;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 30px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .blog-skeleton__img {
          width: 100%;
          height: 200px;
          background: #f0f0f0;
          border-radius: 8px;
          margin-bottom: 15px;
          animation: pulse 1.5s infinite;
        }

        .blog-skeleton__content {
          padding: 15px;
        }

        .blog-skeleton__date {
          width: 40%;
          height: 20px;
          background: #f0f0f0;
          margin-bottom: 15px;
          border-radius: 4px;
          animation: pulse 1.5s infinite;
        }

        .blog-skeleton__title {
          width: 100%;
          height: 30px;
          background: #f0f0f0;
          margin-bottom: 15px;
          border-radius: 4px;
          animation: pulse 1.5s infinite;
        }

        .blog-skeleton__description div {
          width: 100%;
          height: 15px;
          background: #f0f0f0;
          margin-bottom: 10px;
          border-radius: 4px;
          animation: pulse 1.5s infinite;
        }

        .blog-skeleton__description div:last-child {
          width: 80%;
        }

        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.6;
          }
        }
      `}),e.jsx(N,{}),e.jsx("a",{"aria-label":"top",href:"#",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{position:"fixed",bottom:"30px",right:"30px",backgroundColor:"#00a7eb",color:"#fff",height:"50px",width:"50px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:e.jsx("i",{className:"fa fa-angle-up"})})]})}export{S as default};
