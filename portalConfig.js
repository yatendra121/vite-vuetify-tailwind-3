/* eslint-disable node/no-path-concat */
const fs = require('fs')
const dotenv = require('dotenv')
if (!fs.existsSync(__dirname + '/.env')) {
  throw Error('.env File is not present')
}
const environment = fs
  .readFileSync(__dirname + '/.env', 'utf8')
  .toString()
  .trim()
function getPortalConfig(portal, environment) {
  // Geting environment Veriables
  const environmentBuff = fs.readFileSync(
    __dirname + '/.env.' + environment,
    'utf8'
  )
  const environmentVeriables = dotenv.parse(environmentBuff)

  // const args = minimist(process.argv.slice(2));
  // const portal = args.portal;
  const envFileName = portal
    ? '.env.' + portal + '.' + environment
    : '.env.' + environment
  if (!fs.existsSync(__dirname + '/' + envFileName)) {
    throw Error(envFileName + ' File is not present')
  }
  // Geting Portal environment Veriables
  const portalEnvironmentBuff = fs.readFileSync(
    __dirname + '/' + envFileName,
    'utf8'
  )
  const portalEnvironmentVeriables = dotenv.parse(portalEnvironmentBuff)

  return {
    ...environmentVeriables,
    ...portalEnvironmentVeriables
  }
}
fs.readdir('./portals', function (err, files) {
  const configs = {}
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }

  //listing all files using forEach
  files.forEach(function (file) {
    const portal = file.split('.').slice(0, -1).join('.')
    if (file !== 'index.ts') {
      const portalConfig = require('./portals/' + file)
      const portalEnvironmentConfig = getPortalConfig(portal, environment)
      configs[portal] = {
        ...portalEnvironmentConfig,
        ...portalConfig
      }
    }
  })
  fs.writeFile(
    './portals/index.ts',
    'const data = ' + JSON.stringify(configs) + '\n export default data;',
    'utf8',
    function () {}
  )
})
