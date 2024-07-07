# News App
The goal of this mobile app is to create an app which has an input and display results coming from api.

## Requirements
It is needed to obtain api key from the New API that is used in this project. Note that there is a limit of 100 requests over a 24 hour period (50 requests available every 12 hours) for the free issued News API key. You can replace the key located `/src/utils/config.ts`.

If you are running this project in iOS then it is required that you have Xcode installed. If you are in running the android then you should have the Android SDK installed in your machine.


## Getting Started
Install dependencies by running command below
```bash
# using npm
npm install

# OR using Yarn
yarn install
```

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
## Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page of React Native.

## Learn More

Below are the following dependencies used in this project:

- [React Navigation](https://reactnavigation.org/docs/native-stack-navigator/) - Handles routing and navigation of screens.
- [React Navigation - Native Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator/) - For screens stack to navigation.
- [React Native Paper](https://reactnativepaper.com/) - Material design compliant library in React Native.
- [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv/) - Key/Value storage and for storing app states.
- [swr](https://swr.vercel.app/) - Data fetching for api calls.
- [react-native-skeletons](https://github.com/kyawthura-gg/react-native-skeletons) - For display animated loading skeletons.
