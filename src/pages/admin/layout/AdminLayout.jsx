import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AdminDashboard from '../dashboard/Dashboard';
import useAuth from '@/Hook/useAuth';

const AdminLayout = () => {
    // const {user} = useAuth();
    // if(!user.role !=='user' || user.role !== 'admin'){
    //     return <Navigate to="/login"  /> // replace={true}
    // }
    return (
        <div>
            <div className="  container mx-auto flex flex-col md:flex-row gap-4 items-start justify-between">
            <header className="lg:w-1/5 sm:hidden md:flex sm:2/5 w-full">
                <AdminDashboard />
            </header>

            <main className="p-4 bg-gray-200 w-full h-full	">
                <Outlet/>
            </main>
        </div>
        </div>
    );
};

export default AdminLayout;