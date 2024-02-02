import styles from "@/app/ui/page.module.css";
import ImageTable from "../ui/image_table/table";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ImageTable />
      </div>
    </main>
  );
}
