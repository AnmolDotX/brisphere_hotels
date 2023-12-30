import { FaArrowRightLong } from 'react-icons/fa6'
const Button = ({text, type="button", isMainForm, isEverythingComplete}) => {
   
    return (
        <button type={type} className={isMainForm && isEverythingComplete !== true ? `bg-sky-600 flex items-center gap-3 rounded-md text-white font-medium text-lg relative transition-all duration-200` : isMainForm && isEverythingComplete ? `bg-sky-600 py-4 px-12 text-lg font-medium text-white rounded-md transition-all duration-200` : `px-12 py-4 text-white rounded-md text-lg font-medium bg-sky-600 hover:bg-sky-800 transition-all duration-200`}>
           <span className={isMainForm && isEverythingComplete !== true ? 'py-4 w-32 transition-all duration-200' : ''}>{text}</span>
           <span className={isMainForm === true && isEverythingComplete !== true ? 'py-6 pr-5 pl-5 bg-sky-700 rounded-e-md hover:bg-sky-800 h-full transition-all duration-200' : 'hidden'}>{<FaArrowRightLong/>}</span>
           <p className={isMainForm && isEverythingComplete !== true ? 'absolute text-xs font-medium text-black -bottom-4 text-center w-full transition-all duration-200' : 'hidden'}>click to pay token amount</p>
        </button>
    );
};

export default Button;