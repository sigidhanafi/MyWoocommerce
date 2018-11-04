# MyWoocommerce
This repo is to build woo commerce app with React Native.

## install
clone this repository with this command:

`git clone git@github.com:sigidhanafi/MyWoocommerce.git`

Then move to directory

`cd MyWoocommerce`

Install dependencies (you can use npm or yarn)

`yarn install`

Wait until instalation process is complete.

## Running app
After instalation process was complete, we can run on android and iOS

### Android
first: make sure you have running android emulator on your computer or you can use android device.
to test that you have connected android emulator / device, run `adb devices` on terminal.

run this command:

`react-native run-android`

### iOS
running react native app in iOS is more easy. 
run this command:

`react-native run-ios`

If this command failed to run apps, try to open project with Xcode, then setting provisioning app on Xcode. After that, you can run command again.

## Dependencies
This app build with popular dependencies:
- React Native
- React
- Lodash
- React Redux
- RXJS
- redux-observable
- Axios
- Jest

## Development tools
- VSCode text editor
- ESlint + Prettier to code formating
- Redux dev tools

## Running Test
This app use jest to build unit test. We can test action creator and reducer with jest.
Component + Middleware unit test not implemented.
to run jest, use this command:

`yarn jest`

## Preview
![alt text](https://image.ibb.co/ens0L0/store-list.jpg "Store List")
![alt text](https://image.ibb.co/mapKDL/store-detail.jpg "Store List")


This app is still need improvement. If you have any concern to improve, please create PR.


