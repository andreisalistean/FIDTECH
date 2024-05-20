import FragmentHome from "./fragments/FragmentHome";
import FragmentService from "./fragments/FragmentService";
import FragmentPre_build from "./fragments/FragmentPre-build";
import FragmentCustom_build from "./fragments/FragmentCustome-build";
import FragmentUpgrade from "./fragments/FragmentUpgrade";
import FragmentOptimization from "./fragments/FragmentOptimizations";
import FragmentTableTop from "./fragments/FragmmentTableTop";
import FragmentWallMount from "./fragments/FragmentWallMount";
import FragmentIntable from "./fragments/FragmentIntable";
import FragmentSitePrezentare from "./fragments/FragmentSitePrezentare";
import FragmentLucrariLicenta from "./fragments/FragmentLucrariLicenta";
import FragmentContact from "./fragments/FragmentContact";

interface Props {
  fragment: number;
}

function FragmentHolder({ fragment }: Props) {
  switch (fragment) {
    case 0:
      return <FragmentHome />;
    case 1:
      return <FragmentService />;
    case 2:
      return <FragmentPre_build />;
    case 3:
      return <FragmentCustom_build />;
    case 4:
      return <FragmentUpgrade />;
    case 5:
      return <FragmentOptimization />;
    case 6:
      return <FragmentTableTop />;
    case 7:
      return <FragmentWallMount />;
    case 8:
      return <FragmentIntable />;
    case 9:
      return <FragmentSitePrezentare />;
    case 10:
      return <FragmentLucrariLicenta />;
    case 11:
      return <FragmentContact />;
  }
}
export default FragmentHolder;
