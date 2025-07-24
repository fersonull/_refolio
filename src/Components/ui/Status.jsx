import { useEffect, useState } from "react";
const Status = ({ stat }) => {
  const [status, setStatus] = useState("");

  const x = ["ongoing", "live"];

  const check = x.filter((s) => s === status);

  useEffect(() => {
    setStatus(stat);
  }, []);

  console.log(check);

  return <div>Status</div>;
};

export default Status;
