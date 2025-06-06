import { CONTACT } from "../../constants/index";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
const FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function contact() {
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", FormsAccessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement)?.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="grid grid-cols-1 text-center mx-10 lg:text-start lg:items-start lg:grid-cols-3 gap-6 mte-16">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>

          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.email}
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="flex  gap-2 justify-self-center lg:justify-self-start my-4"
          >
            <a
              href="http://www.linkedin.com/in/saifabdelrazek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/SaifAbdelrazek011"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="col-span-2 flex justify-center lg:justify-end items-center max-w-5xl w-full"
        >
          <div className="flex flex-col gap-4">
            <div className="lg:col-span-2">
              <form onSubmit={onSubmit}>
                <div className="space-y-6">
                  <input
                    type="hidden"
                    name="access_key"
                    value={FormsAccessKey}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-input"
                      placeholder="Enter your name"
                      required
                    />

                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="form-input"
                    placeholder="Enter your subject"
                    required
                  />
                  <label htmlFor="message" className="sr-only">
                    Message{" "}
                  </label>
                  <textarea
                    style={{ resize: "none" }}
                    name="comments"
                    id="comments"
                    className="form-input"
                    placeholder="Enter your message"
                    rows={3}
                    required
                  ></textarea>
                  <div className="text-right">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn-primary"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default contact;
