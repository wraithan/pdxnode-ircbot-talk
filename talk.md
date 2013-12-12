Howdy, I'm Wraithan and I'm here to give you the basics on building IRC Bots. Some of you know about ZenIRCBot the bot protocol and framework that I've written. I'll not be talking about it in any sort of depth as it is highly engineered to solve a set of problems and someone new to writing IRC bots wont need to worry about that stuff.

How many in here know what IRC is? Have used it? Have written a bot/client/server?

IRC stands for Internet Relay Chat, it is one of the older chat protocols that is around. It is a relatively simple pure text protocol. This means we don't have to worry about doing crazy bitshifting stuff or decompressing the data or something. Just open a connection, read some text, write some text, and bam IRC bot.

Lets get started! If you have a laptop or other programming device, I encourage you to follow along. If you have any question at all, raise your hand and I will very happily answer it.

I'm going to assume everyone in here has node and npm installed. If you don't, hit me up afterwards, and we can get you set up. Create a directory for your bot to live in then `cd` into it. Next we are going to `npm install irc`. This IRC lib isn't what I'd characterize as the best. In fact I am in the middle of building a replacement for it because I am not happy with it.

But it has something that is very important for folks who are just getting started: documentation. This is the link to the documentation, after this talk, I encourage you go to through it if you are going to start using this library.

Anyway, carrying on, lets create a file called `bot.js` where we will build our bot. Open up `bot.js` in your favorite editor, I'm going to use Sublime Text. We'll start by loading the IRC library like so.

Next we'll instantiate a copy of the IRC client with the name of the network we want to join, the name we want to have on that network, and then in the options we'll provide an array of the channels we want it to join. In this case I am having my bot join the freenode network, using the name `WraithBot` and joining the channels `#pdxbots` and `#pdxnode`.

If we run this, we'll see the bot join the channels eventually. Then it will just sit there and be amazingly boring. But now that we are connected and in some channels, we can start making our bot awesome.

How many of you are familiar with EventEmitters? Cool, so event emitters are objects that you can tell to call a function when something happens. They generally have a predefined list of events that you can listen for. When those events happen, it will call the function told you told it to. Often times it will provide data to that function, and in most cases you'll want to pay attention to that data.

It turns out the client that we instantiated earlier is an event emitter that we can bind functions to. The event in particular that we are going to play with is the `message` event. This event is fired any time a new message comes in. We'll start by taking our client object and calling it's `addListener` method. The first argument is the event we want to listen for, `message` for us. The second argument is a function that it will call.

We'll make our bot log to the terminal whenever someone says something. This is where the data that the event provides the function comes in. `message` provides `from` `to` and `message` as arguments to the function you provided. From is who said the message, to is what channel they said it to, and finally message is the text of the message. Lets see this in action.

As you can see, whenever anyone says something, it is being dumped to my terminal. The bot is still boring, but it is now aware of its world! This is one step closer to sentience. So continuing on our path to building skynet... lets make it respond if someone says `ping`!

How many in here are familiar with regular expressions? Regular expressions, also know as regex, are a way of searching through text for certain strings. In this example, we have the ^ and the $ on either side of the string ping. This is effectively the same as saying `message` === `'ping'`. We'll be expanding on this as we go, which is why we are using regex instead of just comparison.

Now that we know that someone has said `ping` lets reply with `pong` by using the client's `say` command. Restart the bot, wait for it to connect, suddenly it is able to interact with its environment! From here on out bots just get cooler. This is all you need to get started and build some cool stuff.

I'm going to take this a couple steps futher so you have a few more tools in your belt when you go to build your own army of IRC bots. How about capturing some text from what someone so you can do something to it.

Say you want your bot to be able to help you get your point across, and as we all know shouting is the best way to do that, so lets add a `!shout` command. This is where we will get fancy with the regex. Our new regex has some symbols that may be unfamilar so lets go through them. We have the familiar ^ and $, but now we have () and .*. The () are used to capture that input for later use. The . means match any character, and the * tells it to match 0 or more of the previous thing.

So what this says is look for someone saying !shout, with a space, then some text that we want to grab. This time instead of calling test, we have to call exec. Because we need more than if it matched, but also the capture text. exec returns an array who's 1th element the first captured text. If we take that element and uppercase it and tell the bot to say it. Now we can win any internet argument. Very simple but gives you the power to use user input, and shows how regex can help you out.

Finally I'm going to talk about a little bit of courtesy when it comes to writing and deploying IRC bots. First off, while you are testing your bot and doing development, you should use a channel like #pdxbots, which is specifically meant for bot spam and bot development. Second you don't want to reply to all messages that come through, watch for certain commands or phrases and selectively reply to them. Third, some channels are not bot friendly, so if you don't know if you can have your bot in that channel, ask around first. If they say no, respect it and don't have your bot join.

Now you have the basic tools to building an IRC bot in node. I encourage you to go forth and build really cool things, ping me on IRC when you have your bot doing stuff so I can see it. Thank you for listening to my talk, are there any questions?

Thank you, feel free to seek me out and ask me about my talk, or really anything else IRC or node related.