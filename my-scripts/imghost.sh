#!/bin/bash

scp -r public/ .imghost
rm .imghost/**/*.html
scp -r .imghost/images ../imghost
scp -r .imghost/css ../imghost
scp -r .imghost/2022 ../imghost
scp -r .imghost/2023 ../imghost
rm -rf .imghost

cd ../imghost
git add .
git commit -m "feat: update imgs"
git push
