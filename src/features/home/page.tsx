import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <div className='grid h-20 card bg-base-300 rounded-box place-items-center'>
        ポケモン道場へようこそ！
      </div>
      <div className='divider'></div>
      <div className='grid h-20 card bg-base-300 rounded-box place-items-center'>
        <button className='btn btn-outline'>
          <Link to='/select'>相棒を選ぶ</Link>
        </button>
      </div>
    </div>
  );
};
