import LibraryBooks from "@material-ui/icons/LibraryBooks";
// core components/views for Admin layout
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import HasilPencarian from "views/HasilPencarian/HasilPencarian";

const dashboardRoutes = [
  {
    path: "/dataMahasiswa",
    name: "Data Mahasiswa",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/aboutUs",
    name: "About Us",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/hasilPencarian",
    name: "Hasil Pencarian",
    icon: LibraryBooks,
    component: HasilPencarian,
    layout: "/admin",
  },
];

export default dashboardRoutes;
