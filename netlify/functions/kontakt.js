exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  console.log('Saabus vorm:', data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Vorm saadeti edukalt!" }),
  };
};