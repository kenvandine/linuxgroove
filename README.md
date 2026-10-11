# linuxgroove.com

The website of LinuxGroove Games: free and open source games, Linux first. It's one static page served by GitHub Pages from `main` (the domain is in `CNAME`), so a push to `main` is live in a minute or two.

The look is the Street Tag style of the LinuxGroove splash, laid out as the Billboard sketch: Verdigris Protocol fills the first screen, then why the games are free, the other finished games as box art, what's coming soon, the idea board and who makes them. The four sketches it was picked from are in game-ideas, under `branding/website/`.

## Files

| Path | What |
|---|---|
| `index.html` | The page |
| `styles.css` | Every style, fonts first, then one block per section, then phone and tablet sizes at the end |
| `script.js` | The screenshot viewer for the filmstrip under Verdigris Protocol (the links still open the pictures without it) |
| `assets/img/` | Art cut from each game's screenshots: `vp-*` Verdigris Protocol, `gh-` Graveyard Hollow, `bp-` Block Party: Skyway, `ff-` Foam Frenzy, `rd-` Race Day, `tt-` Tiptoe; `og.jpg` is the picture shown when the site is shared |
| `assets/fonts/` | The fonts, served from here so no visit reaches a font service; their licences are in `licenses/` |
| `favicon.png`, `apple-touch-icon.png` | The penguin |

## Updating it

- **A game's links.** Each game has a Snap Store link, Windows and macOS links to its latest GitHub release, and its source. The Windows and macOS links only show something once the game has a release (its Release workflow attaches both).
- **A finished game.** Copy one of the `article class="box"` blocks in the games section, give it its own class and tint in `styles.css` (`--tint` is the colour behind the words), and cut a 720×960 tile from its screenshots. Tiles want the game's own art with no menus or HUD showing.
- **Coming soon.** Each `article class="reel"` takes a 1280×549 picture, which the page greys and blurs.
- **The idea board.** The chips under Idea board are plain list items. "Your idea, soon" holds the place for a way to send us ideas.
- **Art sizes.** The big Verdigris picture is `vp-hero.jpg` (1415×753) with `vp-hero-900.jpg` for phones, and the filmstrip pairs a 480×270 `-thumb.jpg` with the full picture it opens.

Keep the words plain and short, write for everyone, and give every picture a description (`alt`) unless it's only decoration.

## Looking at it before pushing

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000 and check a phone width too (the browser's device toolbar). Nothing needs building.

## Fonts

Anton (headings), Montserrat (text), Sedgwick Ave Display (the LinuxGroove tag), Saira Stencil One and Chakra Petch (Verdigris Protocol), Permanent Marker (the sprayed words) and Kenney Future and Kenney Blocks (the Kenney games' titles). All are under the SIL Open Font License except Permanent Marker (Apache 2.0) and the Kenney fonts (CC0).

## Licence

The site is © The LinuxGroove team. The game art comes from the games themselves.
