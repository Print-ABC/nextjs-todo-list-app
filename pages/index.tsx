import Head from "next/head";
import { Typography, Paper } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { useInputValue, useTodos } from "../src/state/custom-hooks";
import AddTodo from "../src/components/AddTodo";
import TodoList from "../src/components/TodoList";

export default function Home() {
  const { inputValue, changeInput, clearInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo List App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Todo List</h1>
        <p className={styles.description}>Get started by adding a new task</p>

        <Paper
          elevation={0}
          style={{
            width: "100%",
            padding: 0,
            margin: 0,
            backgroundColor: "#fafafa",
          }}
        >
          <AddTodo
            inputValue={inputValue}
            onInputChange={changeInput}
            onButtonClick={clearInputAndAddTodo}
          />
          <TodoList
            items={todos}
            onItemCheck={(idx) => checkTodo(idx)}
            onItemRemove={(idx) => removeTodo(idx)}
          />
        </Paper>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
