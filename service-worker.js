if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,i,a)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}})).then(e=>{const s=a(...e);return c.default||(c.default=s),c})}))}}define("./service-worker.js",["./workbox-8a532145"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"67ac9c499e1fe8680d1a66429ffea292"},{url:"./static/css/14.86d198b5.chunk.css",revision:"b8989a530125db28b4fdaac059bad664"},{url:"./static/css/main.b731bd03.chunk.css",revision:"3ae271af66cceec1810d648ab6993189"},{url:"./static/css/vendors-code-preview.01734955.chunk.css",revision:"e83e8fa50dcede04bf12b61442a601e0"},{url:"./static/css/vendors-markdown-preview.83452e77.chunk.css",revision:"134ebb28deb4e7deb8396feebbe5fa16"},{url:"./static/css/vendors-uiwjs.613b6e64.chunk.css",revision:"587002ec1d11aab5d7b3c9adf4fb3a4a"},{url:"./static/css/vendors~main.306f0546.chunk.css",revision:"c0504b75a7517d870857e0522d448b77"},{url:"./static/js/14.9bc6efe8.chunk.js",revision:"b459a6c41b481c6d055f7da638fbce36"},{url:"./static/js/14.9bc6efe8.chunk.js.LICENSE.txt",revision:"ca2d1517faad72dbae8e5307ae98bdc4"},{url:"./static/js/19.c3a03596.chunk.js",revision:"dcda8f6bc4e11ac97d9c6ba77db0923e"},{url:"./static/js/20.c9731e0a.chunk.js",revision:"d88656878b6c64847cd26efb7d252e1f"},{url:"./static/js/21.d929bd27.chunk.js",revision:"b022f890dff89c193c1e1369e9013c5c"},{url:"./static/js/22.38987830.chunk.js",revision:"c65e899db0c4789a70ee378d42b612c3"},{url:"./static/js/23.19b67485.chunk.js",revision:"852b71bd12e919d58fe0d66bb8508c39"},{url:"./static/js/24.76f3cdcd.chunk.js",revision:"9a4ccc8d829aa79dde8c088fe616dffd"},{url:"./static/js/25.e075fc3d.chunk.js",revision:"b34550a2c6244665965c4497162108d1"},{url:"./static/js/26.c2c63d8a.chunk.js",revision:"4d2f5dbc5f95d985a97f7c48ab673890"},{url:"./static/js/27.0aeec7bd.chunk.js",revision:"f922a0c1804453e9303aae78c94001e2"},{url:"./static/js/28.62e00d51.chunk.js",revision:"2dd678e27ef85125f70f9e037b1826dc"},{url:"./static/js/29.03435081.chunk.js",revision:"348e371c4edb403f3d34e3588f9dfd4c"},{url:"./static/js/30.c20c04ba.chunk.js",revision:"9f885237d7804466f919f8391dbf0cb6"},{url:"./static/js/31.d3a7de3f.chunk.js",revision:"a18e377d03915a2a2e71c55ac292a54c"},{url:"./static/js/32.b0419ca7.chunk.js",revision:"248c77cca5f99f228ae28ddf9a91b60a"},{url:"./static/js/main.092c3a08.chunk.js",revision:"435158bf37ea6c309984a9c0de7f68ff"},{url:"./static/js/runtime-main.5c4e1e5c.js",revision:"e2f57623ef5d96052b571c62174c0d29"},{url:"./static/js/vendors-code-preview.8e3725eb.chunk.js",revision:"7c30a130a3bea9068c270f77fe0b7448"},{url:"./static/js/vendors-helper.cd3b6a75.chunk.js",revision:"60fde19088fce7d828fdacb66c2550d5"},{url:"./static/js/vendors-lodash.ba9a2d89.chunk.js",revision:"29428ff652c41818dbf9f5b87cadf96a"},{url:"./static/js/vendors-markdown-preview.c57d99fe.chunk.js",revision:"42ae9ff0715646de68cb03024dcdebb0"},{url:"./static/js/vendors-prismjs.6801949a.chunk.js",revision:"09fbe31c9f0b5a8c625702913586923c"},{url:"./static/js/vendors-prismjs.6801949a.chunk.js.LICENSE.txt",revision:"0e68a261e4846a1e390826c53c553105"},{url:"./static/js/vendors-react.ebd42ab1.chunk.js",revision:"63005be3a535a4dc0096eac700fca329"},{url:"./static/js/vendors-react.ebd42ab1.chunk.js.LICENSE.txt",revision:"b8bfa227b2637d417a788255e8f5194d"},{url:"./static/js/vendors-remark.c6386520.chunk.js",revision:"43c841f298961959fca9a77798c99d72"},{url:"./static/js/vendors-runtime-core.81dcad5d.chunk.js",revision:"e6d07ed508d36e2e4efe675aa8611089"},{url:"./static/js/vendors-runtime-generator.79fbffe3.chunk.js",revision:"be67b9073849ad666ce26d4d922d4e21"},{url:"./static/js/vendors-runtime-helpers.a0a2803f.chunk.js",revision:"093b0075cdedee2dd792f1681d694b98"},{url:"./static/js/vendors-runtime-template.a6137936.chunk.js",revision:"8214df8a349d92bd0eb4389d22f2c6a5"},{url:"./static/js/vendors-runtime-traverse.f69bc051.chunk.js",revision:"5e74f1c28538583f653f0437605b85ba"},{url:"./static/js/vendors-runtime-types.23d6ad4a.chunk.js",revision:"0e3699a192b76e9de4dd45473495c586"},{url:"./static/js/vendors-standalone.0a89e360.chunk.js",revision:"916b8df209e5fc667942b45153ce56cf"},{url:"./static/js/vendors-uiwjs.306b47a2.chunk.js",revision:"b78fe4054633215036b730137f4aed4b"},{url:"./static/js/vendors-uiwjs.306b47a2.chunk.js.LICENSE.txt",revision:"c16a7e8412480a23a3caacd8ea7b8b69"},{url:"./static/js/vendors~main.f1d020a0.chunk.js",revision:"e01ec3ec8a8d5728196430d9a9ffac5f"},{url:"./static/js/vendors~main.f1d020a0.chunk.js.LICENSE.txt",revision:"31c9f757710e17ffc2a464c1fbf28c5d"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("//index.html"),{denylist:[/^\/_/,/\/[^\/?]+\.[^\/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
