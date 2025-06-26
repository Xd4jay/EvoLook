
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">support@evolook.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Fashion Street<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Customer Support</h3>
                <p className="text-blue-700 text-sm">
                  Our customer support team is available to help you with any questions or concerns about your orders, returns, or our products.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={6} 
                    placeholder="Tell us how we can help you..."
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">How long does shipping take?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We offer free shipping on all orders. Delivery typically takes 3-7 business days within India.
                </p>

                <h3 className="font-medium text-gray-900 mb-2">What is your return policy?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We accept returns within 30 days of purchase. Items must be in original condition with tags attached.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Do you offer international shipping?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Currently, we only ship within India. We're working on expanding to international markets soon.
                </p>

                <h3 className="font-medium text-gray-900 mb-2">How can I track my order?</h3>
                <p className="text-gray-600 text-sm">
                  Once your order ships, you'll receive a tracking number via email to monitor your package's progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
