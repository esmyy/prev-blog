#!/bin/bash

cd themes/esmyy/source/js
rollup helpers.js --file helpers.umd.js -f umd --output.name ss

NODE_ENV=production hexo generate
