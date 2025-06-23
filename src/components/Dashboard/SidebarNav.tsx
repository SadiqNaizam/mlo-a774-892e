import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  User, 
  FileText, 
  Receipt, 
  ShoppingBasket, 
  Mail, 
  Box, 
  Calendar, 
  HelpCircle, 
  Settings, 
  ChevronDown 
} from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
  isExternal?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, icon: Icon, isActive = false }) => (
  <li>
    <a
      href={href}
      className={cn(
        'flex items-center p-2 text-base font-normal rounded-md text-sidebar-foreground hover:bg-white dark:hover:bg-gray-700',
        isActive && 'bg-secondary text-primary font-semibold'
      )}
    >
      <Icon className="w-5 h-5 transition duration-75" />
      <span className="ml-3">{label}</span>
    </a>
  </li>
);

const SidebarNav: React.FC = () => {
  const mainNavLinks = [
    { href: '#', label: 'Dashboard', icon: LayoutGrid, isActive: true },
    { href: '#', label: 'Leads', icon: Users },
    { href: '#', label: 'Customers', icon: User },
    { href: '#', label: 'Proposals', icon: FileText },
    { href: '#', label: 'Invoices', icon: Receipt },
    { href: '#', label: 'Items', icon: ShoppingBasket },
    { href: '#', label: 'Mail', icon: Mail },
    { href: '#', label: 'Sheebox', icon: Box },
    { href: '#', label: 'Calendar', icon: Calendar },
  ];

  const secondaryNavLinks = [
    { href: '#', label: 'Help', icon: HelpCircle },
    { href: '#', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground p-4">
      <div className="flex items-center mb-6 pl-2">
        <div className="flex items-center justify-center w-8 h-8 mr-3 bg-black text-white rounded-full font-bold">
          bo
        </div>
        <button className="ml-auto p-1">
          <Users size={20} />
        </button>
      </div>
      
      <nav className="flex-1 space-y-4">
        <ul className="space-y-2">
          {mainNavLinks.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <ul className="space-y-2 pt-4 border-t border-border">
          {secondaryNavLinks.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </ul>
        <div className="mt-4 p-2 rounded-md border border-border flex items-center">
           <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mr-3">
             <User className="w-6 h-6 text-muted-foreground" />
           </div>
           <div>
            <p className="text-sm font-semibold text-foreground">Adam Smith</p>
            <p className="text-xs text-muted-foreground">Admin</p>
           </div>
           <ChevronDown className="w-4 h-4 ml-auto text-muted-foreground"/>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
