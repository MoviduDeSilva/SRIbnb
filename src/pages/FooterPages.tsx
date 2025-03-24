
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Generic Page Component for footer links
const GenericPage = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          <p className="text-lg text-gray-600 mb-4">
            This is a placeholder page for {title.toLowerCase()}.
          </p>
          <p className="text-gray-600">
            Content for this page is under development. Please check back soon for updates.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Export individual page components
export const HelpCenter = () => <GenericPage title="Help Center" />;
export const AirCover = () => <GenericPage title="AirCover" />;
export const Safety = () => <GenericPage title="Safety Information" />;
export const Accessibility = () => <GenericPage title="Accessibility" />;
export const Cancellation = () => <GenericPage title="Cancellation Options" />;
export const DisasterRelief = () => <GenericPage title="Disaster Relief Housing" />;
export const NonDiscrimination = () => <GenericPage title="Non-Discrimination Policy" />;
export const Sustainability = () => <GenericPage title="Sustainability" />;
export const HostHome = () => <GenericPage title="Host Your Home" />;
export const HostAirCover = () => <GenericPage title="AirCover for Hosts" />;
export const HostResources = () => <GenericPage title="Hosting Resources" />;
export const HostCommunity = () => <GenericPage title="Host Community" />;
export const HostResponsibility = () => <GenericPage title="Responsible Hosting" />;
export const Newsroom = () => <GenericPage title="Newsroom" />;
export const NewFeatures = () => <GenericPage title="New Features" />;
export const Careers = () => <GenericPage title="Careers" />;
export const Investors = () => <GenericPage title="Investors" />;
export const GiftCards = () => <GenericPage title="Gift Cards" />;
export const Privacy = () => <GenericPage title="Privacy Policy" />;
export const Terms = () => <GenericPage title="Terms of Service" />;
export const Sitemap = () => <GenericPage title="Sitemap" />;
export const Language = () => <GenericPage title="Language Settings" />;
export const Currency = () => <GenericPage title="Currency Settings" />;
