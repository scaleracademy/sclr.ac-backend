# sclr.ac-backend

Backend for sclr.ac URL shortner

This server itself is implemented in [Node.js](https://nodejs.org/en/) using [MongoDB](https://www.mongodb.com/try/download)

## Running the Server

If you wish to run the server, the first step is installing [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/try/download/community).

Once that's out of the way, open a terminal, navigate to the project's directory and run:

```bash
npm install
```

to install said dependencies.

The server is now ready to run. Simply point a terminal to the project's folder and run:

```bash
node server.js
```

#### Process Environment Variables :

- `DB_URI` : It refers to cloud DB hosted link.
- `PORT` : It refers to the PORT number at which the server is hosted on.

#### Dependencies :

- [express.js](https://expressjs.com/en/starter/installing.html)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [mongoose](https://www.npmjs.com/package/mongoose)

## Working of Backend

#### Make a request to get Short URL

- Make a `POST` request on the path below to
  > /generate
- Strcture of the request `body` look like

  ```json
  {
    "url": "<Full URL path sen by the user>",
    "shortCode": "<a custom shortcode, if any>"
  }
  ```

  Here, the `shortCode` is optional to send. If the request includes a custom short code, then in response it will return a short URL of their custom short code.

  - If we provide a shortcode as `google` for `https://www.google.com` and if the shortcode doesn't points to other URL, it returns :
    ```json
    {
      "status": "Success",
      "shortCode": "google"
    }
    ```
    If the shortcode already points to a different URL, then it returns :
    ```json
    {
      "status": "Error",
      "shortCode": "Custom URL already exists"
    }
    ```
  - If we don't provide a shortcode for the same URL as above, it returns :
    ```json
    {
      "status": "Success",
      "shortCode": "x5WzK"
    }
    ```
    where, `x5Wzk` is some random string of length 5 create by the server.

#### Make a request to redirect to the origin page from the short URL

- Make a `GET` request on the path below :

  > /{shortCode}

  Here, `shortCode` is used as a path param to extract the short code from the short URL.

- If the shortcode extracted from the short URL points to any long URL in the database, then it redirects it to the path of long URL.<br>And if the shortcode doesn't points to any URL in the database, then it returns :
  ```json
  {
    "status": "Error",
    "description": "No such URL found"
  }
  ```

## LICENSE

See the [LICENSE](LICENSE) file for info.
