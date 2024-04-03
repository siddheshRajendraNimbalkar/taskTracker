
// import { useEffect, useState } from "react";

// const MiniSec = ({ runtime }) => {
//     const [miniSec, setMiniSec] = useState(0);

//     useEffect(() => {
//         let interval;

//         if (runtime) {
//             interval = setInterval(() => {
//                 if (miniSec < 59) {
//                     setMiniSec(prevMiniSec => prevMiniSec + 1);
//                 } else {
//                     setMiniSec(0);
//                 }
//             }, 1);
            
//             return () => clearInterval(interval);
//         }
    
//     }, [runtime, miniSec]);
    

//     return (
//         <p>{miniSec < 10 ? "0" + miniSec : miniSec} </p> 
//     );
// }

// export default MiniSec;


import { useEffect, useState } from 'react';

const MiniSec = ({ runtime }) => {
    const [miniSec, setMiniSec] = useState(0);

    useEffect(() => {
        let interval;

        if (runtime) {
            interval = setInterval(() => {
                if (miniSec < 59) {
                    setMiniSec((prevMiniSec) => prevMiniSec + 1);
                } else {
                    setMiniSec(0);
                }
            }, 1);

            return () => clearInterval(interval);
        }
    }, [runtime, miniSec]);

    return <p>{miniSec < 10 ? '0' + miniSec : miniSec} </p>;
};

export default MiniSec;
