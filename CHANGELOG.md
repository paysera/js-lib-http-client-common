# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.6.3]
### Fixed
- `JWTAuthenticationMiddleware.onResponseError` do not repeat request if there is no `jwtAuthenticationConfig`

## [2.6.1]
### Changed
- create of `cancellationTokenSource` moved a little below
- when `JWTAuthenticationMiddleware.onResponseError` calls `resendRequest`, it provides only necessary data

## [2.6.0]
### Added
- `File` entity was added

## [2.5.0]
### Added
- `ClientWrapper` methods now returns Promise with custom property `cancellationTokenSource`. Use it to cancel pending promise, see: https://github.com/axios/axios#cancellation

### Fixed
- `createClient` now sets `maxRedirects` to 0

## [2.4.0]
### Added
- `performBaseRequest` returns full response

### Changed
- `createRequest` expanded to support object without entity
