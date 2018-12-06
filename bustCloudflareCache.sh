#!/bin/bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/0d8f1f112cd48359f9f030284b181a9e/purge_cache" \
     -H "X-Auth-Email: eliot@traject.nz" \
     -H "X-Auth-Key: go get your own key from cloudflare" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}'