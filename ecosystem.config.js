module.exports = {
    apps: [
      {
        name: 'server',
        script: 'server.js',
        instances: 0,
        exec_mode: 'cluster',
      },
    ],
  };
  