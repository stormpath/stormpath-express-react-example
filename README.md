# Stormpath React + Express Fullstack Example Project

This repository is an example fullstack web application using React on the
front-end and Express.js as your back-end server. It uses [express-stormpath][]
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

## 3. Gather Stormpath Configuration

You'll need to [Download an API Key Pair](https://docs.stormpath.com/rest/product-guide/latest/quickstart.html#create-an-api-key-pair) from the [Stormpath Admin Console][], and find the **Application Href** (also called **REST URL**) of the Application that you will use for your project. The default application is called "My Application" and you can use that to get started.

## 4. Provide Configuration To Your Application

Provide the **API Key ID**, **API Key Secret**, and **Application Href** to your environment, with one of these strategies:

**Unix Environment Variables:**

```bash
export STORMPATH_CLIENT_APIKEY_ID=YOUR_ID_HERE
export STORMPATH_CLIENT_APIKEY_SECRET=YOUR_SECRET_HERE
export STORMPATH_APPLICATION_HREF=YOUR_APP_HREF
```

**Windows Environment Variables:**

```bash
set STORMPATH_CLIENT_APIKEY_ID=YOUR_ID_HERE
set STORMPATH_CLIENT_APIKEY_SECRET=YOUR_SECRET_HERE
set STORMPATH_APPLICATION_HREF=YOUR_APP_HREF
```

**Place them in a file named `stormpath.yml`, in the directory where you run the dev server:**

```yaml
client:
  apiKey:
    id: YOUR_API_KEY_ID
    secret: YOUR_API_KEY_SECRET
application:
  href: https://api.stormpath.com/v1/applications/XXXX
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

## Support

We're here to help if you get stuck.  There are several ways that you can get in touch with a member of our team:

* Send an email to [support@stormpath.com](mailto:support@stormpath.com)
* Open a Github Issue on this repository.
* Join us on our Slack channel: [https://talkstormpath.shipit.xyz/](https://talkstormpath.shipit.xyz/)

[Node.js]: https://nodejs.org
[Stormpath]: https://stormpath.com
[Stormpath Admin Console]: https://api.stormpath.com
[stormpath-sdk-react]: https://github.com/stormpath/stormpath-sdk-react
[express-stormpath]: https://github.com/stormpath/express-stormpath
