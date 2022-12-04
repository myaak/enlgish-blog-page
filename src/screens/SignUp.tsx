import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {Button, Input} from '@chakra-ui/react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AccountContext } from '../components/UserContext'

const SignUp = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const { setUser } = useContext(AccountContext)


  const handleSignUpRedirect = () => {
    navigate('/signup', { state: location })

  }

  return (
    <div className="login">
      <div className="login__wrapper">
        <Formik initialValues={{ email: '', password: '', username: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required("Username required!")
              .min(6, "Username too short!")
              .max(28, "Username too long!"),
            password: Yup.string()
              .required("Password required!")
              .min(6, "Password too short!")
              .max(28, "Password too long!"),
          })}

          onSubmit={async (values) => {
            const userValues = { ...values }
            await fetch('http://193.201.88.172:7000/auth/signup', {
              method: "POST",
              credentials: 'include',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email: userValues.email, password: userValues.password, username: userValues.username })
            })
              .catch((err: any) => {
                console.log(err)
              })
              .then((res: any) => {
                return res.json()
              })
              .then((data: any) => {
                if (!data) return;
                setUser({ ...data })
                navigate('/blog')
              })

            //handleLogInWithEmail(user.email, user.password)
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Input placeholder="Email" value={values.email} name="email"
                onChange={handleChange}
                  variant="filled"
              />
              <Input placeholder="Password" value={values.password} name="password"
                type="password"
                onChange={handleChange}
                  variant="filled"
              />
              <Input placeholder="Username" value={values.username} name="username"
                onChange={handleChange}
                  variant="filled"
              />
              <div style={{
                display: 'inline-flex',
                gap: '10px',
                color: '#fff'
              }}>
              </div>
              <Button type="submit" variant="contained">Sign Up</Button>
            </form>
          )}
        </Formik>
      </div>
    </div >
  )
}

export default SignUp
