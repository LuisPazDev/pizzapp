import '../components/Home.css';
import flyer from '../assets/pizzaflyer.png'


export const Home = () => {

  return(
    <>
      <main>
        <section className="main-sec1">
          <p className='p-title'>The Best Ever Pizza <br /> in Dallas </p>
          <p className='p-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fuga minima esse! Adipisci autem maiores illo vitae doloribus, quia voluptates minus nihil quo sed voluptatum provident, aliquam, eius qui eveniet.</p>
          <p className='p-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fuga minima esse! Adipisci autem maiores illo vitae doloribus, quia voluptates minus nihil quo sed voluptatum provident, aliquam, eius qui eveniet.</p>
        </section>
        <section className="main-sec2">
          <img className='img-flyer' src={flyer} alt="info" />
        </section>
      </main>
    </>
  )
};