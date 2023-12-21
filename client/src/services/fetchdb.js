export const fetchdb = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return(data);
  } catch (error) {
    console.log(error);
  }
};
