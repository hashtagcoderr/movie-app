export const Button = () => {
  const handleClick = (text) => {
    alert(text);
  };

  

  return <button onClick={()=> handleClick("Great")}>Submit</button>;
};
