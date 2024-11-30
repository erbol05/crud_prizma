"use client";
import { useEffect, useState } from "react";
import styles from "./TodoList.module.scss";
import axios from "axios";
import debounce from "debounce";

interface IToDo {
  id?: number | null;
  username: string;
  age: string;
  url: string;
}

export default function Home() {
  const [user, setUser] = useState("");
  const [ages] = useState(2024);
  const [todo, setTodo] = useState<IToDo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editUser, setEditUser] = useState("");
  console.log(todo);

  const PostProd = async () => {
    const newPro = {
      username: user,
      age: ages,
    };
    await axios.post("/api/create", newPro);
    setUser("");
    GetProd();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      PostProd();
    }
  };

  const GetProd = async () => {
    const { data } = await axios.get("/api/create");
    setTodo(data.res);
  };

  const DelPro = async (id: number) => {
    await axios.delete(`/api/create?id=${id}`);
    GetProd();
    setEditingId(null);
  };

  const EditProd = async (id: number) => {
    const updatedPro = {
      username: editUser,
    };
    await axios.put(`/api/create?id=${id}`, updatedPro);
    setEditingId(null);
    setEditUser("");
    GetProd();
  };

  useEffect(() => {
    GetProd();
  }, []);

  return (
    <>
      <div className={styles.page}>
        <input
          type="text"
          placeholder="Атыныз"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          onKeyDown={handleKeyDown}
        />
        <button onClick={PostProd}>Add</button>
      </div>
      <div className={styles.product}>
        {todo.map((el) => (
          <div key={el.id}>
            {editingId === el.id ? (
              <div className={styles.put}>
                <input
                  type="text"
                  placeholder="Атыныды Озгортунус"
                  value={editUser}
                  onChange={(e) => setEditUser(e.target.value)}
                />
                <button
                  onClick={() => EditProd(el.id!)}
                  className={styles.edit}
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className={styles.del}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className={styles.pro}>
                <h1>{el.username}</h1>
                <h2>{el.age}</h2>
                <div className={styles.btn}>
                  <button onClick={() => DelPro(el.id!)} className={styles.del}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(el.id!);
                      setEditUser(el.username);
                    }}
                    className={styles.edit}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
