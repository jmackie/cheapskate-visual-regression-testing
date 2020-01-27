#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

set -x

cleanup() {
  rm -rf ./dist
  docker-compose down 
}
trap cleanup EXIT

../node_modules/.bin/parcel build --out-dir dist ./index.html
docker-compose run --rm screenshot
