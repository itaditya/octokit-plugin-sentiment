## octokit-plugin-sentiment

> It allows you to analyse the sentiment of a github comment easily


### How To Use

```js
const octokit = require('@octokit/rest')();
const sentimentPlugin = require('octokit-plugin-sentiment')('provide-your-perspective-api-key'); // Import the plugin

octokit.plugin(sentimentPlugin); // Plug-in the plugin

octokit.analyseSentiment({ comment }) // Call the plugin methods

// For a working example try out the demo example in /demo/demo.js
```

### List of available methods

* **octokit.analyseSentiment({ comment })** : It takes a github comment and returns an array containing list of all users mentioned in the comment.

### How to Contribute

* Fork and Clone this repo.
* On your local machine run `npm link` in the root of the cloned project.
* `cd` into demo folder and run `npm link octokit-plugin-sentiment`.
* Get your Perspective API key.
* Use `npm test` to run unit test on the analyseSentiment function.
* Now make changes in the `index.js` and test it via `demo/demo.js` file.
* When you are ready create a branch and submit a PR.

### Is this Tested ?

Yes, the plugin is tested with [Tape](https://github.com/substack/tape).
