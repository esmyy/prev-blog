#!/bin/bash

cd themes/esmyy/source/js
rollup hexoHelpers.js --file hexoHelpers.umd.js -f umd --output.name hexoHelpers
cd ../../../../
NODE_ENV=production hexo generate
cp CNAME public