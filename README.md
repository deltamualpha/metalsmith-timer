# metalsmith-timer

  A metalsmith plugin that outputs the time elapsed between calls to it.

## Installation

    $ npm install metalsmith-timer

## Usage

  Pass the plugin to `Metalsmith#use`:

```js
var timer = require('metalsmith-timer');

metalsmith
  .use(timer("init"))
  .use(someLongPlugin())
  .use(timer("post-long-plugin"));
```

  Standard runs of your build script won't output anything, but adding 
  `DEBUG=metalsmith-timer` to the call will output timings based on the labels.

## License

  MIT
