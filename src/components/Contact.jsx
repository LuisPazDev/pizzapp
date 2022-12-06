import '../components/Contact.css';
import { useForm } from "react-hook-form";

export function Contact() {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='container-contact'>
      <h1>Contact Us</h1>
      <form className='container-form' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Name' {...register("firstName", { required: true, maxLength: 20 })} />
        <input placeholder='Comment' className='form-email' {...register("Comment", { pattern: /^[A-Za-z]+$/i })} />
        <input className='btn' type="submit" />
      </form>  
    </div>
  )
}
