const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    "**/*[sS]pec.js"
  ],
});

jasmine.execute();