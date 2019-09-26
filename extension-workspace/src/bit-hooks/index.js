const fs = require('fs');
const path = require('path');
let logger;
const FILE_NAME = 'events.log';

const hooks = {
  init: ({rawConfig, dynamicConfig, api}) => {
    logger = api.getLogger();
    api.registerActionToHook('pre-tag', { name: 'preTagHook', run: runPreTagHook});
    api.registerActionToHook('pre-export', { name: 'preExportHook', run: runPreExportHook});
  }
}

const runPreTagHook = (args, headers) => {
  _writeToLog('pre-tag', args);
}

const runPreExportHook = (args, headers) => {
  _writeToLog('pre-export', args);
}

const _writeToLog = (hookName, args) => {
  // Do whatever you want here
  const filePath = path.join(process.cwd(), FILE_NAME);
  const data = `---------------------------------
${new Date(Date.now()).toLocaleString()}
${hookName} was triggered with args:
${JSON.stringify(args, null, 2)}
---------------------------------`
  if (!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, data);
  }
  fs.appendFileSync(filePath, data);
};

module.exports = hooks;