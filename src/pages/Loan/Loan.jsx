import loanImg from '../../assets/loan.jpg'
import Navbar from '../Shared/Navbar/Navbar';
const Loan = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex items-center mt-5 justify-between mx-auto'>
      <div className='ml-5'>
      <h1 className='text-4xl font-semibold'>Get home on your <br />budget with <span className='text-red-400'>Phero<br /> Home Loans</span></h1>
      <button className='mt-4 bg-blue-500 text-white font-semibold py-3 px-4 text-xl rounded-md'>Get pre-qualified</button>
      </div>
      <img className='h-[500px]' src={loanImg} alt="" />
    </div>

    </div>
  );
};

export default Loan;