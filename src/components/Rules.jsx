function Rules({ text, btnVal, img, alt, handleRules}) {
  return (
    <section 
        className="fixed top-0 bg-white z-10 h-screen sm:bg-transparent w-screen"
    >
      <div className="items-center w-screen h-full" id="ruleGrid">
          <h1>{text.toUpperCase()}</h1>

          <button
            onClick={handleRules}
          >
            <img src={btnVal} alt="btnVal" />
          </button>

        <img src={img} alt={alt}
            id="rulesImg" 
        />
      </div>
    </section>
  );
}

export{Rules as default}