const env = process.env.NODE_ENV || 'development'

function buildConfig(env) {
  console.log('test1')
  console.log(env)
  return require('./config/webpack.' + env + '.js')
}

module.exports = buildConfig(env === 'production' ? 'prod' : 'dev')
