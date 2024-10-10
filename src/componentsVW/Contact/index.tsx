import { Form, Input, Textarea, ButtonContact, ContactLayout } from "./styled";

const ContactForm = () => {
  return (
    <ContactLayout>
      <Form>
        <Input type="text" name="user_name" placeholder="name" required />
        <Input type="email" name="user_email" placeholder="mail" required />
        <Textarea name="message" placeholder="message" required />
        <div>
          <ButtonContact type="submit">Send</ButtonContact>
          <ButtonContact>Reset</ButtonContact>
        </div>
      </Form>
    </ContactLayout>
  );
};

export default ContactForm;
