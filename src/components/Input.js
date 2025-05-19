export default function Input({
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
}) {
  return (
    <div className='input-group'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
