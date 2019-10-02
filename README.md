# Clean 'Em Application - React Native

## Installation

### Node (with Homebrew)

#### Homebrew

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Homebrew already installed, needs updating

```sh
brew update
brew upgrade node
```

#### Node

```sh
brew install node
```

---

### Expo

```sh
sudo npm install expo-cli --global
```

## App environment creation

### Using Expo

```sh
expo init <file name>
```

Choose blank template, and input `Y` to use Yarn to install dependencies

## Start environment

```sh
yarn start
```

Make sure you have downloaded Xcode and Android Studio, and have initialized a virtual machine on both for emulator
You can also download the Expo Client app on a physical device for viewing your app there

## Shortcuts Expo

**_Command + D_** for getting back to the Expo menu in web
**_Shake device_** if on hardware

## Libraries/Frameworks

> When installing some packages while running the local server, an error might occur. To fix that, stop the instance `ctrl+c` , install most recent packages `npm install` and finally restart the expo server by `expo start` or `yarn start`

- Styled Components
  `npm install -s styled-components`
- Ionicons
  https://ionicons.com/
- React Native SVG
  `npm install react-native-svg`
- SVG Playground
  https://www.smooth-code.com/open-source/svgr/playground/
- Redux
  `npm install --save redux`
- React-Redux
  `npm install --save react-redux`
- React-Navigation
  `npm install --save react-navigation`
- React-Native-Gesture-Handler
  `npm install react-native-gesture-handler`
- React-Native-Reanimated
  `npm install react-native-reanimated`
- React-Navigation-Stack
  `npm install react-navigation-stack`
- React-Navigation-Tabs
  `npm install react-navigation-tabs`
- Apollo and GraphQl
  `npm install apollo-boost react-apollo graphql --save`
- React Native Showdown
  `npm install --save react-native-showdown`

## To Note

I couldnt get the Ionicons to work, might have to survive with another library or local svg icons
Look at Screens and Navigation at min 18.

Make sure to have the latest Expo CLI in order for app to run correctly, found some issues when simulator was opening but expo app was not.

Run `npm install` or `yarn install` after adding libraries before starting local development server.

Could not integrate WebView, it is no longer in the React-Native core package. Whole session of HTML and Markdown. Uninstalled.

Could not integrate Showdown. Still installed.
