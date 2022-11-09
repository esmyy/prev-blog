#!/bin/bash

cp -rf public .imghost
rm .imghost/**/*.html

cp -rf .imghost/images .imghost/2022 ../imghost
cd ../imghost
git add .
git commit -m "feat: update imgs"
git push
cd ../mayueyue.com