export const gateKeeper = (history) => {
  const token = window.localStorage.getItem("token");

  if (token === null) {
    history.push("/login");
  }
};
