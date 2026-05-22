// import { useNavigate } from "react-router-dom";


// function SplashScreen(){

//     const navigate = useNavigate();

//     const handleLogin = () =>{
//         navigate('/dashboard');
//     }
//     return (
//         <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,152,0,0.18),_transparent_30%),_linear-gradient(180deg,_#05070f_0%,_#090b14_100%)] flex items-center justify-center px-4 py-10">
//             <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_120px_rgba(255,110,0,0.12)] backdrop-blur-xl">
//                 <div className="text-center space-y-5">
//                     <img src="./circle-check-big.svg" className="mx-auto h-20 w-20" alt="logo-icon"/>
//                     <h1 className="text-5xl font-extrabold tracking-tight text-black">TaskQuest</h1>
//                     <p className="text-sm text-slate-300">Level up your productivity</p>
//                 </div>

//                 <div className="mt-10 flex items-center justify-center gap-5">
//                     <div className="flex flex-col items-center gap-3">
//                         <img src="/task.png" alt="tasks" className="h-16 w-16 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_0_45px_rgba(96,83,255,0.18)]"/>
//                         <span className="text-xs text-black-300">Complete tasks</span>
//                     </div>
//                     <div className="flex flex-col items-center gap-3">
//                         <img src="/fire.png" alt="tasks" className="h-16 w-16 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_0_45px_rgba(255,130,30,0.18)]"/>
//                         <span className="text-xs text-black-300">Earn points</span>
//                     </div>
//                     <div className="flex flex-col items-center gap-3">
//                         <img src="/graphic-progression.png" alt="tasks" className="h-16 w-16 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_0_45px_rgba(75,88,255,0.18)]"/>
//                         <span className="text-xs text-black-300">Level up</span>
//                     </div>
//                 </div>

//                 <button onClick={handleLogin} className="mt-12 flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 px-6 py-4 text-lg font-semibold text-white shadow-[0_20px_60px_rgba(255,120,20,0.25)] transition hover:-translate-y-0.5">
//                     Get Started
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default SplashScreen;