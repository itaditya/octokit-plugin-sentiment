const test = require('tape');
const tapSpec = require('tap-spec');

const analyseSentiment = require('./analyseSentiment');

test
  .createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('analyseSentiment', assert => {
  const comments = [{
    comment: {
      body: "You don't know anything, you suck, people hate you"
    },
    sentiment: 'toxic'
  }, {
    comment: {
      body: "Thanks for helping me man !!"
    },
    sentiment: 'nontoxic'
  }]

  assert.plan(comments.length);
  
  comments.forEach(async ({ comment, sentiment:expectedSentiment }) => {
    const sentiment = await analyseSentiment({ comment });
    assert.equals(sentiment, expectedSentiment, `sentiment should be ${expectedSentiment}`);
  })
});
