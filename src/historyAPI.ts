import { createBrowserHistory, History } from "history";

const history: History = createBrowserHistory();

history.listen((location: any) => {
  if ((window as any).ga) {
    (window as any).ga("set", "page", location.pathname + location.search);
    (window as any).ga("send", "pageview");
  }
});

export default history;