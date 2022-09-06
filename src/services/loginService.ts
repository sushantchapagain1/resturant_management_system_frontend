import axois, { AxiosError } from "axios";
import React from "react";

export const url = "http://localhost:3000/api/users";

export const login = async (email: string, password: string) => {
  try {
    const res = await axois.post(`${url}/login`, {
      email,
      password,
    });
    console.log(res);
  } catch (err: any) {
    alert(err.response.data);
    console.log(err.response.data);
  }
};
