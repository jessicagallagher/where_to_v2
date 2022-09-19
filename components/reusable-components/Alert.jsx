export default function Alert({ type, alertText }) {

  return (
    <div className={`${type} mx-auto my-4 rounded p-5 text-center font-semibold`}>
      <h1>
        {alertText}
      </h1>
    </div>
  )
}
