# SilverStripe GraphQL Demo App

## Overview

This app demonstrates how to use [GraphQL](http://graphql.org)
with the [SilverStripe CMS](http://silverstripe.org).
It provides a scaffolded management UI for it's domain model,
and reuses built-in CMS features such as image upload
and user management.

## Features

 * Minimal CMS installation for headless operation (no rendering of page content)
 * GraphQL server through [silverstripe/graphql](http://github.com/silverstripe/silverstripe-graphql)
 * GraphiQL viewer through [silverstripe/graphql-devtools](http://github.com/silverstripe/silverstripe-graphql-devtools)
 * Easy startup through PHP's built in webserver (via [silverstripe/serve](https://github.com/silverstripe/silverstripe-serve))
 * Easy database setup through file-based [silverstripe/sqlite3](https://github.com/silverstripe/silverstripe-sqlite3), no need to install MySQL
 * Frontend bootstrapped by [Create React App](https://github.com/facebookincubator/create-react-app)
 * [react-apollo](http://dev.apollodata.com/react) for GraphQL client support
 * [Material UI](https://material-ui-next.com) for styling

## Install

```
git clone https://github.com/chillu/silverstripe-graphql-react-demo-app.git my-app
cd my-app
(cd server && composer install)
(cd client && npm install)
```

Create an [environment config](https://docs.silverstripe.org/en/4/getting_started/environment_management/)
matching your server configuration (adjust settings accordingly).
Save it to `server/.env`.

```
SS_ENVIRONMENT_TYPE="dev"
SS_DATABASE_CLASS="SQLite3Database"
SS_DATABASE_NAME="SS_graphql_demo"
SS_DEFAULT_ADMIN_USERNAME="admin"
SS_DEFAULT_ADMIN_PASSWORD="admin"
```

If you want to prepopulate the database with default data, run the following command:

```
cp data/db/SS_graphql_demo.sqlite assets/.sqlitedb/SS_graphql_demo.sqlite
cp -R data/assets/ assets
```

## Start

Start the SilverStripe GraphQL stack (runs on `http://localhost:3001`):

```
(cd server && composer run serve)
```

Start the React dev server (runs on `http://localhost:3000`):

```
(cd client && npm start)
```

View the app at `http://localhost:3000`,
and browse the CMS at `http://localhost:3001/admin`.

## Usage

 * Add users through `http://localhost:3001/admin/security`.
 * Add dogs and breeds through `http://localhost:3001/admin/dogapp`.
