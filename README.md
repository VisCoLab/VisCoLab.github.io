# viscolab.github.io

Website of VISCO, the Visual Computing Lab at the Faculty of Mathematics and
Computer Science, Adam Mickiewicz University in Poznań: <https://viscolab.github.io>.

GitHub Pages builds the site with Jekyll on every push to `main`; there is no
other build step. **A push to `main` is a live deploy.**

## Editing content

All content lives in five YAML files. Edit them directly on GitHub (the pencil
icon) or locally; every page renders from them, so formatting stays consistent.

| To change | Edit |
|---|---|
| a paper | `_data/publications.yml` (newest first) |
| a person | `_data/people.yml` |
| a news item | `_data/news.yml` |
| a research theme | `_data/themes.yml` |
| a supporter (home page footer) | `_data/supporters.yml` |

**Add a paper.** Copy an existing entry in `_data/publications.yml` and fill in
`title`, `authors` (official list, in order), `venue` (short, e.g.
`SIGGRAPH 2026`), `year`, and `links` (`project`, `paper`, `arxiv`, `code`,
`data`, `video`; leave out the ones that do not exist). Add a 16:9 teaser image
to `images/projects/` (at least 800 px wide) and point `image` at it. Lab members
are bolded automatically, using the names and `aliases` in `_data/people.yml`.

**Add a person.** Add an entry under `members` in `_data/people.yml` with `name`
and `group`. For a photo, put a square image of at least 400 x 400 px in
`images/people/` and set `photo` to its file name. When someone leaves, move
them to the `alumni` group rather than deleting them.

**Add news.** Add an item to `_data/news.yml` with a `date` and a one-sentence
Markdown `text`. The home page shows the six most recent.

## Preview locally

```bash
gem install --user-install github-pages webrick erb
jekyll serve        # http://127.0.0.1:4000
```

`github-pages` pins the same Jekyll (3.10) and plugins GitHub uses. `webrick`
and `erb` are needed on Ruby 3.4.

## Layout

```
_config.yml        site name, university, navigation
_data/             all content (see above)
_includes/         publication.html, person.html, news.html, header, footer
_layouts/          default.html, the one page layout
assets/css/        main.css, the one stylesheet
images/projects/   16:9 teasers
images/people/     square portraits
```

`projects.html` and `videos.html` are redirects kept for old links.
