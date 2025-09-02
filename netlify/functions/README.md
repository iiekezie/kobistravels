# Netlify Functions

Place serverless functions (Node.js) in this directory. Each `*.js` (or `*.ts`) file exports a handler.

Example (create `hello.js`):

```js
export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Netlify Functions!' })
  };
}
```

Deploying with current config: build command `npm run build`, publish `dist`, functions source `netlify/functions`.
