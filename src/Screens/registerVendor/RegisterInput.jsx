import React, { useState } from 'react'
import Input from './instance/Input'
import Box from './instance/Box'
import Phonenumber from './instance/Phonenumber'
import Options from './instance/Options'
import LargeInput from './instance/LargeInput'
import UploadDocuments from './instance/UploadDocuments'

//firebase 
import { db } from '../../firebase/firebase.js';
import { collection, addDoc } from 'firebase/firestore'

const RegisterInput = () => {

    const [firstname , setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [companyName , setcompanyName] = useState('');
    const [companyEmail , setcompanyEmail] = useState('');
    const [password, setpassword] = useState('');
    const [phonenumber , setphonenumber] = useState('');
    const [franchise, setfranchise] = useState('');
    const [businessdescription , setbusinessdescription] = useState('');
    const [companyaddress  , setcompantaddress] = useState("");



    //handle changes in input
    const handleforfirstname = (e) => {
        setfirstname(e.target.value);
    }
    const handleforlastname = (e) => {
        setlastname(e.target.value);
    }
    const handleforcompanyname  = (e) => {
        setcompanyName(e.target.value);
    }
    const handleforcompanyemail = (e) => {
        setcompanyEmail(e.target.value);
    }
    const handleforpassword = (e) => {
        setpassword(e.target.value);
    }
    const handelphonenumber = (e) => {
        setphonenumber(e.target.value);
    }
    const handelforfranchise = (e) => {
        setfranchise(e.target.value);
    }
    const handleforbusinessdescription = (e) => {
        setbusinessdescription(e.target.value);
    }
    const handleforcompanyaddress = (e) => {
        setcompantaddress(e.target.value);
    }
  

    //firebase configration 
    const configtoadd = collection(db , "VendorDetails");
    const handelRegisterButton = async () => {
        try{
            await addDoc(configtoadd,{
                firstname : firstname,
                lastname : lastname,
                compantname : companyName,
                companyemail : companyEmail,
                password : password,
                phonenumber : phonenumber,
                franchise : franchise,
                description : businessdescription,
                companyaddress : companyaddress
            }).then(
                window.alert("Data Uploded SuccessFully")
            );
        }catch(err){
            console.error(err);
        }
    }



  return (
    <>
    <div className='flex mt-10'>
        
        
        <div>
            <span><img className='ml-20' src="public/Line 7.png" /></span>

            <div className='flex ml-8'>
            <Input title ="First Name" placeholder="yourname" width="96" handlechanges={handleforfirstname} />
            <Input title="Last Name" placeholder="Surname" handlechanges={handleforlastname} />
            </div>

            <div className='flex ml-8'>
            <Input title="Company" placeholder="Company name" handlechanges={handleforcompanyname} />
            <Input title="Work email" placeholder="email" handlechanges={handleforcompanyemail} />
            </div>


            <div className='flex ml-20 mt-10'>
                <div>
                    <span className='text-RegisterTitle'>Number of Experience</span>
                    <div className='flex gap-5 mt-2'>
                    <Box range="0<0"   />
                    <Box range="1<2" />
                    <Box range="3<4" />
                    <Box range="5>.." />
                    </div>
                </div>

                <div className='ml-14'>
                    <span className='text-RegisterTitle'>Phone Number</span>
                    <Phonenumber handleonchange = {handelphonenumber}/>
                </div>
            </div>

            <div className='flex ml-20 mt-10'>
                <div className='flex'>
                <Options />
                </div>

                <div className='-mt-16'>
                    <Input title="Describe Business Type(Self Developed or franchise)" handlechanges = {handelforfranchise} />
                </div>
            </div>

            <div className='flex ml-8'>
                <LargeInput title="Business Description" handellargeinput = {handleforbusinessdescription} />
            </div>

            <div className='flex ml-8'>
                <LargeInput title="company Address" handellargeinput = {handleforcompanyaddress}  />
            </div>



            <div className='flex ml-8'>
                <Input title="password" handlechanges = {handleforpassword} />
                <Input title="Confirm password" />
            </div>

            <div className='flex ml-20 mt-5'>
                <input type="checkbox" />
                <a className='ml-2'>I agree with <span className='text-blue-600'>Terms and Conditions</span></a>

                <div className='ml-[250px]' onClick={handelRegisterButton}>
                    <span className='w-32 h-10 pl-4 pr-4 pt-2 pb-2 bg-blue-600 text-white'>Register</span>
                </div>
            </div>


        </div>


        <div className='ml-10'>
         <img src="public/Line 9.png" alt="" />
        </div>



        <div>
            <span><img className='ml-10' src="public/Line 8.png" alt="" /></span>

            <div>
                <UploadDocuments title="Upload Profile Photo" />
                <UploadDocuments title="upload Licence(optional)" />
            </div>
        </div>

        </div>


        <div className="w-auto bg-footerBackgroundColor flex align-center p-20 justify-center mt-10 ">
    <div className="">
      <a className='text-4xl font-semibold '>AppointX</a>
      <p className='w-80 text-xs pt-2 text-DescriptionColor'>Effortlessly book doctor visits, spa sessions, or business meetings on our user-friendly platform. Stay organized and never miss an appointment with our streamlined booking system!</p>
    </div>

    <div className="ml-20">
      <a className='text-2xl font-semibold'>Usefull Links</a>
      <ul>
      <li className='text-DescriptionColor pt-2'>Home</li>
      <li className='text-DescriptionColor pt-2'>Service</li>
      <li className='text-DescriptionColor pt-2'>Blog</li>
      <li className='text-DescriptionColor pt-2'>About</li>
      </ul>
      
    </div>

    <div className="ml-32">
      <a className='text-2xl font-semibold'>Contact</a>
      <p className='text-DescriptionColor'>appointx@gmail.com</p>
    </div>
    </div>
    </>
  )
}

export default RegisterInput