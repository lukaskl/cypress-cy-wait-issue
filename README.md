# [Cypress](https://github.com/cypress-io/cypress) issue report
This repo is an example of an issue which was found by using [Cypress](https://github.com/cypress-io/cypress)

---
steps to reproduce

first:
```
yarn install
```

Open Cypress Test Runner in interactive mode and run tests there.

Expected: should work

```
yarn cy:start
```

run tests in a headless browser:

Expected: should fail
```
yarn cy:test
```

both of those commands start the same React app in the same way. Only the cypress part differs.

check `package.json` how actual script commands look like

```
"cy:attach-open": "wait-on http-get://localhost:3000/ && cypress open",
"cy:attach-run": "wait-on http-get://localhost:3000/ && cypress run",
"cy:start": "run-p start cy:attach-open",
"cy:test": "run-p --race start cy:attach-run"
```

---