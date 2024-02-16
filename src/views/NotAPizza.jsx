const NotAPizza = ({wrongPizzaName}) => {
  return (
    <div className="baseCenter">
      <h1>Eh?</h1>
      <h4>Lo sentimos, no conocemos ninguna pizza llamada "{wrongPizzaName}", o si la conocemos, aún no forma parte de nuestro menu. Scuzzi!</h4>
    </div>
  );
};
export default NotAPizza;
