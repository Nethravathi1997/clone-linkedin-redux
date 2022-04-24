const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const router1 = jsonServer.router('./feeds.json');
const middlewares = jsonServer.defaults({
    static: './build'
});
const PORT = process.env.PORT || 8000;
const PORT1 = process.env.PORT || 8001;
server.use(middlewares);

server.use(jsonServer.rewriter({
    '/api/*': '$1',
}))
server.use(router);
server.listen(PORT, () => {
    console.log('server is running')
})
server.use(router1);
server.listen(PORT1, () => {
    console.log('server1 is running')
})