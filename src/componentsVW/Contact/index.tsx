import { FormEvent, useRef } from "react";
import {
  Form,
  Input,
  Textarea,
  ButtonContact,
  ContactLayout,
  ButtonContainer,
  RotatedContactAbs,
} from "./styled";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1fz0d76", // Service ID iz EmailJS dashboard-a
        "template_j3xqxcs", // Template ID
        form.current!,
        "ZGQhUXHPeq-ZhSSOI" // Public key iz EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <ContactLayout>
      <RotatedContactAbs>Contact me</RotatedContactAbs>
      <Form ref={form} onSubmit={sendEmail}>
        <Input type="text" name="user_name" placeholder="name" required />
        <Input type="email" name="user_email" placeholder="mail" required />
        <Textarea name="message" placeholder="message" required />
        <ButtonContainer>
          <ButtonContact>Reset</ButtonContact>
          <ButtonContact type="submit">Send</ButtonContact>
        </ButtonContainer>
      </Form>
    </ContactLayout>
  );
};

export default ContactForm;
