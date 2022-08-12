# Micro Frontend

- Atoms
- Molecules
- Organisms
- Templates
- Pages

## Previous Implementations

**Scenario One**

- Using `npm packages` as the common place to keep the codes
- Then it is shared between apps
- Kind of what `lerna` [better versioning] or `yarn workspace` do

**Scenario Two**

- Instead of keeping the components under a app
- It is been separated in a separate `component` app
- It is used to create `s3 artifacts`
- Shim library connected to main apps also updates itself from the artifacts and provides to other apps
- Implementation complexity

**Scenario Three**

- Using iFrames and global objects

## Webpack

- Microfrontend works well with webpack 5
- Module Federation works in webpack 5 and gels with it properly

```bash
npx create-mf-app
```

---

## Module Creation

- Create two module federation app `landing` and the other is `marketplace`
- Host for the `landing` is `3001` and host for the `marketplace` is `3002`
- Then run follow the `npm install` in each of the directories

## Create Components

- Go to the `landing` app
- Create two files Header.tsx and Footer.tsx

## Make it available from the Landing App

- Expose the files by mentioning in the `webpack.config.js`
- name => is the alias name of the app
- filename => is the one that exposes the file
- exposes => we can define the files that we want to expose

```javascript
const moduleFederationOptions = {
  name: "landing",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./Header": "./src/components/Header/index.tsx",
    "./Footer": "./src/components/Footer/index.tsx",
  },
};
```

## Use the exposed components in the Marketplace App

- Add the remoteEntry file in the `remotes` section and give another alias according to our needs
- Therefore we can use the `Header` or `Footer` components in `landing/Header` and `landing/Footer`

```javascript
const const moduleFederationOptions = {
  name: "marketplace",
  filename: "remoteEntry.js",
  remotes: {
    landing: "landing@http://localhost:3001/remoteEntry.js",
  },
  exposes: {},
}
```

## Asynchronous Loading

- Using `React.lazy(() => {})`
- We can use the Suspense

## Webpack shares and manages react for us

- configuration react: singletone, means there will be only one react


```javascript
const const moduleFederationOptions = {
  shared: {
  ...deps,
  react: {
    singleton: true,
    requiredVersion: deps.react,
  },
  "react-dom": {
    singleton: true,
    requiredVersion: deps["react-dom"],
  },
},
}
```

## What if the landing app crashes?

- We can configure to run the section app from the older deployment as a backup/fallback strategy
- We can use a Error Boundary, `getDerivedStateFromError`
- Then use it for something else


## How to use with the global store

- Share the state very easily with reactive programming
- Use `RXJS` to transfer the states if necessary

## To use it with other libraries

- We need to create a very simple adapter, on how we will take the data
- We also need to mention where it will be mounted

## Use single-spa

- Single SPA helps the workflow faster
- We have 10 different servers and we dont want run all the servers one by one, same goes for tests
- It is simple to `docker-compose`
- Must be deployed to some server
- Install import map overrides
- It provides a UI, shows all the in browser modules
- Change the url for that particular in browser module # change the url