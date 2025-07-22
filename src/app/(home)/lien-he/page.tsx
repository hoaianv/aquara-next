import { detail } from "@/apis/models/contact.apis";
import ContactPage from "@/components/contact/contactPage";

export default async function Contact() {
  const { data, error_code, status } = await detail();
  return status && error_code === 200 ? <ContactPage data={data} /> : <></>;
}
