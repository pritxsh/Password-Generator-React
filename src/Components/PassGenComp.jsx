import React, { useEffect, useState } from 'react'
import "../Components/PassGenStyle.css"
import CopyImage from "../assets/copy.png"
const PassGenComp = () => {

    const[initialval, setinitialval] = useState(10)
    const [password,setpassword] = useState("")
    const[uppercaseoption,setuppercaseoption] = useState(true)
    const[lowercaseoption,setlowercaseoption] = useState(true)
    const[numberoption,setnumberoption] = useState(true)
    const[specialcaseoption,setspecialcaseoption] = useState(true)
 
    
    const handleChange = (e)=>{
              setinitialval(e.target.value)
    }

    useEffect(()=>{
      handlePasswordGeneration()
    },[initialval,uppercaseoption,lowercaseoption,specialcaseoption,numberoption])

    const handlePasswordGeneration = ()=>{

      let copypassword = "";
    
          let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          let lowerCase = "abcdefghijklmnopqrstuvwxyz"
          let numbers = "0123456789"
          let specialChar = "@#$%^()_+~|}{[]></-="
          let allChar = upperCase + lowerCase+ numbers+specialChar

          copypassword += upperCase[Math.floor(Math.random()*upperCase.length)]
          copypassword += lowerCase[Math.floor(Math.random()*lowerCase.length)]
          copypassword += numbers[Math.floor(Math.random()*numbers.length)]
          copypassword += specialChar[Math.floor(Math.random()*specialChar.length)]
  
      
        if (uppercaseoption && lowercaseoption && numberoption && specialcaseoption) {
          copypassword = "";
          allChar = upperCase + lowerCase+ numbers+specialChar
          console.log('All checkboxes are checked.');
        } else if (uppercaseoption && lowercaseoption && numberoption && !specialcaseoption) {
          copypassword = "";
          allChar = upperCase + lowerCase+ numbers
          console.log('Uppercase, Lowercase, and Number options are checked.');
        } else if (uppercaseoption && lowercaseoption && !numberoption && specialcaseoption) {
          copypassword = "";
          allChar = upperCase + lowerCase+specialChar
          console.log('Uppercase, Lowercase, and Special Case options are checked.');
        } else if (uppercaseoption && lowercaseoption && !numberoption && !specialcaseoption) {
          copypassword = "";
          allChar = upperCase + lowerCase
          console.log('Uppercase and Lowercase options are checked.');
        } else if (uppercaseoption && !lowercaseoption && numberoption && specialcaseoption) {
          copypassword = "";
          allChar = upperCase + numbers+specialChar
          console.log('Uppercase, Number, and Special Case options are checked.');
        } else if (uppercaseoption && !lowercaseoption && numberoption && !specialcaseoption) {
          copypassword = "";
          allChar = upperCase +numbers
          console.log('Uppercase and Number options are checked.');
        } else if (uppercaseoption && !lowercaseoption && !numberoption && specialcaseoption) {
          copypassword = "";
          allChar = upperCase+specialChar
          console.log('Uppercase and Special Case options are checked.');
        } else if (uppercaseoption && !lowercaseoption && !numberoption && !specialcaseoption) {
          copypassword = "";
          allChar = upperCase
          console.log('Only Uppercase option is checked.');
        } else if (!uppercaseoption && lowercaseoption && numberoption && specialcaseoption) {
          copypassword = "";
          allChar = lowerCase+ numbers+specialChar
          console.log('Lowercase, Number, and Special Case options are checked.');
        } else if (!uppercaseoption && lowercaseoption && numberoption && !specialcaseoption) {
          copypassword = "";
          allChar =  lowerCase+ numbers
          console.log('Lowercase and Number options are checked.');
        } else if (!uppercaseoption && lowercaseoption && !numberoption && specialcaseoption) {
          copypassword = "";
          allChar =lowerCase+specialChar
          console.log('Lowercase and Special Case options are checked.');
        } else if (!uppercaseoption && lowercaseoption && !numberoption && !specialcaseoption) {
          copypassword = "";
          allChar = lowerCase
          console.log('Only Lowercase option is checked.');
        } else if (!uppercaseoption && !lowercaseoption && numberoption && specialcaseoption) {
          copypassword = "";
          allChar = numbers+specialChar
          console.log('Number and Special Case options are checked.');
        } else if (!uppercaseoption && !lowercaseoption && numberoption && !specialcaseoption) {
          copypassword = "";
          allChar =  numbers
          console.log('Only Number option is checked.');
        } else if (!uppercaseoption && !lowercaseoption && !numberoption && specialcaseoption) {
          copypassword = "";
          allChar = specialChar
          console.log('Only Special Case option is checked.');
        } else {
          console.log('No options are checked.');
        }
        
        

           // upper copypassword fetches first 4 digit char later below while condition fetches paswrd of remaining length.
           while (copypassword.length < initialval) {
            copypassword += allChar[Math.floor(Math.random() * allChar.length)];
        }
           
         // Shuffle the password to ensure random order
        copypassword = copypassword.split('').sort(() => Math.random() - 0.5).join('')

           setpassword(Pritesh => copypassword);
    }
    

    const copyPassword = () => {
      if(password===""){
        return
      }
      else{
        navigator.clipboard.writeText(password).then(()=>{
          // alert("Password copied to clipboard!")
          
        })
      }
    }

  return (
    <div className="maindiv">
        <h2>Generate a</h2>
          <h1>Random Password</h1>

          <div className='lengthgiver'>
          <input type="range" id='slider' min={10} max={24} value={initialval} onChange={handleChange} /> 
          <input type="number" min={10} max={24} id="number" value={initialval} onChange={handleChange} />
      
          </div>
          

          <div className="content">
          <input type="text" id='inputext' readOnly value={password} />
          <button id="copy-text" onClick={copyPassword}>
          <img src={CopyImage} alt="copy_image" />
        </button>
        </div>
        <button id='generate' onClick={handlePasswordGeneration}>Generate Password</button>
       
      <div className="optionclass">
<label className="checbox_label">
  <span>UpperCase</span>
  <input type="checkbox" defaultChecked={true} onClick={()=>setuppercaseoption(!uppercaseoption)}/>
</label>

<label className="checbox_label" >
  <span>LowerCase</span>
  <input type="checkbox" defaultChecked={true} onClick={()=>setlowercaseoption(!lowercaseoption)}/>
</label>

<label className="checbox_label" >
  <span>Numbers</span>
  <input type="checkbox" defaultChecked={true} onClick={()=>setnumberoption(!numberoption)}/>
</label>

<label className="checbox_label" >
  <span>Special Character</span>
  <input type="checkbox" defaultChecked={true} onClick={()=>setspecialcaseoption(!specialcaseoption)}/>
</label>
        </div>
    </div>
  )
}

export default PassGenComp