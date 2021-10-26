import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./components/Beranda";
import Navbar from "./assets/Navbar";
import ManajemenBuku from "./components/ManajemenBuku";
import { useState } from "react";

function storeData(inputBook) {
  console.log(inputBook);
  alert("Buku berhasil ditambahkan");
}

function updateData(inputBook) {
  console.log(inputBook);
  alert("Data berhasil diperbaharui!");
}

function deleteData(book) {
  console.log(book);
  alert("Data berhasil dihapus")
}

function App() {
  const [books, setBooks] = useState([
    {
      _id: 1,
      judul: "Elektronika Medis",
      pengarang: "Supriyanto S.T M.Eng",
      harga: 2000,
      stok: 7,
    },
    {
      _id: 2,
      judul: "Matematika Teknik",
      pengarang: "Prof. Ir. I.N.G. Wardana, M.Eng., Ph.D",
      harga: 1978,
      stok: 3,
    },
  ]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku
              bookList={books}
              store={storeData}
              update={updateData}
              remove={deleteData}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
