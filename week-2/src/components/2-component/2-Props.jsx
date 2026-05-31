const Bio = ({ nama, tanggalLahir, children }) => {
  return (
    <div>
      {children}
      <h1>BIODATA USER : {nama}</h1>
      <p>Tanggal Lahir : {tanggalLahir}</p>
    </div>
  );
};

export default Bio;
