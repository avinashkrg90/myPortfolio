import React, { useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const HeroPage = () => {

  const avinashRef = useRef();
  const kumarRef = useRef();
  const guptaRef = useRef();
  const curtainRightRef = useRef();
  const curtainLeftRef = useRef();
  const welcomeRef = useRef();

  useGSAP(() => {
    gsap.to(avinashRef.current, {
      rotation: 0, duration: 2.5, ease: "elastic.out(1,0.3)", delay: 2,

    });
    gsap.to(kumarRef.current, {
      rotationX: 0, duration: 2.5, ease: "elastic.out(1,0.3)", delay: 3,
    });
    gsap.to(guptaRef.current, {
      rotationX: 0, duration: 2.5, ease: "elastic.out(1,0.3)", delay: 4,
    });
    gsap.to(curtainRightRef.current, {
      translateX: "105vw", duration: 2.5,  ease: "elastic.out(0.5,0.4)", delay: 0.5,
    });
    gsap.to(curtainLeftRef.current, {
      translateX: "-105vw", duration: 2.5,  ease: "elastic.out(0.5,0.4)", delay: 0.5,
    });
  },
    // { scope: container }
  ); // <-- scope is for selector text (optional)

  useEffect(()=>{
    setTimeout(()=>{
      welcomeRef.current.classList.add("hidden");
      curtainRightRef.current.classList.remove("hidden")
      curtainLeftRef.current.classList.remove("hidden")
    }, 500)
  })

  return (
    <>
    <div className='overflow-hidden w-[100vw] h-[100vh] relative'>
    <div ref={welcomeRef} className='bg-transparent inset-0 absolute w-full flex justify-center items-center text-6xl z-[100] text-gray-100'>Welcome to my portfolio</div>
      <div className='w-full h-full'>
        <div ref={curtainRightRef} className='absolute top-[-10vh] left-[-20vw] h-[120vh] w-[140vw] bg-black z-52 rotate-45 translate-x-[35vw]'></div>
        <div ref={curtainLeftRef} className='absolute top-[-10vh] left-[-20vw] h-[120vh] w-[140vw] bg-black z-51 rotate-45 translate-x-[-35vw]'></div>

      </div>

      <div className='w-[100vw] flex items-center justify-center absolute top-[20vh] z-[30]'>
        <div ref={avinashRef} className='h-full rotate-180'>
          <svg width="1122" height="203" viewBox="0 0 1122 203" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgb(14, 165, 233)" d="M138.92 199L123.24 149.16H53.8L38.4 199H0.88L66.4 3.56H112.32L177.28 199H138.92ZM89.08 37.16H87.68L62.76 117.52H114.28L89.08 37.16ZM223.5 199L159.66 3.56H197.46L227.42 98.76L244.78 163.72H245.62L262.7 98.76L292.66 3.56H329.34L265.5 199H223.5ZM334.574 199V169.32H360.334V33.24H334.574V3.56H423.334V33.24H397.294V169.32H423.334V199H334.574ZM503.093 98.76L482.933 58.16H482.093V199H447.093V3.56H487.693L546.493 103.8L566.653 144.4H567.493V3.56H602.493V199H561.893L503.093 98.76ZM755.303 199L739.623 149.16H670.183L654.783 199H617.263L682.783 3.56H728.703L793.663 199H755.303ZM705.463 37.16H704.063L679.143 117.52H730.663L705.463 37.16ZM869.228 202.36C852.428 202.36 838.148 199.373 826.388 193.4C814.814 187.427 804.828 179.587 796.428 169.88L821.348 145.8C828.068 153.64 835.534 159.613 843.748 163.72C852.148 167.827 861.388 169.88 871.468 169.88C882.854 169.88 891.441 167.453 897.228 162.6C903.014 157.56 905.908 150.84 905.908 142.44C905.908 135.907 904.041 130.587 900.308 126.48C896.574 122.373 889.574 119.387 879.308 117.52L860.828 114.72C821.814 108.56 802.308 89.6133 802.308 57.88C802.308 49.1067 803.894 41.1733 807.068 34.08C810.428 26.9867 815.188 20.92 821.348 15.88C827.508 10.84 834.881 7.01332 843.468 4.39999C852.241 1.59999 862.134 0.199989 873.148 0.199989C887.894 0.199989 900.774 2.62666 911.788 7.48C922.801 12.3333 932.228 19.52 940.068 29.04L914.868 52.84C910.014 46.8667 904.134 42.0133 897.228 38.28C890.321 34.5467 881.641 32.68 871.188 32.68C860.548 32.68 852.521 34.7333 847.108 38.84C841.881 42.76 839.268 48.36 839.268 55.64C839.268 63.1067 841.414 68.6133 845.708 72.16C850.001 75.7067 856.908 78.32 866.428 80L884.628 83.36C904.414 86.9067 918.974 93.2533 928.308 102.4C937.828 111.36 942.588 123.96 942.588 140.2C942.588 149.533 940.908 158.027 937.548 165.68C934.374 173.147 929.614 179.68 923.268 185.28C917.108 190.693 909.454 194.893 900.308 197.88C891.348 200.867 880.988 202.36 869.228 202.36ZM1084.08 116.4H1002.6V199H965.64V3.56H1002.6V83.64H1084.08V3.56H1121.04V199H1084.08V116.4Z" />
          </svg>
        </div>
        <div className='flex flex-col ml-2 gap-2 perspective-1000 perspective-origin-center'>
          <div ref={kumarRef} className='backface-hidden transform-3d rotate-x-[90deg]'>
            <svg width="452" height="72" viewBox="0 0 452 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(0,0,0,0.8)" d="M22.7 38.4L13.4 49.4V70H0.2V0.199999H13.4V34.6H13.9L23.8 21.5L41.1 0.199999H56.3L32 29.3L58.3 70H42.6L22.7 38.4ZM108.473 0.199999V43.1C108.473 48.5667 109.507 52.6667 111.573 55.4C113.707 58.1333 117.273 59.5 122.273 59.5C127.273 59.5 130.807 58.1333 132.873 55.4C135.007 52.6667 136.073 48.5667 136.073 43.1V0.199999H149.073V41.4C149.073 46.5333 148.573 50.9667 147.573 54.7C146.64 58.4333 145.107 61.5333 142.973 64C140.84 66.4667 138.04 68.3 134.573 69.5C131.173 70.6333 127.04 71.2 122.173 71.2C117.24 71.2 113.073 70.6333 109.673 69.5C106.34 68.3 103.607 66.4667 101.473 64C99.3401 61.5333 97.8068 58.4333 96.8734 54.7C95.9401 50.9667 95.4734 46.5333 95.4734 41.4V0.199999H108.473ZM245.716 19.9H245.316L239.916 31L225.616 57.4L211.316 31L205.916 19.9H205.516V70H193.016V0.199999H207.916L225.816 34.3H226.216L243.916 0.199999H258.216V70H245.716V19.9ZM345.857 70L340.257 52.2H315.457L309.957 70H296.557L319.957 0.199999H336.357L359.557 70H345.857ZM328.057 12.2H327.557L318.657 40.9H337.057L328.057 12.2ZM411.045 70H397.845V0.199999H429.345C432.545 0.199999 435.411 0.699998 437.945 1.7C440.478 2.7 442.611 4.16666 444.345 6.09999C446.145 7.96666 447.511 10.2333 448.445 12.9C449.445 15.5667 449.945 18.5333 449.945 21.8C449.945 26.6 448.845 30.7333 446.645 34.2C444.511 37.6667 441.278 40.1333 436.945 41.6L451.245 70H436.545L423.545 43.1H411.045V70ZM428.045 32C430.578 32 432.578 31.3333 434.045 30C435.511 28.6 436.245 26.6333 436.245 24.1V19.5C436.245 16.9667 435.511 15.0333 434.045 13.7C432.578 12.3667 430.578 11.7 428.045 11.7H411.045V32H428.045Z" />
            </svg>
          </div>
          <div ref={guptaRef} className='backface-hidden transform-3d rotate-x-[92deg]'>
            <svg width="460" height="116" viewBox="0 0 474 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="black" d="M76.32 96.72H75.68C74.72 102.16 71.68 106.747 66.56 110.48C61.5467 114.107 54.8267 115.92 46.4 115.92C39.7867 115.92 33.6533 114.693 28 112.24C22.4533 109.787 17.6 106.16 13.44 101.36C9.38667 96.4533 6.18667 90.4267 3.84 83.28C1.49333 76.1333 0.32 67.8667 0.32 58.48C0.32 49.0933 1.49333 40.8267 3.84 33.68C6.29333 26.4267 9.70667 20.3467 14.08 15.44C18.4533 10.5333 23.68 6.79999 29.76 4.23999C35.84 1.67999 42.6133 0.399994 50.08 0.399994C60.1067 0.399994 68.64 2.58666 75.68 6.96C82.72 11.3333 88.2667 17.6267 92.32 25.84L75.2 35.92C73.1733 31.12 70.1333 27.12 66.08 23.92C62.1333 20.72 56.8 19.12 50.08 19.12C41.76 19.12 35.0933 21.68 30.08 26.8C25.1733 31.8133 22.72 39.28 22.72 49.2V67.12C22.72 76.9333 25.2267 84.4 30.24 89.52C35.2533 94.64 41.9733 97.2 50.4 97.2C53.7067 97.2 56.8 96.8267 59.68 96.08C62.56 95.2267 65.0667 94 67.2 92.4C69.3333 90.8 71.04 88.8267 72.32 86.48C73.6 84.1333 74.24 81.36 74.24 78.16V70.96H52.32V53.2H94.56V114H76.32V96.72ZM131.026 2.32V70.96C131.026 79.7067 132.68 86.2667 135.986 90.64C139.4 95.0133 145.106 97.2 153.106 97.2C161.106 97.2 166.76 95.0133 170.066 90.64C173.48 86.2667 175.186 79.7067 175.186 70.96V2.32H195.986V68.24C195.986 76.4533 195.186 83.5467 193.586 89.52C192.093 95.4933 189.64 100.453 186.226 104.4C182.813 108.347 178.333 111.28 172.786 113.2C167.346 115.013 160.733 115.92 152.946 115.92C145.053 115.92 138.386 115.013 132.946 113.2C127.613 111.28 123.24 108.347 119.826 104.4C116.413 100.453 113.96 95.4933 112.466 89.52C110.973 83.5467 110.226 76.4533 110.226 68.24V2.32H131.026ZM213.495 114V2.32H263.735C268.855 2.32 273.442 3.17333 277.495 4.87999C281.655 6.47999 285.175 8.82666 288.055 11.92C290.935 14.9067 293.122 18.5333 294.615 22.8C296.108 27.0667 296.855 31.76 296.855 36.88C296.855 42.1067 296.108 46.8533 294.615 51.12C293.122 55.28 290.935 58.9067 288.055 62C285.175 64.9867 281.655 67.3333 277.495 69.04C273.442 70.64 268.855 71.44 263.735 71.44H234.615V114H213.495ZM234.615 53.2H261.815C265.868 53.2 269.068 52.1333 271.415 50C273.762 47.76 274.935 44.6133 274.935 40.56V33.2C274.935 29.1467 273.762 26.0533 271.415 23.92C269.068 21.7867 265.868 20.72 261.815 20.72H234.615V53.2ZM351.835 21.04V114H330.715V21.04H299.035V2.32H383.515V21.04H351.835ZM451.459 114L442.499 85.52H402.819L394.019 114H372.579L410.019 2.32H436.259L473.379 114H451.459ZM422.979 21.52H422.179L407.939 67.44H437.379L422.979 21.52Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
      
      
      

      {/* <div className='text-sky-500 font-extrabold p-20 leading-[16rem] perspective-1000 perspective-origin-center'>
        <h1 ref={titleRef} className='text-[16rem] backface-hidden transform-3d rotate-x-[90deg] transition-all'>
          AVINASH<span className='text-black text-[10rem]'>GUPTA</span>
        </h1>
      </div> */}
      {/* <div className='text-black text-8xl p-20'>HeroPage</div>
      <div className='text-yellow-600 text-8xl -bold p-20'>HeroPage</div>
      <button className='bg-sky-500 p-6 px-8 text-gray-50 text-xl m-10'>Submit</button>
      <button className='bg-black p-6 px-8 text-gray-50 text-xl m-10'>Submit</button>
      <button className='bg-yellow-500 p-6 px-8 text-gray-50 text-xl m-10'>Submit</button> */}
    </>
  )
}

export default HeroPage