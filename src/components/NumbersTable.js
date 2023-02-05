function NumbersTable(props) {
  const limitArray = [];
  for (let i = 1; i < props.limit + 1; i++) {
    limitArray.push(i);
  }
  return (
    <div>
      <table style={{ border: '1px solid black' }}>
        <tr>
          {limitArray.map((item) => {
            if (item % 2 === 0) {
              return (
                <th
                  style={{ border: '1px solid black', backgroundColor: 'red' }}
                >
                  {item}
                </th>
              );
            } else {
              return <th style={{ border: '1px solid black' }}>{item}</th>;
            }
          })}
        </tr>
      </table>
    </div>
  );
}

export default NumbersTable;
