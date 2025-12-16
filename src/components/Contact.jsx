import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open email client with pre-filled data
    const mailtoLink = `mailto:bhagyashri4137@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
            <h2 className="section-title">Contact Me</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi, 
              feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-gradient p-6 rounded-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:bhagyashri4137@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      bhagyashri4137@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-gradient p-6 rounded-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Pune, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/bhagyashri4137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 card-gradient p-4 rounded-xl border border-border hover:border-primary/30 
                             transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-foreground group-hover:text-primary transition-colors">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/bhagyashri4137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 card-gradient p-4 rounded-xl border border-border hover:border-primary/30 
                             transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-foreground group-hover:text-primary transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none 
                             transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none 
                             transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none 
                             transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium 
                           transition-all duration-300 hover:opacity-90 glow-effect flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
