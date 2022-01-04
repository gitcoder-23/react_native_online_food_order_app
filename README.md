// Install using expo
https://dev.to/runosaduwa/how-to-install-react-native-with-expo-quick-easy-4j8j

//Here used blank(Typescript) template

https://docs.expo.dev/get-started/create-a-new-app/

- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- yarn android
- yarn ios
- yarn web

## or

npm run android/ios/web

expo start

## run expo r -c to clear the cache.

run expo r -c to clear the cache.

## Clear Metro Bundler cache & start

expo expo start --clear

## Packsges used

npm i axios moment react-navigation react-navigation-stack react-navigation-tabs

## React Navigation packages

# if use expo

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

## For Location service

## https://docs.expo.dev/versions/latest/sdk/location/

expo install expo-location

## error solved

## Error: Requiring module "node_modules/react-native-reanimated/src/Animated.js", which threw an exception: Error: Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated babel plugin?

https://stackoverflow.com/questions/70493915/error-requiring-module-node-modules-react-native-reanimated-src-animated-js/70501101
