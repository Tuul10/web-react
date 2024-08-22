export const OneBox = (props) => {
  const { logo, title, text, date } = props;
  return (
    <div>
      <div>{logo}</div>
      <div className="flex flex-col">
        <h1 className="">{title}</h1>

        <url>
          <li>{text}</li>
        </url>
      </div>
      <p>{date}</p>
    </div>
  );
};
