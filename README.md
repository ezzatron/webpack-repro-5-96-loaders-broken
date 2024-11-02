# Webpack 5.96.0 broken loaders reproduction

To demonstrate the problem, run the following:

```
npm install
npm install --save-exact webpack@5.96.0
npm run repro
```

You can then see that 5.95.0 does not have this issue:

```
npm install --save-exact webpack@5.95.0
npm run repro
```