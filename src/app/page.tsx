import Baselayout from "@/components/base/BaseLayout";
import SurahLists from "@/components/homepage/SurahLists";

export default function Home() {


  return (
    <Baselayout className="md:px-20 pt-8">
      <div>
        Last Read
      </div>

      <div>
        Quick Links
      </div>

      <div className="md:pb-16 pb-8">
        <SurahLists />
      </div>
    </Baselayout>
  );
}
