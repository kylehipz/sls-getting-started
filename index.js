module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "HELLO WORLD!!!!",
      },
      null,
      2
    ),
  };
};
