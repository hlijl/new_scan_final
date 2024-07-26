import DotLoader from "react-spinners/DotLoader";
import styles from './GeneralResultLoader.module.css'

export function GeneralResultLoader() {
  return (
    <div className={styles.loader}><DotLoader
      color="#000"
      loading={true}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      <p className={styles.loading}>Загрузка...</p>
    </div>
  )
}