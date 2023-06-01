import React from 'react'
import { useRef,useEffect,useState } from 'react'
import { PlaceHolderAnimation } from '../assets/js/form_animation'
import {VscEye} from 'react-icons/vsc'



export const LoginForm = () => {
    
    //cause animation on placeholder 
    const emailInput=useRef<HTMLInputElement | null>(null)
    const passwordInput=useRef<HTMLInputElement | null>(null)
    const emailAnim=useRef<PlaceHolderAnimation | null >(null) 
    const passAnim=useRef<PlaceHolderAnimation| null>(null)


    let formDataInitial={
        email:'abc',
        password:'abc'
    }

    const [formData,setFormData]=useState<LoginFormInput>(formDataInitial)

     //eslint-disable-next-line
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        e.stopPropagation()
 
        setFormData(
            {...formData,
                [e.target.name] : e.target.value
            })
        
    }

    useEffect(()=>{

        if(emailInput.current && passwordInput.current){

            emailAnim.current=new PlaceHolderAnimation(emailAnim.current,"Enter email",70);
            passAnim.current=new PlaceHolderAnimation(passAnim.current,"Enter password",70);
            // below code will automatically change with state of formData
            //no need to add dependency from you side let react handle it
            //learning never put state variable in the depedency
            if(formData.email==='' && !emailAnim.current.animationId ){
                
                emailAnim.current.start()
                
            }
        
           
            if(formData.password==='' && !passAnim.current.animationId ){
                
                passAnim.current.start()
                 
            }
             
        }
       
         return ()=>{
              
         }
         
        //eslint-disable-next-line
    },[])
    

  return (
    <form className='shrink-0 grow-[1]  max-w-[80%] min-w-[45%] md:min-w-[35%] md:grow-0   flex gap-12 flex-col justify-around'>
        <div className='w-full flex flex-col h-fit justify-center items-center'>
            <div className='h-[49px] w-[61px] mt-16'>
                <img src="https://s3-alpha-sig.figma.com/img/6fdc/89e1/8c73671940a6f474158b15da4e60dcba?Expires=1686528000&Signature=mNfhH1DjBfNYqeEgUzwMUx4egTuaJ0zVS6zY3H-wMtNYvcdVAgVsDudmso-oeoYjgHanApNR~Lzqt~A2qW~KE1LTGZaVWTDFz8SzIz~Y5-IGtkluO4ygKVIe3OHX4zlump-ZfDTKNyBFbFXoqe3AQaK4IZFDW5DSrTEdRx5JhzeH71eUf7Eo-JeMjzNIeb8PNnw1kpf3lymGHZq8Nt-WUssvDSRhrE7PQ2CmAxFWJ~hsRlUW0Ozlt~JwQgHSuVB6b5ZnPPaMoar0S6qgnfahM6AMwZixysi3xWp5O3aZSsblKOr7K-EsgzPTzaoJ~2HO0-1sL4sWnyb~uNGCJAzLBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="leaf-logo">
                </img>
            </div>
            <div className='font-poppins'>
                <span className='text-black text-3xl'>Welcome</span>
                <span className='text-green-700 text-3xl'>Back !</span>
            </div>
            <div className='text-[color:var(--outline-color)]'>Glad to see you again</div> 
        </div>
        <input ref={emailInput} className='w-full outline-none  rounded-md p-2  outline-[color:var(--outline-color)] focus-visible:border-cyan-100' name='email' placeholder='Enter email' type='email' autoFocus required></input>
        <div className='w-full flex flex-col h-fit justify-center items-center'>
            
            <div className='relative w-full'>
                <input  ref={passwordInput} className=' w-full outline-none  rounded-md p-2  outline-[color:var(--outline-color)]' name='password' type='password' placeholder='Enter password' required></input>
                <VscEye className='absolute right-2 top-1/3 '></VscEye>
            </div>
            
            <a className='self-end text-[color:var(--link-color)] opacity-50' href="https://aesthisia.com/"> Forgot Password? </a>
        </div>
        <button className='w-full rounded-md p-2 bg-black text-white'>Log In</button>
        <div className='text-center'> Don't you have an account yet? <span className='text-green-400'>Sign Up</span></div>
    </form>
  )
}
