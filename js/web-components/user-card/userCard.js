const template = document.createElement("template");
template.innerHTML = `
  <style>
    .user-card {
      box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.1);
      width: 200px;
      height: 300px;
      padding: 12px;
      margin: 12px;
      border-radius: 4px;
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }
    img {
      border-radius: 4px;
    }
    h3 {
      color: purple;
    }
    button {
      background-color: purple;
      border: none;
      box-shadow: none;
      padding: 6px;
      border-radius: 4px;
      color: white;
    }
  </style>
  <div class="user-card">
    <img />
    <div>
      <h3></h3>
      <div class="info">
        <p><slot name="email" /></p>
        <p><slot name="phone" /></p>
      </div>
      <button id="toggle-info">Hide Info</button>
    </div>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true
    const name = this.getAttribute("name");
    const avatar = this.getAttribute("avatar");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerHTML = name;
    this.shadowRoot.querySelector("img").src = avatar;
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    const info = this.shadowRoot.querySelector(".info");
    const toggleInfo = this.shadowRoot.querySelector("#toggle-info")

    if (this.showInfo) {
      info.style.display = "block";
      toggleInfo.innerHTML = "Hide Info";
    } else {
      info.style.display = "none";
      toggleInfo.innerHTML = "Show Info";
    }
  }

  connectedCallback() {
    const toggleInfo = this.shadowRoot.querySelector("#toggle-info");
    toggleInfo.addEventListener("click", () => this.toggleInfo());
  }

  disconnectedCallback() {
    const toggleInfo = this.shadowRoot.querySelector("#toggle-info");
    toggleInfo.removeEventListener("click", () => this.toggleInfo());
  }
}

window.customElements.define("user-card", UserCard);
