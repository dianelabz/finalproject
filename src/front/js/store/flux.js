const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      home: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      getHome: () => {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
            "X-RapidAPI-Key":
              "2a81b6b994msh1264d57c9205c2ep164af6jsndcbec52c6734",
            "Access-Control-Allow-Origin": "*",
          },
        };

        fetch(
          "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en",
          options
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result.results);
            setStore({ home: result.results });
          })
          .catch((err) => console.error(err));
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
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
