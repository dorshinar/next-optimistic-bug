import { redirect } from "next/navigation";

export async function action(formData: FormData) {
  redirect(
    `/?checked=${formData.get("checked") === "true" ? "false" : "true"}`
  );
}
