# Demo of Yarn 1 vs. 2 node_modules installs

This repo has the same project twice, once installed with Yarn 1 and once with Yarn 2 + the node-modules linker.

## How to try

Install `packages-v1`:

```bash
# Initial, slow installation with a cold cache
cd packages-v1
yarn

# Remove node_modules recursively
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

# Install again with warm cache
yarn
```

Then do the same in `packages-v2`.

The times I'm seeing are:

- `packages-v1`: **~60 seconds**
- `packages-v2`: **~40 seconds**
