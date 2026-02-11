// API + state

export const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (data) => {
    const res = await loginApi(data);
    dispatch(setUser(res.data.user));
  };

  return { login };
};
