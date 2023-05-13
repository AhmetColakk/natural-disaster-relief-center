if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, p) => {
    const l =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[l]) return;
    let c = {};
    const n = e => a(e, l),
      r = { module: { uri: l }, exports: c, require: n };
    s[l] = Promise.all(i.map(e => r[e] || n(e))).then(e => (p(...e), c));
  };
}
define(['./workbox-d249b2c8'], function (e) {
  'use strict';
  self.addEventListener('message', e => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'icon.png', revision: '4f18617c111c3240809dbec9b7b5fe65' },
        {
          url: 'icons/apple-icon-180.png',
          revision: '54e90ad3b8ef61d09472f74b4e84f974',
        },
        {
          url: 'icons/apple-splash-1125-2436.jpg',
          revision: '7a3e31d0839bda69ea4c13f3b990041e',
        },
        {
          url: 'icons/apple-splash-1136-640.jpg',
          revision: '435655790d4c11e6c815d63d4bd70e99',
        },
        {
          url: 'icons/apple-splash-1170-2532.jpg',
          revision: 'e5fb472caeefee2997802ffc2616bb5c',
        },
        {
          url: 'icons/apple-splash-1179-2556.jpg',
          revision: 'a3baf8da53ecc49960f108a52b7e6763',
        },
        {
          url: 'icons/apple-splash-1242-2208.jpg',
          revision: '6cf74fbcde86a83e7190462811d1b443',
        },
        {
          url: 'icons/apple-splash-1242-2688.jpg',
          revision: '68b772c9aa0726799a48ff64f24bc2bc',
        },
        {
          url: 'icons/apple-splash-1284-2778.jpg',
          revision: 'af156a6ecdcc49060100deed541d7259',
        },
        {
          url: 'icons/apple-splash-1290-2796.jpg',
          revision: '535428110e6726efde359b415eeea522',
        },
        {
          url: 'icons/apple-splash-1334-750.jpg',
          revision: 'c111bf0affe3d20f4b7ba52e159981fa',
        },
        {
          url: 'icons/apple-splash-1536-2048.jpg',
          revision: '2c09a92da2bd09d89ff2afc65d3865af',
        },
        {
          url: 'icons/apple-splash-1620-2160.jpg',
          revision: 'eab5d54c366db6e0f6b61c65f6c0212e',
        },
        {
          url: 'icons/apple-splash-1668-2224.jpg',
          revision: '2c745fcf377ad37dd34305ad72f679eb',
        },
        {
          url: 'icons/apple-splash-1668-2388.jpg',
          revision: 'edb1b1e0979eb6403e2c7a4f01ed5ab4',
        },
        {
          url: 'icons/apple-splash-1792-828.jpg',
          revision: 'eec5d85486aaa2519c4a9820136b964f',
        },
        {
          url: 'icons/apple-splash-2048-1536.jpg',
          revision: '29a9932688ddbb8bf5fd9889a43d3634',
        },
        {
          url: 'icons/apple-splash-2048-2732.jpg',
          revision: 'f8e9e107fad682fe012bd0f09194fbc9',
        },
        {
          url: 'icons/apple-splash-2160-1620.jpg',
          revision: 'b15d80875112c8a5cb6a7739d1af4a3d',
        },
        {
          url: 'icons/apple-splash-2208-1242.jpg',
          revision: '30685fdf00089638fd38662a6750d1fb',
        },
        {
          url: 'icons/apple-splash-2224-1668.jpg',
          revision: '2cc9d92aa939404716472cbfcaa4156f',
        },
        {
          url: 'icons/apple-splash-2388-1668.jpg',
          revision: '45a8d0bf0bcfcb70e660c60b73f9a1f4',
        },
        {
          url: 'icons/apple-splash-2436-1125.jpg',
          revision: '8e7704240b6c7064986aa55bc8317810',
        },
        {
          url: 'icons/apple-splash-2532-1170.jpg',
          revision: '71376de0070f202b7425e17ad4f356d4',
        },
        {
          url: 'icons/apple-splash-2556-1179.jpg',
          revision: 'ee6b8d179c9198510ceada7d77d33b98',
        },
        {
          url: 'icons/apple-splash-2688-1242.jpg',
          revision: '84f0aae7b9b7c4ca8d144e9a25de323b',
        },
        {
          url: 'icons/apple-splash-2732-2048.jpg',
          revision: '2babb526a67c389947b4b78cd2b58e81',
        },
        {
          url: 'icons/apple-splash-2778-1284.jpg',
          revision: '54d84ba28c7aa65b2a9fa3305f839b97',
        },
        {
          url: 'icons/apple-splash-2796-1290.jpg',
          revision: '6f6d053feee8e97a7611039e25b0b1eb',
        },
        {
          url: 'icons/apple-splash-640-1136.jpg',
          revision: 'a77aafeb4aece04d1dfee1b46b657906',
        },
        {
          url: 'icons/apple-splash-750-1334.jpg',
          revision: '1830466b43f499e387a9353b1fe1fc89',
        },
        {
          url: 'icons/apple-splash-828-1792.jpg',
          revision: '5cd671ede46c5313a651355aedde958e',
        },
        {
          url: 'icons/manifest-icon-192.maskable.png',
          revision: '1bff8489805bb443bb9530c4afb3e598',
        },
        {
          url: 'icons/manifest-icon-512.maskable.png',
          revision: '242b9590b87bfad51d8cf634e92f03e9',
        },
        { url: 'manifest.json', revision: '860f558b952528a92521fd0d77b7bf20' },
        {
          url: 'serviceWorker_1.js',
          revision: 'a213c22e005ac2528e607b56f049a974',
        },
        { url: 'vite.svg', revision: '8e3a10e157f75ada21ab742c022d5430' },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    );
});
//# sourceMappingURL=sw.js.map
