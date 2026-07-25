import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [

    //----------------------------------------------- user site ---------------------------------------------------//

    index( 'routes/user-store/main/main.tsx'),
    route('shop', 'routes/user-store/shop/shop.tsx'),
    route('subscription', 'routes/user-store/subscription/subscription.tsx'),
    route('gift', 'routes/user-store/gift-subscription/gift-subscription.tsx'),
    route('have-a-question','routes/user-store/have-a-question/have-a-question.tsx'),
    route('product-details','routes/user-store/product-details/product-details.tsx'),
    route('cart','routes/user-store/cart/cart.tsx'),
    route('checkout','routes/user-store/checkout/checkout.tsx'),
    route('order-confirmation','routes/user-store/order-confirmation/order-confirmation.tsx'),
    route('coming-soon','routes/user-store/coming-soon/coming-soon.tsx'),






    //------------------------------------------- Admin -----------------------------------------------//    


    // Dashdashboard
    route("dashboard","routes/admin-dashboard/dashboard/dashboard.tsx"),
   

    // Orders
    route('orders', 'routes/admin-dashboard/orders/orders.tsx'),
    route('order-details/:id', 'routes/admin-dashboard/order-details/order-details.tsx'),




    // Products
    route("products", "routes/admin-dashboard/products/products.tsx"),
    route("add-product", "routes/admin-dashboard/add-product/add-product.tsx"),
    route("edit-product/:id", "routes/admin-dashboard/edit-product/edit-product.tsx"),

    // Customers
    route("customers", "routes/admin-dashboard/customers/customers.tsx"),
    route("add-customer", "routes/admin-dashboard/add-customer/add-customer.tsx"),
    route("customer-details/:id", "routes/admin-dashboard/customer-details/customer-details.tsx"),



    // Settings
    route('settings', 'routes/admin-dashboard/settings/settings.tsx'),







] satisfies RouteConfig;






