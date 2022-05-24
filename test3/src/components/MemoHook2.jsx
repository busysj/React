import { useState, useMemo, useEffect, useCallback } from "react";

const MemoHook2 = () => {
  const [inputnum, setInputnum] = useState("");
  const [count, setCount] = useState(2);
  const [number, setNumber] = useState([1, 5]);
  const [date, setDate] = useState(new Date());

  const time = () => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(() => time(), 1000);
  }, []);

  const onChange = useCallback((e) => {
    setInputnum(e.target.value);
  }, []);

  const addNum = useCallback(() => {
    setNumber([...number, parseInt(inputnum)]);
    setInputnum("");
    setCount(count + 1);
  }, [inputnum, number, count]);

  const allsum = (list) => {
    return list.reduce((a, b) => a + b);
  };

  const sum = useMemo(() => allsum(number), [number]);

  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
      <input type="text" onChange={onChange} value={inputnum} />
      <button onClick={addNum}>추가</button>

      <h3>모든 수의 평균 : {sum / count}</h3>
      <ul>
        {number.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemoHook2;
