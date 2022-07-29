exports.getHome = async (req, res) => {
  // ERROR
  res.sendFile('../index.html', { root: __dirname });
  //   try {
  //     const data = await
  //     res.status(200).json({
  //         status: 'success',
  //         data: {
  //             res.
  //         }
  //     })
  //   } catch (err) {
  //     res.status(400).json({
  //       status: 'fail',
  //       message: err,
  //     });
  //   }
};
