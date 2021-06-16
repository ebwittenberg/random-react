import "./App.css";

function App() {
  const tableData = [
    {
      shipmentId: 100,
      status: "DELIVERED",
      shippingSpeed: "1D",
    },
    {
      shipmentId: 150,
      status: "SHIPPED",
      shippingSpeed: "2D",
    },
    {
      shipmentId: 200,
      status: "PENDING PICKUP",
      shippingSpeed: "5D",
    },
    {
      shipmentId: 250,
      status: "PENDING PICKUP",
      shippingSpeed: "5D",
    },
    {
      shipmentId: 300,
      status: "SHIPPED",
      shippingSpeed: "5D",
    },
    {
      shipmentId: 200,
      status: "DELIVERED",
      shippingSpeed: "5D",
    },
    {
      shipmentId: 200,
      status: "DELIVERED",
      shippingSpeed: "5D",
    },
  ];
  return <div className="App">{/* Add table here */}</div>;
}

export default App;
