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

- `packages-v1`: **~25 seconds**
- `packages-v1`: **~40 seconds**

There are also significant differences in the sizes of node_modules installed, and their count:

<img width="1145" alt="Screenshot 2020-09-02 at 22 54 47" src="https://user-images.githubusercontent.com/101152/92035655-51568980-ed6f-11ea-9685-3761a8dcb4b1.png">

What is also quite common is that the v2 installs contain nested `node_modules` where v1 don't:

<img width="1145" alt="Screenshot 2020-09-02 at 22 57 55" src="https://user-images.githubusercontent.com/101152/92035994-de014780-ed6f-11ea-9872-e749d427b3b5.png">

My guess is that it's somehow related to a more reliable implementation of Yarn 2 n_m linker but it's just a guess.
