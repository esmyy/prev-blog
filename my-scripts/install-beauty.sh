#!/bin/zsh

current_dir=$(cd "$(dirname "$0")" || exit;pwd)
sudo ln -s $current_dir/beauty.ts /usr/local/bin/wo