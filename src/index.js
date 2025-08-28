import _ from "lodash";

function App() {
  const app = document.createElement("div");

  app.innerHTML = _.join(["Dropdown", "Menu"], " ");

  return app;
}

document.body.appendChild(App());
