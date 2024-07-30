import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Page1: React.FC = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const navigate = useNavigate();

  const onClickDetailA = () => navigate("detailA", { state: { arr } });

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="detailA" state={{ arr }}>
        Detail A
      </Link>
      <br />
      <Link to="detailB">Detail B</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
      <Outlet />
    </div>
  );
};

export default Page1;
