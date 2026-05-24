# Gringo Changelog

## [1.0.4] - 2026-05-24
### Changed
- Fixed `bump-version.ps1` script to automatically upload assets from the `dist/` folder to GitHub Releases, preventing 401 HACS action errors in the future.
- Removed invalid keys (`additional_files`, `render_anonymous`) from `hacs.json` to comply with strict HACS Action validation.
- Added repository description and topics (`home-assistant`, `hacs`, `icons`) directly in GitHub to meet HACS inclusion requirements.

## [1.0.3] - 2026-05-23
### Added
- Added presence sensor icon `lgg_presence_home_pr1` to data index, preview SVG, and spec table.
- Added centered premium English Ko-fi support badges and grid to the top and bottom of `README.md`.
- Implemented responsive support banners and footers inside the Companion Web Explorer (`index.html`).
- Created PowerShell version bump script `bump-version.ps1` to automate repository updates.

### Changed
- Moved the animated Showcase Icons grid to the top of `README.md` for immediate visual wow factor.
- Redesigned HACS store listing name in `hacs.json` to feature emojis for high-visibility searching.
- Corrected HACS installation paths inside `hacs.json` to track production assets inside `dist/`.
- Cleaned up technical HACS default submission steps from the README.md.

### Fixed
- Fixed HACS "not loaded properly" 401 error by uploading missing assets to GitHub Release `v1.0.3`.
- Re-submitted HACS default listing with new Pull Request `#7956` due to the previous PR being closed.
