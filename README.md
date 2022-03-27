# Tauri Vite Example

## How to recreate me from scratch

### Vite
- Initialise the npm package to create a package.json
```shell
npm init (or yarn init, or pnpm init)
```

- Install the required dependencies
```shell
npm install -D typescript vite esbuild esbuild-register @tauri-apps/cli
npm install @tauri-apps/api
```

- Make a folder for the web source and create initial index.html
```shell
mkdir src-vite
touch src-vite/index.html
```

```html
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

### Tauri
- Create a source folder for rust and run cargo init to initialise it
```shell
mkdir src-tauri
cd src-tauri
cargo init     // @todo shorter step? cargo init ./src-tauri ?
```

- Add tauri and related dependencies to Cargo.toml:
```toml
```

- (Optional) create a tauri json config file
```json
```

- Add the basic rust source for tauri to src/app.rs
```rust
```

### Build Scripts

- Make a folder for the build scripts, and create two scripts and a common vite config.
```mkdir scripts
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
