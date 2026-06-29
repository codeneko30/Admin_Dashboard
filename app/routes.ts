import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [

    //------------------------------------------- Admin Web -------------------------------------------//    


    // Dashboard
    index("routes/admin-dashboard/dashboard/dashboard.tsx"),
    // Test
    route('test', 'routes/test.tsx'),
    route("test-2", 'routes/test-2.tsx'),
    route("test-3", "routes/test-3.tsx"),

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
