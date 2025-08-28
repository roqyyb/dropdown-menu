import "./style.css";

const content = [
  {
    id: 1,
    text: "Link 1",
  },
  {
    id: 2,
    text: "Link 2",
  },
  {
    id: 3,
    text: "Link 3",
  },
];

function DropdownMenu(text = "Dropdown Menu", content) {
  const element = document.createElement("div");
  element.classList.add("dropdown");

  //  button
  const dropdownBtn = document.createElement("button");
  dropdownBtn.textContent = text;
  dropdownBtn.classList.add("dropdown-btn");

  element.appendChild(dropdownBtn);

  // content
  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");
  content.forEach((item) => {
    const { id, text } = item;
    const dropItem = document.createElement("a");
    dropItem.classList.add("dropdown-item");
    dropItem.setAttribute("id", id);
    dropItem.textContent = text;

    dropdownContent.appendChild(dropItem);
  });

  //final stuff
  element.appendChild(dropdownContent);

  return element;
}

function App() {
  const app = document.createElement("div");

  app.appendChild(DropdownMenu("Click Me", content));

  return app;
}

document.body.appendChild(App());
