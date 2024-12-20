import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/userReducer";

function Update() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Convert `id` to a number if necessary for comparison
    const userId = Number(id);
    const existingUser = user.find((u) => u.id === userId);
    if (existingUser) {
      setName(existingUser.name);
      setEmail(existingUser.email);
    }
  }, [id, user]);

  function handleSubmit(e) {
    e.preventDefault();
    // Convert `id` to a number before dispatching
    dispatch(updateUser({ id: Number(id), name, email }));
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Update User: <span className="text-blue-500">{id}</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all focus:outline-none"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
