import Footer from "../footer/page";
import Header from "../header/page";

const Contact = () => {
  return (
    <section>
      <Header />
      <section>
        <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="heading text-center">Contact Us</h2>
          <p className="mb-8 text-[19px] lg:mb-16 font-light text-center text_para">
            Got a technical issue? Want to send feedback about a beta feature?
            Let us know.
          </p>
          <form action="#" className=" space-x-2">
            <div>
              <label htmlFor="email" className="form_label font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="form_input mt-1"
              />
            </div>
            <div>
              <label htmlFor="subject" className="form_label font-semibold">
                Subject
              </label>
              <input
                type="text"
                id="email"
                placeholder="Let us know how we can help you."
                className="form_input mt-1"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="form_label font-semibold">
                Message
              </label>
              <textarea
                rows="6"
                type="text"
                id="message"
                placeholder="Leave a comment..."
                className="form_input mt-1"
              />
            </div>
            <div>
              <button className="btn h-[60px] w-full" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
