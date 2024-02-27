import { parse } from "csv-parse";
import fs from "fs";
const cache:Data[] = [];

export async function fetchData(): Promise<
  Data[]
> {
  if (cache.length > 0){
    return cache;
  }
  return new Promise((resolve, reject) => {
    const data: Data[] = [];
    const parser = parse({
      delimiter: ";",
    });
    fs.createReadStream(process.cwd() + "/src/app/data.csv")
      .pipe(parser)
      .on("data", (d: [string, string]) => {
        data.push({
          createdAt: d[0],
          fileName: d[1],
        });
      })
      .on("end", () => {
        cache.push(...data);
        resolve(data);
      });
  });
}
