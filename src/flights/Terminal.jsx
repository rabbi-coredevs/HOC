
const Terminal = ({terminal = null,gate = null}) => {
  return (
    <div className="flex justify-around">
  <div className="flex border-2 border-[#697c95] text-white rounded items-center text-center">
    <h1 className="bg-[#697c95] px-2 py-1">Terminal</h1>
    <p className="text-black w-12">{terminal}</p>
  </div>
  <div className="flex border-2 border-[#697c95] text-white rounded items-center text-center">
    <h1 className="bg-[#697c95] px-2 py-1">Gate</h1>
    <p className="text-black w-12">{gate}</p>
  </div>
</div>

  )
};

export default Terminal;
