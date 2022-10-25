import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

export const RedirectToWelcome:React.FC = () => {
  const nav = useNavigate();
  useEffect(() =>{
    nav('/welcome/1')
  }, [])
  return (
    <div>你迷路了</div>
  )
}