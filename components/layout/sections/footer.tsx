import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Contact Address */}
          <div className="flex flex-col space-y-4">
            <Link href="#" className="flex font-bold items-center space-x-2">
              <Image
                src="/logo.png"
                alt="DPS Logo"
                className="w-8 h-8 rounded-md object-cover"
                width={32}
                height={32}
              />
              <span className="text-base font-semibold">DPS Tuition</span>
            </Link>

            <div>
              <h3 className="text-lg font-bold mb-2">Contact Address</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                DPS Maths Tutelage <br />
                18A, Gee Ge Individual Villa Phase 1, <br />
                Manikandan Nagar, Kundrathur, <br />
                Chennai, Tamil Nadu 600069
              </p>
            </div>

            <div>
              <p className="text-sm">
                📞{" "}
                <Link
                  href="tel:+919344518635"
                  className="text-primary underline"
                >
                  +91 93445 18635
                </Link>
              </p>
              <p className="text-sm">
                📧{" "}
                <Link
                  href="mailto:dpstuition@gmail.com"
                  className="text-primary underline"
                >
                  dpstuition@gmail.com
                </Link>
              </p>
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.387456690235!2d80.10937977439927!3d12.991430563371413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261f9a844cd95%3A0x85527bfa1982d548!2sDPS%20Maths%20Tutelage!5e0!3m2!1sen!2sin!4v1682779250320!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="rounded-md border-2 border-muted"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <Separator className="my-6" />
        <section>
          <h3 className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Designed and developed by{" "}
            <Link
              target="_blank"
              href="https://github.com/"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Vignesh
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
