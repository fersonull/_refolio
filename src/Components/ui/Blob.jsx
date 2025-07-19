const Blob = ({ top, start, size }) => {
  return (
    <div
      className=" absolute z-0 blur-3xl opacity-50"
      style={{ width: size, top: top, left: start }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#E8DAFF"
          d="M23.2,-5.7C32.8,21.8,45,50.2,34.1,61.6C23.2,72.9,-10.7,67.2,-33.8,49.7C-56.9,32.2,-69.2,2.9,-61.7,-21.7C-54.3,-46.3,-27.1,-66.1,-10.1,-62.8C6.9,-59.5,13.7,-33.1,23.2,-5.7Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Blob;
