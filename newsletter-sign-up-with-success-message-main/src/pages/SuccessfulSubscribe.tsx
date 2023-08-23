function SuccessfulSubscribe() {

  return (
    <main className="not-mobile:bg-charcoal-grey not-mobile:items-center h-full flex justify-center">
      <div className="not-mobile:bg-white not-mobile:w-4/12 not-mobile:rounded-3xl not-mobile:h-4/6 not-mobile:items-center not-mobile:justify-evenly h-full w-10/12 flex flex-col justify-around">
        <div className="not-mobile:w-3/4">
          <img className="not-mobile:w-14" src="src/assets/images/icon-success.svg"/>
          <h1 className="font-roboto-bold text-stay-updated mt-8 not-mobile:mt-6 not-mobile:text-5xl">Thanks for subscribing!</h1>
          <p className="font-roboto-regular mt-4 not-mobile:text-sm">A confirmation email has been sent to <b className="font-roboto-bold">ash@loremcompany.com</b>. 
    Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <button className="-mb-10 p-4 bg-dark-slate-grey text-white font-roboto-bold rounded-lg w-full not-mobile:w-3/4 not-mobile:m-0 hover:bg-gradient-to-r from-pink-600 to-tomato not-mobile:shadow-2xl">Dismiss Message</button>
      </div>
    </main>
  )
}

export default SuccessfulSubscribe