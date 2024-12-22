// import PropTypes from "prop-types";

// const Card = (props) => {
//   return (
//     <div 
//     className="card">
//       <div className="w-[456px] h-[627px] bg-[#1a3f60] rounded-3xl">
//         <div className="w-[345px] h-[348px] text-white text-[26px] font-light font-['Public Sans'] leading-[33.02px] tracking-tight">
//         {props.content}
//         </div>
//         <div className="w-[345px] h-[81px]">
//           <span className="text-white text-2xl font-semibold font-['Public Sans'] leading-[30.48px] tracking-tight">
//            {props.name}
//             <br />
//           </span>
//           <span className="text-white text-[22px] font-light font-['Public Sans'] leading-7 tracking-tight">
//             {props.title}
//             <br />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// Card.propTypes = {
//   content: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };



// export default Card;


import  { forwardRef } from "react";
import PropTypes from "prop-types";

// Use forwardRef to forward the ref to the div element inside Card
const Card = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="card">
      <div className="w-[456px] h-[627px] bg-[#1a3f60] rounded-3xl">
        <div className="w-[345px] h-[348px] text-white text-[26px] font-light font-['Public Sans'] leading-[33.02px] tracking-tight">
          {props.content}
        </div>
        <div className="w-[345px] h-[81px]">
          <span className="text-white text-2xl font-semibold font-['Public Sans'] leading-[30.48px] tracking-tight">
            {props.name}
            <br />
          </span>
          <span className="text-white text-[22px] font-light font-['Public Sans'] leading-7 tracking-tight">
            {props.title}
            <br />
          </span>
        </div>
      </div>
    </div>
  );
});

// Set the display name explicitly for better debugging
Card.displayName = "Card";

// Define propTypes for the Card component to ensure proper validation
Card.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
