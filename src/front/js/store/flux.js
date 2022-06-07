const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isAuth: localStorage.getItem("isAuth"),
      isAuth: false,
      user:
        localStorage.getItem("user") == null
          ? {}
          : JSON.parse(localStorage.getItem("user")),
    },
    actions: {
      onSubmit: (e, user, history) => {
        e.preventDefault();
        fetch(process.env.BACKEND_URL + "/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            password: user.password,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            if (data.msg === "¡Bienvenid@ a Watchpo!") {
              localStorage.setItem("user", JSON.stringify(data.user));
              setStore({
                isAuth: true,
                user: data.user,
              });
              history.push("/");
            }
            if (typeof data == "object") {
              console.log(data);
              alert(data["msg"]);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      },
      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
