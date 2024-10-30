import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const HeaderCart = ({user,cartData}) => {
    return (
        <div>
            <Link to={"/cariview"}>
              <Button size={"sm"} variant={"menubtn"}>
                {user && 
                  <p className='text-sm'> {cartData?.cart?.length}</p>
                }
                <IoCartOutline className="text-2xl" />
              </Button>
            </Link>
        </div>
    );
};

export default HeaderCart;