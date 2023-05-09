const { Client, Intents } = require('discord.js');
const request = require('request');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('!lyrics')) {
    // Extract the song name from the message
    const songName = msg.content.split('!lyrics ')[1];

    // Make a request to the Musixmatch API to get the lyrics
    const url = `https://api.musixmatch.com/ws/1.1/track.search?q_track=${songName}&apikey=1f51e2ccb4891349df5fec5469d82cd9`;
    request(url, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        msg.reply('Sorry, something went wrong.');
        return;
      }

      const data = JSON.parse(body);

      // Extract the track ID from the response
      const trackId = data.message.body.track_list[0].track.track_id;

      // Make another request to the Musixmatch API to get the lyrics for the track
      const url2 = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=1f51e2ccb4891349df5fec5469d82cd9`;
      request(url2, (error2, response2, body2) => {
        if (error2 || response2.statusCode !== 200) {
          msg.reply('Sorry, something went wrong.');
          return;
        }

        const data2 = JSON.parse(body2);

        // Extract the lyrics from the response
        const lyrics = data2.message.body.lyrics.lyrics_body;

        // Send the lyrics back to the Discord channel
        msg.channel.send(`Lyrics for ${songName}:\n${lyrics}`);
      });
    });
  }
});

client.login('MTEwNTM1NTgxNTkwNjQ1OTY3MA.GazUnJ.C1r5MEdwbJur2dJcI8_r-e-FYaOXz0N0KWg6Js');
