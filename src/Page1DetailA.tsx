import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Page1DetailA: React.FC = () => {
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();

  const onClickBack = () => navigate(-1);

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};

export default Page1DetailA;
