This is my coding challenge task for the Junior Frontend Developer position.
At the beginning of this file I will write down the TODO steps before I start coding, because I like to break down my tasks in smaller steps. Once I am done with the task, I will include a section that explains which
points I would improve if I had more time to work on the project.

TODO:

1. Delete unnesessary files created by create-react-app and start fresh.
2. Create landing page that displays CF course information in cards. GET the data from https://private-e05942-courses22.apiary-mock.com/courses
3. Include a button on the card (eg 'View program')
4. When the button is clicked, GET further information data from https://private-e05942-courses22.apiary-mock.com/courses/{course_slug} Since URL is dynamic, different data is displayed based on course_slug.
5. Display the price in correct currency based on users geolocation. Use ipstack or any other API
6. Display the next course start date and the following two start dates separately in the frontend. Format the date correctly like so: (2022-10-10 --> Monday, October 10th, 2022)
7. My first priority is to make everything work. When everything works and data is correctly displayed, apply styling!

NOTES ON WHAT I WOULD IMPROVE IF I HAD MORE TIME ON THE PROJECT

- Apply better styling (page layout, use library like eg React-Bootstrap)
- Add loading & error handling for fetch requests & display loading spinner/error messages with nice styling
- Add re-usable button component
- Add unit & integration test (No e2e test as this user flow is probably not one of the most important ones and e2e tests should be limited in amount according to testing pyramid)
- Use a different library for formatting dates, as momentJs library it is no longer maintained
- Stay calm & focused despite time pressure (Refers to logical mistake in commit message c3cb84c7f6d0c57e34b47cc6c19a0c095b26022b -> It doesn't matter if hard-coded or dynamic IP address is used. Amount of requests is limited on a free plan regardless.)

ReadMe Notes generated by create-react-app:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
