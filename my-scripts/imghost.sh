#!/bin/bash

rsync -r public/ .imghost
find .imghost -name '*.html' | xargs rm
find .imghost -maxdepth 4 -type d -empty | xargs rm -rf;
find .imghost -maxdepth 3 -type d -empty | xargs rm -rf;
find .imghost -maxdepth 2 -type d -empty | xargs rm -rf;
find .imghost -maxdepth 1 -type d -empty | xargs rm -rf;
rsync -rv .imghost/ ../imghost
rm -rf .imghost
cd ../imghost
git add .
git commit -m "feat: update static"
git pull -r
git push
