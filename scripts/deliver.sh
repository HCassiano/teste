echo "executing page"
set +x
node main.js &
sleep 1
echo $! > .pidfile
set -x