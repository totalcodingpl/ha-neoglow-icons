# Gringo Memory (RAM)
- [x] Konfiguracja i wdrożenie HACS-yfikacji dla NeoGlow Icons
- [x] Skonfigurowanie Git i `.gitignore`
- [x] Stworzenie manifestu HACS `hacs.json`
- [x] Zmodyfikowanie wtyczki w `dist/ha-neoglow-icons.js` (Dynamiczny Resolver i przywrócona nazwa b31)
- [x] Przygotowanie bogatego README.md w języku angielskim z showcase 15 animowanych ikon i instrukcją HACS oraz linkiem do explorera
- [x] Zrobienie commita z changelogiem i wrzucenie na GitHuba z odświeżonym releasem v1.0.0
- [x] Dodanie ikony `lgg_presence_home_pr1` do bazy danych, preview oraz README.md
- [x] Wdrożenie angielskich widgetów wsparcia Ko-fi i wyśrodkowanie przycisków w README
- [x] Skonfigurowanie wtyczki z emotikonami w `hacs.json` dla wyróżnienia w wyszukiwarce HACS
- [x] Utworzenie wydania `v1.0.3` na GitHubie i oficjalne zgłoszenie do wyszukiwarki HACS Default (Pull Request #7931)

## 📌 HACS Update & Version Bump Process

Home Assistant Community Store (HACS) tracks repository updates through **GitHub Releases**. Whenever a new release is created, HACS automatically detects the update (usually within 1-2 hours) and prompts users to update the plugin inside Home Assistant.

To simplify the version bump and release process, a PowerShell script `bump-version.ps1` has been created in the repository root.

### How to use `bump-version.ps1`:
1. Run the script from the repository root:
   ```powershell
   .\bump-version.ps1 -Version "1.0.4"
   ```
2. The script will:
   - Normalize the version string (e.g. `1.0.4` or `v1.0.4`).
   - Automatically update the version badge URL in `README.md`.
   - Stage changes in `README.md`, `hacs.json`, and `/assets/`.
   - Commit changes as `"Bump version to v1.0.4"`.
   - Push commits to the master branch.
   - Trigger `gh release create` to publish the new release on GitHub.

Once the release is live, HACS will automatically update its index and distribute the new icons/code to all users.

