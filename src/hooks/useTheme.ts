import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "../store/reducers/themeSlice";
import { RootState } from "@store/index";

export function useTheme() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.mode);

  const setTheme = (theme: "light" | "dark") => {
    dispatch(setThemeMode(theme));
  };

  const toggleTheme = () => {
    setTheme(
      (localStorage.getItem("theme") as "light" | "dark") === "light"
        ? "dark"
        : "light"
    );
  };

  return { setTheme, toggleTheme, currentTheme };
}