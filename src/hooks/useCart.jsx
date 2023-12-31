
// import { useQuery } from '@tanstack/react-query'
// import useAuth from './useAuth';

// const useCart = () => {

//     const { user } = useAuth();

//     // have to addded refetch first....
//     // email wise single user data load here...



//     const { refetch, data: cart = [] } = useQuery({
//         queryKey: ['carts', user?.email],
//         queryFn: async () => {
//             const res = await fetch(`https://creatique-commerce-server-parvez-miah.vercel.app/carts?email=${user.email}`)
//             return res.json()
//         },
//     })

//     return [
//         cart, refetch

//     ]

// }

// export default useCart;

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useCart = () => {

    const { user, loading } = useAuth();
    
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
           
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;

// queryFn: async () => {
        //     const res = await fetch(`https://bistro-boss-server-fawn.vercel.app/carts?email=${user?.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },