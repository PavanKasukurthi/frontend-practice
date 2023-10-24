const ImageCards = ({ src, text }) => {
  return (
    <div className="relative items-center">
      <img src={src} alt={text} className="brightness-50" />
      <p className="absolute text-xs md:top-4 md:text-md lg:text-lg top-2 lg:top-[40%] px-4 text-center text-white font-medium lg:font-bold ">
        {text}
      </p>
    </div>
  )
}
export default ImageCards
