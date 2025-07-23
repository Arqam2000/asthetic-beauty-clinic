import img from "../assets/2148825310.jpg"
// import lipFillerImg from "../assets/ChatGPT Image Jun 12, 2025, 02_52_57 PM.png"
import lipFillerImg from "../assets/karelys-ruiz-PqyzuzFiQfY-unsplash.jpg"

const Treatments = () => {
  return (
    <>
      <div className='md:h-[272px] text-center flex flex-col gap-4 md:flex-row items-center md:justify-evenly md:items-center mx-5'>
        <div className='flex flex-col items-center md:w-1/2 md:ml-9'>
          <h1 className='text-4xl font-semibold mb-4'>Treatments</h1>
          <p className=''>"After a consultation, Lam Aesthetic Clinic offers a wide range of treatments—from anti-wrinkle procedures for both women and men, to dermal and lip fillers, PRP, and skin boosters. We’re confident we have a treatment that will suit your needs and help you glow."</p>
        </div>
        <div className=''>
          <img src={img} alt="treatment" className='w-full h-64' />
        </div>
      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-1/2 w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Lip Fillers</h1>
          <p>Lip fillers, also known as lip injections or lip augmentation, are a cosmetic procedure that uses injectable fillers, usually hyaluronic acid (HA), to enhance the volume, shape, and definition of the lips. These fillers can add plumpness, smooth out wrinkles around the mouth, and improve lip symmetry.
            Purpose:
            Lip fillers can be used to:
            Add volume and plumpness to thin lips.
            Define the lip border and improve the shape.
            Correct asymmetry and balance out lip proportions.
            Smooth out vertical lip lines (smoker's lines).
            Provide a more youthful appearance.</p>
        </div>
        <div className='md:w-[380px] w-[250px]'>
          <img src={lipFillerImg} alt="lipFillerImg" className='h-full w-full' />
        </div>

      </div>
    </>
  )
}

export default Treatments
