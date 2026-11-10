# nestjs-ilovepdf

A NestJS library for integrating the iLovePDF REST API directly into NestJS applications.

The library aims to provide a modular, type-safe and maintainable integration with iLovePDF services without relying on the official iLovePDF SDK.

## Project Status

**Early Development — v0.1.0**

This project is currently under development. The API and available features may change before the first stable release.

## Goals

- Provide native integration with NestJS.
- Communicate directly with the iLovePDF REST API.
- Support dependency injection and dynamic module configuration.
- Provide TypeScript types for API requests and responses.
- Handle authentication, API errors and task execution.
- Support asynchronous PDF processing workflows.

## Requirements

- Node.js compatible with NestJS 12
- NestJS 12
- TypeScript

## Installation

The package will be available through npm once the first version is published.

`npm install nestjs-ilovepdf@next`

The installation command above is intended for future beta releases.

## Development

Clone the repository:

`git clone https://github.com/milaz-hub/nestjs-ilovepdf.git`

Install dependencies:

`npm install`

Build the library:

`npm run build`

Run the build in watch mode:

`npm run build:watch`

Run tests:

`npm test`

*Note: The test suite is being set up as part of the initial development.*

## Project Structure

- `src/` — Library source code.
- `dist/` — Compiled JavaScript and TypeScript declarations.
- `test/` — Automated tests.
- `package.json` — Package metadata and dependencies.
- `tsconfig.json` — TypeScript configuration.

## Roadmap

- [ ] NestJS module setup
- [ ] Dynamic module configuration
- [ ] REST API client
- [ ] Authentication and token management
- [ ] PDF processing operations
- [ ] Error handling
- [ ] Unit and integration tests
- [ ] API documentation
- [ ] npm publishing with GitHub Actions

## Security

Never commit API credentials, access tokens or environment files containing secrets.

## License

ISC License.