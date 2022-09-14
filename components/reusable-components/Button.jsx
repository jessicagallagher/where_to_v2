export default function Button({ buttonText, buttonType }) {
  return (
    <div>
      <button
        type={buttonType}
        className='inline-flex items-center rounded-md border border-transparent bg-teal px-6 py-3 text-base font-medium text-greyDefault shadow-2xl hover:bg-greenDefault hover:translate-y-2 hover:-translate-x-2'
      >
        {buttonText}
      </button>
    </div>
  );
}
