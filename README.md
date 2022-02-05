<h1 align="center">
    <img src="https://i.imgur.com/dvKyt0B.png" width="120"/>
    <br>
    📊 Engineering Dashboard
</h1>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

This project requires a recent version of **node** and **yarn**. It's suggested
to use [Volta](https://volta.sh/) to simplify the development process.

```bash
# install Volta
curl https://get.volta.sh | bash

# install required versions
volta install node@16.13.1
volta install yarn@1.22.11
```

Thanks to its [pinning mechanism](https://docs.volta.sh/reference/pin), Volta
will know which version to use in Spaceship. The current versions of Node and
Yarn used by Spaceship are available [here](package.json).

You can also manage node and yarn with NVM and YVM. Please refer to the versions
pinned [here](package.json).

## Getting started

```bash
# Install all dependencies
yarn
# Start everything in dev mode
yarn dev
```
