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
-
