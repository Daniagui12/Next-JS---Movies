import styles from "@/app/ui/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Link href="/image_table">
            <button style={{ background: "#f00", height: "100px", width: "200px", borderRadius: "30px" }}>
              Movies Page
            </button>
        </Link>
      </div>
    </main>
  );
}
