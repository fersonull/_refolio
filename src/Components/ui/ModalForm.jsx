import { IoIosSend } from "react-icons/io";

const ModalForm = () => {
  return (
    <form className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <span>Name</span>
          <input
            placeholder="Your name"
            type="text"
            className="rounded-lg bg-[#1c1c1c] border border-white/20 px-3 py-1"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span>Email</span>
          <input
            placeholder="youremail@yours.com"
            type="text"
            className="rounded-lg bg-[#1c1c1c] border border-white/20 px-3 py-1"
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <span>Message</span>
          <textarea
            placeholder="What would you like to discuss?"
            rows="6"
            className="rounded-lg bg-[#1c1c1c] border border-white/20 px-3 py-2 resize-none"
          ></textarea>
        </div>

        <button className="py-2 rounded-xl bg-[#5758e6] flex items-center justify-center gap-2 hover:bg-[#7f7feb] md:col-span-2">
          <IoIosSend size={20} />
          Send message
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
