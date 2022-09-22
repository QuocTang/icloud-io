const environment = "local";
let url;

if (environment === "local") {
  url = "https://6289c2e4e5e5a9ad321cc715.mockapi.io/api/user";
} else if (environment === "proc") {
  url = process.env.REACT_APP_URL;
}

export default url;
