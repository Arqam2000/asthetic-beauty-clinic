import img from "../assets/2148825310.jpg"
// import lipFillerImg from "../assets/ChatGPT Image Jun 12, 2025, 02_52_57 PM.png"
import lipFillerImg from "../assets/karelys-ruiz-PqyzuzFiQfY-unsplash.jpg"
import botox from "../assets/botox-anti-wrinkle.png"
import dermalFillers from "../assets/dermal-fillers.png"
import eyebrowLift from "../assets/eyebrowlift.png"
import profhilo from "../assets/profhilo.jpg"
import bunnyLines from "../assets/Bunnylines.png"

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
        <div className='md:w-[35%] w-[80%]'>
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
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Anti-Wrinkle Injections</h1>
          <p>Botulinum toxin is used to temporarily relax facial muscles, reducing the appearance of fine lines and wrinkles—most commonly on the forehead, around the eyes (crow’s feet), and frown lines. Results appear within days and last 3–4 months.</p>
        </div>
        <div className='md:w-[380px] w-[250px]'>
          <img src={botox} alt="botox" className='h-full w-full' />
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Dermal Fillers</h1>
          <p>Hyaluronic acid-based fillers restore lost volume, smooth out deeper lines, and enhance facial contours such as cheeks, lips, jawline, and nasolabial folds. Results are immediate and can last 6–18 months depending on the area treated.</p>
        </div>
        <div className='md:w-[380px] w-[250px]'>
          <img src={dermalFillers} alt="dermalFillers" className='h-full w-full' />
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Profhilo</h1>
          <p>A revolutionary injectable skin treatment that hydrates and remodels the skin using pure hyaluronic acid. Unlike fillers, it spreads beneath the skin to improve tone, texture, and elasticity. Ideal for dull, ageing, or lax skin on the face, neck, or hands.</p>
        </div>
        <div className='md:w-[380px] w-[250px]'>
          <img src={profhilo} alt="profhilo" className='h-full w-full' />
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Non-Surgical Eyebrow Lift (Botox Brow Lift)</h1>
          <p>A subtle lift of the eyebrows using Botox to relax specific muscles and open up the eye area, creating a refreshed and youthful appearance without</p>
        </div>
        <div className='md:w-[380px] w-[250px]'>
          <img src={eyebrowLift} alt="eyebrowLift" className='h-full w-full' />
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Bunny lines treatment</h1>
          <p>Bunny lines are small, slanting wrinkles that appear on either side of the nose, usually running from the bridge to the area immediately below the eye. They are often even more pronounced when girls laugh or smile.

            Recurring movement of these muscles in time can cause lines to form that remain visible even when the muscles are at rest.</p>
        </div>
        <div className='md:w-[250px] w-[200px]'>
          <img src={bunnyLines} alt="eyebrowLift" className='h-full w-full' />
        </div>

      </div>
    </>
  )
}

export default Treatments
