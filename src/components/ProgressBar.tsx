type ProgressBarType = {
  progressValue: number;
};

function ProgressBar({ progressValue }: ProgressBarType) {
  return (
    <>
      <progress value={progressValue} max='100' className='rounded-2xl'>
        {progressValue}
      </progress>
    </>
  );
}

export default ProgressBar;
