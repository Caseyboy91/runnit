![Logo](https://i.imgur.com/1azMvM6.png)

# Runnit

By scanning a QR code or NFC tag at a concert/event venue, you will be able to purchase drinks, concessions, and merchandise, through a mobile-view website, and have these items either delivered to your seat or picked up at will call by you.

## Authors

- [@caseyboy91](https://github.com/Caseyboy91)

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/caseydavis91/)

## Tech Stack

**Client:** React, Sass, Bootstrap, Axios

**Server:** Node, Express, Stripe

## Support

For support, email contact@werunnit.com

## Screenshots

Home Page:
![App Screenshot](https://i.imgur.com/CgqhCdt.jpg)

Items Page:
![App Screenshot](https://i.imgur.com/IrgWBve.jpg)

Cart:
![App Screenshot](https://i.imgur.com/evqalfM.jpg)

Stripe Payment Page:
![App Screenshot](https://i.imgur.com/m2rHH4u.jpg)

Success Page:
![App Screenshot](https://i.imgur.com/4RoEFAT.jpg)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env files

On Server Side:
`PORT` will need to be defined for the server to listen on.

On Client Side:
`REACT_APP_BASE_API_URL` will need to be set. Example: http://localhost:

`REACT_APP_API_PORT` will need to be set to the same `PORT` as the server.

Create a `proxy` with the full url in `package.json` file.
Example: `http://localhost:5050`. This will help with some connection issues.

## Run Locally

Clone the project

Client:

```bash
  git clone https://github.com/Caseyboy91/runnit
```

Server:

```bash
  git clone https://github.com/Caseyboy91/runnit-api
```

Go to the project directory

Client:

```bash
  cd client
```

Server:

```bash
  cd server
```

Install dependencies

Client:

```bash
  npm install
```

Server:

```bash
  npm install
```

Start the app

Client

```bash
  npm run start
```

Server

```bash
  npm run dev
```

App is best enjoyed in mobile view.

## Roadmap

- Profiles

- Age Verification

- ID Verification

- Facial Verification

- Back-end POS system

- Geolocation

## Feedback

If you have any feedback, please reach out to us at contact@werunnit.com
