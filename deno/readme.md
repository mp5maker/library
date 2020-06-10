* curl -fsSL https://deno.land/x/install/install.sh | sh

export DENO_INSTALL="/home/[user]/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

deno run --allow-read --allow-write sandbox.ts
deno run --allow-read --allow-net fetch.ts

deno run --allow-read --allow-write --unstable fs.ts
deno run --allow-read --allow-write --allow-net --unstable http.ts