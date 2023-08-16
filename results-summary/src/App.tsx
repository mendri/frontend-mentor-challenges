function App() {

  return (
    <div className="h-full not-mobile:flex not-mobile:justify-center not-mobile:items-center">
      <div className=" not-mobile:flex not-mobile:w-1/2 not-mobile:h-4/5 not-mobile:shadow-2xl not-mobile:rounded-3xl">
        <header className="flex flex-col items-center w-full rounded-b-3xl bg-gradient-to-t from-light-royal-blue to-light-slate-blue not-mobile:w-1/2 not-mobile:justify-evenly not-mobile:rounded-3xl">
          <p className="font-HankenGrotesk font-bold opacity-50 mt-4 text-white not-mobile:m-0 not-mobile:text-xl">Your Result</p>
          <div className="mt-4 w-28 h-28 rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-violet-blue to-persian-blue not-mobile:w-48 not-mobile:h-48 not-mobile:m-0">
            <p className="text-circle-text-size text-white font-HankenGrotesk font-bold not-mobile:text-7xl">76</p>
            <p className="mt-2 opacity-50 text-white text-xs not-mobile:text-lg">of 100</p>
          </div>
          <p className="mt-4 font-HankenGrotesk font-bold text-xl text-white not-mobile:m-0 not-mobile:text-3xl">Great</p>
          <div className="flex justify-center w-4/6 text-center not-mobile:w-3/6">
            <p className="text-xs opacity-70 text-white mt-2 mb-10 not-mobile:mb-0 not-mobile:-m-8 not-mobile:text-base">You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </header>
        <main className="flex flex-col items-center not-mobile:justify-evenly not-mobile:w-1/2">
          <p className="mt-6 mb-2 ml-6 self-start text-lg font-HankenGrotesk font-bold not-mobile:text-2xl not-mobile:ml-8">Summary</p>
          <div className="w-4/5 mt-4 flex rounded-lg justify-between bg-light-red bg-opacity-10 p-4">
            <div className="flex">
              <img src="src/assets/images/icon-reaction.svg"/>
              <p className="text-light-red text-lg font-HankenGrotesk font-extrabold ml-2">Reaction</p>
            </div>
            <div className="flex items-center">
              <p className="font-HankenGrotesk font-bold text-lg">80</p>
              <p className="ml-1 mr-1 font-HankenGrotesk text-lg opacity-50">/</p>
              <p className="font-HankenGrotesk text-lg opacity-50">100</p>
            </div>
          </div>
          <div className="w-4/5 mt-4 flex rounded-lg justify-between bg-orangey-yellow bg-opacity-10 p-4">
            <div className="flex">
              <img src="src/assets/images/icon-memory.svg"/>
              <p className="text-orangey-yellow text-lg font-HankenGrotesk font-extrabold ml-2">Memory</p>
            </div>
            <div className="flex items-center">
              <p className="font-HankenGrotesk font-bold text-lg">92</p>
              <p className="ml-1 mr-1 font-HankenGrotesk text-lg opacity-50">/</p>
              <p className="font-HankenGrotesk text-lg opacity-50">100</p>
            </div>
          </div>
          <div className="w-4/5 mt-4 flex rounded-lg justify-between bg-green-teal bg-opacity-10 p-4">
            <div className="flex">
              <img src="src/assets/images/icon-verbal.svg"/>
              <p className="text-green-teal text-lg font-HankenGrotesk font-extrabold ml-2">Verbal</p>
            </div>
            <div className="flex items-center">
              <p className="font-HankenGrotesk font-bold text-lg">61</p>
              <p className="ml-1 mr-1 font-HankenGrotesk text-lg opacity-50">/</p>
              <p className="font-HankenGrotesk text-lg opacity-50">100</p>
            </div>
          </div>
          <div className="w-4/5 mt-4 flex rounded-lg justify-between bg-cobalt-blue bg-opacity-10 p-4">
            <div className="flex">
              <img src="src/assets/images/icon-visual.svg"/>
              <p className="text-cobalt-blue text-lg font-HankenGrotesk font-extrabold ml-2">Visual</p>
            </div>
            <div className="flex items-center">
              <p className="font-HankenGrotesk font-bold text-lg">72</p>
              <p className="ml-1 mr-1 font-HankenGrotesk text-lg opacity-50">/</p>
              <p className="font-HankenGrotesk text-lg opacity-50">100</p>
            </div>
          </div>
          <button className="p-4 mt-6 mb-8 w-4/5 font-HankenGrotesk text-white text-xl font-bold rounded-full bg-dark-gray-blue hover:bg-gradient-to-t from-light-royal-blue to-light-slate-blue">Continue</button>
        </main>
      </div>
    </div>
  )
}

export default App
