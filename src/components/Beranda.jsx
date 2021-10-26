function Beranda({ bookList }) {
  return (
    <div className="container mt-3 w-75">
      <h1 className="text-center"> Selamat datang di Perpustakaan Teknik Elektro</h1>
      <div id="katalog" className="mt-5">
        <hr />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <th>Tahun</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default Beranda;
