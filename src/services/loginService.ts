import axois, { Axios, AxiosError, AxiosResponse } from "axios";

export const url = "http://localhost:3000/api/users";

type loginData = {
  email: string;
  password: string;
};

export const login = async (data: loginData) => {
  const res = await axois.post(
    `${url}/login`,

    data

    // { withCredentials: true }
  );
  return res;
  // } catch (err: any) {
  //   console.log(err.response.data);
  //   return err;
  // }
};
