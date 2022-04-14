import styles from "./PictureCard.module.css";
import profile from "./Profile.png";
interface PictureCardProps {
  src?: string;
  alt?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function PictureCard(props: PictureCardProps) {
  return (
    <div className={styles.card_container}>
      <picture className={styles.card_picture}>
        <img src={profile} alt="profile pic" />
      </picture>
    </div>
  );
}
