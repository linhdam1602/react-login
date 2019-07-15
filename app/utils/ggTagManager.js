export default function injectGGScript(gtmId) {
  const ggScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${gtmId}')`;

  const script = document.createElement('script');
  script.innerHTML = ggScript;
  document.getElementsByTagName('head')[0].appendChild(script);

  const ggNoScript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

  const noScript = document.createElement('noscript');
  noScript.innerHTML = ggNoScript;
  document.getElementsByTagName('body')[0].appendChild(noScript);
}
