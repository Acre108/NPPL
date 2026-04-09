#!/usr/bin/env bash
set -euo pipefail

# npm@11 warns on npm_config_http_proxy; normalize environment variables.
unset npm_config_http_proxy || true

if [[ -n "${HTTP_PROXY:-}" && -z "${npm_config_proxy:-}" ]]; then
  export npm_config_proxy="$HTTP_PROXY"
fi
if [[ -n "${HTTPS_PROXY:-}" && -z "${npm_config_https_proxy:-}" ]]; then
  export npm_config_https_proxy="$HTTPS_PROXY"
fi

export npm_config_registry="${NPM_REGISTRY:-https://registry.npmjs.org/}"

echo "Using npm registry: $npm_config_registry"

if ! npm install; then
  echo
  echo "npm install failed."
  echo "If you are on a restricted network, set an allowed registry and retry:"
  echo "  NPM_REGISTRY=https://<your-org-registry>/ npm run bootstrap"
  exit 1
fi
