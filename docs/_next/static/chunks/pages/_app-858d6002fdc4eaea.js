(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{92:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7897)}])},5105:(e,t,n)=>{e.exports=n(6758)},5454:()=>{},6689:(e,t,n)=>{"use strict";n.d(t,{ah:()=>c,aO:()=>d,Jz:()=>f});var a=n(7876),r=n(5105),s=n.n(r);let i=/^(G-[A-Z0-9]+|UA-\d+-\d+|GT-[A-Z0-9]+|AW-[A-Z0-9]+)$/;function c({measurementId:e,strategy:t="afterInteractive"}){return e&&i.test(e)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s(),{src:`https://www.googletagmanager.com/gtag/js?id=${e}`,strategy:t}),(0,a.jsx)(s(),{id:"google-analytics",strategy:t,children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${e}');
        `})]}):null}let o=/^\d{15,16}$/;function d({pixelId:e,strategy:t="afterInteractive",disablePageView:n=!1}){return e&&o.test(e)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s(),{id:"meta-pixel-init",strategy:t,children:`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${e}');
          ${n?"":"fbq('track', 'PageView');"}
        `}),!n&&(0,a.jsx)("noscript",{children:(0,a.jsx)("img",{height:"1",width:"1",style:{display:"none"},src:`https://www.facebook.com/tr?id=${e}&ev=PageView&noscript=1`,alt:""})})]}):null}function f(e,t){"undefined"!=typeof window&&"function"==typeof window.fbq&&window.fbq("track",e,t)}(0,n(4232).createContext)(void 0)},7897:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(7876),r=n(4232),s=n(6689);function i(e){let{Component:t,pageProps:n}=e;return(0,r.useEffect)(()=>{let e=e=>{var t,n;(null==(t=(n=e.target).closest)?void 0:t.call(n,'a[href*="calendly.com"]'))&&(0,s.Jz)("Lead")};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[]),(0,a.jsx)(t,{...n})}n(5454)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(92),t(6296))),_N_E=e.O()}]);