const JSXRules = () => {
  // 1. Return harus 1 Parent Element
  //   return (
  //       <h1>Materi 1 - JSX Rules</h1>
  //       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio architecto vero ipsa velit saepe assumenda maiores dolorem amet exercitationem, itaque, sequi beatae harum. Repellendus minima aperiam eum ad quos.</p>
  //   );

  // 2. class → className
  return <h1 className="judul">Materi 1 - JSX Rules {1 + 1}</h1>;

  // 3. Gunakan {} untuk JavaScript
  const name = "Ucup";
  return <p>Hello, {name}</p>;

  // 4. Self-closing tag (</>)
  return <img src="..." alt="..." />;
};

export default JSXRules;
