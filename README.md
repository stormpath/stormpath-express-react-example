# Stormpath React + Express Fullstack Example Project

This repository is an example fullstack web application, using React on the
front-end and Express.js as your back-end server.  It uses [express-stormpath][]
and [stormpath-sdk-react][] to authenticate users, protect your server API,
and render default login and registration screens in your React application.

## 1. Getting Started

To run this example project on your local computer, you will need to have
[Node.js][] installed and a [Stormpath][] tenant account.
If you don't have a Stormpath account, sign up for a free account at [https://api.stormpath.com/register](https://api.stormpath.com/register).

## 2. Installation

Clone this repository, then using a terminal, navigate to the directory and run the following:

```bash
$ npm install
```

## 3. Configuration

In the application directory, create a file named `stormpath.yml` and
place the configuration below in the file:

```yaml
client:
  apiKey:
    id: YOUR_API_KEY_ID
    secret: YOUR_API_KEY_SECRET
application:
  href: https://api.stormpath.com/v1/applications/XXXX <-- YOUR APP HREF
```

## 4. Usage

To start the server, run this command in the folder:

```bash
$ npm start
```

If the server is able to start with your configuration, you will see this in
your terminal:

```bash
Stormpath Ready
Application running at http://localhost:3000
```

The application should now be running in your browser at [http://localhost:3000](http://localhost:3000).

You can get your API Keys and Application HREF from the
[Stormpath Admin Console][].

[Node.js]: https://nodejs.org
[Stormpath]: https://stormpath.com
[Stormpath Admin Console]: https://api.stormpath.com
[stormpath-sdk-react]: https://github.com/stormpath/stormpath-sdk-react
[express-stormpath]: https://github.com/stormpath/express-stormpath
