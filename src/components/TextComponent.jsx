const TextComponent = ({ topText, belowText, extra }) => {
  return (
    <div className="px-10 py-6">
      <header className="text-3xl font-semibold leading-10 tracking-tighter">
        {topText}
      </header>
      <div className="pt-5 font-normal">{belowText}</div>
      <div className="pt-5 font-normal">{extra}</div>
    </div>
  )
}
export default TextComponent
