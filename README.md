# DinoShort

an url shortener

## Design

The proposed design is the following:

![design](/design/design.png)

We will use Redis as a key-value store to store the shortened URLs.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Format the code

```bash
npm run format
```

## Check linting

```bash
npm run check-format
```

## Testing

### Using the terminal

Run the following command:

```sh
npm run test
```

### Using the UI

Start running the command below:
```sh
npx cypress open
```
1. Then select the type of testing (in our case, it's E2E).
2. Select where the tests will run. We recommend using Chrome.
3. Open the specs tab and open the file `index.cy.js`; this will test the entire application.
