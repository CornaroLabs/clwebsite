const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row gap-10 p-10 bg-[#080f1e] items-center lg:items-start">
      <div className="w-72 lg:w-60">
        <a href="https://www.cornarolabs.xyz">
          <img src="./logo.png" alt="" />
        </a>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 grow lg:justify-evenly">
        <ul className="text-primary-gray text-sm flex flex-col gap-3 text-center lg:text-left">
          <li>
            <a href="https://tally.so/r/3ydLEW">Intake Form</a>
          </li>
          <li>
            <a href="https://x.com/CornaroLabs">Twitter</a>
          </li>
          <li>
            <a href="https://x.com/CornaroLabs">Linkedin</a>
          </li>
        </ul>
        <ul className="text-primary-gray text-sm flex flex-col gap-3 text-center lg:text-left">
          <li>
            <a href="https://calendly.com/cornarolabs">Book a free consulation</a>
          </li>
          <li>
            <a href="https://tally.so/r/3ydLEW">Add your Grant Program</a>
          </li>
          <li>
            <a href="https://cornarolabs.substack.com/">Subscribe to our substack</a>
          </li>
        </ul>
        <div className="text-sm text-center space-y-3">
          <p>
            For inquiries, please reach out to us at{" "}
            <a href="mailto:info@cornarolabs.xyz" className="text-[#00b9fa] ">
              info@cornarolabs.xyz
            </a>
          </p>
          <p>© Cornaro Labs 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
