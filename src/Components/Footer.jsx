const Footer = () => {
  return (
    <footer className="footer bg-deepGreen text-themeColor p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-40 lg:w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join flex flex-col lg:flex-row">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered text-deepGreen my-2 lg:my-0 lg:join-item"
            />
            <button className="btn btn-outline border-themeColor hover:border-deepGreen hover:bg-themeColor hover:text-deepGreen text-themeColor my-2 lg:my-0 lg:join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
