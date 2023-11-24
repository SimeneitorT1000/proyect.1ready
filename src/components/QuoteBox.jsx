import "./style/QuoteBox.css"

const QuoteBox = ({quote, handleChangeQuote}) => {
    const {phrase, author} = quote
    console.log(quote);
  return (
    <article className="quotebox">
        <h1 className="quotebox__title">GALLETAS DE LA FORTUNA</h1>
        <button className="quotebox__btn" onClick={handleChangeQuote}>Probar mi suerte</button>
        <div className="quotebox__box">
            <p>{phrase}</p>
        </div>

        
        <span className="quotebox__author">{author}</span>
    </article>
  )
}
export default QuoteBox