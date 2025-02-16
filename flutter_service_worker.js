'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5378fe113dba09b1dba20e407f486edb",
".git/config": "f9c6b8036690af2f45ce5638c1691ccb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a4d9150b79571f8a62cd0c77e788a35e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc0c4d9002b49eeee36e0c71af5576c4",
".git/logs/refs/heads/main": "361e8ab94b0fe7def63fea635ae9832a",
".git/logs/refs/remotes/origin/main": "abf9f8fd5f2d15254e565aa8b16f7574",
".git/objects/01/ad4cd40331daa8a18a81233974a1d05b648642": "a1aedd591952552e64b9b8cc12ffaa42",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/9dba9d3aeb66bbced6929cd4c3b6ba676844e1": "3ae6da3c0251f5b1d65f1513503af8a3",
".git/objects/12/2e6ac62608e48dfa716c563c6a62ac890efab1": "7d9031f4fee8d1d5bd148518e456009e",
".git/objects/17/c6e5f1c28210b7049d2005901531f44189b95f": "7d147d0b38f1f58798beeaaa6df17073",
".git/objects/1a/072330a807ba9f247b6b51e234d8ac7c7c9ef8": "8936d95ee2ff16f68a5b241773feb651",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/94e82e3c0202ceee88b1dbaf62e738488f410b": "d9948203d5457f7eb27e6aeb07a8b0ea",
".git/objects/22/74c1eaf7c5092063170c62e37f80cb9783cd5a": "fbfb7e4248f3a63301a0b93bf330258c",
".git/objects/23/6e56dc74d0aa15acdeac722fc74b9ae17dae19": "399b9857e0c2f9ae70300d6fcb909920",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/8bf1007e002834fa633129cb4f5043c38c5e0c": "0fc20e73146912d451669e7f7cfe0c46",
".git/objects/2b/b9a7d14ff36f70ccbea363addd538d4120f086": "fdc6b4a3dea52b5e21188f2d664d8c67",
".git/objects/2e/ba894a6aa394807f552e706d967b103084d9dd": "7682cb33b2cd4e4be3a591f46f7bc75e",
".git/objects/2f/4c495ff9b91cf758a1a317bf14b7aa97f4a968": "209e3165912d64511adaf97001a71767",
".git/objects/36/1e818a0f3a99b18a8e294a8d40fc26fe85b8c8": "71bc344a1543479ce22f4500d39b0524",
".git/objects/37/b482e865faf791a40f6afaceaa2c33fa395855": "988b3cb6c81cc620ff5f0ea1a82d8e4f",
".git/objects/49/4292489391cfc86082318f8517b12701450875": "2003590b25cc0b5d0aa62bc586de82dc",
".git/objects/4b/1c58e7702b69fdb612f495d85d13060ed93f98": "4842bb96575bdadc554b2cf235eebc0e",
".git/objects/51/90536e7a0177d604aaae65844699005fd7913e": "e3cbc264b4f42e05d09383bbc1dcdce3",
".git/objects/5e/da9ec96e91ba8e4a418e53af4483766e245d6d": "339f0cfcef1c87a0ca364f5c6a9052ca",
".git/objects/5f/02021ad52a931564e252fa6b538ff0516bb39e": "a949412b39eae6926591478eaa710113",
".git/objects/60/393c712fd717d8063090706c609b59ace3b8ab": "3eed75d1f14ceccd025e83ea86568119",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/4217a5db54aa2ad43b4ef2f26eaa36ba59e741": "63208c8151729f60dc8abae8753e04a8",
".git/objects/72/920cf4c258cf1a7dee0c86ce52bdddc9a533d3": "aca2632f02cc51dedad8ace664705160",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/77/a37bb3b1047ad916decf63362ed9e4a02f6de3": "9e9712f9dcd8890335cb9d91727aac55",
".git/objects/81/c96d2eb9db3065c8de604720861d94a23cd20b": "71d1bf660bdad4f3b75c13ab9b886f44",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/79e0e925ebac3201e59c86f2d8a5dfaf4d7e56": "3dd34dfcfa7a771c30086a1ffa2f2acc",
".git/objects/88/7fa33e23f31c7fc084128cc8194174332c28fc": "fc5f3f5ab68e2b664395f15fdea2fced",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d1dd041c8b72df7b3d3ccc5e7d955ba45fce10": "eb93a6c6b5b712522116123d116ecf81",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/294d7e3815e4cb3d096128f97ecaf5c70228b7": "679e3e7448bd98981881aef0b0a6c9d2",
".git/objects/93/f5a72c60c10fc030ed4b310bce1a01a3c2d9fb": "3e467085f40e32a35aa18cf82808ebf9",
".git/objects/94/90b68eeacf67d4e6abefe818d2259168429c61": "a8f366c562712686a7f601c3631b57af",
".git/objects/95/6eca3c53e8e2625f6802e49ac6993cd765ce51": "754f7583c715426d72621ebfe20c87c1",
".git/objects/97/0d6e4f3f62a253f3dd67e05748c5b8063ead7a": "f60494327630aacd50304de3a7cb0c3d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/d1e771c56298ff493ce4bc04cc41fe3766ed9f": "b49a12b7feab45e032f638a06a952d30",
".git/objects/98/c1c3d5b6f7b5452964b591fc4a0411ac2b5722": "28a456272ca9936adfc436942634b0ea",
".git/objects/9e/f379d97bb38b794b92e3d3dd27eb15801f8469": "33f0de4087a22d0a349c0a1b6de4a5d9",
".git/objects/a7/3d00f47d358cd0c2813a8f6000df6363e872ff": "f59ccc3d5f1ec17b9cf4a4765b02fdd2",
".git/objects/a7/90b0bb4652c896e596f3f000bda798e67e54ab": "e62d083334f83784c6bafabf882ed2ac",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/24111e1510957cef994d595a2312dc7fb9981c": "f5b0712fea2e8cb32887e8fa49075ed3",
".git/objects/b8/c87845140ce0079d1bb0ac93fb8e8aae83681a": "81c572be330cf315804422b51d72ad90",
".git/objects/b8/d3813506f3b9350d723448b52328b0d66b9e70": "1082e5d358e6096bfaf10b0c3a93adcc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/c06a43cf3003c83b23cf71146d5c1ba9575ef8": "77976f71aa9a0fbb23004250e55be4f5",
".git/objects/c3/a20c5c1ba782ce7cc94113f652295576fc2993": "69a574a39eb7694d2ac35f94a7c43c46",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/84e95748bd3a34814884b4ac2897a110154d26": "eed91c62c41db0839445ac25844113b4",
".git/objects/cb/cbf2bb4954316da8a783a2d47484d8931cf187": "b9583cc0cfa606d0aaa80dbc375e1bb1",
".git/objects/cc/0afb2494e61cd173c86998e9e502dbddb53403": "5e50dfa0735b03b927a4a92ddacea615",
".git/objects/cf/cdec03198cb415365f5b182fa75007c53e83d2": "2a294b293876b1253ec97e3a9550d7e4",
".git/objects/d0/172bd37926bf70e2f755691e428b6d6c86a67f": "e237aa50556c53465cc35e02ffe6f06f",
".git/objects/d3/231856f650e4442623ec473dfc8d5eedf90bf4": "5d73c62981e75a2c8eaddb713805c177",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/ec20cb6e3c815354ba9f34092960665f9b5d5f": "4f68832945b7ec942858805360d00441",
".git/objects/dd/3971c0632c2597e7fc9f26cd1050ede5241f20": "c0b6eed4a9196ed21d4bbd5157e98787",
".git/objects/dd/f7042e951d6f9a66426c92310bf05d72eb8a7c": "d22d18c518b9def0d89de76bd38d4b88",
".git/objects/df/fe5f9b61aa6e7aed553d4c4085493c3fdb4d36": "65d3277ab920a0540e49a9b69641fa5a",
".git/objects/e3/5064fc68cff414a87d3ae853386b8e54d4face": "ffb96695290a1335fe3d068fb686e223",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f1/81ae889533cfd80dce1566304146cd19bdde1b": "881c3574f692f93dd7c6d031510d69a6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/84b989cd7426854de26d79884ca59e5c1063b5": "ac607237c5e660d3385b48d54fc748dc",
".git/refs/heads/main": "b092a3a2747d3c28397ef56084ebb361",
".git/refs/remotes/origin/main": "b092a3a2747d3c28397ef56084ebb361",
"assets/AssetManifest.bin": "019e9588f7715801782b2e21d72d532f",
"assets/AssetManifest.bin.json": "219ae920b7e8d072cc1660ab2798447f",
"assets/AssetManifest.json": "e7fe5049e28b96b8a66d9e3faca9f1ee",
"assets/assets/admin_icons/add_e.svg": "c39ea7675f5bce09d8636ad786eecac2",
"assets/assets/admin_icons/add_s.svg": "cb286d2b8a36b4f2d618b4bcb656375e",
"assets/assets/admin_icons/arrow.svg": "a51a1968e6404dfd83fdd935218e7b88",
"assets/assets/admin_icons/checked.svg": "775ac663f86b2b9597ef35f8d5ee8776",
"assets/assets/admin_icons/close.svg": "583f72c12ccd10467e35f17629218630",
"assets/assets/admin_icons/delete.svg": "e0b8787480ae22bad22ca715ebe23bb7",
"assets/assets/admin_icons/delete1.svg": "91faa5afe195963d04021a3d3f366c7b",
"assets/assets/admin_icons/download.svg": "50b2b834df81657bd9d0bd313ba0dcc0",
"assets/assets/admin_icons/down_side.svg": "35315eb4d1cb3a1b9fc1d44093ab4995",
"assets/assets/admin_icons/earn.svg": "e30a3895abaae41be2ae6ab5033054ef",
"assets/assets/admin_icons/edit.svg": "4ef30dfdcda786b9ba7349222a3ab1da",
"assets/assets/admin_icons/filter.svg": "3fa4aaaec808b84fc2b98f7cb048ffea",
"assets/assets/admin_icons/gallery.svg": "2df546fdd5b5671f36cb4c5a3fb6da19",
"assets/assets/admin_icons/hand.png": "6b76d2034e1330413fbadb8f75bb804b",
"assets/assets/admin_icons/next.svg": "6c1786a424372765b1d0207421a15d11",
"assets/assets/admin_icons/previous.svg": "604fddb5ee0056456e453d893bfadc1b",
"assets/assets/admin_icons/profile.png": "e5bcfb95075045c80bcd76025cda4ae0",
"assets/assets/admin_icons/remove.svg": "225a8bf7a1afd60ac1da80a1d1c6b2e6",
"assets/assets/admin_icons/search.svg": "02e95bfb8d9b1eb9458509151f32b0df",
"assets/assets/admin_icons/un_checked.svg": "54cec953da17ece287a299bd7a16925a",
"assets/assets/admin_icons/upload.svg": "1bc486b833a1d4f307c36e3844807f4a",
"assets/assets/admin_icons/weekly.svg": "7e9520809548636b0fa6f3715abee354",
"assets/FontManifest.json": "7dcb4af6540eab2bd6999ece847395bc",
"assets/fonts/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"assets/fonts/Manrope-Light.ttf": "9e353f65739cc41a37bed272850cf92e",
"assets/fonts/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/fonts/Manrope-Regular.ttf": "f8105661cf5923464f0db8290746d2f9",
"assets/fonts/MaterialIcons-Regular.otf": "3524bf0148c0be432b6ad37a8ec78baf",
"assets/NOTICES": "df42a70a4d94ea845b19e6111cdd93e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "0db135ca4f6b9ec68fc5f5a970b74086",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "db67f48208ff9930c3b3b5d16118fa7e",
"/": "db67f48208ff9930c3b3b5d16118fa7e",
"main.dart.js": "9246fe2b3e1682bb34d545fc309304ab",
"manifest.json": "f68d08f7ffe353b7d9ed59bbdf91903b",
"version.json": "e5365fe9d55957ed46a42b333eae9fce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
