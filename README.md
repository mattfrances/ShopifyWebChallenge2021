<h1 align="center">Shopify Shoppies</h1>
<h3 align="center">Summer 2021 Frontend Developer Internship Challenge</h3>
<h3 align="center"><a href="https://shoppiesmattfrances.netlify.app/">https://shoppiesmattfrances.netlify.app/</a></h3>

### Description
An app to manage movie nominations. As a user, you can save up to 5 of your favourite films as nominations. You can then share your list with friends! 
<a href="https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit">Click here to view the full description</a>.

### Designs
I began by designing my app to gain a deeper understanding of the functionality, and the user experience I would like to create. Using Figma, I created mockups for both web and mobile. <a href="https://www.figma.com/file/vbWGKHJ52sca5Wk9pMLUOj/TheShoppies?node-id=0%3A1">Click here to view my Figma designs.</a>

### Development
To build the app, I used React as it is fast, scalable and simple to use. For styling, I used Tailwind CSS to keep the codebase clean and easy to read. It was my first time using Tailwind, but found it to be a great developer experience.

### Features
🕵️‍♀️ Search for a movie by title <br>
🍿 Nominate a movie from your search results to add it to your nominations list (max 5 nominations) <br>
🚫 Remove a nomination from your nominations list <br>
😎 Automatically store your nominations in your browser so you can come back to them later <br>
👨‍💻 Share your nominations through link sharing <br>
🌙 Keep your 👀 relaxed at night with dark mode <br>

### I want to run it myself!
You'll need a couple steps to get it up and running locally.
1. Run ```git clone https://github.com/mattfrances/ShopifyWebChallenge2021.git```
2. Open a terminal window in the directory you cloned the repo, and do ```cd ShopifyWebChallenge2021```
3. Run ```npm install```
4. Create a ```.env``` file in the root folder of the project containing the following values:<br>
REACT_APP_OMDb_API_KEY = {{YOUR_OMDb_API_KEY}}<br>
REACT_APP_OMDb_API_URL = https://www.omdbapi.com/<br>
REACT_APP_WEB_HOST = http://localhost:3000/
5. Run ```npm start```
