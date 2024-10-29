import{r as n,u as A,j as e,L as i}from"./index-D6JJyj7V.js";const o="/assets/logo-IW3RoFFL.png",p=()=>{const[r,j]=n.useState(!1),[a,d]=n.useState(!1),c=A(),x=c.pathname==="/",m=[{name:"Home",path:"/"},{name:"About Us",path:"/about"},{name:"Services",path:"/services"},{name:"Blog",path:"/blog"},{name:"Contact Us",path:"/contact"},{name:"Become a Partner",path:"/patner"}],h=s=>{const l=c.pathname===s;return a?{color:l?"#f1d551":"white",transition:"color 0.3s ease"}:{color:l?"#f1d551":"white",transition:"color 0.3s ease"}},t=()=>{j(!r)};return n.useEffect(()=>{const s=()=>{window.scrollY>50?d(!0):d(!1)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:`main-header ${a?"sticky":""}`,style:{position:a?"fixed":"absolute",top:0,left:0,width:"100%",background:a?"black":"transparent",transition:"background 0.3s ease, top 0.3s ease",zIndex:1e3,marginTop:a?"-32px":""},children:[e.jsx("nav",{className:"main-menu",children:e.jsx("div",{className:"main-menu__wrapper",children:e.jsxs("div",{className:"main-menu__wrapper-inner",children:[e.jsxs("div",{className:"main-menu__left",children:[e.jsx("div",{className:"main-menu__logo",children:e.jsx(i,{to:"/",children:e.jsx("img",{src:o,alt:"Logo"})})}),e.jsx("div",{className:"main-menu__main-menu-box",children:e.jsxs("div",{className:"main-menu__main-menu-box-inner",children:[e.jsx("a",{href:"#",className:"mobile-nav__toggler",onClick:t,style:h("/"),"aria-label":"Open menu",children:e.jsx("i",{style:{color:"#f1d551"},className:"fa fa-bars"})}),e.jsx("ul",{className:"main-menu__list",children:m.map((s,l)=>e.jsx("li",{className:"dropdown",children:e.jsx(i,{to:s.path,style:{...h(s.path),fontWeight:"bold"},children:s.name})},l))})]})})]}),e.jsx("div",{className:"main-menu__right",children:e.jsxs("div",{style:{backgroundColor:"white"},className:"main-menu__call",children:[e.jsx("div",{className:"main-menu__call-icon",children:e.jsx("span",{className:"icon-telephone"})}),e.jsxs("div",{className:"main-menu__call-content",children:[e.jsx("p",{className:"main-menu__call-sub-title",children:"Need help? Talk to an expert"}),e.jsx("h4",{className:"main-menu__call-number",children:e.jsx("a",{"aria-label":"phonenumber",href:"tel:+9328939099",children:"+91 9328939099"})})]})]})})]})})}),e.jsx("div",{className:"stricky-header stricked-menu main-menu main-header--dark",children:e.jsx("div",{className:"sticky-header__content"})})]}),r&&e.jsxs("div",{style:{position:"fixed",top:0,left:0,height:"100%",width:"300px",background:"#0b1a3a",color:"white",padding:"20px",transition:"transform 0.3s ease",zIndex:1e3},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(i,{to:"/",children:e.jsx("img",{src:o,alt:"Logo",style:{width:"80%",marginBottom:"20px"}})}),e.jsx("button",{onClick:t,style:{background:"transparent",border:"none",color:"white",fontSize:"20px",cursor:"pointer"},children:"x"})]}),e.jsx("ul",{style:{listStyle:"none",padding:0,marginTop:"20px"},children:m.map((s,l)=>e.jsx("li",{style:{margin:"15px 0",borderBottom:"1px solid #555",paddingBottom:"10px",position:"relative"},children:e.jsx(i,{to:s.path,onClick:t,style:{padding:"2px",color:c.pathname===s.path?"#f1d551":"white",textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center",paddingRight:"5px",transition:"color 0.3s ease"},children:s.name})},l))}),e.jsxs("div",{style:{marginTop:"auto",paddingTop:"10px"},children:[e.jsxs("p",{style:{color:"white",marginBottom:"10px"},children:["Phone: ",e.jsx("a",{href:"tel:+9328939099",style:{color:"white"},children:"+91 9328939099"})]}),e.jsxs("p",{style:{color:"white",marginBottom:"10px"},children:["Email: ",e.jsx("a",{href:"mailto:info@example.com",style:{color:"white"},children:"info@example.com"})]}),e.jsx("a",{href:"#",style:{marginRight:"10px"},children:e.jsx("i",{className:"fab fa-instagram",style:{color:"#f1d551"}})}),e.jsx("a",{href:"#",children:e.jsx("i",{className:"fab fa-facebook-f",style:{color:"#f1d551"}})})]})]})]})},N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAlCAYAAACzpJKIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMjliNzg0ZS01MTNmLTE3NDctOWEyOC00YTUyNDk2OTc3MzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzA5NEI1OTI1MzQyMTFFREIzMkNDM0U0QjVGRkE0NUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzA5NEI1OTE1MzQyMTFFREIzMkNDM0U0QjVGRkE0NUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTI3NTFmZjUtY2QyNS01YzRjLWFjMDYtMmIzM2VkYzVmYzY0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyOWI3ODRlLTUxM2YtMTc0Ny05YTI4LTRhNTI0OTY5NzczNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqJgrYcAAANsSURBVHjarJd9aM1RGMd/uy4ZWzSaWSJspCnvVspiZhKRLWYaMzIkSUte/qW8NMx7zUxIpHkvwoSYvMbYvKu1TVuyhbIwi8+j5+p27Xd+v93dpz6d7u93fs/3POc85znnhjVULLAcbBjMheEwGCKhGTrAV3gF5XA4KuHIe5OjMBdilyERjsE1qIcf0AViYDJMgygohTxEq4IV6w11di9x/LdtrMxOoVkLSbCG57sD+3oCfneFXOjl96zOcmE4LwWJchEUIF7sJOaFeAi3gjQEj9OMhBwEi0xiX2QKoMpqhyH4lGYoLEZwWaBYnCZCTytEhmAlTTYcQDDGX2wn9IPPLvzIFMe6mWoEj9I8hL0+MRGZrgv7y/BtApzW1L+vbQmjHuKgKcuSRr9YEcuCN3DP8MEsqNC9Jf1nw3zd4C9wNMMQ3S3NgUwRS4NLBiFZzzO6h6bCRR3YBZgC6+A8ggMMPsR/uoj1heeGjvvgBmyzGflWfb/H4EP8x3m09NTYdOoMI+Cgw7rIfhpFdJ1s3tdKPRWx31pYW7Me8A2qHcSqtV+Uzfvv0OLR6h1h0+mTpnicg1i8zkKjzftIX+p3DKiF/iZTfBdWOIjJ+zLW76fN+2jo5NHRDDQ4WgljYEdrL1mnAlkvWGXwIZlaL4VX9sFoQ8cPMFEzTjb/dngJspnzdIqTiMp0OoyF216ticU6nXaJclO3yGY9grpp0Zb9loxQrZ0KkYdrRueL2HV9ng4nDaOr0eohCdVd62iL7/A02BzpJwP26D1CRrjEZUGXDxu0dWML4Q6DavLqg426Jn10A4bEmEIp8uOUf0eMpPdbXZNQmpSySqJ6HHhSb9A1iQ1RVJJQGVqo/7sWSBV/DYdCFJVkeDlRXfW/4Phblp6s42VftCOqZJpJesG1vfA8Asnls+2MqgQKieqZScyXqlK99wcZVaHcPxFa6nRv9JlMw3Jt2yKUqvu11e88hvKUr9Ul2qWQXNOvwBaiKmuLmO9W9ER2v8vApN8DhNbbdfA4OEjUg7HEIapzNP19lSJYsWY9SqRIb7IRkqozEwYRlbFeel1Mj/zZS9H/Xh/B/6/Qaq0QExB65+TI63I9JFEy4QQ06W0qV0/vDL2IWqESs/Ssi9BrXareinMQOuXWgbeNe7ZIL0G7YJ5G6tr+CDAAoIbyLovykDQAAAAASUVORK5CYII=",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAVCAYAAAC6wOViAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMjliNzg0ZS01MTNmLTE3NDctOWEyOC00YTUyNDk2OTc3MzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REE2OTBEN0Q1MzQyMTFFRDg2NEJCNDFBNTE3OTA5MDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REE2OTBEN0M1MzQyMTFFRDg2NEJCNDFBNTE3OTA5MDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTI3NTFmZjUtY2QyNS01YzRjLWFjMDYtMmIzM2VkYzVmYzY0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyOWI3ODRlLTUxM2YtMTc0Ny05YTI4LTRhNTI0OTY5NzczNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqeBQ9AAAAITSURBVHjavJZfSFNRGMC3NSt0YhlughCCYEG4rF4SZOqTGD7USyHqTArtLXop34Le0oee9pAPAyl6S9EC9aEgrPQhkYG+JP5ZkkxqWaxMQrd+H3yDMbZ273btwO+e7dxzz+9895z73WuPLvptlPvQBh6I26wvdvgJb+GBk0MQeuUPTEOtdrKybEI5PIPLdiL9zI9JOAn9sGZmtPIzI4b6fVvqGaXagyoHh8NwE57AKtyxMkRkDZCQ28sEr1KHnXrutEp/wLi2PbJCSPUehhDe1ebjEmkiZQ0n4BQ8hDcFCgdVeCVFKCWejDSR0vgRTujiz0JDHsLHVH3gQziTft6Z5boYlEJE1gDOQ9TEhmmHaoThTH0cOcaohDn4CjUGhDLJenBlE/4r0tRyTR+jebik65QuO0b1GkLIWnMN6DC4TANwFN5BV5rwAtU2nDMiNCN9Ccu6VvJoPZU1g9vwAW5AgAlsGBnMyO19Bc1wRDOKbKoxzaMl4CdCmUgQqQ8kx7pp28k30ohG5FKhlAVta5QHXYXJlOjV5BJD7jYrlQg+wRfdtb8z9FnPkos7NbFvIT5rRvocvkNdPtkIcTfVMLxA7DEqvQfeQtIgYnljtcBupo0kefdPWnvIijcM4pUMzfsSaRn8sv2/UuzUDTMF10G2+SGTyd1IN/kEKoJbcFGkTbpxAhL6AXyqJN9iclcroOOvAAMAQWaaNQxO3AUAAAAASUVORK5CYII=",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMjliNzg0ZS01MTNmLTE3NDctOWEyOC00YTUyNDk2OTc3MzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQ3MDFEQ0I1MzQyMTFFREIyOTBGMjQ3NjRGMEUxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQ3MDFEQ0E1MzQyMTFFREIyOTBGMjQ3NjRGMEUxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTI3NTFmZjUtY2QyNS01YzRjLWFjMDYtMmIzM2VkYzVmYzY0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyOWI3ODRlLTUxM2YtMTc0Ny05YTI4LTRhNTI0OTY5NzczNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgCP65IAAALmSURBVHjatJhriIxhFMffGeuaeyEhPrjEIpfiA+We/aAoG7Ety5IPFFq3cku0VntJyqV1a5diKSJasWFFhM1tPkyurcsXEh9WrbUuv1P/0Ta9szO7M8+pX800533f/3uec85zngl8DS3xmtgw2ABToB1Uwy546zmynullXrDJ92lwBQbBWlivzxdgjOfQIiJmwWm4qs+VcFEReQ7nYbBLEaPgJByHdT4+tl7v4RB0cCXCwh6CHc34rYJxsNiViAlwJI7fayiCPBfRMBEd4VMCvpYXvVwkqYmo083j2W9ohDYuRHyGkQn4roZaqEm1iDR4BpPi+K2ApZAF9S4icQOGQ+8YPhmwGzZClavqqFFeLIzhY33iJpyDv65EfIezsFz7RbRZD+kDbV12zEa16M4xmpHtHelaFqd7R62iYd2zR5RPGA7CPujnUkQDlKoHbPLx26vtvFQRcyLC7AOUqBTH+zQq2z+GKioBVyLMKuABHLB5w2f/yIYZsN+liB+wWT1jm88bm8AcJfAeVyLMXmnEyxbRVqUOuhIKUtW2/ewyFOshH9Wsmtol+KlE7aKqamjmGRPhjxpjQyKR8NQZi1W2R2Gsj881WKT+YaIG+PhM1wtUqBc9hlyND3FFmP3SstyCck3i0XZPItpL1DzoCp1gmWaQ+zBV8+oZyFek/98vEDXyx7JTGmbM+YnP7yZiqx78FL7AbNgJx6J8hyi6fSGTkf9FoiKsiR3WJJ7rkyMRG6El6q+3vt7MPU9omTMTFRExy5MFsB3KUrCr3oV3wRZelKeOWSS6Jymi0PIl2IoLC7QkGcr4yUmIsHKtD7byYivJ+fBN5WfCurXiPtad7wSTeIuwqsUqYA7c1mCU1oKlsAQuDCa5pnUqwbk6TG+BR7BG01gsy9fQnEuJhtO81Ngb/YVQroaVoyPCSzW0kI4WAzUqjFZeVXstCF0i1qjNr0SHazteztTWn6U9xiL3UMsXilz4T4ABAB2bpQphgLWHAAAAAElFTkSuQmCC",v=()=>e.jsxs("footer",{className:"site-footer",children:[e.jsx("div",{className:"site-footer__top",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"site-footer__inner",children:e.jsx("div",{className:"site-footer__contact-info",children:e.jsxs("ul",{className:"site-footer__contact-points list-unstyled",children:[e.jsxs("li",{children:[e.jsx("div",{className:"icon",children:e.jsx("img",{src:N,alt:"footer"})}),e.jsxs("div",{className:"content",children:[e.jsx("h4",{children:" GF-001 Mayuransh elanza shyamal cross road,"}),e.jsx("p",{children:"satellite Ahemedabad"})]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"icon",children:e.jsx("img",{src:b,alt:"footer2"})}),e.jsxs("div",{className:"content",children:[e.jsx("h4",{children:"Email us :"}),e.jsx("a",{href:"mailto:contact@bulavo.com",children:"bulavoservices@gmil.com"})]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"icon",children:e.jsx("img",{src:I,alt:"footer3"})}),e.jsxs("div",{className:"content",children:[e.jsx("h4",{children:"Call us on :"}),e.jsx("a",{href:"tel:+9328939099",children:"+91 9328939099"})]})]})]})})})})}),e.jsx("div",{className:"site-footer__middle",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-xl-3 col-lg-6 col-md-6 wow fadeInUp","data-wow-delay":"100ms",children:e.jsxs("div",{className:"footer-widget__column footer-widget__about",children:[e.jsx("div",{className:"footer-widget__logo",children:e.jsx(i,{to:"/",children:e.jsx("img",{src:o,"aria-label":"bulavo",alt:"bulavo"})})}),e.jsx("p",{className:"site-footer__text",children:'"Bulavo: Committed to excellence in home appliance service. Our expert technicians deliver prompt, quality repairs, putting your satisfaction at the forefront of everything we do."'})]})}),e.jsx("div",{className:"col-xl-2 col-lg-6 col-md-6 wow fadeInUp","data-wow-delay":"200ms",children:e.jsxs("div",{className:"footer-widget__column footer-widget__useful-links",children:[e.jsx("div",{className:"footer-widget__title-box",children:e.jsx("h3",{className:"footer-widget__title",children:"Useful Links"})}),e.jsxs("ul",{className:"footer-widget__useful-links-list list-unstyled",children:[e.jsx("li",{children:e.jsx(i,{to:"/",children:"Home"})}),e.jsx("li",{children:e.jsx(i,{to:"/about",children:"About Us"})}),e.jsx("li",{children:e.jsx(i,{to:"/services",children:"Services"})}),e.jsx("li",{children:e.jsx(i,{to:"/contact",children:"Contact Us"})})]})]})}),e.jsx("div",{className:"col-xl-3 col-lg-6 col-md-6 wow fadeInUp","data-wow-delay":"300ms",children:e.jsxs("div",{className:"footer-widget__column footer-widget__services",children:[e.jsx("div",{className:"footer-widget__title-box",children:e.jsx("h3",{className:"footer-widget__title",children:"Our Services"})}),e.jsxs("ul",{className:"footer-widget__useful-links-list list-unstyled",children:[e.jsx("li",{children:e.jsx(i,{to:"/services",children:"Refregerator"})}),e.jsx("li",{children:e.jsx(i,{to:"/services",children:"Mircorwave"})}),e.jsx("li",{children:e.jsx(i,{to:"/services",children:"Washing Machine"})}),e.jsx("li",{children:e.jsx(i,{to:"/services",children:"Cookware Stove"})}),e.jsx("li",{children:e.jsx(i,{to:"/services",children:"Juicer Mixer"})})]})]})}),e.jsx("div",{className:"col-xl-4 col-lg-6 col-md-6 wow fadeInUp","data-wow-delay":"400ms",children:e.jsx("div",{className:"footer-widget__column footer-widget__newsletter",children:e.jsxs("div",{className:"site-footer__social",children:[e.jsx("a",{"aria-label":"facebook",href:"#",children:e.jsx("i",{className:"fab fa-facebook-f"})}),e.jsx("a",{"aria-label":"instagram",href:"#",children:e.jsx("i",{className:"fab fa-instagram"})})]})})})]})})}),e.jsx("div",{className:"site-footer__bottom",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-xl-12",children:e.jsx("div",{className:"site-footer__bottom-inner",children:e.jsxs("p",{className:"site-footer__bottom-text",children:["© Copyright ",e.jsx("a",{href:"#",children:"BULAVO"})," 2024 . All right reserved."]})})})})})}),e.jsx("a",{href:"#","aria-label":"btn","data-target":"html",className:"scroll-to-target scroll-to-top",children:e.jsx("i",{className:"fa fa-angle-up"})})]});export{v as F,p as H};