import React from 'react'
import { useRef,useEffect,useState } from 'react'
import { PlaceHolderAnimation } from '../assets/js/form_animation'
import {VscEye} from 'react-icons/vsc'




export const LoginForm = () => {
    
    //state for form validation
    const [requiredEmail,setRequiredEmail]=useState<boolean>(false)
    const [requiredPass,setRequiredPass]=useState<boolean>(false)
    const [validEmail,setValidEmail]=useState<boolean | null>(null)

    //show pass state
    const [showPass,setShowPass]=useState<boolean | null >(false)




    //cause animation on placeholder 
    const emailInput=useRef<HTMLInputElement | null>(null)
    const passwordInput=useRef<HTMLInputElement | null>(null)
    const emailAnim=useRef<PlaceHolderAnimation | null >(null) 
    const passAnim=useRef<PlaceHolderAnimation| null>(null)


    let formDataInitial={
        email:'',
        password:''
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


    //useEffect to remove required validators message
    useEffect(()=>{
        if(formData.email!==''){
            setRequiredEmail(false)
            setValidEmail(emailValidator(formData.email))
        }
        if(formData.password!==''){
            setRequiredPass(false)
        }
        if(formData.email===''){
            setValidEmail(null)
        }

    },[formData.email,formData.password])


    //omload start placeholder animation
    useEffect(()=>{

       
        if(emailInput.current && passwordInput.current){

            emailAnim.current=new PlaceHolderAnimation(emailInput.current,"Enter email");
            passAnim.current=new PlaceHolderAnimation(passwordInput.current,"Enter password");
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
    
    const myurl="https://aesthisia.com"

  return (
    <form onSubmit={submitForm} className='shrink-0 grow-[1]  max-w-[80%] min-w-[45%] md:min-w-[35%] md:grow-0   flex gap-12 flex-col justify-around'>
        <div className='w-full flex flex-col h-fit justify-center items-center'>
            <div className='h-[49px] w-[61px] mt-16'>
                <img src="https://s3-alpha-sig.figma.com/img/6fdc/89e1/8c73671940a6f474158b15da4e60dcba?Expires=1686528000&Signature=mNfhH1DjBfNYqeEgUzwMUx4egTuaJ0zVS6zY3H-wMtNYvcdVAgVsDudmso-oeoYjgHanApNR~Lzqt~A2qW~KE1LTGZaVWTDFz8SzIz~Y5-IGtkluO4ygKVIe3OHX4zlump-ZfDTKNyBFbFXoqe3AQaK4IZFDW5DSrTEdRx5JhzeH71eUf7Eo-JeMjzNIeb8PNnw1kpf3lymGHZq8Nt-WUssvDSRhrE7PQ2CmAxFWJ~hsRlUW0Ozlt~JwQgHSuVB6b5ZnPPaMoar0S6qgnfahM6AMwZixysi3xWp5O3aZSsblKOr7K-EsgzPTzaoJ~2HO0-1sL4sWnyb~uNGCJAzLBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="leaf-logo">
                </img>
            </div>
            <div className='font-poppins'>
                <span className='text-black text-3xl'>Welcome</span>
                <span className='text-[color:#08A593] text-3xl'>Back !</span>
            </div>
            <div className='text-[color:var(--outline-color)]'>Glad to see you, Again!</div> 
        </div>
        <div className='w-full flex flex-col h-fit justify-center items-center'>
            <input ref={emailInput} className={`w-full outline-none  rounded-md p-2  outline-[color:var(--outline-color)] focus:shadow-lg  ${validEmail!==null ? validEmail===true ? 'outline-[color:#08A593]' : 'outline-pink-500':''} ${requiredEmail? 'outline-pink-500' : ''}`} name='email' value={formData.email} onChange={handleChange} ></input>
            {requiredEmail ? <span className='mt-1 text-pink-500 self-start'>Email required!</span>: null}{ validEmail!==null ?  validEmail=== true ? <span className='mt-1 text-[color:#08A593] self-start'>Email validated.</span> : <span className='mt-1 text-pink-500 self-start'>Invalid email!</span> : <></>}
        </div>
       
        <div className='w-full flex flex-col h-fit justify-center items-center'>
            
            <div className='relative w-full'>
                <input  ref={passwordInput} className={` w-full outline-none  rounded-md p-2  outline-[color:var(--outline-color)] focus:shadow-lg  ${requiredPass? 'outline-pink-500' : ''}`} name='password' value={formData.password} onChange={handleChange} type={showPass? 'text' : 'password' } ></input>
                <VscEye className='absolute right-2 top-1/3 ' onClick={()=>setShowPass(!showPass)}></VscEye>
            </div>
            {requiredPass? <span className='mt-1 text-pink-500 self-start'>Password required!</span>: null}
            
            <a className='self-end text-[color:var(--link-color)] opacity-50' href={myurl}> Forgot Password? </a>
        </div>
        <button className='w-full rounded-md p-2 bg-black text-white shadow-customShadow'>Log In</button>
        <div className='text-center'> Don't you have an account yet? <a href={myurl}><span className='text-[color:#08A593]'>Sign Up</span></a></div>
    </form>
  )

    /**all possible validators here can be put inside hook or
    *  can create HoCs later on  */ 

    //can add validators for password length type

   //return true if required or return false 
  function requiredValidator(value?: string){
    return !value ? true : false ;
  }
  
  //return true if required or return false 
  function emailValidator(value: string){
        //using RFC 5532 email validator
        // eslint-disable-next-line
        let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        return regex.test(value)
    }

  //required validation on submission
  function submitForm (e:React.SyntheticEvent){
        
    e.preventDefault()

    if(requiredValidator(formData.email)){
        setRequiredEmail(true)
    }
    if(requiredValidator(formData.password)){
        setRequiredPass(true)
    }
    
  
    
    // setFormData(formDataInitial)
    return
    
}

}
