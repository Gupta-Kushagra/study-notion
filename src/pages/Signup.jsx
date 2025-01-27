import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions community for free"
      description1="Build  for today, tomorrow, and beyond."
      description2=" to future-proof your ."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
