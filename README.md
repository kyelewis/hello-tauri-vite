# Tauri Vite Example

## How to recreate me from scratch

### Vite
- Run `npm init` to create a package.json for npm
```sh
npm init  # (or yarn init, or pnpm init)
```

- Install the required javascript dependencies from npm
 `vite` and `esbuild` are used to serve and build the web content. 
`esbuild-register` is used to run the build script typescript files without a compile step, as in `node -r esbuild-register dev.ts`
`typescript` is used for typescript support
`@tauri-apps/cli` is used in the build scripts to run or build the tauri app
`@tauri-apps/api` is used in the web content to communicate with the tauri/rust backend

```sh
npm install -D vite esbuild esbuild-register typescript @tauri-apps/cli
npm install @tauri-apps/api
```

- Make a folder for the web source and create initial index.html and index.ts

```sh
mkdir src-vite
touch src-vite/index.html src-vite/index.ts
```

```html
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <button id="say_hello">Say Hello!</button>
    <script type="module" src="index.ts"></script>
  </body>
</html>
```

```ts
import { invoke } from '@tauri-apps/api`;

const handleOnPressButton = () => invoke('say_hello');

document.getElementById('say_hello').addEventListener('click', handleOnPressButon)
```

### Tauri
- Create a source folder for tauri, and run cargo init to initialise a new empty rust/cargo project in it.
```sh
mkdir src-tauri
cargo init ./src-tauri
```

- Add tauri and related dependencies to Cargo.toml:
```toml
```

- Create a tauri json config file.
If this file is not created, defaults will be used.
```json
```

- Add the basic rust source for tauri to src/app.rs, including a command handler for our `say_hello` command.
```rust
```

### Build Scripts

- Make a folder for the build scripts, and create two scripts and a common vite config.
```sh
mkdir scripts
touch scripts/dev.ts scripts/build.ts scripts/vite.ts
```

- Create a vite script to store a common configuration file
```ts
```

- Create a dev script to allow for running vite and tauri
```ts
```

- Create a build script to allow for building vite and tauri
```ts
```

- Update package.json to add the two scripts
```json
```

- Test running `npm dev` / `yarn dev` / `pnpm dev`
