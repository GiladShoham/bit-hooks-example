const fs = require('fs');
const path = require('path');
let logger;
const FILE_NAME = 'events.log';

const hooks = {
  init: ({rawConfig, dynamicConfig, api}) => {
    logger = api.getLogger();
    api.registerActionToHook('pre-tag', { name: 'preTagHook', run: runExportWebHook});
  }
}

const runPreTagHook = (args, headers) => {
  // Do whatever you want here
  const filePath = path.join(process.cwd, FILE_NAME);
  const data = `---------------------------------
${new Date(Date.now()).toLocaleString();}
pre-tag was triggered with args
${args}
---------------------------------`
  if (!fs.existsSync(filePath)){
    fs.writeFile(filePath, data);
  }
  fs.appendFileSync(filePath, data);
};

module.exports = hooks;