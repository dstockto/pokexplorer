import VersionDetail from "./VersionDetail";
import { RestLink } from "./links";

interface Move {
  move: RestLink;
  version_group_details: VersionDetail[];
}

export default Move;
