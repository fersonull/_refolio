const Blob = ({ top, start, size, opacity = 0.4 }) => {
  return (
    <div
      className=" absolute z-0 blur-2xl"
      style={{ width: size, top: top, left: start, opacity: opacity }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#8A3FFC"
            d="M38.6,-68.8C47.7,-61.7,50.9,-46.5,58.7,-33.7C66.4,-20.8,78.8,-10.4,79.5,0.4C80.2,11.3,69.4,22.5,58.8,30.5C48.2,38.4,37.8,43,28.1,51C18.3,59,9.2,70.5,-3.4,76.4C-16,82.4,-32.1,82.8,-45,76.6C-57.9,70.4,-67.6,57.6,-72.3,43.7C-77,29.8,-76.5,14.9,-72,2.6C-67.5,-9.7,-59,-19.4,-50.7,-27C-42.4,-34.5,-34.2,-39.8,-25.8,-47.2C-17.4,-54.7,-8.7,-64.3,3.1,-69.6C14.8,-74.9,29.6,-75.9,38.6,-68.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </svg>
    </div>
  );
};

export default Blob;
