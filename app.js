require('dotenv').config();

// importing modules
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

    //Build Snoowrap/storm clients
const r = new Snoowrap({
	userAgent: "russian-investigation-bot-93932" ,
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS,
});
const client = new Snoostorm(r);

//CommentStream on which subreddits

const streamOpts = {
subreddit: 'testingground4bots' ,
results: 25
};

    //Create Snoostorm commentstream 
const comments = client.CommentStream(streamOpts);

    //On Comment perform logic
comments.on('comment', (comment) => {
if (comment.body === 'Is it working?') { 
    comment.reply( 'this has been a test of your bot, dont interfer with any elections br0');
   }
comments.on('comment', (comment) => {
if (comment.body === 'Flynn') { 
    comment.reply( 'this has been a test of your bot, dont interfer with any elections br0');
   }
comments.on('comment', (comment) => {
if (comment.body === 'Kushner') { 
    comment.reply( 'this has been a test of your bot, dont interfer with any elections br0');
   }
comments.on('comment', (comment) => {
if (comment.body === 'Enualments') { 
    comment.reply( 'this has been a test of your bot, dont interfer with any elections br0');
   }
   comments.on('comment', (comment) => {
if (comment.body === 'Cambridge Anayltica') { 
    comment.reply( 'this has been a test of your bot, dont interfer with any elections br0');
   }
});
