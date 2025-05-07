import { Rocket, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1128] border-t border-[#4B3F72]/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Rocket className="mr-2 h-6 w-6 text-[#F45B69]" />
              <span className="text-xl font-bold">JV Studio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Taking your brand to new heights with innovative solutions and strategies tailored to your business needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#F45B69] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F45B69] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F45B69] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F45B69] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#F45B69] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Brand Strategy', 'Web Development', 'Digital Marketing', 'Content Creation', 'Social Media', 'Analytics'].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#F45B69] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 h-5 w-5 text-[#F45B69]" />
                <span className="text-gray-400">123 Brand Street, Marketing City, Creative State, 54321</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#F45B69]" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#F45B69] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#F45B69]" />
                <a href="mailto:info@jvstudio.com" className="text-gray-400 hover:text-[#F45B69] transition-colors">
                  info@jvstudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#4B3F72]/30 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} JV Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;