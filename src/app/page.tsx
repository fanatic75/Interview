import Table from "../components/Table";
import { fetchData } from "../utils/server-utils";

export default async function Home() {
  const data = await fetchData();
  return (
    <main>
      <Table data={data}/>
    </main>
  );
}
