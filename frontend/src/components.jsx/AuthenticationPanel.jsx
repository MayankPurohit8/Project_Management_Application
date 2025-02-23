import p1 from "../assets/p1.jpg";
function AuthenticationPanel() {
  return (
    <>
      <div className="container h-screen w-full flex items-center justify-center ">
        <div className="w-[80%] h-[90%] bg-[#2C2638] rounded-3xl p-5 flex justify-between ">
          <div className="w-1/2 bg-white rounded-3xl">
            <img src={p1} alt="" className="size-full rounded-3xl" />
          </div>
          <div className="w-1/2 px-20 py-10 ">
            <div className="flex flex-col gap-2">
              <div className="text-[#FFFFFF] text-5xl">Create an account</div>
              <div className="text-xl px-1 text-[#75737F]">
                Already have an account?
                <a className=" text-purple-200" href="">
                  {" "}
                  Log in
                </a>
              </div>
              <form
                className=" mt-5 flex flex-col gap-5 [&>*]:placeholder:text-[#646174] [&>*]:outline-purple-200 text-white"
                action=""
              >
                <div className="flex justify-between gap-2 [&>*]:placeholder:text-[#646174] [&>*]:outline-purple-200">
                  <input
                    className="bg-[#3C364C] p-3 "
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                  />
                  <input
                    className="bg-[#3C364C] p-3"
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                  />
                </div>
                <input
                  className="p-3 bg-[#3C364C]"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
                <input
                  className=" p-3 bg-[#3C364C]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Password"
                />
                <div className="py-1 flex items-center">
                  <input
                    type="checkbox"
                    name="agree"
                    id=""
                    className="w-5 h-5"
                  />
                  <label htmlFor="agree" className="px-3">
                    I agree to{" "}
                    <a href="" className="text-purple-200">
                      Term and Conditions
                    </a>
                  </label>
                </div>
                <input
                  type="submit"
                  value="Create account"
                  className="bg-[#6D54B5] p-3 rounded"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AuthenticationPanel;
