# my_bakers (Sweet Bakers)

This repository contains a Node/Express backend (API) and a React frontend (pre-built in the `build/` folder).

Key points before publishing:
- Do NOT commit your MongoDB credentials. Use environment variables (`MONGODB_URI`).
- The app serves the prebuilt React files from `build/` so once deployed you can visit the site in a browser or on mobile without running extra commands locally.

What I changed to prepare for publishing
- `server.js`: now reads `MONGODB_URI` from environment and serves `build/` static files.
- `package.json`: `start` changed to `node server.js` and `heroku-postbuild` added so many hosting providers will build the frontend on deploy.
- Added `.gitignore`, `Procfile`, and `.env.example`.

How to commit and push these changes (PowerShell on Windows)

Open PowerShell in this project folder and run:

```powershell
cd "C:\Users\MUHAMMAD SAQIB\OneDrive\Desktop\my_bakers"
git add .
git commit -m "Make app deployable: env DB, serve static build, add Procfile"
git push origin main
```

Authentication notes:
- If using HTTPS remote, GitHub requires a Personal Access Token (PAT) as password. Create one at https://github.com/settings/tokens with `repo` scope and use it when prompted.
- Alternatively configure SSH keys and use the SSH remote URL.

Deployment notes
- Use Render, Heroku, or Railway and set `MONGODB_URI` in environment variables/config vars.
- On Heroku/Render the `heroku-postbuild` script will build the React app before start.

Security note
- If you previously had credentials in `server.js` (or anywhere), rotate those MongoDB credentials in Atlas now.

If you want, I can add a GitHub Actions workflow to auto-deploy to Render or Heroku; tell me which provider you prefer.
# Getting Started with Create React App

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
