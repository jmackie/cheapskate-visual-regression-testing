#!/usr/bin/env bash

# Generates the `.screenshots` directory

set -euo pipefail
IFS=$'\n\t'

set -x

cleanup() {
  rm -rf ./dist
  docker-compose down
}
trap cleanup EXIT

../node_modules/.bin/parcel build --out-dir dist ./index.html

mkdir -p latest-screenshots # otherwise docker creates it, which makes it hard to remove :/

docker-compose build
docker-compose run --rm screenshot
