import React, {useEffect, useState} from "react";

const Home: React.FC = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setContent("Content page");
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;
