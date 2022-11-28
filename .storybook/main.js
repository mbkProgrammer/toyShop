module.exports = {
  "stories": [
    "../components/**/*.jsx",
    "../components/**/*.stories.jsx",
    "../containers/**/*.jsx",
    "../containers/**/*.stories.jsx"
  ],
  // "addons": [
  // ],
  staticDirs: ['../public'],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}

// module.exports = {
//   stories: ['../**/*.stories.jsx'],
// }
