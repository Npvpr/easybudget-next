export default async function Apitest() {
  const url = "http://localhost:8080/api/items";

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const listItems = data.map((item) => (
    <li key={item.id}>
      <div>{item.id}</div>
      <div>Name = {item.name}</div>
      <div>Cost = {item.cost}</div>
    </li>
  ));

  return <div>{listItems}</div>;
}
