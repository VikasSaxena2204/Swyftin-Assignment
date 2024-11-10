
"use client";

import { useState } from 'react';
import {
  FiSearch,
  FiUser,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink
} from 'react-icons/fi';

const contacts = [
  { id: 1, name: 'John Doe', number: '+91 9876543210', message: '👋 Welcome to Chat!', time: '1:05 PM', notifications: 3 },
  { id: 2, name: 'Jane Smith', number: '+91 9876543211', message: '👋 Welcome to Chat!', time: '12:45 PM', notifications: 0 },
  { id: 3, name: 'Alice Johnson', number: '+91 9876543212', message: '👋 Welcome to Chat!', time: '11:20 AM', notifications: 2 },
  { id: 4, name: 'Michael Brown', number: '+91 9876543213', message: '👋 Welcome to Chat!', time: '9:10 AM', notifications: 0 },
  { id: 5, name: 'Emily Davis', number: '+91 9876543214', message: '👋 Welcome to Chat!', time: '3:35 PM', notifications: 1 },
  { id: 6, name: 'David Wilson', number: '+91 9876543215', message: '👋 Welcome to Chat!', time: '7:30 AM', notifications: 0 },
  { id: 7, name: 'Olivia Lee', number: '+91 9876543216', message: '👋 Welcome to Chat!', time: '2:50 PM', notifications: 5 },
  { id: 8, name: 'Liam Martinez', number: '+91 9876543217', message: '👋 Welcome to Chat!', time: '10:15 AM', notifications: 0 },
  { id: 9, name: 'Sophia Taylor', number: '+91 9876543218', message: '👋 Welcome to Chat!', time: '6:00 PM', notifications: 4 },
  { id: 10, name: 'Jackson Thomas', number: '+91 9876543219', message: '👋 Welcome to Chat!', time: '4:40 PM', notifications: 0 },
];

const Sidebar = () => {
  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full sm:w-1/4 bg-white p-4 border-r overflow-y-auto h-screen relative">


      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center bg-gray-100 p-2 rounded-lg flex-grow">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search a chat..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 text-slate-900 bg-transparent focus:outline-none w-full"
          />
        </div>

        <button
          className="ml-4 p-2 rounded-full hover:bg-gray-100"
          aria-label="Export contacts"
        >
          <FiExternalLink className="text-gray-500" size={20} />
        </button>
      </div>

      <div className='border-b-2 border-gray-400 py-2'>
        <button
          className="flex items-center justify-center bg-gray-200 text-sm text-slate-800 rounded-lg border border-gray-400 hover:bg-gray-300 p-1"
          aria-label="Leads">
          Leads
        </button>
      </div>

      <ul className="space-y-4 my-4">
        {filteredContacts.map(contact => (
          <li key={contact.id} className="p-2 hover:bg-gray-100 rounded-lg flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-400 mr-3">
                <FiUser className="text-gray-400" size={24} />
              </div>
              <div>
                <div className="font-medium text-black text-base sm:text-sm">{contact.number}</div>
                <div className="text-sm text-gray-500">{contact.name}</div>
                <div className="text-sm text-gray-500">{contact.message}</div>
                <button className="text-gray-500 border border-gray-400 rounded-full text-sm px-3 py-1 hover:bg-gray-100 mt-2">
                  + Add
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-sm text-gray-400">{contact.time}</div>
              {contact.notifications > 0 && (
                <div className="mt-2 w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full text-xs">
                  {contact.notifications}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-end items-center mt-auto space-x-2 pb-4 pr-4">
        <button
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-500 rounded-full border border-gray-400 hover:bg-gray-300"
          aria-label="Previous contacts page">
          <FiChevronLeft />
        </button>
        <button
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-500 rounded-full border border-gray-400 hover:bg-gray-300"
          aria-label="Next contacts page">
          <FiChevronRight />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-500 rounded-full border border-gray-400 hover:bg-gray-300"
          aria-label="Add a new contact">
          <FiPlus size={20} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
