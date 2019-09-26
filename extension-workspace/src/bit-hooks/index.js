const fs = require('fs');
const path = require('path');
let logger;
const FILE_NAME = 'events.log';

const hooks = {
  init: ({rawConfig, dynamicConfig, api}) => {
    logger = api.getLogger();
    api.registerActionToHook('pre-tag', { name: 'preTagHook', run: runPreTagHook});
  }
}

const runPreTagHook = (args, headers) => {
  // Do whatever you want here
  const filePath = path.join(process.cwd(), FILE_NAME);
  const data = `---------------------------------
${new Date(Date.now()).toLocaleString()}
pre-tag was triggered with args
${JSON.stringify(args, null, 2)}
---------------------------------`
  if (!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, data);
  }
  fs.appendFileSync(filePath, data);
};

module.exports = hooks;