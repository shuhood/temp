import React from 'react';
import { 
  User, Mail, Building2, Briefcase, Calendar, MapPin,
  Phone, Globe, Settings, Shield, Bell, Key
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../../lib/auth/tokenUtils';
import ActivityTimeline from '../components/ActivityTimeline';
import ProfileStats from '../components/ProfileStats';

export default function ProfilePage() {
  const userInfo = getUserInfo();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                      John Doe
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      {userInfo?.jobTitle}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {userInfo?.department}
                    </p>
                  </div>
                </div>
                <Link
                  to="/settings"
                  className="px-4 py-2 bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors flex items-center space-x-2"
                >
                  <Settings className="h-4 w-4" />
                  <span>Edit Profile</span>
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">john.doe@company.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">Head Office</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">Full Time</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">Joined January 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">New York, USA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProfileStats />
          <ActivityTimeline />
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100">
            <div className="p-4 border-b border-gray-100 dark:border-dark-100">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Quick Actions
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <Link
                  to="/settings/security"
                  className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-lg group"
                >
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-gray-400 group-hover:text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      Security Settings
                    </span>
                  </div>
                </Link>
                <Link
                  to="/settings/notifications"
                  className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-lg group"
                >
                  <div className="flex items-center space-x-3">
                    <Bell className="h-5 w-5 text-gray-400 group-hover:text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      Notification Preferences
                    </span>
                  </div>
                </Link>
                <Link
                  to="/change-password"
                  className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-lg group"
                >
                  <div className="flex items-center space-x-3">
                    <Key className="h-5 w-5 text-gray-400 group-hover:text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      Change Password
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100">
            <div className="p-4 border-b border-gray-100 dark:border-dark-100">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Team Members
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Team Member {i}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Role
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}