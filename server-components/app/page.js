import fs from "node:fs/promises";

import { Suspense } from "react";
import UsePromiseDemo from "@/components/UsePromisesDemo";

export default async function Home() {
   const usersPromise = new Promise((resolve) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      resolve(users);
    }, 3000),
  );
  return (
    <main>
      <Suspense fallback={<p>Loading data....</p>}>
        <UsePromiseDemo usersPromise={usersPromise} />
      </Suspense>
    </main>
  );
}
