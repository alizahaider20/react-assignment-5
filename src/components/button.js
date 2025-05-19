export default function button({
  label,
  onClick,
  variant = 'primary',
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant} ${disabled ? 'btn-disabled' : ''}`}
    >
      {label}
    </button>
  );
}
