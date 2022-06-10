# to-do
To-do app built with `NodeJS`, `Express`, and `Handlebars` as an API. The user can add items to the list, check off items when they are completed, and remove completed items from the list. Everything is stored in the user's session once saved.

### Built HTTP Requests

- `GET /` — Redirects to the `/list` URL using a 303 status code.
- `GET /list` — HTML web page. The main interface for the To-Do application.
- `GET /styles.css` — CSS file. Stylesheet used by the To-Do page.
- `POST /add` — Accepts a URL-encoded form with a parameter named item whose value is the text for the item. The item is added to the end of the list of to-do items. The server then responds by issuing a redirect to the main To-Do web page with a 303 status code.
- `POST /save` — Accepts a URL-encoded form with zero or more parameters named item-N, where N is a number (item-0, item-1, item-2, …). If the value of parameter item-N is "done" then item N in the to-do list will be marked done in the session. (The first item should be item 0.) If not, then item N in the to-do list will not be marked done in the session. The server then responds by issuing a redirect to the main To-Do web page with a 303 status code.
- `POST /remove` — Accepts a URL-encoded form with zero or more parameters named item-N, where N is a number. If the value of parameter item-N is "done" then item N in the to-do list will be removed from the session. If not, then item N will be left in the session and will not be marked done. The items left in the session will have the same relative ordering. The server then responds by issuing a redirect to the main To-Do web page with a 303 status code.

## Instructions
To execute it on your local machine, clone the repository and run
```npm install```
To install the necessary APIs for the application.
```npm run start```
To start the server which should be listening on port `8000` or as specified on `lib/config.js`

## Demo
![todo-demo](https://user-images.githubusercontent.com/83131937/172984915-1a088940-caef-4aa8-8216-31977158c090.gif)
