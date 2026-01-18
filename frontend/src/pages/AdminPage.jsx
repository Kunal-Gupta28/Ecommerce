import api from "../utils/api";
import toast from "react-hot-toast";

const AdminPage = () => {
  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await api.post("/products", formData);
      toast.success("Product added");
    } catch {
      toast.error("Failed");
    }
  };

  return (
    <form onSubmit={handleAdd} encType="multipart/form-data">
      <input name="title" />
      <input name="price" />
      <input type="file" name="image" />
      <button>Add</button>
    </form>
  );
};

export default AdminPage;
