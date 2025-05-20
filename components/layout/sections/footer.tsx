import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FiPhone, FiMail } from "react-icons/fi";

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
              <p className="text-sm flex items-center space-x-1">
                <FiPhone className="text-primary" />
                <Link href="tel:+919344518635" className="text-primary">
                  +91 93445 18635
                </Link>
              </p>
              <p className="text-sm flex items-center space-x-1">
                <FiPhone className="text-primary" />
                <Link href="tel:+919344518635" className="text-primary">
                  +91 95145 25103
                </Link>
              </p>
              <p className="text-sm flex items-center space-x-1">
                <FiMail className="text-primary" />
                <Link
                  href="mailto:dpstuition@gmail.com"
                  className="text-primary"
                >
                  dpstuition@gmail.com
                </Link>
              </p>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-6 mb-4">
              <Link
                href="https://wa.me/919344518635"
                target="_blank"
                aria-label="WhatsApp"
                className="text-muted-foreground hover:text-green-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.58-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.263.488 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05.003C5.495 0 .162 5.332.16 11.888c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.86 11.86 0 005.674 1.445h.005c6.554 0 11.887-5.332 11.89-11.888a11.84 11.84 0 00-3.491-8.418" />
                </svg>
              </Link>

              <Link
                href="https://instagram.com/dpstuition?igshid=YmMyMTA2M2Y"
                target="_blank"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-red-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100083404803799"
                target="_blank"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/@dpsonlineandhometuition7503"
                target="_blank"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
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

        {/* Footer Copyright */}
        <section className="text-center">
          <h3 className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Designed and developed by{" "}
            <Link
              target="_blank"
              href="https://vigneshdev.in"
              className="group relative ml-1 text-primary transition-all duration-300"
            >
              Vignesh
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
