[![Code Review](https://github.com/e0402/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/e0402/social-media-client/actions/workflows/gpt.yml)
[![Automated Unit Testing](https://github.com/e0402/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/e0402/social-media-client/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/e0402/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/e0402/social-media-client/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/e0402/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/e0402/social-media-client/actions/workflows/pages.yml)

# Workflow CA, Social Media Client - Eirik Broll Stalheim

### Prettier/ESlint

Configured to run on commit.

### Unit testing (Jest) & E2E testing (Cypress)

Only two functionalities are tested, login and logout. These tests must run successfully before the working branch (worflow) can be merged to the default branch (master). Project will also build and deploy to pages when merged.
