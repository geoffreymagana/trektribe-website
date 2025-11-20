import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">Get in Touch</h1>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                        Have a question, a partnership idea, or just want to say hello? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-12">
                    <div className="md:col-span-3">
                         <ContactForm />
                    </div>
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Mail className="h-5 w-5 text-primary"/> Email Us</h3>
                            <p className="text-muted-foreground">General Inquiries: <a href="mailto:hello@trektribe.co.ke" className="text-primary hover:underline">hello@trektribe.co.ke</a></p>
                            <p className="text-muted-foreground">Partnerships: <a href="mailto:partners@trektribe.co.ke" className="text-primary hover:underline">partners@trektribe.co.ke</a></p>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Phone className="h-5 w-5 text-primary"/> Call Us</h3>
                            <p className="text-muted-foreground">(+254) 712 345 678</p>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><MapPin className="h-5 w-5 text-primary"/> Our Office</h3>
                            <p className="text-muted-foreground">123 Ngong Road<br/>Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
