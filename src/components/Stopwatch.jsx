// import React, { useState, useEffect } from 'react';
// import MiniSec from './MiniSec';

// function Stopwatch() {
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [runtime, setRuntime] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (runtime) {
//         setSeconds(prevSeconds => prevSeconds + 1);

//         if (seconds === 59) {
//           setMinutes(prevMinutes => prevMinutes + 1);
//           setSeconds(0)
//         }

//         if (seconds === 19 && minutes === 59) {
//           setHours(prevHours => prevHours + 1);
//         }
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [runtime, minutes, seconds, hours]);

//   return (
//     <div className='flex w-full justify-evenly items-center flex-row'>
//       <div className='font-bold  flex justify-center items-center'>
//         <div className='flex items-center justify-center'>
//           <p className='text-xl font-semibold'>{hours > 9 ? hours : "0" + hours}:{minutes > 9 ? minutes : "0" + minutes}:{seconds > 9 ? seconds : "0" + seconds}</p>
//           : <MiniSec runtime={runtime}/> 
//         </div>
//         <div className='pl-4'>
//           {runtime ? 
//             <button className='bg-zinc-900 text-white py-1 px-2 m-2 rounded font-medium' onClick={() => { setRuntime(false) }}>Stop</button> 
//             : 
//             <button className='bg-zinc-900 text-white py-1 px-2 m-2 rounded font-medium' onClick={() => { setRuntime(true) }}>Start</button>
//           }
//           <button className='bg-zinc-900 text-white py-1 px-2 rounded font-medium' onClick={() => {
//             setHours(0);
//             setMinutes(0);
//             setSeconds(0);
//           }}>Restart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stopwatch;


import React, { useState, useEffect } from 'react';
import MiniSec from './MiniSec';

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [runtime, setRuntime] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (runtime) {
                setSeconds((prevSeconds) => prevSeconds + 1);

                if (seconds === 59) {
                    setMinutes((prevMinutes) => prevMinutes + 1);
                    setSeconds(0);
                }

                if (seconds === 19 && minutes === 59) {
                    setHours((prevHours) => prevHours + 1);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [runtime, minutes, seconds, hours]);

    return (
        <div className='flex w-full justify-evenly items-center flex-row'>
            <div className='font-bold flex justify-center items-center'>
                <div className='flex items-center justify-center'>
                    <p className='text-xl font-semibold'>
                        {hours > 9 ? hours : '0' + hours}:{minutes > 9 ? minutes : '0' + minutes}:{seconds > 9 ? seconds : '0' + seconds}
                    </p>
                    : <MiniSec runtime={runtime} />
                </div>
                <div className='pl-4'>
                    {runtime ? (
                        <button className='bg-zinc-900 text-white py-1 px-2 m-2 rounded font-medium' onClick={() => setRuntime(false)}>
                            Stop
                        </button>
                    ) : (
                        <button className='bg-zinc-900 text-white py-1 px-2 m-2 rounded font-medium' onClick={() => setRuntime(true)}>
                            Start
                        </button>
                    )}
                    <button
                        className='bg-zinc-900 text-white py-1 px-2 rounded font-medium'
                        onClick={() => {
                            setHours(0);
                            setMinutes(0);
                            setSeconds(0);
                        }}
                    >
                        Restart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;
