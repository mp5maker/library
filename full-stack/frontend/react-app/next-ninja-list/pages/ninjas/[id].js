import { useRouter } from "next/router";
import get from "lodash/get";

export default function NinjaDetails() {
  const router = useRouter();
  const id = get(router, "query.id", "");
  console.log("🚀 ~ file: [id].js ~ line 5 ~ NinjaDetails ~ router", id);

  return (
    <div>
      <h1> Details Page </h1>
    </div>
  );
}
