import Baselayout from "@/components/base/BaseLayout";
import LastRead from "@/components/homepage/LastRead";
import QuickLinks from "@/components/homepage/QuickLinks";
import SurahLists from "@/components/homepage/SurahLists";

export default function Home() {

  return (
    <Baselayout className="md:px-20 pt-8">
      <div>
        <LastRead />
      </div>

      <div className="my-10">
        <QuickLinks />
      </div>

      <div className="md:pb-16 pb-8">
        <SurahLists />
      </div>
    </Baselayout>
  );
}