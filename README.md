# dash-deliverychecker

Development test for Dashdoc

Node version used: `v22.17.0`

## Run Script

### Running the CLI part

- Git clone repository
- In local repo, execute `cd app`
- Then, run test with command `node deliverychecker.js '[ [1,3], [2,5] ]'' '[1,2,3,4,5]'``

All parameters must be strings. First parameter must be an array of tuples (array with two integers).
Second parameter must be another array of integers (ids).

### Running the UI part

- Make sure you're in the root directory of the repo
- Run `npm i; npm run build`
- Then run `npm run dev` to start the local server
- Visit http://localhost:3000/ using your favourite browser

## Tools used for development

### Setup

- **React** with [Next.js base](https://react.dev/learn/creating-a-react-app#nextjs-app-router)
- **VSCode + Copilot** (Autocomplete, only for small batches of code)
- **LLMs**
  - Used as a "co-worker" of sorts to help me better understand the test (Conversational ChatGPT)
  - Used it via VSCode/Conversational Copilot to fix various bugs: an alias bug, issues with my scss modules, how to pass data from a child to a parent (I wanted to "emit" my data since I'm on a Vue stack at the moment...)
  - Used it to figure out how to take a JS Script from my CLI to my web browser
    - I've done both (build a simple script and do try/catch instructions), but never together
