module.exports = (function () {
    let redis = {};
    switch (process.env.NODE_ENV) {
        case 'dev':
            redis.host = '101.200.161.32';
            redis.port = '6379';
            redis.option = {
                connect_timeout: 5000,
                auth_pass: '87ruxszzg5',
                retry_strategy(options) {
                    console.log(options);
                },
            };
            break;
        default:
            redis.host = '127.0.0.1';
            redis.port = '6379';
            redis.option = {
                connect_timeout: 5000,
                // auth_pass: 'ecarlife121',
                retry_strategy(options) {
                    console.log(options);
                },
            };
            break;
    }
    return redis;
}());