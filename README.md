# 🌟 NeoGlow Icons - Animowany & Gradientowy Zestaw Ikon dla Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/hacs/integration)
![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg?style=for-the-badge)
![Category](https://img.shields.io/badge/Category-Lovelace-purple.svg?style=for-the-badge)

Wynieś swój interfejs Home Assistant na zupełnie nowy poziom premium z **NeoGlow Icons**! Zestaw oferuje ponad 100+ ręcznie dopracowanych, nowoczesnych ikon wspierających dynamiczne, animacje CSS oraz wielobarwne gradienty. 

Wszystkie ikony zostały zoptymalizowane pod kątem obciążenia CPU (inteligentny system cache'owania shadow DOM) i doskonale prezentują się zarówno na ciemnych, jak i jasnych motywach dashboardów Lovelace.

---

## 🚀 Szybka Instalacja (HACS)

### Krok 1: Dodanie niestandardowego repozytorium do HACS
1. W Home Assistant przejdź do sekcji **HACS** -> **Frontend**.
2. Kliknij **Trzy kropki** w prawym górnym rogu ekranu i wybierz **Niestandardowe repozytoria** (*Custom repositories*).
3. W polu URL wklej adres swojego repozytorium na GitHub:
   ```text
   https://github.com/TWOJ_GITHUB/ha-neoglow-icons
   ```
4. Jako kategorię wybierz **Lovelace** (lub *Dashboard*).
5. Kliknij **Dodaj** (*Add*).

### Krok 2: Pobranie wtyczki
1. Kliknij na nowo dodaną wtyczkę **NeoGlow Icons** na liście w HACS.
2. Kliknij **Pobierz** (*Download*) w prawym dolnym rogu.
3. HACS automatycznie doda wtyczkę jako zasób Lovelace.

### Krok 3: Wymuszenie odświeżenia przeglądarki
Wykonaj twarde przeładowanie strony w przeglądarce (`Ctrl` + `F5` na Windows / `Cmd` + `Shift` + `R` na macOS), aby silnik ikon załadował się poprawnie.

---

## 💎 Showcase Flagowych Ikon (Przykłady)

Wtyczka rejestruje w systemie zestaw pod prefixem `neoglow:`. Poniżej znajduje się lista 15 najpopularniejszych, wysoce interaktywnych ikon gotowych do użycia:

| Ikona | ID do użycia | Opis | Domyślna Animacja |
| :--- | :--- | :--- | :--- |
| ⚡ | `neoglow:thunder_blink_4kR2` | Klasyczny piorun z efektem delikatnego migania | `b31-blink` (delikatne miganie) |
| 🌀 | `neoglow:fan_2vPq` | Dynamiczny, 4-łopatkowy wentylator smart home | `b31-spin` (płynny obrót o 360°) |
| 🔋 | `neoglow:battery_M5pT` | Wskaźnik baterii z animowanym, płynącym prądem | `b31-flow` (przepływ w poziomie) |
| ⚡🔋 | `neoglow:battery_charging_J8qL` | Bateria w stanie szybkiego ładowania sieciowego | `b31-flash` (impulsywne błyskanie) |
| ⚙️⚡ | `neoglow:gear_bolt_X9rB` | Obracająca się zębatka z pulsującym w środku piorunem | Zintegrowana (obrót + pulsowanie) |
| 💡 | `neoglow:acx_light_on_p9w4` | Żarówka z ciepłą, dynamiczną poświatą neonową | `b31-pulse` (delikatne pulsowanie) |
| 🌈 | `neoglow:acx_light_rgb_z1p3` | Wielobarwna żarówka z płynną zmianą pełnej gamy barw | Dynamiczna (pętla zmiany kolorów RGB) |
| 🏃‍♂️ | `neoglow:acx_motion_active_a2x9` | Aktywny czujnik ruchu z pulsującym radarem | `b31-pulse` + dynamiczne skalowanie |
| 📡 | `neoglow:sensor_wifi_Y7sT` | Ikona Wi-Fi z rozchodzącymi się falami sygnału | Animacja sekwencyjnego wygaszania fal |
| 🌡️ | `neoglow:sensor_temperature_I4bN` | Termometr z dynamicznie pulsującym słupkiem cieczy | Animacja skurczu/rozkurczu poziomu |
| 💧 | `neoglow:sensor_humidity_U1pX` | Kropla wilgotności z falującym obrysem i symbolem % | Animacja kołysania kropli wilgoci |
| 🚪 | `neoglow:door_C8mK` | Drzwi wejściowe z mikro-uchyleniem i poświatą zamka | Animacja lekkiego uchylania skrzydła |
| 🏡 | `neoglow:house_B6xR` | Nowoczesny domek z animacją skakania (np. przyjazd domownika) | `b31-bounce` (lekkie podskakiwanie) |
| 🎬 | `neoglow:media_play_c4r9` | Przycisk odtwarzacza multimedialnego z pulsującym trójkątem | Animacja powiększania elementu play |
| 🔌 | `neoglow:switch_outlet_A3nB` | Gniazdo sieciowe z wysyłanymi iskrami zasilania | Zintegrowany efekt iskier elektrycznych |

---

## 🎨 Przykłady Użycia (YAML)

Ikony mogą być używane we wszystkich standardowych oraz niestandardowych kartach Home Assistant (np. `button-card`, `custom:mushroom-chips-card`, `multiple-entity-row`).

### Przykład 1: Standardowy Przycisk (Button Card)
```yaml
type: button
name: Wentylator Salon
icon: neoglow:fan_2vPq
tap_action:
  action: toggle
entity: fan.salon
```

### Przykład 2: Zaawansowana karta Mushroom (Glow Effect)
```yaml
type: custom:mushroom-template-card
primary: Światło Ambient
secondary: "{{ states('light.ambient_glow') }}"
icon: neoglow:acx_light_rgb_z1p3
icon_color: amber
entity: light.ambient_glow
```

---

## 🖥️ Interaktywny Explorer Ikon

Do wyszukiwania, podglądu na żywo oraz wygodnego kopiowania nazw ikon zalecamy korzystanie z naszego interaktywnego web-explorera, który jest dostępny pod adresem:
👉 **[https://total.smallhost.pl/](https://total.smallhost.pl/)**

*Wyszukiwanie odbywa się natychmiastowo w czasie rzeczywistym, a kliknięcie na kafelek automatycznie kopiuje pełny identyfikator ikony (np. `neoglow:gear_bolt_X9rB`) gotowy do wklejenia w konfigurację Home Assistant!*

---

## 👥 Wsparcie & Swarm Development

Zestaw rozwijany przez Gringo Swarm. Jeśli masz sugestie nowych ikon lub chcesz zgłosić błąd, utwórz zgłoszenie Issue w tym repozytorium.
