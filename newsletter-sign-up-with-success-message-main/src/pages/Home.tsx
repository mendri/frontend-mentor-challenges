function Home() {

  return (
    <div className="not-mobile:bg-charcoal-grey not-mobile:h-full not-mobile:flex not-mobile:justify-center not-mobile:items-center">
      <div className="flex flex-col items-center not-mobile:h-4/6 not-mobile:w-3/6 not-mobile:flex-row not-mobile:bg-white">
        <header className="w-full">
          <img className="w-full" src="src/assets/images/illustration-sign-up-mobile.svg" />
        </header>
        <section className="flex flex-col items-center">
          <div className="w-11/12">
            <h2 className="font-roboto-bold text-stay-updated mt-8 self-start">Stay updated!</h2>
            <p className="font-roboto-regular mt-6">Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="w-full mt-6">
              <div className="flex items-start">
                <img className="w-6" src="src/assets/images/icon-list.svg" />
                <p className="ml-4 w-9/12 font-roboto-regular">Product discovery and building what matters</p>
              </div>
              <div className="flex items-start mt-2">
                <img className="w-6" src="src/assets/images/icon-list.svg" />
                <p className="ml-4 w-9/12 font-roboto-regular">Measuring to ensure updates are a success</p>
              </div>
              <div className="flex items-start mt-2">
                <img className="w-6" src="src/assets/images/icon-list.svg" />
                <p className="ml-4 w-9/12 font-roboto-regular">And much more!</p>
              </div>
            </div>
          </div>
          <form className="flex flex-col items-center mt-10 w-11/12">
            <p className="font-roboto-bold text-sm opacity-80 self-start">Email address</p>
            <input className="border border-black border-opacity-30 p-4 rounded-lg w-full mt-2" placeholder="email@company.com" />
            <button className="p-4 bg-dark-slate-grey text-white font-roboto-bold rounded-lg w-full mt-6 mb-4">Subscribe to monthly newsletter</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Home