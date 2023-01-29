const express = require('express');
const app = express();
const server = require('http').createServer(app);
const say = require('say');
const fs = require('fs');
say.getInstalledVoices(function(err, voices) {
    console.log(voices);
});

process.on('uncaughtException', function(err) {
    console.log(err);
});
app.get("/", function (request, response) {
    console.log("Request received:\n" + request.query.name + "\n" + request.query.text);
    const name = decodeURIComponent(request.query.name);
    const text = decodeURIComponent(request.query.text);
    say.export(text, name, 1, 'text.wav', async (err) => {
        if (err) {
            console.log("Error while converting text to speech")
            console.log(err);
            console.log("Sending error audio file");
            response.writeHead(200, {'Content-Type': 'audio/wav'});
            response.end(await fs.readFileSync('error.wav'));
            console.log("Audio file sent");
            return 
        }
        console.log("Text to speech complete");
        console.log("Sending audio file");
        response.writeHead(200, {'Content-Type': 'audio/wav'});
        response.end(await fs.readFileSync('text.wav'));
        console.log("Audio file sent");
})
});
server.listen(1000);