# CSRF Lab
Can **you** do CSRF across origins?

## What does this test?
This tests for a browser's handling of form data as it's being passed across origins in an attempt to perform CSRF attacks. If the browser passes the data to its destination for these labs, it's possible that this browser will allow CSRF attacks on applications that don't adequately protect themselves from these types of attacks.

## Pre-Requisites
- Node.js / NPM (Node Package Manager)
- [micro](https://github.com/zeit/micro) (globally)
- [http-server](https://github.com/http-party/http-server) globally

## How to do the lab
**[0]** Clone this repository.  
**[1]** Open three terminal windows located in this directory.  
**[2]** In the first, execute `hs -c-1 -p 3000 .`. This will start an HTTP server that will serve the `index.html` page from which requests to `localhost:5000` will be made.  
**[3]** In the second window, enter the `5000` directory and execute `micro -l tcp://localhost:5000 index.js`. This will start another HTTP server that will redirect requests made to it from `localhost:3000` to `localhost:7000`.  
**[4]** In the third window, enter the `7000` directory and execute `micro -l tcp://localhost:7000 index.js`. This will start another HTTP server that will act as the target server API.  
This is what the three commands can look like side by side.
![terminal examples](https://raw.githubusercontent.com/aunyks/csrf-lab/master/csrf-test.png)
If requests from `localhost:3000` reach `localhost:7000` via redirection from `localhost:5000`, the browser will let you forge certain requests across origins.  
**[5]** In your favorite browser, visit `localhost:3000` and submit one of the forms to observe effects in the terminals.

## This makes no sense.
Yeah, it's really for me to learn. [Let me know](https://aunyks.com/social) if you have questions.

