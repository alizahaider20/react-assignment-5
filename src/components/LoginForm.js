import { useState, useEffect } from 'react';
import Input from './Input';
import Button from './button';
import Card from './Card';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setForm({ email: savedEmail, password: savedPassword });
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('All fields are required.');
      return;
    }

    localStorage.setItem('email', form.email);
    localStorage.setItem('password', form.password);

    console.log('Saved form data:', form);
  };

  return (
    <Card title='Login'>
      <form onSubmit={handleSubmit}>
        <Input
          label='Email'
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder='Enter your email'
        />
        <Input
          label='Password'
          type='password'
          name='password'
          value={form.password}
          onChange={handleChange}
          placeholder='Enter your password'
        />
        {error && <p className='error'>{error}</p>}
        <Button
          label='Login'
          variant='primary'
        />
      </form>
    </Card>
  );
}
