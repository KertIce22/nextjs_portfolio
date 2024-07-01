import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-green-100 dark:bg-slate-700">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h2 className="h2 max-w-xl text-center mb-8:">
            Prepared to turn your ideas into reality? I am here to help.
          </h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
