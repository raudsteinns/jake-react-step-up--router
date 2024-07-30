import React from "react";
import { Link } from "react-router-dom";

const Page404: React.FC = () => {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/">
        <button>トップページに戻る</button>
      </Link>
    </div>
  );
};

export default Page404;
