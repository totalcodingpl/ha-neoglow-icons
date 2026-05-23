# NeoGlow Icons - Dokumentacja Projektu 🚀

Witaj Adrian w oficjalnej, długoterminowej pamięci projektu **NeoGlow Icons** (`ha-neoglow-icons`)! Poniżej znajduje się kompletne podsumowanie architektury, konfiguracji gita oraz integracji z HACS.

---

## 💎 Cel Projektu

Stworzenie **premium, ultra-szybkiego zestawu ponad 100+ animowanych i gradientowych ikon** do Home Assistanta, z możliwością łatwej instalacji przez sklep **HACS** (jako wtyczka Frontend Lovelace), oraz udostępnienie interaktywnego, błyskawicznego explorera na Twoim serwerze pod domeną `https://total.smallhost.pl/`.

---

## 📂 Architektura Katalogów (Gringo Hack Git Structure)

Projekt jest ułożony tak, by w jednym katalogu VS Code bezkonfliktowo współistniał kod HACS (na GitHub) oraz kod explorera (na FTP):

```text
/
├── dist/                     # [HACS ONLY] Katalog wtyczki Lovelace
│   ├── ha-neoglow-icons.js   # Silnik renderujący z Dynamic Path Resolverem
│   ├── ha-neoglow-icons.css  # Spakowane animacje keyframe CSS
│   └── ha-neoglow-icons.json # Kompletna baza ikon (SVG + style)
├── hacs.json                 # [HACS ONLY] Manifest dla HACS Frontend
├── README.md                 # [HACS ONLY] Efektowna dokumentacja i instrukcja na GitHub
├── .gitignore                # Zaawansowane reguły filtrujące Git
│
│   # --- Pliki lokalne / FTP Explorer (ignorowane przez Git) ---
├── index.html                # Interaktywny, błyskawiczny explorer ikon
├── b31-icons-data.js         # Baza ikon na potrzeby explorera
├── b31-loader.js             # Silnik ładowania explorera
├── config.js                 # Konfiguracja explorera
└── style.css                 # Stylowanie explorera
```

### Zaawansowany `.gitignore` (Filtrowanie Git)
W pliku `.gitignore` zablokowaliśmy automatycznie śledzenie wszystkich plików na poziomie głównym (explorer itp.), tworząc wyjątki wyłącznie dla struktury HACS:
```text
/*
!/hacs/
!/dist/
!hacs.json
!README.md
!.gitignore
!.antigravityrules
!.clinerules
!.gringo-tools/
```

---

## 🛠️ Wdrożone "Gringo Hacks"

### 1. Dynamiczny Resolver Ścieżek
W pliku `dist/ha-neoglow-icons.js` zastosowaliśmy inteligentny resolver:
```javascript
let basePath = "/local/";
if (document.currentScript && document.currentScript.src) {
  const src = document.currentScript.src;
  const url = new URL(src);
  const path = url.pathname;
  basePath = path.substring(0, path.lastIndexOf('/') + 1);
}
```
Sprawia on, że wtyczka wczytuje swoje pliki towarzyszące `.json` i `.css` z folderu, z którego sama została załadowana (np. `/hacsfiles/ha-neoglow-icons/` pod HACS, a `/local/dist/` przy instalacji manualnej), całkowicie eliminując błędy 404!

### 2. Bezpieczne Kodowanie Binarnych SVG
Ikony zawierające niestandardowe kody XML SVG są kodowane w standardzie Base64 z obsługą kodowania UTF-8:
```javascript
btoa(unescape(encodeURIComponent(finalIcon)))
```
Chroni to silnik przed zawieszaniem i błędami renderu w przypadku wystąpienia znaków specjalnych lub cudzysłowów wewnątrz plików SVG.

---

## ⚙️ Home Assistant MCP Adapter (`ha-adapter`)

Twój serwer MCP do Home Assistanta znajduje się w:
`C:\Users\user\VSCode\my_home\mcp-ha-adapter`

Jest automatycznie ładowany przez Antigravity IDE przy starcie. Posiada następujące narzędzia AI:
* `get_states` – pobieranie stanu wszystkich encji w smart home.
* `get_single_state` – pobranie stanu i atrybutów konkretnego `entity_id`.
* `call_service` – pełna kontrola (włączanie światła, wyzwalanie skryptów, powiadomienia TTS/toast).
* `write_config` – bezpośrednia edycja plików konfiguracyjnych YAML.

---

## 🚀 Jak Wrzucisz to do HACS po raz Pierwszy

1. Wypchnij repozytorium na swój profil GitHub (np. pod nazwą `ha-neoglow-icons`). Repozytorium musi być **Publiczne**.
2. W Home Assistant przejdź do: **HACS -> Frontend**.
3. Kliknij **Trzy kropki** w prawym górnym rogu i wybierz **Custom repositories** (Niestandardowe repozytoria).
4. Wklej URL swojego repozytorium (np. `https://github.com/TwojGitHub/ha-neoglow-icons`).
5. Jako kategorię wybierz **Lovelace** (lub Dashboard).
6. Kliknij **Add** (Dodaj), a następnie pobierz i ciesz się ikonami w Home Assistant!
