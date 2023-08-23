import { useState } from "react"
import { useNavigate } from "react-router-dom"
import iconList from "../assets/images/icon-list.svg"
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg"
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg"

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

function Home() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isValid, setIsValid] = useState(true)

  function handleClick() {
    if (!EMAIL_REGEX.test(email)) {
      setIsValid(false)
      setError("Valid email required")
    } else {
      navigate("/successful-subscribe")
    }
  }

  return (
    <div className="not-mobile:bg-charcoal-grey not-mobile:h-full not-mobile:flex not-mobile:justify-center not-mobile:items-center">
      <div className="flex flex-col items-center not-mobile:h-5/6 not-mobile:w-7/12 not-mobile:flex-row-reverse not-mobile:bg-white not-mobile:rounded-3xl not-mobile:shadow-2xl not-mobile:p-1">
        <header className="w-full not-mobile:w-1/2 not-mobile:h-full not-mobile:pt-4 not-mobile:pb-4">
          <img src={illustrationMobile} className="w-full not-mobile:hidden" />
          <img className="w-full hidden not-mobile:block not-mobile:h-full" src={illustrationDesktop} />
        </header>
        <section className="flex flex-col items-center not-mobile:w-1/2 not-mobile:h-full not-mobile:justify-center">
          <div className="w-11/12 not-mobile:w-10/12 not-mobile:ml-4">
            <h2 className="font-roboto-bold text-stay-updated mt-8 self-start not-mobile:m-0 not-mobile:text-stay-updated-desktop">Stay updated!</h2>
            <p className="font-roboto-regular mt-6 not-mobile:m-0 not-mobile:text-sm
            ">Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="w-full mt-6">
              <div className="flex items-start">
                <img className="w-6" src={iconList} />
                <p className="ml-4 w-9/12 font-roboto-regular not-mobile:text-sm not-mobile:w-full">Product discovery and building what matters</p>
              </div>
              <div className="flex items-start mt-2">
                <img className="w-6" src={iconList} />
                <p className="ml-4 w-9/12 font-roboto-regular not-mobile:text-sm not-mobile:w-full">Measuring to ensure updates are a success</p>
              </div>
              <div className="flex items-start mt-2">
                <img className="w-6" src={iconList} />
                <p className="ml-4 w-9/12 font-roboto-regular not-mobile:text-sm not-mobile:w-full">And much more!</p>
              </div>
            </div>
            <form className="flex flex-col items-center mt-10 not-mobile:mt-8">
              <div className="w-full flex items-center">
                <div className="w-1/2">
                  <p className="font-roboto-bold text-sm opacity-80 not-mobile:text-xs">Email address</p>
                </div>
                {
                  isValid
                  ? null
                  : (
                    <div className="w-1/2 flex justify-end">
                      <p className="font-roboto-bold text-sm opacity-80 not-mobile:text-xs text-red-600">{error}</p>
                    </div>
                  )
                }
              </div>
              {
                isValid
                ? (
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="border border-black border-opacity-30 p-4 rounded-lg w-full mt-2 not-mobile:text-sm" placeholder="email@company.com" />
                )
                : (
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 bg-red-200 border-red-500 border-opacity-30 p-4 rounded-lg w-full mt-2 not-mobile:text-sm" placeholder="email@company.com" />  
                )
              }
              <button type="button" onClick={handleClick} className="p-4 bg-dark-slate-grey text-white font-roboto-bold rounded-lg w-full mt-6 mb-4 not-mobile:mb-0 not-mobile:text-sm hover:bg-gradient-to-r from-pink-600 to-tomato">Subscribe to monthly newsletter</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home