const restify = require('restify');
const server = restify.createServer();
const count = {count: 0};
server.get('/lb', (req, res) => {
    setTimeout(() => {
        count.count++;
        console.log('count:', count.count);
        res.send('ok');
    }, 2000)

});

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});