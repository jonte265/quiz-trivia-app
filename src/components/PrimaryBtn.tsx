type PrimaryBtnType = {
  text: string;
  onClick: () => void;
};

function PrimaryBtn({ text, onClick }: PrimaryBtnType) {
  return (
    <button
      onClick={onClick}
      className='py-4 px-6 font-semibold bg-primary text-background rounded-full hover:bg-primary/80  transition duration-200 ease-in-out cursor-pointer active:scale-98 hover:scale-102'
    >
      {text}
    </button>
  );
}
export default PrimaryBtn;
