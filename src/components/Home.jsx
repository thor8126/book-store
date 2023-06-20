import Item from "./Item";

function Home() {
  return (
    <div className="container mx-auto my-8 border-2 border-gray-700 rounded-2xl p-4">
      <h2 className="text-xl font-bold">Category: Fiction</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default Home;
