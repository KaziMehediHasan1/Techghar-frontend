// UI orchestration
// Event handle
// NO business logic

const LoginPage = () => {
  const { login, loading } = useLogin();

  const onSubmit = (data) => {
    login(data);
  };

  return <LoginForm onSubmit={onSubmit} loading={loading} />;
};

export default LoginPage;
