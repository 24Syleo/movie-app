import Genre from '@/components/genres/Genre';
import styles from './page.module.css';
import Popular from '@/components/popular/Popular';

export const revalidate = 86400;

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
      <Genre />
    </div>
  )
}
