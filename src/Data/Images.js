function importAll(r) {
     return r.keys().map(r);
}
   
const Images = importAll(require.context('../images/Life', false, /\.(png|jpeg|jpg|svg)$/));

export default Images;