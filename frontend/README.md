# Checks and Balances Frontend
This folder contains the front-end code for the Checks and Balances App.

This project is built with **React Native** using **Expo** with web support. It uses React Navigation for basic navigation and includes sample Home and Login screens.

## Available Scripts

- `npm start` - start the Expo development server
- `npm run android` - run the Android app
- `npm run ios` - run the iOS app
- `npm run web` - run the web version
- `npm run lint` - run ESLint

**Note:** `npm install` requires network access to download dependencies. Linting depends on those packages, so run `npm install` locally before `npm run lint`.

## Project Structure

```
/components    Reusable components
/screens       Screen components used in navigation
/navigation    Navigation configuration
/assets        Static assets
```

The entry point of the app is `App.tsx` which defines a simple stack navigator.
