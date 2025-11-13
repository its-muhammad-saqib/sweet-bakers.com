# my_bakers (Sweet Bakers)

This repository contains a Node/Express backend (API) and a React frontend (pre-built in the `build/` folder).

Key points before publishing:
- Do NOT commit your MongoDB credentials. Use environment variables (`MONGODB_URI`).
- The app serves the prebuilt React files from `build/` so once deployed you can visit the site in a browser or on mobile without running extra commands locally.

What I changed to prepare for publishing
- `server.js`: now reads `MONGODB_URI` from environment and serves `build/` static files.
- `package.json`: `start` changed to `node server.js` and `heroku-postbuild` added so many hosting providers will build the frontend on deploy.
- Added `.gitignore`, `Procfile`, and `.env.example`.

How to create the GitHub repository and push (PowerShell on Windows)

1) Create the repository on GitHub
- Go to https://github.com/new
- Set repository name: `sweet-bakers.com`
- Choose Public or Private, then click Create repository.

2) Locally: initialize git (if not already), add files, and push
Open PowerShell in this project folder:

```powershell
git init
git add .
git commit -m "Initial commit - prepare for deployment"
# Replace <USERNAME> with your GitHub username and <REPO> with sweet-bakers.com
git remote add origin https://github.com/its-muhammad-saqib/sweet-bakers.com.git
git branch -M main
# To push, you'll need to authenticate. GitHub no longer accepts account passwords for git over HTTPS.
# Create a Personal Access Token (PAT) with `repo` scope at https://github.com/settings/tokens
# Then use the PAT as the password when prompted by Git.
git push -u origin main
```

Alternative (SSH):
- Set up an SSH key and add it to GitHub, then use the SSH remote URL instead:

```powershell
git remote set-url origin git@github.com:its-muhammad-saqib/sweet-bakers.com.git
git push -u origin main
```

Setting environment variables on the host
- On any hosting provider (Render/Heroku/Railway/etc.) set `MONGODB_URI` to your Atlas connection string (do NOT commit it).

Recommended quick deploy options (one-click from GitHub):
- Render (https://render.com): connect your GitHub repo, in the service set the build command to `npm install` and start command will be `npm start`. Set `MONGODB_URI` in service Environment.
- Heroku (https://heroku.com): create an app, connect GitHub repo or push manually; set `Config Vars` with `MONGODB_URI`. Heroku will run `heroku-postbuild` and use the `Procfile` to start.
- Railway or Vercel can also be used; Vercel is mostly frontend only, but can host serverless functions.

Security note
- I removed hard-coded credentials from `server.js`. If your MongoDB URI is currently present in this repo on your machine, remove it before pushing by ensuring `.env` is used and included in `.gitignore`.

If you want, I can:
- Prepare a simple GitHub Actions workflow to auto-deploy the app to a provider.
- Walk you step-by-step through creating a PAT and pushing (I can show exact PowerShell prompts and responses to expect).

Once you've pushed the repo, come back and tell me the repo URL and whether you want me to help connect it to Render/Heroku and set environment variables there.

---
Generated automatically to prepare repository for publishing.# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
