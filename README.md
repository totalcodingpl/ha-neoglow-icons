# 🌈 NeoGlow Icons - Animated & Colorful Gradient Icons for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/hacs/integration)
![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg?style=for-the-badge)
![Category](https://img.shields.io/badge/Category-Lovelace-purple.svg?style=for-the-badge)

Welcome to **NeoGlow Icons**, the ultimate way to revolutionize your Home Assistant dashboards!

> [!IMPORTANT]
> **NeoGlow Icons** is currently the **ONLY custom icon pack available in HACS that features fully animated and multi-color gradient icons**! While typical icon sets are static and monochrome, NeoGlow icons are alive with smooth CSS keyframe animations, vibrant neon HSL gradients, and dynamic visual states.

---

## 🖥️ Official Companion Web Explorer

To search, preview, and easily copy the icon codes, we provide a state-of-the-art web search utility:
👉 **[https://total.smallhost.pl/](https://total.smallhost.pl/)**

### What is the `hacs-neoglow-explorer`?
The **NeoGlow Explorer** is a high-performance, glassmorphic web dashboard that serves as the official catalog for all available icons. 
* **Real-Time Live Previews**: See every single icon's animation speed, gradient style, and glowing neon effects exactly as they appear in Home Assistant.
* **Instant Search Engine**: Find icons instantly using filters and keywords (lighting, climate, media, sensors).
* **Click-to-Copy convenience**: Simply click any icon tile to copy its Home Assistant code (e.g. `b31:gear_bolt_X9rB` or complete YAML) straight to your clipboard for instant setup.

---

## 🚀 Easy HACS Installation

### Step 1: Add Custom Repository to HACS
1. Open your **Home Assistant** instance.
2. Navigate to **HACS** -> **Frontend** on the left sidebar.
3. Click the **Three Dots** menu in the top-right corner and select **Custom repositories** (*Niestandardowe repozytoria*).
4. In the URL field, paste the link to this GitHub repository:
   ```text
   https://github.com/totalcodingpl/ha-neoglow-icons
   ```
5. Choose **Lovelace** (or *Dashboard*) as the Category.
6. Click **Add** (*Dodaj*).

### Step 2: Download the Plugin
1. Find the newly added **NeoGlow Icons** plugin in your HACS list.
2. Click on it, then click **Download** (*Pobierz*) in the bottom right corner.
3. HACS will automatically download the required files to `/www/community/ha-neoglow-icons/` and register the Lovelace resource.

### Step 3: Hard Reload Browser Cache
Execute a hard reload in your web browser (`Ctrl` + `F5` on Windows/Linux, or `Cmd` + `Shift` + `R` on macOS) to ensure the Lovelace resource is loaded.

---

## 💎 Premium Showcase Icons

The plugin registers all icons under the **`b31:`** prefix. Below are 15 of our premier animated and colorful icons:

| Icon Preview | HA Icon ID | Description | CSS Animation Style |
| :---: | :--- | :--- | :--- |
| ⚡ | `b31:thunder_blink_4kR2` | Electric bolt with realistic lightning pulse | `b31-blink` (intermittent flashes) |
| 🌀 | `b31:fan_2vPq` | Dynamic 4-blade fan with high-speed rotation | `b31-spin` (360° infinite rotation) |
| 🔋 | `b31:battery_M5pT` | Battery cell showing horizontal power flow | `b31-flow` (animated charge flow) |
| ⚡🔋 | `b31:battery_charging_J8qL` | Power cell under active fast charging | `b31-flash` (pulse-charging visual) |
| ⚙️⚡ | `b31:gear_bolt_X9rB` | Rotating gear combined with a pulsing lightning bolt | Integrated (spin + pulse glow) |
| 💡 | `b31:acx_light_on_p9w4` | Premium warm neon lightbulb with glowing aureole | `b31-pulse` (breathing light glow) |
| 🌈 | `b31:acx_light_rgb_z1p3` | Smart RGB bulb cycling smoothly through color wheel | Dynamic (continuous HSL color shift) |
| 🏃‍♂️ | `b31:acx_motion_active_a2x9` | Active motion sensor with expanding radar waves | `b31-pulse` + radial scaling |
| 📡 | `b31:sensor_wifi_Y7sT` | Wi-Fi antenna propagating wireless signals | Sequential opacity wave |
| 🌡️ | `b31:sensor_temperature_I4bN` | Intelligent temperature probe with moving fluid | Vertical fluid animation |
| 💧 | `b31:sensor_humidity_U1pX` | Humidity droplet with oscillating water ripples | Floating drop motion |
| 🚪 | `b31:door_C8mK` | Entry door with glowing lock and safety animations | Swing angle opening effect |
| 🏡 | `b31:house_B6xR` | Eco-house layout that bounces on family member arrival | `b31-bounce` (vertical bounce) |
| 🎬 | `b31:media_play_c4r9` | Media player button scaling dynamically in play state | Scaled pop pulse |
| 🔌 | `b31:switch_outlet_A3nB` | Electric outlet throwing subtle power sparks | Spark effect emission |

---

## 🎨 Lovelace YAML Examples

### Example 1: Standard Button Card
```yaml
type: button
name: Ambient Fan
icon: b31:fan_2vPq
tap_action:
  action: toggle
entity: fan.living_room
```

### Example 2: Mushroom Template Card (RGB Glow)
```yaml
type: custom:mushroom-template-card
primary: Smart Ambient
secondary: "{{ states('light.ambient_rgb') }}"
icon: b31:acx_light_rgb_z1p3
entity: light.ambient_rgb
```

---

## 👥 Support & Development

Developed and optimized by **Gringo Swarm**. For requests, new icon suggestions, or issues, please open a GitHub Issue in this repository.
