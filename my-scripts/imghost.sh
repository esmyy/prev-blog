#!/bin/bash

rsync -r public .imghost
find .imghost -name '*.html' | xargs rm
rsync -rvt .imghost/ ../imghost
rm -rf .imghost
cd ../imghost
git add .
git commit -m "feat: update imgs"
git pull -r
git push
