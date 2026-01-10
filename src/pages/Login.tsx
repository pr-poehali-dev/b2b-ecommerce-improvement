import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (login(username, password)) {
      navigate('/');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="min-h-screen bg-vt-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-vt-green-100 rounded-full mb-4">
            <Icon name="ShieldCheck" size={32} className="text-vt-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-vt-gray-900 mb-2">Вход в магазин</h1>
          <p className="text-vt-gray-600">Введите логин и пароль для доступа</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-vt-gray-700 mb-2">
              Логин
            </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-vt-gray-700 mb-2">
              Пароль
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full"
              required
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              <Icon name="AlertCircle" size={18} />
              <span>{error}</span>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-vt-green-500 hover:bg-vt-green-600"
          >
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;