export const enviarDB = async (data,url,metodo) => {
  try {
    const response = await fetch(url, {
      method: metodo ? metodo : "POST",
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
