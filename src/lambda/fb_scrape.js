import fetch from "node-fetch";
const { URLSearchParams } = require('url');

exports.handler = async (event, context) => {

    const imageName = event.queryStringParameters.imageName || "";
    const userName = event.queryStringParameters.userName || "";

    const scrapeUrl = `http://www.ourhands.org/?`+
      `image=${encodeURIComponent(imageName)}` +
      `&name=${encodeURIComponent(userName)}`;

    const API_ENDPOINT = `https://graph.facebook.com?scrape=true&access_token=${process.env.FACEBOOK_ACCESS_TOKEN}&id=${encodeURIComponent(scrapeUrl)}`;

    return fetch(API_ENDPOINT, { method: 'POST',  body: JSON.stringify(scrapeUrl) })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify(data)
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
