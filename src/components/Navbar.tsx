import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

interface NavbarProps {
  setActivePage: (page: string) => void;
}

interface NavItem {
  name: string;
  hasDropdown: boolean;
  dropdownItems?: string[];
}

const navItems: NavItem[] = [
  { 
    name: 'Profile', 
    hasDropdown: true, 
    dropdownItems: ['Introduction', 'Team', 'Working Principal', 'Organization Structural'] 
  },
  { 
    name: 'Services', 
    hasDropdown: true, 
    dropdownItems: ['Branding', 'Web Development', 'Marketing', 'Consulting'] 
  },
  { 
    name: 'Supplements', 
    hasDropdown: true, 
    dropdownItems: ['Nutrition', 'Fitness', 'Wellness', 'Performance'] 
  },
  { name: 'Clients', hasDropdown: false },
  { name: 'Contact', hasDropdown: false },
  { name: 'Request A Quote', hasDropdown: false },
];

const Navbar = ({ setActivePage }: NavbarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  const handleNavItemClick = (page: string) => {
    setActivePage(page.toLowerCase());
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center text-2xl font-bold text-white">
            <Rocket className="mr-2 h-8 w-8 text-[#F45B69]" />
            <span>JV Studio</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#F45B69] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      handleDropdownToggle(item.name);
                    } else {
                      handleNavItemClick(item.name);
                    }
                  }}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    item.name === 'Request A Quote' 
                      ? 'bg-[#F45B69] hover:bg-[#d14050] text-white'
                      : 'hover:text-[#F45B69]'
                  }`}
                >
                  {item.name}
                </button>
                
                {/* Dropdown menu */}
                {item.hasDropdown && (
                  <div 
                    className={`absolute left-0 mt-2 w-64 bg-[#0A1128] rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                      openDropdown === item.name 
                        ? 'opacity-100 transform translate-y-0 pointer-events-auto' 
                        : 'opacity-0 transform -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="py-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <button
                          key={dropdownItem}
                          onClick={() => handleNavItemClick(`${item.name}-${dropdownItem}`)}
                          className="block w-full text-left px-4 py-2 text-white hover:bg-[#4B3F72] transition-colors"
                        >
                          {dropdownItem}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ${
            mobileMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="mt-4 bg-[#0A1128] rounded-lg shadow-lg p-4">
            {navItems.map((item) => (
              <div key={item.name} className="mb-2">
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      handleDropdownToggle(item.name);
                    } else {
                      handleNavItemClick(item.name);
                    }
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md font-medium ${
                    item.name === 'Request A Quote' 
                      ? 'bg-[#F45B69] text-white'
                      : 'text-white hover:bg-[#4B3F72]'
                  }`}
                >
                  {item.name}
                </button>
                
                {/* Mobile dropdown items */}
                {item.hasDropdown && openDropdown === item.name && (
                  <div className="ml-4 mt-2 border-l-2 border-[#4B3F72] pl-4">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <button
                        key={dropdownItem}
                        onClick={() => handleNavItemClick(`${item.name}-${dropdownItem}`)}
                        className="block w-full text-left py-2 text-white hover:text-[#F45B69] transition-colors"
                      >
                        {dropdownItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;