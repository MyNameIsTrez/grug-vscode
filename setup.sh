#!/bin/bash

# Intended for when deploying a new grug-ls version

# https://github.com/xijnim/grug-ls/releases/download/v0.1.1/grug-ls-aarch64-apple-darwin.tar.xz

set -e
VERSION=$(echo "v0.1.1")

WINDOWS_TARGET=$(echo "x86_64-pc-windows-msvc")
TARGETS=($WINDOWS_TARGET "aarch64-apple-darwin" "x86_64-apple-darwin" $"aarch64-unknown-linux-gnu" "x86_64-unknown-linux-gnu")

if [ -d bin ]; then
    rm -r bin
fi

mkdir bin

get_extension() {
    if [ $1 = $WINDOWS_TARGET ]; then
        echo "zip"
    else
        echo "tar.xz"
    fi
}

for target in "${TARGETS[@]}"
do

    EXTENSION=$(get_extension $target)
    URL=$(echo "https://github.com/xijnim/grug-ls/releases/download/$VERSION/grug-ls-$target.$EXTENSION")
    wget $URL -O "bin/$target.$EXTENSION"


    if [ $EXTENSION = "tar.xz" ]; then
        tar xvf "bin/$target.$EXTENSION" -C "bin"
        # mv "bin/grug-ls-$target/" "bin/$target"
        mv "bin/grug-ls-$target" "bin/$target"
        rm "bin/$target/README.md"
    fi
    if [ $EXTENSION = "zip" ]; then
        unzip "bin/$target.$EXTENSION" -d "bin/$target"
    fi

    rm "bin/$target.$EXTENSION"
done
