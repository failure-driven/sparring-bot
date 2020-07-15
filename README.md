# sparring-bot

Sparring robot.

demo https://sparring-bot.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/33e61260-b0ba-4aa4-89ba-aa87ed42c8bd/deploy-status)](https://app.netlify.com/sites/sparring-bot/deploys)

## TODO

- [ ] model in WebGL
- [ ] configure timing and modes
- [ ] build a mock model
- [ ] build a "demo sparring arm"
- [ ] get a useable 90 degree (or 180 degree) rotary actuator for demo sparring arm
- [ ] build a "hitting arm" prototype

## Existing robots

- Stryk Tek RXT-1
  - still waiting for launch https://www.stryktek.com/
    - https://www.instagram.com/stryk.tek/
    - https://www.facebook.com/Stryk.Tek/
  - https://www.reddit.com/r/NewProductPorn/comments/hdlb11/stryk_tek_rxt1_sparring_bot/
  - https://www.reddit.com/r/Design/comments/hecriw/this_sparring_bot/
- Bot Boxer
  - https://botboxer.com/
  - https://www.engadget.com/2019-01-09-botboxer-hands-on.html
- Punching Pro
  - "https://punchingpro.com/"
  - https://newatlas.com/punching-pro-receives-and-delivers-boxing-blows/18375/
- Whole heap out there
  - [Google boxing practice active](https://www.google.com/search?q=boxing+practice+active&tbm=isch)
  - Punch Reflex Ball
  - rotating balls
  - spinning bar
- VR boxing - eg https://www.youtube.com/watch?v=iIrmhf9pRH0
- boxing arms - spinning from punch impact

  - [sparbar](https://sparbar.com/)
  - [Title boxing - reflex bar](https://www.titleboxing.com/title-rapid-reflex-boxing-bar)
  - [Boxingbar](https://www.boxingbar.com/)
    - Conor McGregor boxingbar video - https://www.youtube.com/watch?v=U_yBsNBDJnM
  - [Innolife MMA spinning bar](https://www.amazon.com.au/INNOLIFE-Boxing-Trainer-Punching-Spinning/dp/B07TZQNSTT)
  - Viking spinning bar
  - Shinobi Rapid rotating bar

- spider bag, assuming you have 4 posts to set it up in - https://www.titleboxing.com/title-spider-bag
- DIY sparbar
  - [Figher DIY](https://www.fighterdiy.com/p/fighter-diy-ebook.html)
  - [DIY sparbar pro](https://www.fighterdiy.com/2020/05/diy-spar-bar-pro.html)
    - video - https://www.youtube.com/watch?v=xdYXVNRVgUA
  - [DIY sparbar simple](https://www.fighterdiy.com/2020/05/diy-spar-bar-simple.html)
    - video - https://www.youtube.com/watch?v=dY7LX6OlIDo
  - [DIY \$20 freestanding punching bag](https://www.youtube.com/watch?v=V29us98-FUM)
  - [DIY a Slip Stick Reflex Bag out of Scrap](https://www.youtube.com/watch?v=c_Eu3BNlha8)
- static solutions
  - attach pads to a [Focusmaster extender bar](https://www.focusmaster.com/shop/equipment/extender-bar/)
  - [Kung Fu wooden dummy](https://www.peninsulakungfu.com.au/training/kung-fu-wooden-dummy)
- manual version
  - trainer moves a bar - https://www.youtube.com/watch?v=-dNo3Yh02ik
  - Conor McGregor dodging foam tube training - https://www.youtube.com/watch?v=Kg4LxbLPec8
    - including foam tube "punching" - vs just striking down/across
  - foam stick drills - https://www.youtube.com/watch?v=cR2pT7tpkc0
  - fair few more poole noodle boxing drills
- timing drills with shadow boxing - https://www.youtube.com/watch?v=ooMjhFToGQw

## Comercialisation

- multi arm active sparring robot
- kids gimick hitting toy
- arcade style game - like guitar hero, dance dance revolution etc

## WebGL inspiration

- https://codesandbox.io/s/react-three-fiber-untitled-game-4pp5r
- https://github.com/wonderunit/storyboarder/blob/master/src/js/xr/src/SceneManagerXR.js

using

- https://github.com/react-spring/react-three-fiber

## Developer Extensions

- beginner tuturials
  - https://www.digitalocean.com/community/tutorials/react-react-with-threejs
  - https://medium.com/@summerdeehan/a-beginners-guide-to-using-three-js-react-and-webgl-to-build-a-3d-application-with-interaction-5d7b2c7ca89a
  - https://medium.com/@dhiashakiry/building-a-3d-interactive-with-react-and-threejs-70dfd212bf67
- Blender to generate GLTF files
- GLTFLoader - https://threejs.org/docs/#examples/en/loaders/GLTFLoader
- 3D model - https://threejs.org/examples/#webgl_animation_skinning_blending
- state managment with https://github.com/react-spring/zustand
- helpers for bearings https://blog.prototypr.io/your-3d-wilderness-bearings-threejs-helpers-in-react-three-fiber-64770d59b222
- what are these recepies https://github.com/react-spring/react-three-fiber/blob/master/recipes.md
- add framerate?
- dat GUI https://github.com/claus/react-dat-gui
- Three React GUI https://github.com/ueno-llc/react-three-gui

## Create react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
