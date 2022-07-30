import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./post";
import "./global.css";

import styles from "./App.module.css";

export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </div>
  );
};
