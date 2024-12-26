import React, { useState } from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
import { FaRegMessage } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import heroImage from "../../images/heroImg.png"


const ContactForm = () => {
  const [data , setData] = useState("")
  const onSubmitt = (e)=>{
         e.preventDefault();
         
  }
  console.log(data)
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button 
         text="VIEW SUPPORT CHAT"
         icon={<FaRegMessage fontSize="24px"/>}
        />
        <Button 
         onClick={()=> console.log("hello")}
         text="Via Call"
         icon={<MdCall fontSize="24px" />}
        />
        </div>
        <Button 
         isOutlined={true}
         text="VIEW EMAIL"
         icon={<FaRegMessage fontSize="24px"/>}
        /> 
        <form onSubmit={onSubmitt}>
          <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input value={data} onChange={(e)=> setData(e.target.value) } type="text" name='name'/>
          </div>
          <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name='email'/>
          </div>
          <div className={styles.form_control}>
          <label htmlFor="message">Text</label>
          <textarea type="text" rows={10} name='message'/>
          </div>
          <div style={{
            display : "flex",
            justifyContent : "end"
          }}>
          <Button 
         text="Submit button"
        /> 
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
          <img src={heroImage} alt="Contact Image" />
      </div>
    </section>
  )
}

export default ContactForm
