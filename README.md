# Slade web art session

<img src="https://www.researchgate.net/profile/Jean-Paul-Fourmentraux/publication/37759256/figure/fig1/AS:394379555557380@1471038821368/Index-dun-dispositif-de-Jodi-Page-derreur-Error-404-Il-est-ici-possible.png">

## Examples taken from:
P5.js - sketches- https://p5js.org/examples/ & https://showcase.p5js.org/#/2020-All

ML5.js - machine learning built on P5.js - https://ml5js.github.io/ml5-examples/public/

Three.js - 3D webGL - https://threejs.org/examples/

A-Frame - library for AR/VR - https://aframe.io/aframe/examples/

Tone.js - web audio - https://tonejs.github.io/examples/ & 
https://github.com/Tonejs/Tone.js/tree/dev/examples

## API's
List of thousands of public API's in catagory https://github.com/public-apis/public-apis \
With links https://github.com/corgicode/public-example-apis \
Rapid API - test API requests https://rapidapi.com/marketplace \
APIs with no Auth/keys required - https://apipheny.io/free-api/ & https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

Twitter https://developer.twitter.com/en/docs \
Google Maps https://developers.google.com/maps/documentation/javascript/overview \
Twilio (phone & text messages) - https://www.twilio.com/ \
Webcams - https://api.windy.com/webcams \
TFL - https://api.tfl.gov.uk/

Machine Learning:\
[IBM Watson](https://www.ibm.com/watson/developer)\
[Microsoft](https://azure.microsoft.com/en-gb/services/cognitive-services/computer-vision/)\
[Google](https://cloud.google.com/products/ai)



## Running
To run these examples you need to start a local server - you can click on a .html file however it is unlikely to display properly as it cant handle external sources.

In terminal navigate to your directory using `cd <directory>`

Running `npm install -g live-server` & then `live-server` in a terminal in the same directory as your HTML file. This method will auto-update.

Another method using python (although it wont auto-update) is - `python -m SimpleHTTPServer` (or `python -m http.server` for Python 3) in a terminal in the same directory as your HTML file.

Edit using a code editor such as VS Code, Sublime Text or Atom.


## Setup
On mac you may need to install command line tools to use Python and Git.
`xcode-select --install`

to install `npm` you need to use homebrew https://brew.sh/

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

and then node https://treehouse.github.io/installation-guides/mac/node-mac.html

`brew install node`

Download this github repo\
`cd <dir_where_you_want_it>`\
`git clone https://github.com/jakeelwes/sladeweb/`

## Making GHPages - free web hosting

Sign up to GitHub\
Make new repository called `<username>.github.io`\
Clone the repo to computer\
`git clone https://github.com/<username>/<username>.github.io.git`\
Build your website - make sure it has an `index.html`\
Update using:
  ```
  git add .
  git commit -m "message"
  git push
  ```
  
Check it's live in settings/pages - and by going to website
 
You can also turn any GitHub repo (with any name not just `<username>.github.io`) into free webhosting by buying a domain, updating the records for your domain, and attaching a `custom domain` in settings/pages.
https://richpauloo.github.io/2019-11-17-Linking-a-Custom-Domain-to-Github-Pages/

