export const enviarDB = async (data,url) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
