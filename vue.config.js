module.exports = {
  devServer: {
      // This will forward any request that does not match a static file to localhost:3000
      proxy: 'http://localhost:8080'
  }
}
// {
//   publicPath: '/On-Trucks/'
// }
// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:4000'
//   }
// }