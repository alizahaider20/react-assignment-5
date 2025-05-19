import React, { useState } from 'react';
import Card from './Card';
import Input from './Input';
import Button from './button';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('All fields are required!');
      return;
    }

    setError('');
    console.log('Form Data:', { email, password });
  };

  return (
    <Card title='Login'>
      <form onSubmit={handleSubmit}>
        <Input
          label='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
        />
        <Input
          label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Button
          label='Login'
          variant='primary'
          disabled={!email || !password}
        />
      </form>
    </Card>
  );
}

export default LoginForm;
