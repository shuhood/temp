import { 
  Users, Building2, LineChart, Home, MonitorSmartphone, HeadphonesIcon,
  Briefcase, FileText, Settings, Mail, Globe, Shield, Database, Cloud,
  Smartphone, Calendar, Clock, BookOpen, BarChart2, CreditCard,
  FileCheck, FolderOpen, Inbox, Key, Layers, LifeBuoy, Link,
  List, Lock, Map, MessageCircle, Package, Pencil, PieChart,
  Printer, RefreshCw, Save, Search, Send, Server, Share2,
  ShoppingBag, Sliders, Star, Table, Tag, Target, Terminal,
  ThumbsUp, Trash2, TrendingUp, Upload, UserPlus,
  Video, Wallet, Zap
} from 'lucide-react';

const availableIcons = [
  Users, Building2, LineChart, Home, MonitorSmartphone, HeadphonesIcon,
  Briefcase, FileText, Settings, Mail, Globe, Shield, Database, Cloud,
  Smartphone, Calendar, Clock, BookOpen, BarChart2, CreditCard,
  FileCheck, FolderOpen, Inbox, Key, Layers, LifeBuoy, Link,
  List, Lock, Map, MessageCircle, Package, Pencil, PieChart,
  Printer, RefreshCw, Save, Search, Send, Server, Share2,
  ShoppingBag, Sliders, Star, Table, Tag, Target, Terminal,
  ThumbsUp, Trash2, TrendingUp, Upload, UserPlus,
  Video, Wallet, Zap
];

export function getRandomIcon() {
  return availableIcons[Math.floor(Math.random() * availableIcons.length)];
};