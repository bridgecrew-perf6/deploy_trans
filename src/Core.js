import React, {useEffect, useState, Suspense} from 'react'

import { Canvas } from '@react-three/fiber';
import Futura from './Futura'

function Parola({sentence, setNext}) {
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true); 

  useEffect(() => {
    const timeout2 = setTimeout(() => {
    setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (subIndex === sentence.length + 1) {
      setNext((prev) => prev + 1)
      return}

    const timeout = setTimeout(() => {
    setSubIndex((prev) => prev + 1);
    }, 100);
     
     return () => clearTimeout(timeout);
    }, [subIndex]);

  return `${sentence.substring(0, subIndex)}${sentence.length > subIndex ? (blink ? "|" : ""):""}`

}


function Core() {
  const [output, setoutput] = useState(0)
  const [next, setNext] = useState(0)

  return (
    <>
    <div className={output===2 ? 'absolute top-0 left-0 flex justify-center items-center' : 'hidden'}>
      <img src={'/stopgif.gif'} alt='stop' className="w-full h-full"/>
      <div className='absolute text-center text-red-500 animate-pulse font-VT323 text-6xl'>FUTURA È STATA DISATTIVATA</div>
    </div>

    <div className='bg-black w-screen h-screen flex flex-col text-white'>
      <div className='flex flex-row w-full h-1/2'>
        <div className='w-1/2 font-VT323 text-green-400 text-3xl justify-center flex flex-col pl-20 pb-8'>
          {next >= 0 ? <><Parola sentence={'../'} setNext={setNext}/><br /></> : <></>}
          {next >= 1 ? <><Parola sentence={'.....'} setNext={setNext}/><br /></> : <></>}
          {next >= 2 ? <><Parola sentence={'caricamento tecnologia'} setNext={setNext}/><br /></> : <></>}
          {next >= 3 ? <><Parola sentence={'|'} setNext={setNext}/><br /></> : <></>}
          {next >= 4 ? <><Parola sentence={'|'} setNext={setNext}/><br /></> : <></>}
          {next >= 5 ? <><Parola sentence={'|'} setNext={setNext}/><br /></> : <></>}
          {next >= 6 ? <><Parola sentence={'attivazione Intelligenza Artificiale'} setNext={setNext}/><br /></> : <></>}
          {next >= 7 ? <><Parola sentence={'FUTURA'} setNext={setNext}/><br /></> : <></>}
          {next >= 8 ? <><Parola sentence={'inserire comandi:'} setNext={setNext}/></> : <></>}
          {next >= 9 ? <><p className='text-cyan-300'><Parola sentence={'    START'} setNext={setNext} /></p><br /></> : <></>}
          {next >= 10 ? <><Parola sentence={'|'} setNext={setNext}/><br /></> : <></>}
          {next >= 11 ? <><Parola sentence={'|'} setNext={setNext}/><br /></> : <></>}
          {next >= 11 ? <><Parola sentence={'|'} setNext={setNext}/><br /></> : <></>}
          {next >= 12 ? <><Parola sentence={'inserire comandi:'} setNext={setNext}/></> : <></>}
          {next >= 13 ? <><div className='w-1/2 pb-10 flex'>
            <button className='bg-transparent hover:bg-cyan-300 hover:text-black text-cyan-300 py-2 px-4 mr-4 border-2 border-cyan-300' onClick={()=>{setoutput(1)}}>START</button>
            <button className='bg-transparent hover:bg-red-400 hover:text-black text-cyan-300 py-2 px-4 border-2 border-cyan-300 hover:border-red-400' onClick={()=>{setoutput(2)}}>STOP</button>
            <button></button></div></> : <></>}
          {output===1 ? <><Parola sentence={'FUTURA è già attivata'} setNext={setNext}/></> : <></>}
          {output===2 ? <><Parola sentence={'SPEGNIMENTO SISTEMA'} setNext={setNext}/></> : <></>}
        </div>


        <div className={ output===2 ? 'hidden' : 'flex justify-center w-full'}>
          <Canvas camera={{ position: [0, 0, 250]}}>
            <Suspense fallback={null}>
              <ambientLight intensity={10} />
              <Futura scale={[1.2, 1.2, 1.2]} position={[0, -50, 0]} />
              <directionalLight intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className='flex flex-row w-full h-1/2'>
      <div className='w-1/2 flex items-center'>
          {/* <img src={'/audiohack.gif'} alt='hacking1' className="h-2/3 pr-20"/> */}
          <img src={'/russiahack.gif'} alt='hacking2' className="w-full pl-20"/>
        </div>

        <div className='w-1/2 flex items-center justify-center'>
          <img src={'/icegif-174.gif'} alt='hacking3' className="h-2/3 pr-20"/>
          <img src={'/icegif-174.gif'} alt='hacking4' className="h-1/3 pr-20"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Core