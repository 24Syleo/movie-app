import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { roboto } from "../../font";
import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link href="/">MyMovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href="/series">Series</Link>
            </li>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
      <MovieSearch />
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
};

export default Header;
