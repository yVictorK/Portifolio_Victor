import { Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "../lib/utils";
import { ScrollSideIn } from "./ScrollSideIn";

export const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError(false);

    if (!form.current) return;
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current!,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setSent(true);
          setIsSending(false);
          form.current?.reset();
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setError(true);
          setIsSending(false);
        }
      );

  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Fale <span className="text-primary">Comigo</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Gostou de algum projeto ou quer falar comigo? Entre em Contato!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollSideIn side="left">
            <div className="space-y-8">
              <div className="space-y-6 justify-center text-left">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:victorkossmann22@gmail.com"
                      className="text-sm md:text-md text-muted-foreground hover:text-primary transition-colors"
                    >
                      victorkossmann22@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Local</h4>
                    <span className="text-muted-foreground">Amazonas, Brasil</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4">Redes Sociais</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="https://linkedin.com/in/victorkossmann" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="https://www.instagram.com/victorkossmann_" target="_blank">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </ScrollSideIn>

          <ScrollSideIn side="right">
            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                    Seu Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                    placeholder="email@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">
                    Sua Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Olá, me chamo..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2",
                    isSending && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSending ? "Enviando..." : "Enviar"}
                  <Send size={16} />
                </button>

                {sent && (
                  <p className="text-green-500 text-center text-sm mt-2">
                    ✅ Mensagem Enviada com Sucesso!
                  </p>
                )}
                {error && (
                  <p className="text-red-500 text-center text-sm mt-2">
                    ❌ Erro ao Enviar a Mensagem. Tente Novamente Mais Tarde!
                  </p>
                )}
              </form>
            </div>
          </ScrollSideIn>
        </div>
      </div>
    </section>
  );
};
