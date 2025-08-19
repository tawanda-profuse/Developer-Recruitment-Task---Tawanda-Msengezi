// 로그인, 회원가입 페이지 등 배경 레이아웃
import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      {children || <Outlet />}
    </div>
  );
};

export default AuthLayout;
