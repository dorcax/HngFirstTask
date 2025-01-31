# HNG12 Backend Task - Public API

## Description
A simple public API that returns the registered email, current datetime in ISO 8601 format, and GitHub repository URL.

## Tech Stack
- Node.js
- Express.js
- Deployed on Render

##Setup Instruction
-clone the project repo
-npm install
-node app.js 
 
Open http://localhost:4000 in the browser.
## API Endpoint
**GET** `<your-deployed-url>`

### Response Format (200 OK)
```json
{
  email: "opeyemiibrahim667gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/dorcax/HngFirstTask",
}
