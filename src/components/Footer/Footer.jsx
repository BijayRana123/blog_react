import React from 'react'

function Footer() {
  return (

    <footer className="bg-white border-t border-gray-200">

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}

          <div className="col-span-1 md:col-span-2">

            <h2 className="text-lg font-bold text-gray-900 mb-4">Your Brand</h2>

            <p className="text-gray-600 max-w-md">

              Making the world a better place through constructing elegant hierarchies.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">

              Quick Links

            </h3>

            <ul className="space-y-4">

              <li>

                <a href="#" className="text-base text-gray-600 hover:text-gray-900">

                  About Us

                </a>

              </li>

              <li>

                <a href="#" className="text-base text-gray-600 hover:text-gray-900">

                  Contact

                </a>

              </li>

              <li>

                <a href="#" className="text-base text-gray-600 hover:text-gray-900">

                  Privacy Policy

                </a>

              </li>

              <li>

                <a href="#" className="text-base text-gray-600 hover:text-gray-900">

                  Terms of Service

                </a>

              </li>

            </ul>

          </div>

          {/* Contact Info */}

          <div>

            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">

              Contact Us

            </h3>

            <ul className="space-y-4">

              <li className="text-base text-gray-600">

                Email: contact@yourbrand.com

              </li>

              <li className="text-base text-gray-600">

                Phone: (555) 123-4567

              </li>

              <li className="text-base text-gray-600">

                Address: 123 Main St, City, Country

              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="mt-8 pt-8 border-t border-gray-200">

          <p className="text-base text-gray-400 text-center">

            © {new Date().getFullYear()} Your Brand. All rights reserved.

          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer