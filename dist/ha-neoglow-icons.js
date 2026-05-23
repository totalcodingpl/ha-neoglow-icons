window.B31_DATA = { icons: {}, styles: {}, cssText: "" };

// Funkcja wstrzykująca animacje z pliku CSS do Shadow DOM (wymagane przez Home Assistant)
const injectAnimationsIntoRoot = (rootNode) => {
  if (!rootNode || !rootNode.querySelector || !window.B31_DATA.cssText) return;
  if (rootNode instanceof ShadowRoot && !rootNode.getElementById('b31-local-anims')) {
    const style = document.createElement('style');
    style.id = 'b31-local-anims';
    style.innerHTML = window.B31_DATA.cssText;
    rootNode.appendChild(style);
  }
};

// Dynamiczne wykrywanie ścieżki wczytania wtyczki (Gringo Path Resolver Hack)
let basePath = "/local/";
if (document.currentScript && document.currentScript.src) {
  const src = document.currentScript.src;
  const url = new URL(src);
  const path = url.pathname;
  basePath = path.substring(0, path.lastIndexOf('/') + 1);
}

// Pobieranie konfiguracji JSON oraz pliku CSS
async function fetchB31Config() {
  try {
    const timestamp = new Date().getTime();
    
    // 1. Pobierz JSON z ikonami i stylami z dynamicznej ścieżki
    const response = await fetch(`${basePath}ha-neoglow-icons.json?v=${timestamp}`);
    if (!response.ok) throw new Error("Brak pliku JSON");
    window.B31_DATA = await response.json();
    
    // 2. Pobierz CSS z animacjami z dynamicznej ścieżki
    const cssResponse = await fetch(`${basePath}ha-neoglow-icons.css?v=${timestamp}`);
    if (cssResponse.ok) {
      window.B31_DATA.cssText = await cssResponse.text();
      
      // Wstrzyknij style do głównego dokumentu
      let globalStyle = document.getElementById('b31-global-styles');
      if (!globalStyle) {
        globalStyle = document.createElement('style');
        globalStyle.id = 'b31-global-styles';
        document.head.appendChild(globalStyle);
      }
      globalStyle.innerHTML = window.B31_DATA.cssText;
    }

    const app = document.querySelector("home-assistant");
    if (app) window.forceB31Styles(app);
  } catch (e) {
    console.error("B31 Load Error:", e);
  }
}

// Funkcje rejestrujące ikony w systemie Home Assistant
async function getIcon(name) {
  if (!window.B31_DATA.icons[name]) await fetchB31Config();
  const iconContent = window.B31_DATA.icons[name];
  if (!iconContent) return null;

  return iconContent.trim().startsWith("<svg") 
    ? { path: "M0 0h24v24H0z", viewBox: "0 0 24 24" } 
    : { path: iconContent, viewBox: "0 0 24 24" };
}

async function getIconList() {
  if (Object.keys(window.B31_DATA.icons).length === 0) await fetchB31Config();
  return Object.keys(window.B31_DATA.icons).map((name) => ({ name: name }));
}

// Aktywacja renderowania i listy ikon (Autosugestie w HA)
window.customIconsets = window.customIconsets || {};
window.customIconsets["b31"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["b31"] = { getIcon, getIconList };

// Główna logika stylowania ikon
window.forceB31Styles = function(root = document.body) {
  if (!root) return;
  if (root.shadowRoot) {
    injectAnimationsIntoRoot(root.shadowRoot);
    window.forceB31Styles(root.shadowRoot);
  }
  const children = root.children || root.childNodes;
  for (let i = 0; i < children.length; i++) {
    window.forceB31Styles(children[i]);
  }

  const icons = root.querySelectorAll ? root.querySelectorAll('ha-icon, ha-svg-icon') : [];
  icons.forEach(el => {
    const iconAttr = el.getAttribute('icon') || el.icon;
    if (iconAttr && iconAttr.startsWith('b31:')) {
      const name = iconAttr.split(':')[1];
      const iconData = window.B31_DATA.icons[name];
      
      // Ustalenie stylu: z JSON lub domyślnie ORIGINAL
      let styleConf = window.B31_DATA.styles?.[name] || { type: "ORIGINAL", anim: "none" };

      if (el.dataset.b31LastStyle !== JSON.stringify(styleConf)) el.dataset.b31Styled = "";

      if (iconData && !el.dataset.b31Styled) {
        if (typeof styleConf === 'string') {
          styleConf = { type: styleConf === "ORIGINAL" ? "ORIGINAL" : "GRADIENT", value: styleConf };
        }

        let css = "";
        let animRule = "";
        let bgSize = "contain";
        let duration = styleConf.speed || "2s"; 

        // Dynamiczne przypisanie animacji z zewnętrznego CSS
        if (styleConf.anim && styleConf.anim !== "none") {
          animRule = `animation: ${styleConf.anim} ${duration} linear infinite; transform-origin: center center;`;
          if (styleConf.anim.includes("flow")) bgSize = "200% 100%";
        }

        const commonStyles = `display: inline-block !important; color: transparent !important; ${animRule}`;

        if (styleConf.type === "ORIGINAL") {
          // Jeśli to sama ścieżka, opakuj w ramy SVG
          let finalIcon = iconData.trim().startsWith("<svg") ? iconData : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="${iconData}"/></svg>`;
          const encodedIcon = btoa(unescape(encodeURIComponent(finalIcon)));
          css = `background: url('data:image/svg+xml;base64,${encodedIcon}') no-repeat center !important; background-size: contain !important; fill: transparent !important; ${commonStyles}`;
          
          const innerSvg = el.shadowRoot ? el.shadowRoot.querySelector('svg, path') : el.querySelector('svg, path');
          if (innerSvg) innerSvg.style.display = 'none';
        } else {
          // Typ GRADIENT / Custom CSS
          let pathD = iconData.includes(' d="') ? iconData.split(' d="')[1].split('"')[0] : (iconData.includes(" d='") ? iconData.split(" d='")[1].split("'")[0] : iconData);
          const maskSvg = btoa(unescape(encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${pathD}"/></svg>`)));
          const maskUrl = `url('data:image/svg+xml;base64,${maskSvg}')`;

          css = `background-image: ${styleConf.value} !important; background-size: ${bgSize} !important; background-repeat: no-repeat !important; background-position: 0% 50% !important; -webkit-mask: ${maskUrl} no-repeat center !important; mask: ${maskUrl} no-repeat center !important; -webkit-mask-size: contain !important; mask-size: contain !important; ${commonStyles}`;
        }

        el.style.cssText = css;
        el.dataset.b31Styled = "true";
        el.dataset.b31LastStyle = JSON.stringify(styleConf);
      }
    }
  });
};

// Start skryptu
fetchB31Config();
setInterval(() => {
  const app = document.querySelector("home-assistant");
  if (app) window.forceB31Styles(app);
}, 100);
