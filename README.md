# Netlify Facebook Proxy Example
This is just a quick test to see how netlify's lambda hosting feature ("functions") would work as a proxy to add an environment variable managed access token to a request behind the scenes.

# Hosting
Currently deployed to https://app.netlify.com/sites/netlify-fb-proxy/

The facebook app token is set in the environment variables on the settings page.

# Running locally
Copy `.env.example` to `.env` and put a valid Facebook app access token into the file.

`npm install`

`npm run start`
